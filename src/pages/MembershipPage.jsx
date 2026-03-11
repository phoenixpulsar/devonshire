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
import { useTheme } from '../context/ThemeContext';
import {
  themes,
  getMembershipCheckBg,
  getMembershipCheckColor,
  getDuesHighlight,
  getDuesPriceColor,
  getDuesSupportIcon,
  getTabStyles,
  getDonationBtnStyles,
} from '../themes';

const donationAmounts = [25, 50, 100, 250];

export default function MembershipPage() {
  const { activeVariant } = useTheme();
  const t = themes[activeVariant];

  const [activeTab, setActiveTab] = useState('dues');
  const [selectedDonation, setSelectedDonation] = useState(50);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const validUntilFormatted = new Date(
    memberProfile.membership.validUntil,
  ).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const handlePayment = () => {
    setPaymentSuccess(true);
    setTimeout(() => setPaymentSuccess(false), 3000);
  };

  const duesTabStyles = getTabStyles(activeVariant, activeTab === 'dues');
  const donateTabStyles = getTabStyles(activeVariant, activeTab === 'donate');

  return (
    <div className={`min-h-screen ${t.pageBg} transition-colors duration-500`}>
      {/* Header */}
      <div className={`${t.dashboardHeaderBg} transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <h1 className={`text-2xl sm:text-3xl font-bold ${t.headingColor} transition-colors duration-500`}>
            Membership &amp; Payments
          </h1>
          <p className={`mt-2 ${t.mutedColor} transition-colors duration-500`}>
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
                  <div className={`w-10 h-10 rounded-xl ${getMembershipCheckBg(activeVariant)} flex items-center justify-center transition-colors duration-500`}>
                    <CheckCircle2 className={`w-5 h-5 ${getMembershipCheckColor(activeVariant)} transition-colors duration-500`} />
                  </div>
                  <div>
                    <p className={`text-sm font-bold ${t.headingColor} transition-colors duration-500`}>Active Member</p>
                    <p className={`text-xs ${t.mutedColor} transition-colors duration-500`}>Valid until {validUntilFormatted}</p>
                  </div>
                </div>
                <MembershipDetails t={t} />
              </div>
            </DashboardPanel>
          </div>

          {/* Payment Form */}
          <div className="lg:col-span-2">
            <div className={`${t.panelBg} ${t.cardRadius} ${t.panelBorder} ${t.transition}`}>
              {/* Tabs */}
              <div className={`flex ${t.panelHeaderBorder}`}>
                <button
                  onClick={() => setActiveTab('dues')}
                  className={`flex-1 px-4 py-3.5 text-sm font-semibold transition-colors relative ${duesTabStyles.text}`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <CreditCard className="w-4 h-4" />
                    Pay Dues
                  </div>
                  {activeTab === 'dues' && (
                    <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${duesTabStyles.bar}`} />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('donate')}
                  className={`flex-1 px-4 py-3.5 text-sm font-semibold transition-colors relative ${donateTabStyles.text}`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <Heart className="w-4 h-4" />
                    Make Donation
                  </div>
                  {activeTab === 'donate' && (
                    <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${donateTabStyles.bar}`} />
                  )}
                </button>
              </div>

              {/* Tab Content */}
              <div className="p-5 sm:p-6">
                {paymentSuccess ? (
                  <SuccessMessage t={t} activeVariant={activeVariant} activeTab={activeTab} />
                ) : activeTab === 'dues' ? (
                  <DuesForm t={t} activeVariant={activeVariant} handlePayment={handlePayment} />
                ) : (
                  <DonationForm
                    t={t}
                    activeVariant={activeVariant}
                    selectedDonation={selectedDonation}
                    setSelectedDonation={setSelectedDonation}
                    handlePayment={handlePayment}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Payment History */}
        <DashboardPanel title="Payment History" className="overflow-hidden">
          <div className="-m-5 sm:-m-6">
            <PaymentHistoryTable payments={paymentHistory} />
          </div>
        </DashboardPanel>
      </div>
    </div>
  );
}

/* ── Membership details rows ── */
function MembershipDetails({ t }) {
  const rows = [
    { label: 'Household', value: memberProfile.address },
    { label: 'Annual Dues', value: `$${memberProfile.membership.amount}` },
    { label: 'Type', value: memberProfile.membership.type },
  ];
  return (
    <div className="space-y-3">
      {rows.map(({ label, value }) => (
        <div key={label} className="flex justify-between text-sm">
          <span className={`${t.mutedColor} transition-colors duration-500`}>{label}</span>
          <span className={`font-medium ${t.headingColor} transition-colors duration-500`}>{value}</span>
        </div>
      ))}
      <div className="flex justify-between text-sm">
        <span className={`${t.mutedColor} transition-colors duration-500`}>Status</span>
        <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-semibold ${t.badgeActiveBg} transition-colors duration-500`}>
          {memberProfile.membership.status}
        </span>
      </div>
    </div>
  );
}

/* ── Success sub-component ── */
function SuccessMessage({ t, activeVariant, activeTab }) {
  return (
    <div className="text-center py-8">
      <div className={`w-16 h-16 rounded-full ${getMembershipCheckBg(activeVariant)} flex items-center justify-center mx-auto mb-4 transition-colors duration-500`}>
        <Check className={`w-8 h-8 ${getMembershipCheckColor(activeVariant)} transition-colors duration-500`} />
      </div>
      <h3 className={`text-xl font-bold ${t.headingColor} mb-2 transition-colors duration-500`}>Payment Successful!</h3>
      <p className={`${t.mutedColor} transition-colors duration-500`}>
        Thank you for your {activeTab === 'dues' ? 'membership payment' : 'generous donation'}.
        A receipt has been sent to your email.
      </p>
    </div>
  );
}

/* ── Dues sub-component ── */
function DuesForm({ t, activeVariant, handlePayment }) {
  const supportItems = [
    { icon: Shield, label: '24/7 Security Patrol' },
    { icon: Calendar, label: 'Community Events' },
    { icon: DollarSign, label: 'Common Area Landscaping' },
    { icon: Heart, label: 'Holiday Decorations' },
  ];
  return (
    <div>
      <div className={`${getDuesHighlight(activeVariant)} ${t.cardRadius} p-5 mb-6 transition-colors duration-500`}>
        <div className="flex items-center justify-between">
          <div>
            <h3 className={`text-lg font-bold ${t.headingColor} transition-colors duration-500`}>2026 Annual Dues</h3>
            <p className={`text-sm ${t.bodyColor} mt-1 transition-colors duration-500`}>
              Covers security patrol, landscaping, events, and community improvements.
            </p>
          </div>
          <div className="text-right">
            <p className={`text-3xl font-bold ${getDuesPriceColor(activeVariant)} transition-colors duration-500`}>$200</p>
            <p className={`text-xs ${t.mutedColor} transition-colors duration-500`}>per household / year</p>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <h4 className={`text-sm font-semibold ${t.bodyColor} transition-colors duration-500`}>Your dues support:</h4>
        <div className="grid sm:grid-cols-2 gap-3">
          {supportItems.map(({ icon: Icon, label }) => (
            <div key={label} className={`flex items-center gap-2.5 text-sm ${t.bodyColor} transition-colors duration-500`}>
              <Icon className={`w-4 h-4 ${getDuesSupportIcon(activeVariant)} shrink-0 transition-colors duration-500`} />
              {label}
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handlePayment}
        className={`mt-6 w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold ${t.btnPrimary} transition-all duration-300`}
      >
        Pay $200
        <ArrowRight className="w-4 h-4" />
      </button>
      <p className={`mt-3 text-xs text-center ${t.subtleColor} transition-colors duration-500`}>
        Secure payment processed via Stripe. You will receive a receipt by email.
      </p>
    </div>
  );
}

/* ── Donation sub-component ── */
function DonationForm({ t, activeVariant, selectedDonation, setSelectedDonation, handlePayment }) {
  return (
    <div>
      <p className={`text-sm ${t.bodyColor} mb-5 transition-colors duration-500`}>
        Optional donations help fund special projects like park improvements,
        holiday events, and enhanced security coverage.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {donationAmounts.map((amount) => (
          <button
            key={amount}
            onClick={() => setSelectedDonation(amount)}
            className={`py-3 rounded-xl text-sm font-semibold transition-all duration-300 border ${getDonationBtnStyles(activeVariant, selectedDonation === amount)}`}
          >
            ${amount}
          </button>
        ))}
      </div>
      <div className="mb-6">
        <label className={`block text-sm font-medium ${t.bodyColor} mb-1.5 transition-colors duration-500`}>
          Custom amount
        </label>
        <div className="relative">
          <span className={`absolute left-3 top-1/2 -translate-y-1/2 ${t.subtleColor} text-sm`}>$</span>
          <input
            type="number"
            value={selectedDonation}
            onChange={(e) => setSelectedDonation(Number(e.target.value))}
            className={`w-full pl-7 pr-4 py-2.5 rounded-lg border ${t.inputBg} ${t.inputBorder} ${t.inputText} text-sm focus:outline-none ${t.inputFocus} transition-colors duration-500`}
            placeholder="Enter amount"
            min="1"
          />
        </div>
      </div>
      <button
        onClick={handlePayment}
        className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold ${t.btnPrimary} transition-all duration-300`}
      >
        Donate ${selectedDonation}
        <Heart className="w-4 h-4" />
      </button>
      <p className={`mt-3 text-xs text-center ${t.subtleColor} transition-colors duration-500`}>
        All donations are tax-deductible. You will receive a receipt for your records.
      </p>
    </div>
  );
}
