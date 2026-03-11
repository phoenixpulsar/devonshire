import { MapPin, Clock } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { themes, getEventDateBadge } from '../themes';

export default function EventCard({ event }) {
  const { activeVariant } = useTheme();
  const t = themes[activeVariant];
  const dateBadge = getEventDateBadge(activeVariant);

  const eventDate = new Date(event.date);
  const month = eventDate.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
  const day = eventDate.getDate();

  return (
    <article className={`group ${t.cardBg} ${t.cardRadius} ${t.cardBorder} ${t.cardHover} ${t.transition} p-5 sm:p-6`}>
      <div className="flex gap-4">
        {/* Date badge */}
        <div className={`shrink-0 w-14 h-14 rounded-xl ${dateBadge.bg} flex flex-col items-center justify-center transition-colors duration-500`}>
          <span className={`text-[10px] font-bold ${dateBadge.month} uppercase tracking-wider leading-none transition-colors duration-500`}>
            {month}
          </span>
          <span className={`text-xl font-bold ${dateBadge.day} leading-tight transition-colors duration-500`}>{day}</span>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className={`text-base font-semibold ${t.headingColor} ${t.transition}`}>
            {event.title}
          </h3>
          <p className={`mt-1 text-sm ${t.mutedColor} line-clamp-2 transition-colors duration-500`}>{event.description}</p>
          <div className={`mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs ${t.subtleColor} transition-colors duration-500`}>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {event.time}
            </span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {event.location}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
