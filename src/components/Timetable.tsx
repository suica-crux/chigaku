'use client';

import { useState, useEffect, useMemo } from 'react';
import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react';
import { addReservation } from '@/lib/firebaseDB';
import { getReservation } from '@/lib/firebaseInit';

type Slot = {
  start: string;
  end: string;
  status: 'available' | 'limited' | 'full';
  reservationCount: number;
  id: number;
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
  
//   const timeSlots: Slot[] = useMemo(() => {
//     const slots: Slot[] = [];
//     let current = new Date();
//     current.setHours(startHour, 0, 0, 0);
    
//     const end = new Date();
//     end.setHours(endHour, 0, 0, 0);
    
//     while (current < end) {
//       const workStart = new Date(current);
//       const workEnd = new Date(workStart.getTime() + workMinutes * 60000);
      
//       if (workEnd > end) break;
      
//       let workStartMinStr: string;
//       let workStartHourStr: string;
//       if (workStart.getMinutes() < 10) {
//         workStartMinStr = `0${workStart.getMinutes()}`;
//       } else {
//         workStartMinStr = `${workStart.getMinutes()}`;
//       }
      
//       if (workStart.getHours() < 10) {
//         workStartHourStr = `0${workStart.getHours()}`;
//       } else {
//         workStartHourStr = `${workStart.getHours()}`;
//       }
//       const id = Number(`${date}${workStartHourStr}${workStartMinStr}`);

//       const status = async () => {
//         const res = await getReservation(id);
//         if (res.count == 20) {
//           return 'full';
//         } else if (res.count >= 15) {
//           return 'limited';
//         } else {
//           return 'available';
//         }
//       }
      
//       slots.push({
//         start: formatTime(workStart),
//         end: formatTime(workEnd),
//         status: status,
//         id: id,
//       });

//       const breakStart = new Date(workEnd);
//       const breakEnd = new Date(breakStart.getTime() + breakMinutes * 60000);

//       current = breakEnd;
//     }

//     return slots;
//   }, [startHour, endHour, workMinutes, breakMinutes]);


// export default function Timetable({...}: TimetableProps) {


const initialSlots = useMemo(() => {
    const slots: Slot[] = [];
    let current = new Date();
    current.setHours(startHour, 0, 0, 0);
    const end = new Date();
    end.setHours(endHour, 0, 0, 0);

    while (current < end) {
      const workStart = new Date(current);
      const workEnd = new Date(workStart.getTime() + workMinutes * 60000);
      if (workEnd > end) break;

      const id = Number(
        `${date}${workStart.getHours().toString().padStart(2, '0')}${workStart.getMinutes().toString().padStart(2, '0')}`
      );

      slots.push({
        start: formatTime(workStart),
        end: formatTime(workEnd),
        status: 'available', // 仮
        reservationCount: 1, // 仮
        id,
      });

      current = new Date(workEnd.getTime() + breakMinutes * 60000);
    }

    return slots;
  }, [startHour, endHour, workMinutes, breakMinutes, date]);
  
  const [timeSlots, setTimeSlots] = useState<Slot[]>(initialSlots);

  useEffect(() => {
    async function fetchStatuses() {
      const updated = await Promise.all(
        initialSlots.map(async (slot) => {
          const res = await getReservation(slot.id);
          const count: Slot['reservationCount'] = res.count;
          let status: Slot['status'] = 'available';
          if (res.count >= 20) status = 'full';
          else if (res.count >= 15) status = 'limited';
          return { ...slot, status, reservationCount: count };
        })
      );
      setTimeSlots(updated);
    }

    fetchStatuses();
  }, [initialSlots]);

  return (
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
                    {slot.start} - {slot.end}: {slot.reservationCount}
                  </span>
                  <div className="flex flex-col items-center ml-3">
                    {icon}
                    <span className="mt-1 text-xs text-gray-500">{label}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </h2>
  );
}

function formatTime(date: Date): string {
  return date.toTimeString().slice(0, 5);
}
