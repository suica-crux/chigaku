import Text from './Text';

export default function Timetable(day: number) {
  const rowStyles: Record<number, string> = {
    // 0: 空き, 1: 残りわずか, 2: 満席
    0: 'bg-green-200 text-green-800',
    1: 'bg-yellow-200 text-yellow-800',
    2: 'bg-red-200 text-red-800',
  };

  process.emitWarning('実際の時間がわかったら実装する', 'info');
  const timeSlots = []

  return (
    <div className="p-2 mt-4 mb-4 border border-gray-300 rounded-lg">
      <Text className="mb-2 text-lg font-bold text-center">予約の空き状況</Text>
      <div className="grid grid-cols-7 mb-1 text-sm font-medium text-center">
        {['時間', '空き状況'].map((w, idx) => (
          <div key={w} className={rowStyles[idx] ?? 'text-gray-700'}>
            {w}
          </div>
        ))}
      </div>
    </div>
  );
}
