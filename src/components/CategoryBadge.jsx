const styles = {
  Event: 'bg-blue-50 text-blue-700 ring-blue-600/20',
  Safety: 'bg-amber-50 text-amber-700 ring-amber-600/20',
  News: 'bg-purple-50 text-purple-700 ring-purple-600/20',
  Meeting: 'bg-rose-50 text-rose-700 ring-rose-600/20',
};

export default function CategoryBadge({ category }) {
  const colorClass = styles[category] || 'bg-gray-50 text-gray-700 ring-gray-600/20';

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-semibold uppercase tracking-wide ring-1 ring-inset ${colorClass}`}
    >
      {category}
    </span>
  );
}
