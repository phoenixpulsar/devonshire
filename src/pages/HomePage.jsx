import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Shield,
  Users,
  Calendar,
  Megaphone,
  Heart,
  HandHelping,
} from 'lucide-react';
import AnnouncementCard from '../components/AnnouncementCard';
import EventCard from '../components/EventCard';
import StatCard from '../components/StatCard';
import { announcements, events, communityStats } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';
import { themes, getInvolveIconBg, getInvolveIconColor } from '../themes';

export default function HomePage() {
  const { activeVariant } = useTheme();
  const t = themes[activeVariant];

  const latestAnnouncements = announcements.slice(0, 3);
  const upcomingEvents = events.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className={`relative overflow-hidden ${t.heroBg} transition-colors duration-500`}>
        <div className={`absolute inset-0 ${t.heroOverlay}`} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="max-w-3xl">
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${t.heroBadgeBg} text-sm font-medium mb-6 transition-colors duration-500`}>
              <Shield className="w-4 h-4" />
              Serving our community since 1975
            </div>
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${activeVariant === 4 ? 'text-white' : t.headingColor} tracking-tight leading-tight transition-colors duration-500`}>
              Devonshire
              <br />
              <span className={`${t.heroAccentText} transition-colors duration-500`}>Neighborhood Association</span>
            </h1>
            <p className={`mt-6 text-lg sm:text-xl ${activeVariant === 4 ? 'text-stone-300' : t.bodyColor} leading-relaxed max-w-2xl transition-colors duration-500`}>
              Supporting community safety, connection, and neighborhood improvement.
              Stay informed, get involved, and help make Devonshire a great place to live.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                to="/membership"
                className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold ${t.btnPrimary} transition-all duration-300`}
              >
                Join the Neighborhood
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/membership"
                className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold ${activeVariant === 4 ? t.btnOutline : t.btnSecondary} transition-all duration-300`}
              >
                Pay Annual Dues
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <StatCard icon={Users} label="Households" value={communityStats.totalHouseholds} color="emerald" />
          <StatCard icon={Shield} label="Active Members" value={communityStats.activeMembers} color="blue" />
          <StatCard
            icon={Calendar}
            label="Patrol Hours / Month"
            value={communityStats.patrolHoursMonthly}
            color="amber"
          />
          <StatCard icon={Megaphone} label="Events This Year" value={communityStats.eventsThisYear} color="purple" />
        </div>
      </section>

      {/* Announcements Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className={`text-2xl sm:text-3xl font-bold ${t.headingColor} transition-colors duration-500`}>Latest Announcements</h2>
            <p className={`mt-2 ${t.mutedColor} transition-colors duration-500`}>Stay up to date with what is happening in Devonshire.</p>
          </div>
          <Link
            to="/announcements"
            className={`hidden sm:inline-flex items-center gap-1 text-sm font-semibold ${t.accentColor} ${t.accentHover} transition-colors`}
          >
            View all
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid gap-4">
          {latestAnnouncements.map((a) => (
            <AnnouncementCard key={a.id} announcement={a} />
          ))}
        </div>
        <div className="mt-6 sm:hidden">
          <Link
            to="/announcements"
            className={`inline-flex items-center gap-1 text-sm font-semibold ${t.accentColor} ${t.accentHover}`}
          >
            View all announcements
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Events Section */}
      <section className={`${t.sectionAltBg} transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className={`text-2xl sm:text-3xl font-bold ${t.headingColor} transition-colors duration-500`}>Upcoming Events</h2>
              <p className={`mt-2 ${t.mutedColor} transition-colors duration-500`}>Mark your calendar and join your neighbors.</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {upcomingEvents.map((e) => (
              <EventCard key={e.id} event={e} />
            ))}
          </div>
        </div>
      </section>

      {/* Community Participation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-10">
          <h2 className={`text-2xl sm:text-3xl font-bold ${t.headingColor} transition-colors duration-500`}>Get Involved</h2>
          <p className={`mt-2 ${t.mutedColor} max-w-xl mx-auto transition-colors duration-500`}>
            A strong neighborhood starts with participation. Here is how you can help.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { icon: HandHelping, color: 'emerald', title: 'Volunteer', desc: 'Join clean-up days, help with events, or support neighborhood beautification projects.' },
            { icon: Users, color: 'blue', title: 'Attend Meetings', desc: 'Your voice matters. Attend board meetings and help shape the future of Devonshire.' },
            { icon: Shield, color: 'amber', title: 'Patrol Support', desc: 'Support our security patrol program by volunteering or contributing to patrol funding.' },
          ].map((item) => (
            <div key={item.title} className={`text-center p-6 ${t.cardRadius} ${t.involveBg} ${t.transition}`}>
              <div className={`w-12 h-12 rounded-xl ${getInvolveIconBg(activeVariant, item.color)} flex items-center justify-center mx-auto mb-4 transition-colors duration-500`}>
                <item.icon className={`w-6 h-6 ${getInvolveIconColor(activeVariant, item.color)} transition-colors duration-500`} />
              </div>
              <h3 className={`text-lg font-semibold ${t.headingColor} mb-2 transition-colors duration-500`}>{item.title}</h3>
              <p className={`text-sm ${t.mutedColor} leading-relaxed transition-colors duration-500`}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${t.ctaBg} transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 text-center">
          <h2 className={`text-2xl sm:text-3xl font-bold ${t.ctaText} transition-colors duration-500`}>Ready to join your neighbors?</h2>
          <p className={`mt-3 ${t.ctaSubtext} text-lg max-w-xl mx-auto transition-colors duration-500`}>
            Membership supports security, events, and improvements that benefit every household.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/membership"
              className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold ${t.ctaBtnPrimary} transition-all duration-300`}
            >
              Become a Member
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/announcements"
              className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold ${t.btnOutline} transition-all duration-300`}
            >
              View Announcements
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
