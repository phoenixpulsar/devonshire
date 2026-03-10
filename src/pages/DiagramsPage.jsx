export default function DiagramsPage() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Architecture & User Flows</h1>
          <p className="mt-2 text-gray-500">
            Visual diagrams showing the component architecture and user flow for the Devonshire prototype.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        {/* Component Architecture Diagram */}
        <section className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-50">
            <h2 className="text-lg font-semibold text-gray-900">Component Architecture</h2>
            <p className="text-sm text-gray-500 mt-1">How the UI components are organized and composed</p>
          </div>
          <div className="p-6 overflow-x-auto">
            <div className="min-w-[700px]">
              <ComponentArchitectureDiagram />
            </div>
          </div>
        </section>

        {/* User Flow Diagram */}
        <section className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-50">
            <h2 className="text-lg font-semibold text-gray-900">User Flow</h2>
            <p className="text-sm text-gray-500 mt-1">Primary user journeys through the application</p>
          </div>
          <div className="p-6 overflow-x-auto">
            <div className="min-w-[700px]">
              <UserFlowDiagram />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

/* ─── Component Architecture Diagram ─── */
function ComponentArchitectureDiagram() {
  return (
    <svg viewBox="0 0 900 620" className="w-full" style={{ maxHeight: '620px' }}>
      <defs>
        <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#9ca3af" />
        </marker>
        <filter id="shadow" x="-4%" y="-4%" width="108%" height="112%">
          <feDropShadow dx="0" dy="1" stdDeviation="2" floodOpacity="0.08" />
        </filter>
      </defs>

      {/* Title */}
      <text x="450" y="30" textAnchor="middle" className="text-sm" fill="#374151" fontWeight="700" fontSize="16">
        Component Architecture
      </text>

      {/* App Shell */}
      <rect x="30" y="50" width="840" height="550" rx="12" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1.5" />
      <text x="60" y="75" fill="#6b7280" fontSize="11" fontWeight="600">APP SHELL (App.jsx)</text>

      {/* Navbar */}
      <rect x="60" y="90" width="780" height="45" rx="8" fill="#ffffff" stroke="#d1d5db" strokeWidth="1" filter="url(#shadow)" />
      <text x="450" y="118" textAnchor="middle" fill="#059669" fontSize="13" fontWeight="600">Navbar</text>

      {/* Router */}
      <rect x="60" y="155" width="780" height="35" rx="8" fill="#ecfdf5" stroke="#a7f3d0" strokeWidth="1" />
      <text x="450" y="177" textAnchor="middle" fill="#047857" fontSize="12" fontWeight="600">React Router (BrowserRouter + Routes)</text>

      {/* Pages Row */}
      {/* HomePage */}
      <rect x="60" y="210" width="185" height="340" rx="8" fill="#ffffff" stroke="#d1d5db" strokeWidth="1" filter="url(#shadow)" />
      <rect x="60" y="210" width="185" height="32" rx="8" fill="#059669" />
      <rect x="60" y="230" width="185" height="12" fill="#059669" />
      <text x="152" y="232" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="600">HomePage</text>
      <text x="80" y="262" fill="#6b7280" fontSize="10">Hero Section</text>
      <rect x="75" y="270" width="155" height="28" rx="5" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1" />
      <text x="152" y="289" textAnchor="middle" fill="#047857" fontSize="10">StatCard ×4</text>
      <rect x="75" y="305" width="155" height="28" rx="5" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1" />
      <text x="152" y="324" textAnchor="middle" fill="#1d4ed8" fontSize="10">AnnouncementCard ×3</text>
      <rect x="75" y="340" width="155" height="28" rx="5" fill="#fefce8" stroke="#fef08a" strokeWidth="1" />
      <text x="152" y="359" textAnchor="middle" fill="#a16207" fontSize="10">EventCard ×3</text>
      <text x="80" y="385" fill="#6b7280" fontSize="10">Get Involved Section</text>
      <text x="80" y="400" fill="#6b7280" fontSize="10">CTA Section</text>

      {/* DashboardPage */}
      <rect x="260" y="210" width="185" height="340" rx="8" fill="#ffffff" stroke="#d1d5db" strokeWidth="1" filter="url(#shadow)" />
      <rect x="260" y="210" width="185" height="32" rx="8" fill="#1d4ed8" />
      <rect x="260" y="230" width="185" height="12" fill="#1d4ed8" />
      <text x="352" y="232" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="600">DashboardPage</text>
      <text x="280" y="262" fill="#6b7280" fontSize="10">Welcome Header</text>
      <rect x="275" y="270" width="155" height="28" rx="5" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1" />
      <text x="352" y="289" textAnchor="middle" fill="#047857" fontSize="10">DashboardPanel</text>
      <text x="285" y="308" fill="#9ca3af" fontSize="9">Membership Status</text>
      <rect x="275" y="315" width="155" height="28" rx="5" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1" />
      <text x="352" y="334" textAnchor="middle" fill="#047857" fontSize="10">DashboardPanel</text>
      <text x="285" y="352" fill="#9ca3af" fontSize="9">Quick Actions</text>
      <rect x="275" y="360" width="155" height="28" rx="5" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1" />
      <text x="352" y="379" textAnchor="middle" fill="#1d4ed8" fontSize="10">AnnouncementCard ×3</text>
      <rect x="275" y="395" width="155" height="28" rx="5" fill="#faf5ff" stroke="#e9d5ff" strokeWidth="1" />
      <text x="352" y="414" textAnchor="middle" fill="#7e22ce" fontSize="10">PaymentHistoryTable</text>

      {/* MembershipPage */}
      <rect x="460" y="210" width="185" height="340" rx="8" fill="#ffffff" stroke="#d1d5db" strokeWidth="1" filter="url(#shadow)" />
      <rect x="460" y="210" width="185" height="32" rx="8" fill="#7e22ce" />
      <rect x="460" y="230" width="185" height="12" fill="#7e22ce" />
      <text x="552" y="232" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="600">MembershipPage</text>
      <rect x="475" y="260" width="155" height="28" rx="5" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1" />
      <text x="552" y="279" textAnchor="middle" fill="#047857" fontSize="10">DashboardPanel</text>
      <text x="485" y="297" fill="#9ca3af" fontSize="9">Membership Status</text>
      <text x="480" y="318" fill="#6b7280" fontSize="10">Payment Tabs</text>
      <rect x="475" y="325" width="72" height="22" rx="4" fill="#ecfdf5" stroke="#a7f3d0" strokeWidth="1" />
      <text x="511" y="340" textAnchor="middle" fill="#047857" fontSize="9">Pay Dues</text>
      <rect x="553" y="325" width="77" height="22" rx="4" fill="#faf5ff" stroke="#e9d5ff" strokeWidth="1" />
      <text x="591" y="340" textAnchor="middle" fill="#7e22ce" fontSize="9">Donate</text>
      <text x="480" y="368" fill="#6b7280" fontSize="10">Success State</text>
      <rect x="475" y="380" width="155" height="28" rx="5" fill="#faf5ff" stroke="#e9d5ff" strokeWidth="1" />
      <text x="552" y="399" textAnchor="middle" fill="#7e22ce" fontSize="10">PaymentHistoryTable</text>

      {/* AnnouncementsPage */}
      <rect x="660" y="210" width="175" height="340" rx="8" fill="#ffffff" stroke="#d1d5db" strokeWidth="1" filter="url(#shadow)" />
      <rect x="660" y="210" width="175" height="32" rx="8" fill="#b45309" />
      <rect x="660" y="230" width="175" height="12" fill="#b45309" />
      <text x="747" y="232" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="600">AnnouncementsPage</text>
      <text x="680" y="262" fill="#6b7280" fontSize="10">Search Input</text>
      <rect x="675" y="270" width="145" height="22" rx="4" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
      <text x="747" y="285" textAnchor="middle" fill="#9ca3af" fontSize="9">Search...</text>
      <text x="680" y="310" fill="#6b7280" fontSize="10">Category Filters</text>
      <rect x="675" y="318" width="35" height="18" rx="4" fill="#ecfdf5" stroke="#a7f3d0" strokeWidth="1" />
      <text x="692" y="331" textAnchor="middle" fill="#047857" fontSize="8">All</text>
      <rect x="714" y="318" width="40" height="18" rx="4" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
      <text x="734" y="331" textAnchor="middle" fill="#6b7280" fontSize="8">Event</text>
      <rect x="758" y="318" width="40" height="18" rx="4" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
      <text x="778" y="331" textAnchor="middle" fill="#6b7280" fontSize="8">Safety</text>
      <rect x="675" y="350" width="145" height="28" rx="5" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1" />
      <text x="747" y="369" textAnchor="middle" fill="#1d4ed8" fontSize="10">AnnouncementCard</text>
      <rect x="675" y="385" width="145" height="28" rx="5" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1" />
      <text x="747" y="404" textAnchor="middle" fill="#1d4ed8" fontSize="10">AnnouncementCard</text>
      <rect x="675" y="420" width="145" height="28" rx="5" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1" />
      <text x="747" y="439" textAnchor="middle" fill="#1d4ed8" fontSize="10">AnnouncementCard</text>

      {/* Footer */}
      <rect x="60" y="565" width="780" height="28" rx="8" fill="#1f2937" />
      <text x="450" y="583" textAnchor="middle" fill="#9ca3af" fontSize="11" fontWeight="600">Footer</text>

      {/* Shared Components Legend */}
      <text x="80" y="440" fill="#374151" fontSize="10" fontWeight="600">Shared Components:</text>
      <rect x="80" y="448" width="10" height="10" rx="2" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1" />
      <text x="95" y="457" fill="#6b7280" fontSize="9">AnnouncementCard</text>
      <rect x="80" y="464" width="10" height="10" rx="2" fill="#fefce8" stroke="#fef08a" strokeWidth="1" />
      <text x="95" y="473" fill="#6b7280" fontSize="9">EventCard</text>
      <rect x="80" y="480" width="10" height="10" rx="2" fill="#faf5ff" stroke="#e9d5ff" strokeWidth="1" />
      <text x="95" y="489" fill="#6b7280" fontSize="9">PaymentHistoryTable</text>
      <rect x="80" y="496" width="10" height="10" rx="2" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1" />
      <text x="95" y="505" fill="#6b7280" fontSize="9">DashboardPanel / StatCard</text>
      <rect x="80" y="512" width="10" height="10" rx="2" fill="#fef2f2" stroke="#fecaca" strokeWidth="1" />
      <text x="95" y="521" fill="#6b7280" fontSize="9">CategoryBadge</text>
    </svg>
  );
}

