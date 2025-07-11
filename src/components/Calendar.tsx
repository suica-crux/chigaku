export type DayInfo = {
  link?: string;
  room?: 's109' | 's110' | 'b202';
};

export interface CalendarProps {
  year: number;
  month: number;
  dayInfo: Record<number, DayInfo>;
  showHeader?: boolean;
}

const roomStyles: Record<string, string> = {
  s109: 'bg-pink-200 text-pink-800',
  s110: 'bg-purple-200 text-purple-800',
  b202: 'bg-blue-200 text-blue-800',
};

const defaultDayClass = 'text-gray-400';

export default function Calendar({
  year,
  month,
  dayInfo,
  showHeader = true,
}: CalendarProps) {
  const headerStyles: Record<number, string> = {
    0: 'text-red-400', 
    1: 'text-gray-300',
    2: 'text-gray-300',
    3: 'text-gray-300',
    4: 'text-gray-300',
    5: 'text-gray-300',
    6: 'text-blue-400',
  }

  // 月初の曜日(0=日曜…6=土曜)、当月の日数、前後の空セル数を算出
  const firstDow = new Date(year, month - 1, 1).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();
  const leading = firstDow;
  const totalCells = leading + daysInMonth;
  const trailing = (7 - (totalCells % 7)) % 7;

  const cells: React.ReactNode[] = [];

  // 前月分の空セル
  for (let i = 0; i < leading; i++) {
    cells.push(<div key={`empty-prev-${i}`} />);
  }

  // 当月セル
  for (let d = 1; d <= daysInMonth; d++) {
    const info = dayInfo[d];
    const dayClass = info ? roomStyles[info.room || 's109'] : defaultDayClass;

    const content = info?.link ? (
      <a
        href={info.link}
        className={`flex w-full h-full items-center justify-center ${dayClass} rounded-sm`}
      >
        {d}
      </a>
    ) : (
      <div className={`w-full h-full flex items-center justify-center ${dayClass} rounded-sm`}>
        {d}
      </div>
    );

    cells.push(
      <div key={`day-${d}`} className="p-1">
        {content}
      </div>
    );
  }

  // 翌月分の空セル
  for (let i = 0; i < trailing; i++) {
    cells.push(<div key={`empty-next-${i}`} />);
  }

  return (
    <div className="p-2 mt-4 mb-4 border border-gray-300 rounded-lg">
      {showHeader && (
        <div className="grid grid-cols-7 mb-1 text-sm font-medium text-center ">
          {['日', '月', '火', '水', '木', '金', '土'].map((w, idx) => (
            <div key={w} className={headerStyles[idx] ?? 'text-gray-700'}>{w}</div>
          ))}
        </div>
      )}
      <div className="grid grid-cols-7 gap-1">{cells}</div>
    </div>
  );
}
