import Text from './Text';

const roomStyles: Record<'s109' | 's110' | 'b202', string> = {
  s109: 'bg-pink-200 text-pink-800',
  s110: 'bg-purple-200 text-purple-800',
  b202: 'bg-blue-200 text-blue-800',
};

const roomLabels: Record<'s109' | 's110' | 'b202', string> = {
  s109: '桑志館S109教室',
  s110: '桑志館S110教室',
  b202: '万象館B202教室',
};

type Elements = {
  rooms?: boolean;
  iwakura?: boolean;
};

export default function CalendarLegend({ rooms, iwakura }: Elements) {
  if (!rooms && !iwakura) throw new Error('At least one of "rooms" or "iwakura" must be true.');
  return (
    <div className="flex flex-wrap gap-4 mb-4 mt-4 items-center">
      {rooms &&
        (Object.keys(roomStyles) as Array<'s109' | 's110' | 'b202'>).map((code) => (
          <div key={code} className="flex items-center space-x-1">
            <span className={`${roomStyles[code]} w-4 h-4 rounded-sm border border-gray-300`} />
            <Text className="text-sm">{roomLabels[code]}</Text>
          </div>
        ))}
      {iwakura && (
        <div className="flex items-center space-x-1">
          <span className="bg-blue-200 text-blue-800 w-4 h-4 rounded-sm border border-gray-300" />
          <Text className="text-sm">岩倉祭模擬店実施日</Text>
        </div>
      )}
    </div>
  );
}
