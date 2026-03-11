import { useTheme } from '../context/ThemeContext';
import { getCategoryStyles } from '../themes';

export default function CategoryBadge({ category }) {
  const { activeVariant } = useTheme();
  const colorClass = getCategoryStyles(activeVariant, category);

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-semibold uppercase tracking-wide ring-1 ring-inset transition-colors duration-500 ${colorClass}`}
    >
      {category}
    </span>
  );
}
