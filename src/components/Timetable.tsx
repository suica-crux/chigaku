import Text from './Text';
import { useMemo } from 'react';
import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

type Slot = {
  start: string;
  end: string;
  status: 'available' | 'limited' | 'full';
  id: string;
};

type TimetableProps = {
  date: number;
  startHour: number;
  endHour: number;
  workMinutes: number;
  breakMinutes: number;
};

export default function Timetable({
  date,
  startHour,
  endHour,
  workMinutes,
  breakMinutes,
}: TimetableProps) {
  const rowStyles: Record<number, string> = {
    // 0: available, 1: limited, 2: full
    0: 'bg-green-200 text-green-800',
    1: 'bg-yellow-200 text-yellow-800',
    2: 'bg-red-200 text-red-800',
  };

  const timeSlots: Slot[] = useMemo(() => {
    const slots: Slot[] = [];
    let current = new Date();
    current.setHours(startHour, 0, 0, 0);

    const end = new Date();
    end.setHours(endHour, 0, 0, 0);

    while (current < end) {
      const workStart = new Date(current);
      const workEnd = new Date(workStart.getTime() + workMinutes * 60000);

      if (workEnd > end) break;

      const workMinutesStr = workMinutes.getMinutes();
      const workHourStr = workMinutes.getHour();

      slots.push({
        start: formatTime(workStart),
        end: formatTime(workEnd),
        status: 'available',
        id: ``,
      });

      const breakStart = new Date(workEnd);
      const breakEnd = new Date(breakStart.getTime() + breakMinutes * 60000);

      current = breakEnd;
    }

    return slots;
  }, [startHour, endHour, workMinutes, breakMinutes]);

  return (
    <div className="p-2 mt-4 mb-4 border border-gray-300 rounded-lg">
      <Text className="mb-2 text-lg font-bold text-center">{date}日の予約の空き状況</Text>
      <div className="p-4">
        <h2 className="mb-2 text-lg font-bold">
          <ul className="space-y-1">
            {timeSlots.map((slot, idx) => {
              let className: string;
              let icon: React.ReactNode;
              let label: string;

              switch (slot.status) {
                case 'available':
                  className = rowStyles[0];
                  icon = <CheckCircle className="w-6 h-6 text-green-500" />;
                  label = '空席あり';
                  break;
                case 'limited':
                  className = rowStyles[1];
                  icon = <AlertTriangle className="w-6 h-6 text-yellow-500" />;
                  label = '残り僅か';
                  break;
                case 'full':
                  className = rowStyles[2];
                  icon = <XCircle className="w-6 h-6 text-red-500" />;
                  label = '満席';
                  break;
                default:
                  className = '';
                  icon = null;
                  label = '';
              }

              return (
                <li key={idx} className={`${className} rounded px-2 py-1 my-2`}>
                  <span className="truncate">
                    {slot.start} - {slot.end}
                  </span>
                  <div className="flex flex-col items-center ml-3">
                    {icon}
                    <span className="text-xs text-gray-500 mt-1">{label}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </h2>
      </div>
    </div>
  );
}

function formatTime(date: Date): string {
  return date.toTimeString().slice(0, 5);
}
