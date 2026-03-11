import { Link } from 'react-router-dom';
import {
  CreditCard,
  Heart,
  UserCog,
  CheckCircle2,
  ArrowRight,
  Home,
  Mail,
  TrendingUp,
  Clock,
} from 'lucide-react';
import PaymentHistoryTable from '../../components/PaymentHistoryTable';
import { memberProfile, announcements, paymentHistory } from '../../data/mockData';
import { useTheme } from '../../context/ThemeContext';
import { themes, getMembershipCheckBg, getMembershipCheckColor, getCategoryStyles } from '../../themes';

export default function V6Dashboard() {
  const { activeVariant } = useTheme();
  const t = themes[activeVariant];

  const recentPayments = paymentHistory.slice(0, 3);
  const recentAnnouncements = announcements.slice(0, 3);
  const memberSinceFormatted = new Date(memberProfile.memberSince).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });
  const validUntilFormatted = new Date(memberProfile.membership.validUntil).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const totalPaid = paymentHistory.reduce((sum, p) => sum + p.amount, 0);

  return (
    <div className="p-6 lg:p-8 space-y-6">
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className={`text-2xl font-bold ${t.headingColor}`}>
            Dashboard
          </h1>
          <div className={`mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm ${t.mutedColor}`}>
            <span className="inline-flex items-center gap-1.5">
              <Home className={`w-4 h-4 ${t.subtleColor}`} />
              {memberProfile.address}
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
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold ${t.btnPrimary} transition-all duration-200`}
          >
            <CreditCard className="w-4 h-4" />
            Pay Dues
          </Link>
          <Link
            to="/membership"
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold ${t.btnSecondary} transition-all duration-200`}
          >
            <Heart className="w-4 h-4" />
            Donate
          </Link>
        </div>
      </div>

      {/* Overview Cards Row */}
      <div className="grid sm:grid-cols-3 gap-4">
        {/* Membership Card */}
        <div className={`${t.cardBg} ${t.cardBorder} ${t.cardRadius} p-5`}>
          <div className="flex items-center gap-3 mb-3">
            <div className={`w-10 h-10 rounded-xl ${getMembershipCheckBg(activeVariant)} flex items-center justify-center`}>
              <CheckCircle2 className={`w-5 h-5 ${getMembershipCheckColor(activeVariant)}`} />
            </div>
            <div>
              <p className={`text-sm font-bold ${t.headingColor}`}>Active Member</p>
              <p className={`text-xs ${t.mutedColor}`}>Since {memberSinceFormatted}</p>
            </div>
          </div>
          <p className={`text-xs ${t.mutedColor}`}>Valid until {validUntilFormatted}</p>
        </div>

        {/* Total Contributions */}
        <div className={`${t.cardBg} ${t.cardBorder} ${t.cardRadius} p-5`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-teal-600" />
            </div>
            <div>
              <p className={`text-2xl font-bold ${t.headingColor}`}>${totalPaid.toFixed(0)}</p>
              <p className={`text-xs ${t.mutedColor}`}>Total Contributions</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className={`${t.cardBg} ${t.cardBorder} ${t.cardRadius} p-5`}>
          <h3 className={`text-sm font-semibold ${t.headingColor} mb-3`}>Quick Actions</h3>
          <div className="space-y-2">
            <Link
              to="/membership"
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${t.bodyColor} hover:bg-teal-50 hover:text-teal-700 transition-colors`}
            >
              <CreditCard className={`w-4 h-4 ${t.subtleColor}`} />
              Pay Dues
              <ArrowRight className={`w-3.5 h-3.5 ml-auto ${t.subtleColor}`} />
            </Link>
            <Link
              to="/membership"
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${t.bodyColor} hover:bg-teal-50 hover:text-teal-700 transition-colors`}
            >
              <Heart className={`w-4 h-4 ${t.subtleColor}`} />
              Donate
              <ArrowRight className={`w-3.5 h-3.5 ml-auto ${t.subtleColor}`} />
            </Link>
            <button className={`flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm ${t.bodyColor} hover:bg-teal-50 hover:text-teal-700 transition-colors text-left`}>
              <UserCog className={`w-4 h-4 ${t.subtleColor}`} />
              Update Profile
              <ArrowRight className={`w-3.5 h-3.5 ml-auto ${t.subtleColor}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Activity Timeline */}
      <div className="grid lg:grid-cols-5 gap-6">
        {/* Recent Announcements */}
        <div className="lg:col-span-2">
          <div className={`${t.cardBg} ${t.cardBorder} ${t.cardRadius} overflow-hidden`}>
            <div className={`flex items-center justify-between px-5 py-4 ${t.panelHeaderBorder}`}>
              <h2 className={`text-base font-semibold ${t.headingColor}`}>Recent Announcements</h2>
              <Link to="/announcements" className={`text-sm font-medium ${t.accentColor} ${t.accentHover}`}>
                View all
              </Link>
            </div>
            <div className="divide-y divide-gray-100">
              {recentAnnouncements.map((a) => {
                const formattedDate = new Date(a.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
                return (
                  <div key={a.id} className="px-5 py-3 hover:bg-teal-50/30 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs font-medium px-1.5 py-0.5 rounded ${getCategoryStyles(activeVariant, a.category)}`}>
                        {a.category}
                      </span>
                      <span className={`text-xs ${t.subtleColor}`}>{formattedDate}</span>
                    </div>
                    <h3 className={`text-sm font-semibold ${t.headingColor} truncate`}>{a.title}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Payment History */}
        <div className="lg:col-span-3">
          <div className={`${t.cardBg} ${t.cardBorder} ${t.cardRadius} overflow-hidden`}>
            <div className={`flex items-center justify-between px-5 py-4 ${t.panelHeaderBorder}`}>
              <h2 className={`text-base font-semibold ${t.headingColor}`}>Recent Payments</h2>
              <Link to="/membership" className={`text-sm font-medium ${t.accentColor} ${t.accentHover}`}>
                View all
              </Link>
            </div>
            <div className="-mx-0">
              <PaymentHistoryTable payments={recentPayments} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
