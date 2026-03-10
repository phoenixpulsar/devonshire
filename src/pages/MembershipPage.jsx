import { useState } from 'react';
import {
  CreditCard,
  Heart,
  CheckCircle2,
  Shield,
  Calendar,
  DollarSign,
  ArrowRight,
  Check,
} from 'lucide-react';
import DashboardPanel from '../components/DashboardPanel';
import PaymentHistoryTable from '../components/PaymentHistoryTable';
import { memberProfile, paymentHistory } from '../data/mockData';

const donationAmounts = [25, 50, 100, 250];

export default function MembershipPage() {
  const [activeTab, setActiveTab] = useState('dues');
  const [selectedDonation, setSelectedDonation] = useState(50);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const validUntilFormatted = new Date(memberProfile.membership.validUntil).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const handlePayment = () => {
    setPaymentSuccess(true);
    setTimeout(() => setPaymentSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Membership & Payments</h1>
          <p className="mt-2 text-gray-500">
            Manage your membership, pay dues, and make donations to support the neighborhood.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Membership Status */}
          <div className="lg:col-span-1">
            <DashboardPanel title="Your Membership">
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Active Member</p>
                    <p className="text-xs text-gray-500">Valid until {validUntilFormatted}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Household</span>
                    <span className="font-medium text-gray-900">{memberProfile.address}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Annual Dues</span>
                    <span className="font-medium text-gray-900">${memberProfile.membership.amount}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Type</span>
                    <span className="font-medium text-gray-900">{memberProfile.membership.type}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Status</span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-semibold bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20">
                      {memberProfile.membership.status}
                    </span>
                  </div>
                </div>
              </div>
            </DashboardPanel>
          </div>

          {/* Payment Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border border-gray-100">
              {/* Tabs */}
              <div className="flex border-b border-gray-100">
                <button
                  onClick={() => setActiveTab('dues')}
                  className={`flex-1 px-4 py-3.5 text-sm font-semibold transition-colors relative ${
                    activeTab === 'dues'
                      ? 'text-emerald-700'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <CreditCard className="w-4 h-4" />
                    Pay Dues
                  </div>
                  {activeTab === 'dues' && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('donate')}
                  className={`flex-1 px-4 py-3.5 text-sm font-semibold transition-colors relative ${
                    activeTab === 'donate'
                      ? 'text-emerald-700'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <Heart className="w-4 h-4" />
                    Make Donation
                  </div>
                  {activeTab === 'donate' && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600" />
                  )}
                </button>
              </div>

              {/* Tab Content */}
              <div className="p-5 sm:p-6">
                {paymentSuccess ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Payment Successful!</h3>
                    <p className="text-gray-500">
                      Thank you for your {activeTab === 'dues' ? 'membership payment' : 'generous donation'}.
                      A receipt has been sent to your email.
                    </p>
                  </div>
                ) : activeTab === 'dues' ? (
                  <div>
                    <div className="bg-emerald-50 rounded-xl p-5 mb-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">2026 Annual Dues</h3>
                          <p className="text-sm text-gray-600 mt-1">
                            Covers security patrol, landscaping, events, and community improvements.
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-3xl font-bold text-emerald-700">$200</p>
                          <p className="text-xs text-gray-500">per household / year</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-sm font-semibold text-gray-700">Your dues support:</h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        <div className="flex items-center gap-2.5 text-sm text-gray-600">
                          <Shield className="w-4 h-4 text-emerald-500 shrink-0" />
                          24/7 Security Patrol
                        </div>
                        <div className="flex items-center gap-2.5 text-sm text-gray-600">
                          <Calendar className="w-4 h-4 text-emerald-500 shrink-0" />
                          Community Events
                        </div>
                        <div className="flex items-center gap-2.5 text-sm text-gray-600">
                          <DollarSign className="w-4 h-4 text-emerald-500 shrink-0" />
                          Common Area Landscaping
                        </div>
                        <div className="flex items-center gap-2.5 text-sm text-gray-600">
                          <Heart className="w-4 h-4 text-emerald-500 shrink-0" />
                          Holiday Decorations
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={handlePayment}
                      className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm shadow-emerald-200 transition-all"
                    >
                      Pay $200
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <p className="mt-3 text-xs text-center text-gray-400">
                      Secure payment processed via Stripe. You will receive a receipt by email.
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="text-sm text-gray-600 mb-5">
                      Optional donations help fund special projects like park improvements,
                      holiday events, and enhanced security coverage.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                      {donationAmounts.map((amount) => (
                        <button
                          key={amount}
                          onClick={() => setSelectedDonation(amount)}
                          className={`py-3 rounded-xl text-sm font-semibold transition-all border ${
                            selectedDonation === amount
                              ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                              : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          ${amount}
                        </button>
                      ))}
                    </div>
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Custom amount
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                        <input
                          type="number"
                          value={selectedDonation}
                          onChange={(e) => setSelectedDonation(Number(e.target.value))}
                          className="w-full pl-7 pr-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                          placeholder="Enter amount"
                          min="1"
                        />
                      </div>
                    </div>
                    <button
                      onClick={handlePayment}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm shadow-emerald-200 transition-all"
                    >
                      Donate ${selectedDonation}
                      <Heart className="w-4 h-4" />
                    </button>
                    <p className="mt-3 text-xs text-center text-gray-400">
                      All donations are tax-deductible. You will receive a receipt for your records.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Payment History */}
        <DashboardPanel
          title="Payment History"
          className="overflow-hidden"
        >
          <div className="-m-5 sm:-m-6">
            <PaymentHistoryTable payments={paymentHistory} />
          </div>
        </DashboardPanel>
      </div>
    </div>
  );
}
