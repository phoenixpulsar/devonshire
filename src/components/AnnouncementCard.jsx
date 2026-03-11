import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import CategoryBadge from './CategoryBadge';
import { useTheme } from '../context/ThemeContext';
import { themes } from '../themes';

export default function AnnouncementCard({ announcement, compact = false }) {
  const { activeVariant } = useTheme();
  const t = themes[activeVariant];

  const formattedDate = new Date(announcement.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <article
      className={`group ${t.cardBg} ${t.cardRadius} ${t.cardBorder} ${t.cardHover} ${t.transition} ${
        compact ? 'p-4' : 'p-5 sm:p-6'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2.5 mb-2">
            <CategoryBadge category={announcement.category} />
            <time className={`text-xs ${t.subtleColor} font-medium transition-colors duration-500`}>{formattedDate}</time>
          </div>
          <h3
            className={`font-semibold ${t.headingColor} group-hover:${t.accentColor.replace('text-', '')} ${t.transition} ${
              compact ? 'text-sm' : 'text-base sm:text-lg'
            }`}
          >
            {announcement.title}
          </h3>
          {!compact && (
            <p className={`mt-2 text-sm ${t.mutedColor} leading-relaxed line-clamp-2 transition-colors duration-500`}>
              {announcement.preview}
            </p>
          )}
        </div>
        <ChevronRight className={`w-4 h-4 ${t.subtleColor} mt-1 shrink-0 transition-colors duration-500`} />
      </div>
      {!compact && (
        <div className="mt-4">
          <Link
            to={`/announcements#${announcement.id}`}
            className={`inline-flex items-center text-sm font-medium ${t.accentColor} ${t.accentHover} transition-colors`}
          >
            Read more
            <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
          </Link>
        </div>
      )}
    </article>
  );
}
