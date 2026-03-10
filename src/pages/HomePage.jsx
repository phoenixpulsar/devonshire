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

export default function HomePage() {
  const latestAnnouncements = announcements.slice(0, 3);
  const upcomingEvents = events.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-100/40 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100/60 text-emerald-700 text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Serving our community since 1975
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
              Devonshire
              <br />
              <span className="text-emerald-600">Neighborhood Association</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
              Supporting community safety, connection, and neighborhood improvement.
              Stay informed, get involved, and help make Devonshire a great place to live.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                to="/membership"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm shadow-emerald-200 transition-all"
              >
                Join the Neighborhood
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/membership"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 border border-gray-200 transition-all"
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
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Latest Announcements</h2>
            <p className="mt-2 text-gray-500">Stay up to date with what is happening in Devonshire.</p>
          </div>
          <Link
            to="/announcements"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
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
            className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-600 hover:text-emerald-700"
          >
            View all announcements
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Events Section */}
      <section className="bg-gray-50/70 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Upcoming Events</h2>
              <p className="mt-2 text-gray-500">Mark your calendar and join your neighbors.</p>
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
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Get Involved</h2>
          <p className="mt-2 text-gray-500 max-w-xl mx-auto">
            A strong neighborhood starts with participation. Here is how you can help.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="text-center p-6 rounded-xl border border-gray-100 bg-white hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mx-auto mb-4">
              <HandHelping className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Volunteer</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Join clean-up days, help with events, or support neighborhood beautification projects.
            </p>
          </div>
          <div className="text-center p-6 rounded-xl border border-gray-100 bg-white hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Attend Meetings</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Your voice matters. Attend board meetings and help shape the future of Devonshire.
            </p>
          </div>
          <div className="text-center p-6 rounded-xl border border-gray-100 bg-white hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Patrol Support</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Support our security patrol program by volunteering or contributing to patrol funding.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Ready to join your neighbors?</h2>
          <p className="mt-3 text-emerald-100 text-lg max-w-xl mx-auto">
            Membership supports security, events, and improvements that benefit every household.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/membership"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-emerald-700 bg-white hover:bg-emerald-50 transition-all"
            >
              Become a Member
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/announcements"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-white border border-white/30 hover:bg-white/10 transition-all"
            >
              View Announcements
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
