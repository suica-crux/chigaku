import {
  InformationCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
} from '@heroicons/react/24/solid';

interface AlertProps {
  type: 'info' | 'warn' | 'caution';
  children?: React.ReactNode;
}

export default function Alert({ children, type }: AlertProps) {
  let borderColour = 'border-bdinfo';
  let bgColour = 'bg-bginfo';
  let textColour = 'text-txinfo';
  let Icon = InformationCircleIcon;

  if (type === 'warn') {
    borderColour = 'border-bdwarn';
    bgColour = 'bg-bgwarn';
    textColour = 'text-txwarn';
    Icon = XCircleIcon;
  } else if (type === 'caution') {
    borderColour = 'border-bdcaution';
    bgColour = 'bg-bgcaution';
    textColour = 'text-txcaution';
    Icon = ExclamationTriangleIcon;
  }

  return (
    <div
      className={`flex items-start gap-3 border ${borderColour} ${bgColour} ${textColour} p-4 my-4 rounded-lg`}
    >
      <Icon className={`w-6 h-6 mt-1 shrink-0 ${textColour}`} />
      <p>{children}</p>
    </div>
  );
}
