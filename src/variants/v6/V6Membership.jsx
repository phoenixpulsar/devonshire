import { useState } from 'react';
import {
  CreditCard,
  Heart,
  CheckCircle2,
  Shield,
  Calendar,
  DollarSign,
  ArrowRight,
  ArrowLeft,
  Check,
} from 'lucide-react';
import PaymentHistoryTable from '../../components/PaymentHistoryTable';
import { memberProfile, paymentHistory } from '../../data/mockData';
import { useTheme } from '../../context/ThemeContext';
import {
  themes,
  getMembershipCheckBg,
  getMembershipCheckColor,
  getDuesSupportIcon,
} from '../../themes';

const STEPS = ['Overview', 'Choose Action', 'Payment', 'Confirmation'];
const donationAmounts = [25, 50, 100, 250];

export default function V6Membership() {
  const { activeVariant } = useTheme();
  const t = themes[activeVariant];

  const [currentStep, setCurrentStep] = useState(0);
  const [paymentType, setPaymentType] = useState(null); // 'dues' or 'donate'
  const [selectedDonation, setSelectedDonation] = useState(50);

  const validUntilFormatted = new Date(memberProfile.membership.validUntil).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const handleNext = () => setCurrentStep((s) => Math.min(s + 1, 3));
  const handleBack = () => setCurrentStep((s) => Math.max(s - 1, 0));
  const handleReset = () => {
    setCurrentStep(0);
    setPaymentType(null);
  };

  const supportItems = [
    { icon: Shield, label: '24/7 Security Patrol' },
    { icon: Calendar, label: 'Community Events' },
    { icon: DollarSign, label: 'Common Area Landscaping' },
    { icon: Heart, label: 'Holiday Decorations' },
  ];

  return (
    <div className="p-6 lg:p-8 space-y-6">
      <div>
        <h1 className={`text-2xl font-bold ${t.headingColor}`}>Membership & Payments</h1>
        <p className={`mt-1 text-sm ${t.mutedColor}`}>
          Manage your membership and make payments through the guided flow.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Wizard Panel */}
        <div className="lg:col-span-2">
          <div className={`${t.cardBg} ${t.cardBorder} ${t.cardRadius} overflow-hidden`}>
            {/* Step Indicator */}
            <div className={`px-6 py-4 ${t.panelHeaderBorder}`}>
              <div className="flex items-center gap-2">
                {STEPS.map((step, i) => (
                  <div key={step} className="flex items-center gap-2">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                        i < currentStep
                          ? 'bg-teal-500 text-white'
                          : i === currentStep
                          ? 'bg-teal-100 text-teal-700 ring-2 ring-teal-500'
                          : 'bg-gray-100 text-gray-400'
                      }`}
                    >
                      {i < currentStep ? <Check className="w-3.5 h-3.5" /> : i + 1}
                    </div>
                    <span className={`text-xs font-medium hidden sm:inline ${
                      i === currentStep ? 'text-teal-700' : t.mutedColor
                    }`}>
                      {step}
                    </span>
                    {i < STEPS.length - 1 && (
                      <div className={`w-8 h-px ${i < currentStep ? 'bg-teal-400' : 'bg-gray-200'}`} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Step Content */}
            <div className="p-6">
              {currentStep === 0 && (
                <div>
                  <h3 className={`text-lg font-bold ${t.headingColor} mb-4`}>Membership Overview</h3>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl ${getMembershipCheckBg(activeVariant)} flex items-center justify-center`}>
                      <CheckCircle2 className={`w-6 h-6 ${getMembershipCheckColor(activeVariant)}`} />
                    </div>
                    <div>
                      <p className={`text-lg font-bold ${t.headingColor}`}>Active Member</p>
                      <p className={`text-sm ${t.mutedColor}`}>Valid until {validUntilFormatted}</p>
                    </div>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className={t.mutedColor}>Household</span>
                      <span className={`font-medium ${t.headingColor}`}>{memberProfile.address}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className={t.mutedColor}>Annual Dues</span>
                      <span className={`font-medium ${t.headingColor}`}>${memberProfile.membership.amount}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className={t.mutedColor}>Type</span>
                      <span className={`font-medium ${t.headingColor}`}>{memberProfile.membership.type}</span>
                    </div>
                  </div>
                  <button
                    onClick={handleNext}
                    className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold ${t.btnPrimary} transition-all`}
                  >
                    Continue
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {currentStep === 1 && (
                <div>
                  <h3 className={`text-lg font-bold ${t.headingColor} mb-4`}>Choose Action</h3>
                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <button
                      onClick={() => { setPaymentType('dues'); handleNext(); }}
                      className={`p-5 rounded-xl border-2 text-left transition-all hover:shadow-md ${
                        paymentType === 'dues' ? 'border-teal-500 bg-teal-50/50' : 'border-gray-200 hover:border-teal-300'
                      }`}
                    >
                      <CreditCard className="w-8 h-8 text-teal-500 mb-3" />
                      <h4 className={`text-base font-bold ${t.headingColor} mb-1`}>Pay Annual Dues</h4>
                      <p className={`text-sm ${t.mutedColor}`}>$200 per household per year</p>
                    </button>
                    <button
                      onClick={() => { setPaymentType('donate'); handleNext(); }}
                      className={`p-5 rounded-xl border-2 text-left transition-all hover:shadow-md ${
                        paymentType === 'donate' ? 'border-rose-500 bg-rose-50/50' : 'border-gray-200 hover:border-rose-300'
                      }`}
                    >
                      <Heart className="w-8 h-8 text-rose-500 mb-3" />
                      <h4 className={`text-base font-bold ${t.headingColor} mb-1`}>Make a Donation</h4>
                      <p className={`text-sm ${t.mutedColor}`}>Support special projects</p>
                    </button>
                  </div>
                  <button
                    onClick={handleBack}
                    className={`inline-flex items-center gap-2 text-sm font-medium ${t.mutedColor} hover:${t.headingColor}`}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                </div>
              )}

              {currentStep === 2 && (
                <div>
                  <h3 className={`text-lg font-bold ${t.headingColor} mb-4`}>
                    {paymentType === 'dues' ? 'Pay Annual Dues' : 'Make a Donation'}
                  </h3>

                  {paymentType === 'dues' ? (
                    <div>
                      <div className="bg-teal-50 rounded-xl p-5 mb-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className={`font-bold ${t.headingColor}`}>2026 Annual Dues</h4>
                            <p className={`text-sm ${t.mutedColor} mt-1`}>Security, landscaping, events & improvements</p>
                          </div>
                          <p className="text-3xl font-bold text-teal-600">$200</p>
                        </div>
                      </div>
                      <div className="space-y-3 mb-6">
                        <h4 className={`text-sm font-semibold ${t.bodyColor}`}>Your dues support:</h4>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {supportItems.map(({ icon: Icon, label }) => (
                            <div key={label} className={`flex items-center gap-2 text-sm ${t.bodyColor}`}>
                              <Icon className={`w-4 h-4 ${getDuesSupportIcon(activeVariant)} shrink-0`} />
                              {label}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <p className={`text-sm ${t.bodyColor} mb-5`}>
                        Donations help fund special projects like park improvements, holiday events, and enhanced security.
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                        {donationAmounts.map((amount) => (
                          <button
                            key={amount}
                            onClick={() => setSelectedDonation(amount)}
                            className={`py-3 rounded-xl text-sm font-semibold border transition-all ${
                              selectedDonation === amount
                                ? 'bg-teal-50 text-teal-700 border-teal-200'
                                : `${t.bodyColor} border-gray-200 hover:border-teal-200`
                            }`}
                          >
                            ${amount}
                          </button>
                        ))}
                      </div>
                      <div className="mb-6">
                        <label className={`block text-sm font-medium ${t.bodyColor} mb-1.5`}>Custom amount</label>
                        <div className="relative">
                          <span className={`absolute left-3 top-1/2 -translate-y-1/2 ${t.subtleColor} text-sm`}>$</span>
                          <input
                            type="number"
                            value={selectedDonation}
                            onChange={(e) => setSelectedDonation(Number(e.target.value))}
                            className={`w-full pl-7 pr-4 py-2.5 rounded-lg border ${t.inputBg} ${t.inputBorder} ${t.inputText} text-sm focus:outline-none ${t.inputFocus}`}
                            min="1"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-3">
                    <button
                      onClick={handleBack}
                      className={`inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium ${t.btnSecondary}`}
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </button>
                    <button
                      onClick={handleNext}
                      className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold ${t.btnPrimary} transition-all`}
                    >
                      {paymentType === 'dues' ? 'Pay $200' : `Donate $${selectedDonation}`}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="text-center py-8">
                  <div className={`w-16 h-16 rounded-full ${getMembershipCheckBg(activeVariant)} flex items-center justify-center mx-auto mb-4`}>
                    <Check className={`w-8 h-8 ${getMembershipCheckColor(activeVariant)}`} />
                  </div>
                  <h3 className={`text-xl font-bold ${t.headingColor} mb-2`}>Payment Successful!</h3>
                  <p className={`${t.mutedColor} mb-6`}>
                    Thank you for your {paymentType === 'dues' ? 'membership payment' : 'generous donation'}.
                    A receipt has been sent to your email.
                  </p>
                  <button
                    onClick={handleReset}
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold ${t.btnSecondary}`}
                  >
                    Back to Overview
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar: Membership Info */}
        <div className="space-y-6">
          <div className={`${t.cardBg} ${t.cardBorder} ${t.cardRadius} p-5`}>
            <h3 className={`text-sm font-semibold ${t.headingColor} mb-4`}>Your Membership</h3>
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-10 h-10 rounded-xl ${getMembershipCheckBg(activeVariant)} flex items-center justify-center`}>
                <CheckCircle2 className={`w-5 h-5 ${getMembershipCheckColor(activeVariant)}`} />
              </div>
              <div>
                <p className={`text-sm font-bold ${t.headingColor}`}>Active</p>
                <p className={`text-xs ${t.mutedColor}`}>Until {validUntilFormatted}</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className={t.mutedColor}>Household</span>
                <span className={`font-medium ${t.headingColor}`}>{memberProfile.address}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className={t.mutedColor}>Annual Dues</span>
                <span className={`font-medium ${t.headingColor}`}>${memberProfile.membership.amount}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment History */}
      <div className={`${t.cardBg} ${t.cardBorder} ${t.cardRadius} overflow-hidden`}>
        <div className={`px-5 py-4 ${t.panelHeaderBorder}`}>
          <h2 className={`text-base font-semibold ${t.headingColor}`}>Payment History</h2>
        </div>
        <PaymentHistoryTable payments={paymentHistory} />
      </div>
    </div>
  );
}
