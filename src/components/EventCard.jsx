import { Calendar, MapPin, Clock } from 'lucide-react';

export default function EventCard({ event }) {
  const eventDate = new Date(event.date);
  const month = eventDate.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
  const day = eventDate.getDate();

  return (
    <article className="group bg-white rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-200 p-5 sm:p-6">
      <div className="flex gap-4">
        {/* Date badge */}
        <div className="shrink-0 w-14 h-14 rounded-xl bg-emerald-50 border border-emerald-100 flex flex-col items-center justify-center">
          <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider leading-none">
            {month}
          </span>
          <span className="text-xl font-bold text-emerald-700 leading-tight">{day}</span>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors">
            {event.title}
          </h3>
          <p className="mt-1 text-sm text-gray-500 line-clamp-2">{event.description}</p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-400">
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
