type ListItemProps = {
  children: React.ReactNode;
  slug?: string;
  className?: string;
  recommended?: boolean;
  type?: 'link';
};

export default function ListItem({
  children,
  className = '',
  slug = '',
  recommended = false,
  type,
}: ListItemProps) {
  return (
    <li
      data-slug={slug}
      className={`list-item ${className} ${type === 'link' ? 'text-3xl p-1 border rounded w-fit border-border mx-auto' : ''}`}
    >
      {children}
      {recommended && <span className="text-rose-400">（推奨）</span>}
    </li>
  );
}
