import { Link } from 'react-router-dom';
import {
  CreditCard,
  Heart,
  UserCog,
  CheckCircle2,
  ArrowRight,
  Home,
  Mail,
  CalendarDays,
} from 'lucide-react';
import DashboardPanel from '../components/DashboardPanel';
import AnnouncementCard from '../components/AnnouncementCard';
import PaymentHistoryTable from '../components/PaymentHistoryTable';
import { memberProfile, announcements, paymentHistory } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';
import { themes, getMembershipCheckBg, getMembershipCheckColor, getQuickActionHover } from '../themes';

export default function DashboardPage() {
  const { activeVariant } = useTheme();
  const t = themes[activeVariant];

  const recentAnnouncements = announcements.slice(0, 3);
  const recentPayments = paymentHistory.slice(0, 3);
  const memberSinceFormatted = new Date(memberProfile.memberSince).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });
  const validUntilFormatted = new Date(memberProfile.membership.validUntil).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className={`min-h-screen ${t.pageBg} transition-colors duration-500`}>
      {/* Header */}
      <div className={`${t.dashboardHeaderBg} transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className={`text-2xl sm:text-3xl font-bold ${t.headingColor} transition-colors duration-500`}>
                Welcome back, {memberProfile.firstName}
              </h1>
              <div className={`mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm ${t.mutedColor} transition-colors duration-500`}>
                <span className="inline-flex items-center gap-1.5">
                  <Home className={`w-4 h-4 ${t.subtleColor}`} />
                  Household: {memberProfile.address}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Mail className={`w-4 h-4 ${t.subtleColor}`} />
                  {memberProfile.email}
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <Link
                to="/membership"
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold ${t.btnPrimary} transition-all duration-300`}
              >
                <CreditCard className="w-4 h-4" />
                Pay Dues
              </Link>
              <Link
                to="/membership"
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold ${t.btnSecondary} transition-all duration-300`}
              >
                <Heart className="w-4 h-4" />
                Donate
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Membership Status Card */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <DashboardPanel title="Membership Status">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl ${getMembershipCheckBg(activeVariant)} flex items-center justify-center transition-colors duration-500`}>
                    <CheckCircle2 className={`w-6 h-6 ${getMembershipCheckColor(activeVariant)} transition-colors duration-500`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`text-lg font-bold ${t.headingColor} transition-colors duration-500`}>Active Member</span>
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-semibold ${t.badgeActiveBg} transition-colors duration-500`}>
                        Active
                      </span>
                    </div>
                    <p className={`text-sm ${t.mutedColor} mt-0.5 transition-colors duration-500`}>
                      Valid until {validUntilFormatted}
                    </p>
                  </div>
                </div>
                <div className="text-left sm:text-right">
                  <p className={`text-sm ${t.mutedColor} transition-colors duration-500`}>Member since</p>
                  <p className={`text-sm font-semibold ${t.headingColor} transition-colors duration-500`}>{memberSinceFormatted}</p>
                </div>
              </div>
            </DashboardPanel>
          </div>

          {/* Quick Actions */}
          <DashboardPanel title="Quick Actions">
            <div className="space-y-2">
              <Link
                to="/membership"
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium ${t.bodyColor} ${getQuickActionHover(activeVariant)} transition-colors`}
              >
                <CreditCard className={`w-4 h-4 ${t.subtleColor}`} />
                Pay Dues
                <ArrowRight className={`w-3.5 h-3.5 ml-auto ${t.subtleColor}`} />
              </Link>
              <Link
                to="/membership"
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium ${t.bodyColor} ${getQuickActionHover(activeVariant)} transition-colors`}
              >
                <Heart className={`w-4 h-4 ${t.subtleColor}`} />
                Make Donation
                <ArrowRight className={`w-3.5 h-3.5 ml-auto ${t.subtleColor}`} />
              </Link>
              <button className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium ${t.bodyColor} ${getQuickActionHover(activeVariant)} transition-colors text-left`}>
                <UserCog className={`w-4 h-4 ${t.subtleColor}`} />
                Update Profile
                <ArrowRight className={`w-3.5 h-3.5 ml-auto ${t.subtleColor}`} />
              </button>
            </div>
          </DashboardPanel>
        </div>

        {/* Announcements */}
        <div className="mb-8">
          <DashboardPanel
            title="Recent Announcements"
            action={
              <Link
                to="/announcements"
                className={`text-sm font-medium ${t.accentColor} ${t.accentHover} transition-colors`}
              >
                View all
              </Link>
            }
          >
            <div className="grid gap-3">
              {recentAnnouncements.map((a) => (
                <AnnouncementCard key={a.id} announcement={a} compact />
              ))}
            </div>
          </DashboardPanel>
        </div>

        {/* Payment History */}
        <DashboardPanel
          title="Recent Payments"
          action={
            <Link
              to="/membership"
              className={`text-sm font-medium ${t.accentColor} ${t.accentHover} transition-colors`}
            >
              View all
            </Link>
          }
          className="overflow-hidden"
        >
          <div className="-m-5 sm:-m-6">
            <PaymentHistoryTable payments={recentPayments} />
          </div>
        </DashboardPanel>
      </div>
    </div>
  );
}