/* ─── User Flow Diagram ─── */
function UserFlowDiagram() {
  return (
    <svg viewBox="0 0 900 520" className="w-full" style={{ maxHeight: '520px' }}>
      <defs>
        <marker id="arrow2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#059669" />
        </marker>
        <marker id="arrow3" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#6b7280" />
        </marker>
      </defs>

      {/* Title */}
      <text x="450" y="30" textAnchor="middle" fill="#374151" fontWeight="700" fontSize="16">
        User Flow Diagram
      </text>

      {/* ── Flow 1: View Updates ── */}
      <text x="60" y="70" fill="#059669" fontWeight="700" fontSize="13">Flow 1: View Neighborhood Updates</text>

      {/* Start */}
      <circle cx="100" cy="110" r="22" fill="#059669" />
      <text x="100" y="115" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">START</text>

      <line x1="122" y1="110" x2="168" y2="110" stroke="#059669" strokeWidth="1.5" markerEnd="url(#arrow2)" />

      {/* Visit Homepage */}
      <rect x="170" y="92" width="130" height="36" rx="8" fill="#ecfdf5" stroke="#a7f3d0" strokeWidth="1.5" />
      <text x="235" y="114" textAnchor="middle" fill="#047857" fontSize="11" fontWeight="600">Visit Homepage</text>

      <line x1="300" y1="110" x2="348" y2="110" stroke="#059669" strokeWidth="1.5" markerEnd="url(#arrow2)" />

      {/* See Announcements */}
      <rect x="350" y="92" width="155" height="36" rx="8" fill="#ecfdf5" stroke="#a7f3d0" strokeWidth="1.5" />
      <text x="427" y="114" textAnchor="middle" fill="#047857" fontSize="11" fontWeight="600">See Announcements</text>

      <line x1="505" y1="110" x2="548" y2="110" stroke="#059669" strokeWidth="1.5" markerEnd="url(#arrow2)" />

      {/* Click Read More */}
      <rect x="550" y="92" width="130" height="36" rx="8" fill="#ecfdf5" stroke="#a7f3d0" strokeWidth="1.5" />
      <text x="615" y="114" textAnchor="middle" fill="#047857" fontSize="11" fontWeight="600">Read Details</text>

      <line x1="680" y1="110" x2="728" y2="110" stroke="#059669" strokeWidth="1.5" markerEnd="url(#arrow2)" />

      {/* Done */}
      <circle cx="750" cy="110" r="22" fill="#059669" />
      <text x="750" y="115" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">DONE</text>

      {/* Optional branch - Filter */}
      <line x1="427" y1="128" x2="427" y2="158" stroke="#6b7280" strokeWidth="1" strokeDasharray="4" markerEnd="url(#arrow3)" />
      <rect x="360" y="160" width="135" height="30" rx="6" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
      <text x="427" y="179" textAnchor="middle" fill="#6b7280" fontSize="10">Filter by Category</text>

      {/* ── Flow 2: Pay Dues ── */}
      <text x="60" y="230" fill="#1d4ed8" fontWeight="700" fontSize="13">Flow 2: Pay Dues (Under 30 Seconds)</text>

      {/* Start */}
      <circle cx="100" cy="270" r="22" fill="#1d4ed8" />
      <text x="100" y="275" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">START</text>

      <line x1="122" y1="270" x2="168" y2="270" stroke="#1d4ed8" strokeWidth="1.5" markerEnd="url(#arrow2)" />

      {/* Click Pay Dues */}
      <rect x="170" y="252" width="130" height="36" rx="8" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1.5" />
      <text x="235" y="274" textAnchor="middle" fill="#1d4ed8" fontSize="11" fontWeight="600">Click "Pay Dues"</text>

      <line x1="300" y1="270" x2="348" y2="270" stroke="#1d4ed8" strokeWidth="1.5" markerEnd="url(#arrow2)" />

      {/* View Amount */}
      <rect x="350" y="252" width="130" height="36" rx="8" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1.5" />
      <text x="415" y="274" textAnchor="middle" fill="#1d4ed8" fontSize="11" fontWeight="600">View Amount</text>

      <line x1="480" y1="270" x2="528" y2="270" stroke="#1d4ed8" strokeWidth="1.5" markerEnd="url(#arrow2)" />

      {/* Confirm Payment */}
      <rect x="530" y="252" width="140" height="36" rx="8" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1.5" />
      <text x="600" y="274" textAnchor="middle" fill="#1d4ed8" fontSize="11" fontWeight="600">Confirm Payment</text>

      <line x1="670" y1="270" x2="718" y2="270" stroke="#1d4ed8" strokeWidth="1.5" markerEnd="url(#arrow2)" />

      {/* Done */}
      <circle cx="740" cy="270" r="22" fill="#1d4ed8" />
      <text x="740" y="275" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">DONE</text>

      {/* Time indicator */}
      <text x="420" y="305" textAnchor="middle" fill="#6b7280" fontSize="10" fontStyle="italic">
        Click → Choose → Pay → Done (under 30 seconds)
      </text>

      {/* ── Flow 3: Check Status ── */}
      <text x="60" y="360" fill="#7e22ce" fontWeight="700" fontSize="13">Flow 3: Check Membership & Payment History</text>

      {/* Start */}
      <circle cx="100" cy="400" r="22" fill="#7e22ce" />
      <text x="100" y="405" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">START</text>

      <line x1="122" y1="400" x2="168" y2="400" stroke="#7e22ce" strokeWidth="1.5" markerEnd="url(#arrow2)" />

      {/* Go to Dashboard */}
      <rect x="170" y="382" width="130" height="36" rx="8" fill="#faf5ff" stroke="#e9d5ff" strokeWidth="1.5" />
      <text x="235" y="404" textAnchor="middle" fill="#7e22ce" fontSize="11" fontWeight="600">Open Dashboard</text>

      <line x1="300" y1="400" x2="348" y2="400" stroke="#7e22ce" strokeWidth="1.5" markerEnd="url(#arrow2)" />

      {/* See Status */}
      <rect x="350" y="382" width="150" height="36" rx="8" fill="#faf5ff" stroke="#e9d5ff" strokeWidth="1.5" />
      <text x="425" y="404" textAnchor="middle" fill="#7e22ce" fontSize="11" fontWeight="600">See Membership</text>

      <line x1="500" y1="400" x2="548" y2="400" stroke="#7e22ce" strokeWidth="1.5" markerEnd="url(#arrow2)" />

      {/* View Payments */}
      <rect x="550" y="382" width="140" height="36" rx="8" fill="#faf5ff" stroke="#e9d5ff" strokeWidth="1.5" />
      <text x="620" y="404" textAnchor="middle" fill="#7e22ce" fontSize="11" fontWeight="600">View Payments</text>

      <line x1="690" y1="400" x2="718" y2="400" stroke="#7e22ce" strokeWidth="1.5" markerEnd="url(#arrow2)" />

      {/* Done */}
      <circle cx="740" cy="400" r="22" fill="#7e22ce" />
      <text x="740" y="405" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">DONE</text>

      {/* Download receipt branch */}
      <line x1="620" y1="418" x2="620" y2="448" stroke="#6b7280" strokeWidth="1" strokeDasharray="4" markerEnd="url(#arrow3)" />
      <rect x="555" y="450" width="130" height="30" rx="6" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
      <text x="620" y="469" textAnchor="middle" fill="#6b7280" fontSize="10">Download Receipt</text>

      {/* Legend */}
      <rect x="60" y="490" width="780" height="25" rx="6" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
      <circle cx="100" cy="502" r="5" fill="#059669" />
      <text x="110" y="506" fill="#6b7280" fontSize="9">Updates Flow</text>
      <circle cx="220" cy="502" r="5" fill="#1d4ed8" />
      <text x="230" y="506" fill="#6b7280" fontSize="9">Payment Flow</text>
      <circle cx="340" cy="502" r="5" fill="#7e22ce" />
      <text x="350" y="506" fill="#6b7280" fontSize="9">Dashboard Flow</text>
      <line x1="470" y1="502" x2="500" y2="502" stroke="#6b7280" strokeWidth="1" strokeDasharray="4" />
      <text x="510" y="506" fill="#6b7280" fontSize="9">Optional Path</text>
    </svg>
  );
}
