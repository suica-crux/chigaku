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
  let borderColor = 'border-bdinfo';
  let bgColor = 'bg-bginfo';
  let textColor = 'text-txinfo';
  let Icon = InformationCircleIcon;

  if (type === 'warn') {
    borderColor = 'border-bdwarn';
    bgColor = 'bg-bgwarn';
    textColor = 'text-txwarn';
    Icon = XCircleIcon;
  } else if (type === 'caution') {
    borderColor = 'border-bdcaution';
    bgColor = 'bg-bgcaution';
    textColor = 'text-txcaution';
    Icon = ExclamationTriangleIcon;
  }

  return (
    <div
      className={`flex items-start gap-3 border ${borderColor} ${bgColor} ${textColor} p-4 my-4 rounded-lg`}
    >
      <Icon className={`w-6 h-6 mt-1 shrink-0 ${textColor}`} />
      <div>{children}</div>
    </div>
  );
}
