import { Link } from 'react-router-dom';
import {
  CreditCard,
  Heart,
  UserCog,
  CheckCircle2,
  ArrowRight,
  Settings,
  TrendingUp,
} from 'lucide-react';
import PaymentHistoryTable from '../../components/PaymentHistoryTable';
import { memberProfile, announcements, paymentHistory } from '../../data/mockData';
import { useTheme } from '../../context/ThemeContext';
import { themes, getMembershipCheckBg, getMembershipCheckColor } from '../../themes';

export default function V7Dashboard() {
  const { activeVariant } = useTheme();
  const t = themes[activeVariant];

  const recentPayments = paymentHistory.slice(0, 3);
  const recentAnnouncements = announcements.slice(0, 3);
  const totalPaid = paymentHistory.reduce((sum, p) => sum + p.amount, 0);
  const memberSinceFormatted = new Date(memberProfile.memberSince).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });
  const validUntilFormatted = new Date(memberProfile.membership.validUntil).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 pb-24 lg:pb-8">
      {/* Profile Header */}
      <div className="text-center py-8">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-rose-200/50">
          <span className="text-3xl font-bold text-white">
            {memberProfile.firstName[0]}{memberProfile.lastName[0]}
          </span>
        </div>
        <h1 className={`text-2xl font-bold ${t.headingColor}`}>
          {memberProfile.firstName} {memberProfile.lastName}
        </h1>
        <p className={`text-sm ${t.mutedColor} mt-1`}>
          {memberProfile.address} · Member since {memberSinceFormatted}
        </p>

        {/* Stats Grid (Instagram-style) */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className={`${t.cardBg} ${t.cardRadius} ${t.cardBorder} p-4 text-center`}>
            <p className={`text-xl font-bold ${t.headingColor}`}>{paymentHistory.length}</p>
            <p className={`text-xs ${t.mutedColor}`}>Payments</p>
          </div>
          <div className={`${t.cardBg} ${t.cardRadius} ${t.cardBorder} p-4 text-center`}>
            <p className={`text-xl font-bold ${t.headingColor}`}>${totalPaid.toFixed(0)}</p>
            <p className={`text-xs ${t.mutedColor}`}>Contributed</p>
          </div>
          <div className={`${t.cardBg} ${t.cardRadius} ${t.cardBorder} p-4 text-center`}>
            <div className="flex items-center justify-center gap-1">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <p className={`text-sm font-bold ${t.headingColor}`}>Active</p>
            </div>
            <p className={`text-xs ${t.mutedColor}`}>Until {validUntilFormatted}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-3 mt-5">
          <Link
            to="/membership"
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold ${t.btnPrimary} transition-all duration-300`}
          >
            <CreditCard className="w-4 h-4" />
            Pay Dues
          </Link>
          <Link
            to="/membership"
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold ${t.btnSecondary} transition-all duration-300`}
          >
            <Heart className="w-4 h-4" />
            Donate
          </Link>
          <button className={`p-2.5 rounded-full ${t.btnSecondary} transition-all duration-300`}>
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Activity Feed */}
      <div className="space-y-4">
        {/* Membership Card */}
        <div className={`${t.cardBg} ${t.cardRadius} ${t.cardBorder} p-5`}>
          <div className="flex items-center gap-3 mb-3">
            <div className={`w-10 h-10 rounded-full ${getMembershipCheckBg(activeVariant)} flex items-center justify-center`}>
              <CheckCircle2 className={`w-5 h-5 ${getMembershipCheckColor(activeVariant)}`} />
            </div>
            <div>
              <h3 className={`text-sm font-bold ${t.headingColor}`}>Membership Status</h3>
              <p className={`text-xs ${t.mutedColor}`}>Your membership is active and in good standing</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <span className={t.mutedColor}>Household</span>
              <p className={`font-medium ${t.headingColor}`}>{memberProfile.address}</p>
            </div>
            <div>
              <span className={t.mutedColor}>Email</span>
              <p className={`font-medium ${t.headingColor}`}>{memberProfile.email}</p>
            </div>
          </div>
        </div>

        {/* Recent Announcements */}
        <div className={`${t.cardBg} ${t.cardRadius} ${t.cardBorder} overflow-hidden`}>
          <div className={`flex items-center justify-between px-5 py-4 ${t.panelHeaderBorder}`}>
            <h3 className={`text-sm font-bold ${t.headingColor}`}>Recent Announcements</h3>
            <Link to="/announcements" className={`text-xs font-medium ${t.accentColor}`}>
              View all
            </Link>
          </div>
          <div className="divide-y divide-rose-100/40">
            {recentAnnouncements.map((a) => {
              const formattedDate = new Date(a.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
              return (
                <div key={a.id} className="px-5 py-3 hover:bg-rose-50/30 transition-colors">
                  <div className="flex items-center justify-between">
                    <h4 className={`text-sm font-semibold ${t.headingColor} truncate flex-1`}>{a.title}</h4>
                    <span className={`text-xs ${t.subtleColor} ml-2 shrink-0`}>{formattedDate}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Transaction History */}
        <div className={`${t.cardBg} ${t.cardRadius} ${t.cardBorder} overflow-hidden`}>
          <div className={`flex items-center justify-between px-5 py-4 ${t.panelHeaderBorder}`}>
            <h3 className={`text-sm font-bold ${t.headingColor}`}>Transaction History</h3>
            <Link to="/membership" className={`text-xs font-medium ${t.accentColor}`}>
              View all
            </Link>
          </div>
          <div className="divide-y divide-rose-100/40">
            {recentPayments.map((p) => {
              const formattedDate = new Date(p.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
              return (
                <div key={p.id} className="px-5 py-3 flex items-center justify-between">
                  <div>
                    <p className={`text-sm font-medium ${t.headingColor}`}>{p.description}</p>
                    <p className={`text-xs ${t.subtleColor}`}>{formattedDate}</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm font-bold ${t.headingColor}`}>
                      {p.type === 'Donation' ? '-' : ''}${p.amount.toFixed(2)}
                    </p>
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-emerald-50 text-emerald-600">
                      {p.status}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
