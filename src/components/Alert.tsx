import { Info, AlertTriangle, XCircle } from 'lucide-react';

interface AlertProps {
  type: 'info' | 'warn' | 'caution';
  children?: React.ReactNode;
}

export default function Alert({ children, type }: AlertProps) {
  let borderColor = 'border-bdinfo';
  let bgColor = 'bg-bginfo';
  let textColor = 'text-txinfo';
  let size = 'h-6 w-6';
  let Icon = Info;

  if (type === 'warn') {
    borderColor = 'border-bdwarn';
    bgColor = 'bg-bgwarn';
    textColor = 'text-txwarn';
    size = 'h-9 w-9';
    Icon = XCircle;
  } else if (type === 'caution') {
    borderColor = 'border-bdcaution';
    bgColor = 'bg-bgcaution';
    textColor = 'text-txcaution';
    Icon = AlertTriangle;
  }

  return (
    <div
      className={`flex items-start gap-3 border ${borderColor} ${bgColor} ${textColor} p-4 my-4 rounded-lg`}
    >
      <Icon className={`mt-1 shrink-0 ${size} ${textColor}`} />
      <div>{children}</div>
    </div>
  );
}
