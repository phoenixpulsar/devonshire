import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Shield,
  Users,
  Calendar,
  Megaphone,
  Heart,
  HandHelping,
  MapPin,
  Clock,
} from 'lucide-react';
import { announcements, events, communityStats, memberProfile } from '../../data/mockData';
import { useTheme } from '../../context/ThemeContext';
import { themes } from '../../themes';

export default function V7Home() {
  const { activeVariant } = useTheme();
  const t = themes[activeVariant];

  // Merge announcements and events into a unified feed sorted by date
  const feedItems = [
    ...announcements.map((a) => ({ ...a, feedType: 'announcement' })),
    ...events.map((e) => ({ ...e, feedType: 'event' })),
  ].sort((a, b) => new Date(b.date) - new Date(a.date));

  const stats = [
    { icon: Users, label: 'Households', value: communityStats.totalHouseholds },
    { icon: Shield, label: 'Members', value: communityStats.activeMembers },
    { icon: Calendar, label: 'Patrol Hrs', value: communityStats.patrolHoursMonthly },
    { icon: Megaphone, label: 'Events', value: communityStats.eventsThisYear },
  ];

  const stories = [
    { icon: HandHelping, label: 'Volunteer', color: 'from-emerald-400 to-teal-500' },
    { icon: Users, label: 'Meetings', color: 'from-blue-400 to-indigo-500' },
    { icon: Shield, label: 'Patrol', color: 'from-amber-400 to-orange-500' },
    { icon: Heart, label: 'Donate', color: 'from-rose-400 to-pink-500' },
  ];

  return (
    <>
      {/* Profile Card */}
      <div className={`${t.heroBg} transition-colors duration-500`}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 text-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-rose-200/50">
            <span className="text-2xl font-bold text-white">
              {memberProfile.firstName[0]}{memberProfile.lastName[0]}
            </span>
          </div>
          <h1 className={`text-2xl font-bold ${t.headingColor}`}>
            Devonshire Community
          </h1>
          <p className={`text-sm ${t.mutedColor} mt-1`}>
            Neighborhood Association · Est. 1975
          </p>

          {/* Stats Strip */}
          <div className="flex items-center justify-center gap-6 mt-5">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className={`text-xl font-bold ${t.headingColor}`}>{stat.value}</p>
                <p className={`text-xs ${t.mutedColor}`}>{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-3 mt-5">
            <Link
              to="/membership"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold ${t.btnPrimary} transition-all duration-300`}
            >
              Pay Dues
            </Link>
            <Link
              to="/dashboard"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold ${t.btnSecondary} transition-all duration-300`}
            >
              My Dashboard
            </Link>
          </div>
        </div>
      </div>

      {/* Story Circles */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex items-center gap-5 overflow-x-auto pb-2">
          {stories.map((story) => {
            const Icon = story.icon;
            return (
              <div key={story.label} className="flex flex-col items-center gap-1.5 shrink-0">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${story.color} p-[3px]`}>
                  <div className={`w-full h-full rounded-full ${t.cardBg} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-gray-600" />
                  </div>
                </div>
                <span className={`text-xs font-medium ${t.mutedColor}`}>{story.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Unified Feed */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 pb-24 lg:pb-8 space-y-4">
        {feedItems.map((item) => {
          const formattedDate = new Date(item.date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          });

          if (item.feedType === 'event') {
            return (
              <article
                key={`event-${item.id}`}
                className={`${t.cardBg} ${t.cardRadius} ${t.cardBorder} ${t.cardHover} ${t.transition} p-5`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className={`text-sm font-semibold ${t.headingColor}`}>Upcoming Event</span>
                    <span className={`text-xs ${t.subtleColor} ml-2`}>{formattedDate}</span>
                  </div>
                </div>
                <h3 className={`text-lg font-bold ${t.headingColor} mb-2`}>{item.title}</h3>
                <p className={`text-sm ${t.mutedColor} mb-3`}>{item.description}</p>
                <div className={`flex items-center gap-4 text-xs ${t.mutedColor}`}>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {item.time}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {item.location}
                  </span>
                </div>
              </article>
            );
          }

          return (
            <article
              key={`ann-${item.id}`}
              className={`${t.cardBg} ${t.cardRadius} ${t.cardBorder} ${t.cardHover} ${t.transition} p-5`}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  item.category === 'Safety' ? 'bg-gradient-to-br from-amber-400 to-orange-500' :
                  item.category === 'Meeting' ? 'bg-gradient-to-br from-rose-400 to-pink-500' :
                  item.category === 'Event' ? 'bg-gradient-to-br from-blue-400 to-indigo-500' :
                  'bg-gradient-to-br from-purple-400 to-violet-500'
                }`}>
                  <Megaphone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className={`text-sm font-semibold ${t.headingColor}`}>{item.category}</span>
                  <span className={`text-xs ${t.subtleColor} ml-2`}>{formattedDate}</span>
                </div>
              </div>
              <h3 className={`text-lg font-bold ${t.headingColor} mb-2`}>{item.title}</h3>
              <p className={`text-sm ${t.mutedColor} leading-relaxed`}>{item.preview}</p>
              <div className="mt-3">
                <Link
                  to={`/announcements#${item.id}`}
                  className={`inline-flex items-center text-sm font-medium ${t.accentColor} ${t.accentHover} transition-colors`}
                >
                  Read more
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
