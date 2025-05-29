type ListItemProps = {
  children?: React.ReactNode;
  className?: string;
  recommended?: boolean;
}

export default function ListItem({
  children,
  className = '',
  recommended = false,
}: ListItemProps) {
  return (
    <li className={`list-item ${className}`}>
      {children}
      {recommended && <span className="text-rose-400">（推奨）</span>}
    </li>
  );
}