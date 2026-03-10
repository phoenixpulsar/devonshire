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

export default function DashboardPage() {
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
    <div className="min-h-screen bg-gray-50/50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Welcome back, {memberProfile.firstName}
              </h1>
              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500">
                <span className="inline-flex items-center gap-1.5">
                  <Home className="w-4 h-4 text-gray-400" />
                  Household: {memberProfile.address}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-gray-400" />
                  {memberProfile.email}
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <Link
                to="/membership"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
              >
                <CreditCard className="w-4 h-4" />
                Pay Dues
              </Link>
              <Link
                to="/membership"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
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
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-gray-900">Active Member</span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-semibold bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20">
                        Active
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-0.5">
                      Valid until {validUntilFormatted}
                    </p>
                  </div>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-sm text-gray-500">Member since</p>
                  <p className="text-sm font-semibold text-gray-900">{memberSinceFormatted}</p>
                </div>
              </div>
            </DashboardPanel>
          </div>

          {/* Quick Actions */}
          <DashboardPanel title="Quick Actions">
            <div className="space-y-2">
              <Link
                to="/membership"
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
              >
                <CreditCard className="w-4 h-4 text-gray-400" />
                Pay Dues
                <ArrowRight className="w-3.5 h-3.5 ml-auto text-gray-300" />
              </Link>
              <Link
                to="/membership"
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
              >
                <Heart className="w-4 h-4 text-gray-400" />
                Make Donation
                <ArrowRight className="w-3.5 h-3.5 ml-auto text-gray-300" />
              </Link>
              <button className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors text-left">
                <UserCog className="w-4 h-4 text-gray-400" />
                Update Profile
                <ArrowRight className="w-3.5 h-3.5 ml-auto text-gray-300" />
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
                className="text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors"
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
              className="text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors"
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
