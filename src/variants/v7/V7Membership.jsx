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
  Sparkles,
} from 'lucide-react';
import PaymentHistoryTable from '../../components/PaymentHistoryTable';
import { memberProfile, paymentHistory } from '../../data/mockData';
import { useTheme } from '../../context/ThemeContext';
import {
  themes,
  getMembershipCheckBg,
  getMembershipCheckColor,
  getDuesSupportIcon,
  getDonationBtnStyles,
} from '../../themes';

const donationAmounts = [25, 50, 100, 250];

export default function V7Membership() {
  const { activeVariant } = useTheme();
  const t = themes[activeVariant];

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

  const supportItems = [
    { icon: Shield, label: '24/7 Security Patrol' },
    { icon: Calendar, label: 'Community Events' },
    { icon: DollarSign, label: 'Common Area Landscaping' },
    { icon: Heart, label: 'Holiday Decorations' },
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 pb-24 lg:pb-8">
      {/* Header */}
      <div className="py-8 text-center">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-rose-200/50">
          <CreditCard className="w-7 h-7 text-white" />
        </div>
        <h1 className={`text-2xl font-bold ${t.headingColor}`}>Membership & Payments</h1>
        <p className={`text-sm ${t.mutedColor} mt-1`}>
          Support your neighborhood community.
        </p>
      </div>

      {/* Membership Status Card */}
      <div className={`${t.cardBg} ${t.cardRadius} ${t.cardBorder} p-5 mb-6`}>
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 rounded-full ${getMembershipCheckBg(activeVariant)} flex items-center justify-center`}>
            <CheckCircle2 className={`w-6 h-6 ${getMembershipCheckColor(activeVariant)}`} />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className={`text-base font-bold ${t.headingColor}`}>Active Member</span>
              <span className={`px-2 py-0.5 rounded-full text-[11px] font-semibold ${t.badgeActiveBg}`}>
                Active
              </span>
            </div>
            <p className={`text-xs ${t.mutedColor}`}>Valid until {validUntilFormatted}</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 mt-4 text-sm">
          <div>
            <span className={t.mutedColor}>Household</span>
            <p className={`font-medium ${t.headingColor} text-xs`}>{memberProfile.address}</p>
          </div>
          <div>
            <span className={t.mutedColor}>Dues</span>
            <p className={`font-medium ${t.headingColor}`}>${memberProfile.membership.amount}</p>
          </div>
          <div>
            <span className={t.mutedColor}>Type</span>
            <p className={`font-medium ${t.headingColor}`}>{memberProfile.membership.type}</p>
          </div>
        </div>
      </div>

      {/* Payment Selection Tabs (pill style) */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab('dues')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 ${
            activeTab === 'dues'
              ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-md shadow-rose-200/50'
              : `${t.cardBg} ${t.cardBorder} ${t.bodyColor}`
          }`}
        >
          <CreditCard className="w-4 h-4" />
          Pay Dues
        </button>
        <button
          onClick={() => setActiveTab('donate')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 ${
            activeTab === 'donate'
              ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-md shadow-rose-200/50'
              : `${t.cardBg} ${t.cardBorder} ${t.bodyColor}`
          }`}
        >
          <Heart className="w-4 h-4" />
          Donate
        </button>
      </div>

      {/* Payment Content */}
      <div className={`${t.cardBg} ${t.cardRadius} ${t.cardBorder} p-5 mb-6`}>
        {paymentSuccess ? (
          <div className="text-center py-8">
            <div className={`w-16 h-16 rounded-full ${getMembershipCheckBg(activeVariant)} flex items-center justify-center mx-auto mb-4`}>
              <Check className={`w-8 h-8 ${getMembershipCheckColor(activeVariant)}`} />
            </div>
            <h3 className={`text-xl font-bold ${t.headingColor} mb-2`}>Payment Successful!</h3>
            <p className={t.mutedColor}>
              Thank you for your {activeTab === 'dues' ? 'membership payment' : 'generous donation'}.
              A receipt has been sent to your email.
            </p>
          </div>
        ) : activeTab === 'dues' ? (
          <div>
            {/* Dues Amount Display */}
            <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-5 mb-5 text-center">
              <Sparkles className="w-6 h-6 text-rose-400 mx-auto mb-2" />
              <p className="text-4xl font-bold text-rose-600">$200</p>
              <p className={`text-sm ${t.mutedColor} mt-1`}>2026 Annual Dues · per household</p>
            </div>

            <div className="space-y-3 mb-6">
              <h4 className={`text-sm font-semibold ${t.bodyColor}`}>Your dues support:</h4>
              <div className="grid grid-cols-2 gap-2">
                {supportItems.map(({ icon: Icon, label }) => (
                  <div key={label} className={`flex items-center gap-2 text-sm ${t.bodyColor}`}>
                    <Icon className={`w-4 h-4 ${getDuesSupportIcon(activeVariant)} shrink-0`} />
                    {label}
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={handlePayment}
              className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl text-base font-semibold ${t.btnPrimary} transition-all duration-300`}
            >
              Pay $200
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className={`mt-3 text-xs text-center ${t.subtleColor}`}>
              Secure payment via Stripe. Receipt sent by email.
            </p>
          </div>
        ) : (
          <div>
            <p className={`text-sm ${t.bodyColor} mb-5`}>
              Optional donations help fund special projects like park improvements, holiday events, and enhanced security.
            </p>

            {/* Donation Amount Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
              {donationAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setSelectedDonation(amount)}
                  className={`py-3 rounded-2xl text-sm font-semibold transition-all duration-300 border ${getDonationBtnStyles(activeVariant, selectedDonation === amount)}`}
                >
                  ${amount}
                </button>
              ))}
            </div>

            <div className="mb-5">
              <label className={`block text-sm font-medium ${t.bodyColor} mb-1.5`}>Custom amount</label>
              <div className="relative">
                <span className={`absolute left-3 top-1/2 -translate-y-1/2 ${t.subtleColor} text-sm`}>$</span>
                <input
                  type="number"
                  value={selectedDonation}
                  onChange={(e) => setSelectedDonation(Number(e.target.value))}
                  className={`w-full pl-7 pr-4 py-2.5 rounded-2xl border ${t.inputBg} ${t.inputBorder} ${t.inputText} text-sm focus:outline-none ${t.inputFocus}`}
                  min="1"
                />
              </div>
            </div>

            <button
              onClick={handlePayment}
              className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl text-base font-semibold ${t.btnPrimary} transition-all duration-300`}
            >
              Donate ${selectedDonation}
              <Heart className="w-4 h-4" />
            </button>
            <p className={`mt-3 text-xs text-center ${t.subtleColor}`}>
              All donations are tax-deductible. Receipt sent by email.
            </p>
          </div>
        )}
      </div>

      {/* Payment History */}
      <div className={`${t.cardBg} ${t.cardRadius} ${t.cardBorder} overflow-hidden`}>
        <div className={`px-5 py-4 ${t.panelHeaderBorder}`}>
          <h3 className={`text-sm font-bold ${t.headingColor}`}>Payment History</h3>
        </div>
        <PaymentHistoryTable payments={paymentHistory} />
      </div>
    </div>
  );
}
