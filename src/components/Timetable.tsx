import Text from './Text';
import { useMemo } from 'react';

type Slot = {
  start: string;
  end: string;
  type: 'work' | 'break';
  status: 'available' | 'limited' | 'full';
}

type TimeListProps = {
  startHour: number;
  endHour: number;
  workMinutes: number; 
  breakMinutes: number;
}

type TimetableProps = {
  day: number;
}

export default function Timetable({day}: TimetableProps) {
  const rowStyles: Record<number, string> = {
    // 0: available, 1: limited, 2: full
    0: 'bg-green-200 text-green-800',
    1: 'bg-yellow-200 text-yellow-800',
    2: 'bg-red-200 text-red-800',
  };
  
  return (
    <div className="p-2 mt-4 mb-4 border border-gray-300 rounded-lg">
      <Text className="mb-2 text-lg font-bold text-center">{day}日の予約の空き状況</Text>
      <div className="grid grid-cols-7 mb-1 text-sm font-medium text-center">
        {['時間', '空き状況'].map((w, idx) => (
          <div key={w} className={rowStyles[idx] ?? 'text-gray-700'}>
            {w}
          </div>
        ))}
      </div>
      <TimeList startHour={9} endHour={17} workMinutes={10} breakMinutes={5} />
    </div>
  );
}

function formatTime(date: Date): string {
  return date.toTimeString().slice(0, 5);
}

function TimeList({startHour, endHour, workMinutes, breakMinutes}: TimeListProps) {
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
      const workStart = new Date(current)
      const workEnd = new Date(workStart.getTime() + workMinutes * 60000);

      if (workEnd > end) break;

      slots.push({
        start: formatTime(workStart),
        end: formatTime(workEnd),
        type: 'work',
        status: 'available'
      })

      const breakStart = new Date(workEnd);
      const breakEnd = new Date(breakStart.getTime() + breakMinutes * 60000);

      // if (breakEnd > end) break;

      // slots.push({
      //   start: formatTime(breakStart),
      //   end: formatTime(breakEnd),
      //   type: 'break'
      // })

      current = breakEnd;
    }

    return slots;
  }, [startHour, endHour, workMinutes, breakMinutes]);

  return (
    <div className="p-4">
      <h2 className="mb-2 text-lg font-bold">
        <ul className="space-y-1">
          {timeSlots.map((slot, idx) => (
            <li key={idx} className={
              slot.status === 'available'
              ? `${rowStyles[0]} bg-blue-100 text-blue-800 rounded px-2 py-1`
              : slot.status === 'limited'
              ? `${rowStyles[1]} bg-blue-100 text-blue-800 rounded px-2 py-1`
              : `${rowStyles[2]} bg-blue-100 text-blue-800 rounded px-2 py-1`
            }>
              {slot.start} - {slot.end} ({slot.type === 'work' ? '実施時間' : '休憩時間'})
            </li>
          ))}
        </ul>
      </h2>
    </div>
  )
}