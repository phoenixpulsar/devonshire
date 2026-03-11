import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Shield,
  Users,
  Calendar,
  Megaphone,
  CreditCard,
  Heart,
  Bell,
  Clock,
  MapPin,
} from 'lucide-react';
import { announcements, events, communityStats, memberProfile } from '../../data/mockData';
import { useTheme } from '../../context/ThemeContext';
import { themes, getCategoryStyles } from '../../themes';

export default function V6Home() {
  const { activeVariant } = useTheme();
  const t = themes[activeVariant];

  const latestAnnouncements = announcements.slice(0, 4);
  const upcomingEvents = events.slice(0, 3);

  const stats = [
    { icon: Users, label: 'Households', value: communityStats.totalHouseholds, color: 'text-teal-500' },
    { icon: Shield, label: 'Active Members', value: communityStats.activeMembers, color: 'text-blue-500' },
    { icon: Calendar, label: 'Patrol Hrs/Mo', value: communityStats.patrolHoursMonthly, color: 'text-amber-500' },
    { icon: Megaphone, label: 'Events/Year', value: communityStats.eventsThisYear, color: 'text-purple-500' },
  ];

  const quickActions = [
    { icon: CreditCard, label: 'Pay Dues', to: '/membership', color: 'bg-teal-500' },
    { icon: Heart, label: 'Donate', to: '/membership', color: 'bg-rose-500' },
    { icon: Bell, label: 'Announcements', to: '/announcements', color: 'bg-blue-500' },
    { icon: Calendar, label: 'Events', to: '/announcements', color: 'bg-amber-500' },
  ];

  return (
    <div className="p-6 lg:p-8 space-y-6">
      {/* Welcome Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className={`text-2xl font-bold ${t.headingColor}`}>
            Command Center
          </h1>
          <p className={`text-sm ${t.mutedColor} mt-1`}>
            Welcome back, {memberProfile.firstName}. Here is your neighborhood overview.
          </p>
        </div>
        <Link
          to="/membership"
          className={`hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold ${t.btnPrimary} transition-all duration-200`}
        >
          <CreditCard className="w-4 h-4" />
          Pay Dues
        </Link>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className={`${t.cardBg} ${t.cardBorder} ${t.cardRadius} p-4 ${t.transition}`}
            >
              <div className="flex items-center gap-3">
                <Icon className={`w-5 h-5 ${stat.color}`} />
                <div>
                  <p className={`text-2xl font-bold ${t.headingColor}`}>{stat.value}</p>
                  <p className={`text-xs ${t.mutedColor}`}>{stat.label}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {quickActions.map((action) => {
          const Icon = action.icon;
          return (
            <Link
              key={action.label}
              to={action.to}
              className={`${t.cardBg} ${t.cardBorder} ${t.cardRadius} p-4 flex flex-col items-center gap-2 hover:shadow-md transition-all duration-200 group`}
            >
              <div className={`w-10 h-10 ${action.color} rounded-xl flex items-center justify-center`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <span className={`text-sm font-medium ${t.bodyColor} group-hover:${t.accentColor.replace('text-', '')}`}>
                {action.label}
              </span>
            </Link>
          );
        })}
      </div>

      {/* Two-Column Content */}
      <div className="grid lg:grid-cols-5 gap-6">
        {/* Announcements - Left (wider) */}
        <div className="lg:col-span-3">
          <div className={`${t.cardBg} ${t.cardBorder} ${t.cardRadius} overflow-hidden`}>
            <div className={`flex items-center justify-between px-5 py-4 ${t.panelHeaderBorder}`}>
              <h2 className={`text-base font-semibold ${t.headingColor}`}>Recent Announcements</h2>
              <Link
                to="/announcements"
                className={`text-sm font-medium ${t.accentColor} ${t.accentHover} transition-colors`}
              >
                View all
              </Link>
            </div>
            <div className="divide-y divide-gray-100">
              {latestAnnouncements.map((a) => {
                const formattedDate = new Date(a.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                });
                return (
                  <div key={a.id} className="px-5 py-4 hover:bg-teal-50/30 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className={`mt-0.5 w-2 h-2 rounded-full shrink-0 ${
                        a.category === 'Safety' ? 'bg-amber-400' :
                        a.category === 'Event' ? 'bg-blue-400' :
                        a.category === 'Meeting' ? 'bg-rose-400' : 'bg-teal-400'
                      }`} />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-xs font-medium px-1.5 py-0.5 rounded ${getCategoryStyles(activeVariant, a.category)}`}>
                            {a.category}
                          </span>
                          <span className={`text-xs ${t.subtleColor}`}>{formattedDate}</span>
                        </div>
                        <h3 className={`text-sm font-semibold ${t.headingColor} truncate`}>
                          {a.title}
                        </h3>
                        <p className={`text-xs ${t.mutedColor} mt-1 line-clamp-1`}>
                          {a.preview}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column - Events + Membership Status */}
        <div className="lg:col-span-2 space-y-6">
          {/* Membership Status Card */}
          <div className={`${t.cardBg} ${t.cardBorder} ${t.cardRadius} p-5`}>
            <h3 className={`text-sm font-semibold ${t.headingColor} mb-3`}>Membership Status</h3>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center">
                <Shield className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <p className={`text-sm font-bold ${t.headingColor}`}>Active Member</p>
                <p className={`text-xs ${t.mutedColor}`}>
                  Valid until {new Date(memberProfile.membership.validUntil).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                </p>
              </div>
            </div>
            <Link
              to="/membership"
              className={`block text-center w-full px-3 py-2 rounded-lg text-sm font-semibold ${t.btnPrimary} transition-all duration-200`}
            >
              Manage Membership
            </Link>
          </div>

          {/* Upcoming Events */}
          <div className={`${t.cardBg} ${t.cardBorder} ${t.cardRadius} overflow-hidden`}>
            <div className={`px-5 py-4 ${t.panelHeaderBorder}`}>
              <h2 className={`text-base font-semibold ${t.headingColor}`}>Upcoming Events</h2>
            </div>
            <div className="divide-y divide-gray-100">
              {upcomingEvents.map((e) => {
                const eventDate = new Date(e.date);
                return (
                  <div key={e.id} className="px-5 py-3 hover:bg-teal-50/30 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="text-center shrink-0 w-10">
                        <p className="text-xs font-semibold text-teal-600 uppercase">
                          {eventDate.toLocaleDateString('en-US', { month: 'short' })}
                        </p>
                        <p className="text-lg font-bold text-teal-700">
                          {eventDate.getDate()}
                        </p>
                      </div>
                      <div className="min-w-0">
                        <h4 className={`text-sm font-semibold ${t.headingColor} truncate`}>{e.title}</h4>
                        <div className={`flex items-center gap-1 text-xs ${t.mutedColor} mt-0.5`}>
                          <Clock className="w-3 h-3" />
                          <span>{e.time}</span>
                          <span className="mx-1">·</span>
                          <MapPin className="w-3 h-3" />
                          <span className="truncate">{e.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
