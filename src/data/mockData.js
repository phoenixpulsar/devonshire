// ─── Announcements ───
export const announcements = [
  {
    id: 1,
    title: 'Annual Meeting — Saturday, April 12',
    preview:
      'Join us for the annual neighborhood meeting at the community center. We will review 2025 finances, elect new board members, and discuss upcoming improvement projects.',
    category: 'Meeting',
    date: '2026-03-28',
    content:
      'The Devonshire Neighborhood Association Annual Meeting will be held on Saturday, April 12 at the Devonshire Community Center. Doors open at 9:30 AM with the meeting starting promptly at 10:00 AM. Agenda includes financial review, board elections, and a Q&A session. Light refreshments will be served.',
  },
  {
    id: 2,
    title: 'Security Patrol Update — February Report',
    preview:
      'February patrol coverage remained strong with 120+ hours logged. No major incidents reported. Reminder to keep porch lights on and report suspicious activity.',
    category: 'Safety',
    date: '2026-03-05',
    content:
      'Our volunteer security patrol logged 124 hours in February across all quadrants. Zero break-ins reported. Two suspicious vehicle reports were followed up on with DPD. Residents are reminded to keep exterior lights on after dark and to report any unusual activity to the patrol hotline.',
  },
  {
    id: 3,
    title: 'Spring Clean-Up Day — March 22',
    preview:
      'Volunteers needed for our annual spring neighborhood clean-up. Meet at the park entrance at 8 AM. Gloves and bags provided.',
    category: 'Event',
    date: '2026-03-01',
    content:
      'Our annual Spring Clean-Up Day is scheduled for March 22nd. Meet at the Devonshire Park entrance at 8:00 AM. The city will provide dumpsters for large items. Volunteers should wear closed-toe shoes. Gloves, bags, and water will be provided. Sign up at the community board or reply to this announcement.',
  },
  {
    id: 4,
    title: 'New Street Light Installation on Midway Rd',
    preview:
      'The city has approved installation of four new LED street lights along Midway Road between Inwood and Meandering Way.',
    category: 'News',
    date: '2026-02-20',
    content:
      'After our petition last fall, the City of Dallas has approved the installation of four new LED street lights along Midway Road. Work is expected to begin in April and be completed within two weeks. This will significantly improve visibility and safety for pedestrians and drivers.',
  },
  {
    id: 5,
    title: 'Membership Drive — 2026 Dues Now Open',
    preview:
      'Support your neighborhood! Annual dues are $200 per household. Funds go toward security patrol, landscaping, and community events.',
    category: 'News',
    date: '2026-02-15',
    content:
      'It is time to renew your Devonshire Neighborhood Association membership for 2026. Annual dues are $200 per household. Your dues directly fund our security patrol program, common area landscaping, holiday decorations, and community events. Pay online through your member dashboard or mail a check to the association P.O. Box.',
  },
  {
    id: 6,
    title: 'Board Meeting Minutes — January 2026',
    preview:
      'Key decisions from the January board meeting including budget approval, patrol schedule changes, and park maintenance updates.',
    category: 'Meeting',
    date: '2026-02-01',
    content:
      'The January board meeting covered several important topics: 2026 budget was unanimously approved, patrol hours will increase to 140 hours/month starting March, and the park playground equipment replacement project received three bids. Full minutes are available in the member portal.',
  },
];

// ─── Events ───
export const events = [
  {
    id: 1,
    title: 'Annual Neighborhood Meeting',
    date: '2026-04-12',
    time: '10:00 AM',
    location: 'Devonshire Community Center',
    description: 'Annual meeting with board elections, financial review, and community discussion.',
  },
  {
    id: 2,
    title: 'Spring Clean-Up Day',
    date: '2026-03-22',
    time: '8:00 AM',
    location: 'Devonshire Park Entrance',
    description: 'Community volunteer day to beautify our neighborhood. Supplies provided.',
  },
  {
    id: 3,
    title: 'Easter Egg Hunt',
    date: '2026-04-05',
    time: '10:00 AM',
    location: 'Devonshire Park',
    description: 'Annual Easter egg hunt for kids ages 2–12. Bring your own basket!',
  },
  {
    id: 4,
    title: 'National Night Out',
    date: '2026-10-06',
    time: '6:00 PM',
    location: 'Devonshire Park Pavilion',
    description: 'Join neighbors for food, fun, and community building. Meet your local patrol volunteers.',
  },
];

// ─── Member Profile ───
export const memberProfile = {
  firstName: 'Sarah',
  lastName: 'Mitchell',
  email: 'sarah.mitchell@email.com',
  address: '8518 Inwood Rd',
  memberSince: '2021-03-15',
  membership: {
    status: 'Active',
    type: 'Annual',
    validUntil: '2026-12-31',
    amount: 200,
  },
};

// ─── Payment History ───
export const paymentHistory = [
  {
    id: 'pay_001',
    date: '2026-01-15',
    description: 'Annual Dues — 2026',
    amount: 200.0,
    type: 'Dues',
    status: 'Paid',
    receiptUrl: '#',
  },
  {
    id: 'pay_002',
    date: '2025-12-10',
    description: 'Holiday Decoration Donation',
    amount: 50.0,
    type: 'Donation',
    status: 'Paid',
    receiptUrl: '#',
  },
  {
    id: 'pay_003',
    date: '2025-01-20',
    description: 'Annual Dues — 2025',
    amount: 200.0,
    type: 'Dues',
    status: 'Paid',
    receiptUrl: '#',
  },
  {
    id: 'pay_004',
    date: '2024-06-15',
    description: 'Park Improvement Fund',
    amount: 100.0,
    type: 'Donation',
    status: 'Paid',
    receiptUrl: '#',
  },
  {
    id: 'pay_005',
    date: '2024-01-18',
    description: 'Annual Dues — 2024',
    amount: 200.0,
    type: 'Dues',
    status: 'Paid',
    receiptUrl: '#',
  },
  {
    id: 'pay_006',
    date: '2023-01-22',
    description: 'Annual Dues — 2023',
    amount: 175.0,
    type: 'Dues',
    status: 'Paid',
    receiptUrl: '#',
  },
];

// ─── Board Members ───
export const boardMembers = [
  { name: 'Robert Chen', role: 'President', since: '2024' },
  { name: 'Maria Gonzalez', role: 'Vice President', since: '2024' },
  { name: 'David Thompson', role: 'Treasurer', since: '2023' },
  { name: 'Lisa Park', role: 'Secretary', since: '2025' },
  { name: 'James Wilson', role: 'Patrol Coordinator', since: '2022' },
];

// ─── Quick Stats ───
export const communityStats = {
  totalHouseholds: 312,
  activeMembers: 248,
  patrolHoursMonthly: 124,
  eventsThisYear: 8,
};
