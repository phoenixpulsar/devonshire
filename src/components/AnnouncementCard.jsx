import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import CategoryBadge from './CategoryBadge';

export default function AnnouncementCard({ announcement, compact = false }) {
  const formattedDate = new Date(announcement.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <article
      className={`group bg-white rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-200 ${
        compact ? 'p-4' : 'p-5 sm:p-6'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2.5 mb-2">
            <CategoryBadge category={announcement.category} />
            <time className="text-xs text-gray-400 font-medium">{formattedDate}</time>
          </div>
          <h3
            className={`font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors ${
              compact ? 'text-sm' : 'text-base sm:text-lg'
            }`}
          >
            {announcement.title}
          </h3>
          {!compact && (
            <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-2">
              {announcement.preview}
            </p>
          )}
        </div>
        <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-emerald-600 mt-1 shrink-0 transition-colors" />
      </div>
      {!compact && (
        <div className="mt-4">
          <Link
            to={`/announcements#${announcement.id}`}
            className="inline-flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors"
          >
            Read more
            <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
          </Link>
        </div>
      )}
    </article>
  );
}
