// ─── Theme Definitions ───
// Each theme provides className tokens consumed by components.
// Components call useThemeClasses() to get the active token set.

export const themes = {
  // ────────────────────────────────────────────
  // OPTION 1 — Clean & Modern (Default)
  // ────────────────────────────────────────────
  1: {
    name: 'Clean & Modern',
    // Page
    pageBg: 'bg-gray-50',
    pageText: 'text-gray-900',

    // Navbar
    navbarBg: 'bg-white/95 backdrop-blur-sm border-b border-gray-100',
    navbarLogoBg: 'bg-emerald-600',
    navbarLogoText: 'text-gray-900',
    navbarSubtext: 'text-gray-400',
    navbarLink: 'text-gray-600 hover:text-gray-900 hover:bg-gray-50',
    navbarLinkActive: 'text-emerald-700 bg-emerald-50',
    navbarCta: 'text-white bg-emerald-600 hover:bg-emerald-700',
    navbarMobileBg: 'bg-white border-t border-gray-100',
    navbarToggle: 'text-gray-600 hover:bg-gray-100',

    // Footer
    footerBg: 'bg-gray-900',
    footerText: 'text-gray-300',
    footerHeading: 'text-white',
    footerMuted: 'text-gray-400',
    footerLink: 'text-gray-400 hover:text-white',
    footerBorder: 'border-gray-800',
    footerCopy: 'text-gray-500',

    // Cards
    cardBg: 'bg-white',
    cardBorder: 'border border-gray-100',
    cardHover: 'hover:border-gray-200 hover:shadow-md',
    cardRadius: 'rounded-xl',

    // Text
    headingColor: 'text-gray-900',
    bodyColor: 'text-gray-600',
    mutedColor: 'text-gray-500',
    subtleColor: 'text-gray-400',

    // Accent
    accentColor: 'text-emerald-600',
    accentHover: 'hover:text-emerald-700',
    accentBg: 'bg-emerald-50',
    accentBgHover: 'hover:bg-emerald-50',
    accentBorder: 'border-emerald-100',
    accentRing: 'focus:ring-emerald-500',

    // Buttons
    btnPrimary: 'text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm shadow-emerald-200',
    btnSecondary: 'text-gray-700 bg-white hover:bg-gray-50 border border-gray-200',
    btnOutline: 'text-white border border-white/30 hover:bg-white/10',

    // Hero
    heroBg: 'bg-gradient-to-br from-emerald-50 via-white to-teal-50',
    heroOverlay: 'bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-100/40 via-transparent to-transparent',
    heroBadgeBg: 'bg-emerald-100/60 text-emerald-700',
    heroAccentText: 'text-emerald-600',

    // Stats
    statCardBg: 'bg-white border border-gray-100',

    // Sections
    sectionAltBg: 'bg-gray-50/70 border-y border-gray-100',
    ctaBg: 'bg-emerald-600',
    ctaText: 'text-white',
    ctaSubtext: 'text-emerald-100',
    ctaBtnPrimary: 'text-emerald-700 bg-white hover:bg-emerald-50',

    // Dashboard
    dashboardHeaderBg: 'bg-white border-b border-gray-100',

    // Table
    tableBg: 'bg-white',
    tableBorder: 'border border-gray-100',
    tableHeaderBg: '',
    tableHeaderText: 'text-gray-500',
    tableRowHover: 'hover:bg-gray-50/50',
    tableRowBorder: 'divide-y divide-gray-50',
    tableCellText: 'text-gray-600',
    tableCellBold: 'text-gray-900',

    // Inputs
    inputBg: 'bg-white',
    inputBorder: 'border-gray-200',
    inputText: 'text-gray-900',
    inputPlaceholder: 'placeholder:text-gray-400',
    inputFocus: 'focus:ring-2 focus:ring-emerald-500 focus:border-transparent',

    // Badges
    badgeActiveBg: 'bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20',

    // Category filter
    filterActive: 'bg-emerald-50 text-emerald-700',
    filterInactive: 'text-gray-500 hover:text-gray-700 hover:bg-gray-100',

    // Involvement cards
    involveBg: 'bg-white border border-gray-100 hover:shadow-md',

    // Transitions
    transition: 'transition-all duration-200',

    // Panel
    panelBg: 'bg-white',
    panelBorder: 'border border-gray-100',
    panelHeaderBorder: 'border-b border-gray-50',
  },

  // ────────────────────────────────────────────
  // OPTION 2 — Dark Mode
  // ────────────────────────────────────────────
  2: {
    name: 'Dark Mode',
    pageBg: 'bg-gray-950',
    pageText: 'text-gray-100',

    navbarBg: 'bg-gray-900/95 backdrop-blur-sm border-b border-gray-800',
    navbarLogoBg: 'bg-emerald-500',
    navbarLogoText: 'text-white',
    navbarSubtext: 'text-gray-500',
    navbarLink: 'text-gray-400 hover:text-white hover:bg-gray-800',
    navbarLinkActive: 'text-emerald-400 bg-emerald-500/10',
    navbarCta: 'text-white bg-emerald-500 hover:bg-emerald-600',
    navbarMobileBg: 'bg-gray-900 border-t border-gray-800',
    navbarToggle: 'text-gray-400 hover:bg-gray-800',

    footerBg: 'bg-black',
    footerText: 'text-gray-400',
    footerHeading: 'text-gray-200',
    footerMuted: 'text-gray-500',
    footerLink: 'text-gray-500 hover:text-gray-200',
    footerBorder: 'border-gray-800',
    footerCopy: 'text-gray-600',

    cardBg: 'bg-gray-900',
    cardBorder: 'border border-gray-800',
    cardHover: 'hover:border-gray-700 hover:shadow-lg hover:shadow-black/20',
    cardRadius: 'rounded-xl',

    headingColor: 'text-white',
    bodyColor: 'text-gray-300',
    mutedColor: 'text-gray-400',
    subtleColor: 'text-gray-500',

    accentColor: 'text-emerald-400',
    accentHover: 'hover:text-emerald-300',
    accentBg: 'bg-emerald-500/10',
    accentBgHover: 'hover:bg-emerald-500/10',
    accentBorder: 'border-emerald-500/20',
    accentRing: 'focus:ring-emerald-500',

    btnPrimary: 'text-white bg-emerald-500 hover:bg-emerald-600 shadow-sm shadow-emerald-900/30',
    btnSecondary: 'text-gray-300 bg-gray-800 hover:bg-gray-700 border border-gray-700',
    btnOutline: 'text-white border border-white/20 hover:bg-white/5',

    heroBg: 'bg-gradient-to-br from-gray-900 via-gray-950 to-emerald-950/30',
    heroOverlay: 'bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent',
    heroBadgeBg: 'bg-emerald-500/10 text-emerald-400',
    heroAccentText: 'text-emerald-400',

    statCardBg: 'bg-gray-900 border border-gray-800',

    sectionAltBg: 'bg-gray-900/50 border-y border-gray-800',
    ctaBg: 'bg-emerald-900/50',
    ctaText: 'text-white',
    ctaSubtext: 'text-emerald-300/70',
    ctaBtnPrimary: 'text-emerald-400 bg-white/10 hover:bg-white/15 backdrop-blur-sm',

    dashboardHeaderBg: 'bg-gray-900 border-b border-gray-800',

    tableBg: 'bg-gray-900',
    tableBorder: 'border border-gray-800',
    tableHeaderBg: '',
    tableHeaderText: 'text-gray-500',
    tableRowHover: 'hover:bg-gray-800/50',
    tableRowBorder: 'divide-y divide-gray-800',
    tableCellText: 'text-gray-400',
    tableCellBold: 'text-gray-200',

    inputBg: 'bg-gray-800',
    inputBorder: 'border-gray-700',
    inputText: 'text-gray-100',
    inputPlaceholder: 'placeholder:text-gray-500',
    inputFocus: 'focus:ring-2 focus:ring-emerald-500 focus:border-transparent',

    badgeActiveBg: 'bg-emerald-500/10 text-emerald-400 ring-1 ring-inset ring-emerald-500/20',

    filterActive: 'bg-emerald-500/10 text-emerald-400',
    filterInactive: 'text-gray-500 hover:text-gray-300 hover:bg-gray-800',

    involveBg: 'bg-gray-900 border border-gray-800 hover:shadow-lg hover:shadow-black/20',

    transition: 'transition-all duration-200',

    panelBg: 'bg-gray-900',
    panelBorder: 'border border-gray-800',
    panelHeaderBorder: 'border-b border-gray-800',
  },

  // ────────────────────────────────────────────
  // OPTION 3 — Fresh Alternative
  // ────────────────────────────────────────────
  3: {
    name: 'Fresh Alternative',
    pageBg: 'bg-slate-50',
    pageText: 'text-slate-900',

    navbarBg: 'bg-white/90 backdrop-blur-md border-b border-slate-200/60',
    navbarLogoBg: 'bg-indigo-600',
    navbarLogoText: 'text-slate-900',
    navbarSubtext: 'text-slate-400',
    navbarLink: 'text-slate-500 hover:text-indigo-600 hover:bg-indigo-50',
    navbarLinkActive: 'text-indigo-600 bg-indigo-50',
    navbarCta: 'text-white bg-indigo-600 hover:bg-indigo-700',
    navbarMobileBg: 'bg-white border-t border-slate-200',
    navbarToggle: 'text-slate-500 hover:bg-slate-100',

    footerBg: 'bg-slate-900',
    footerText: 'text-slate-300',
    footerHeading: 'text-white',
    footerMuted: 'text-slate-400',
    footerLink: 'text-slate-400 hover:text-white',
    footerBorder: 'border-slate-800',
    footerCopy: 'text-slate-500',

    cardBg: 'bg-white',
    cardBorder: 'border-0 shadow-sm shadow-slate-200/50',
    cardHover: 'hover:shadow-lg hover:shadow-slate-200/60 hover:-translate-y-0.5',
    cardRadius: 'rounded-2xl',

    headingColor: 'text-slate-900',
    bodyColor: 'text-slate-600',
    mutedColor: 'text-slate-500',
    subtleColor: 'text-slate-400',

    accentColor: 'text-indigo-600',
    accentHover: 'hover:text-indigo-700',
    accentBg: 'bg-indigo-50',
    accentBgHover: 'hover:bg-indigo-50',
    accentBorder: 'border-indigo-100',
    accentRing: 'focus:ring-indigo-500',

    btnPrimary: 'text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-200/50',
    btnSecondary: 'text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm',
    btnOutline: 'text-white border border-white/30 hover:bg-white/10',

    heroBg: 'bg-gradient-to-br from-indigo-50 via-white to-sky-50',
    heroOverlay: 'bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-100/30 via-transparent to-transparent',
    heroBadgeBg: 'bg-indigo-100/60 text-indigo-700',
    heroAccentText: 'text-indigo-600',

    statCardBg: 'bg-white shadow-sm shadow-slate-200/50',

    sectionAltBg: 'bg-gradient-to-b from-slate-100/50 to-slate-50 border-y border-slate-100',
    ctaBg: 'bg-gradient-to-r from-indigo-600 to-indigo-700',
    ctaText: 'text-white',
    ctaSubtext: 'text-indigo-200',
    ctaBtnPrimary: 'text-indigo-700 bg-white hover:bg-indigo-50 shadow-md',

    dashboardHeaderBg: 'bg-white border-b border-slate-200/60',

    tableBg: 'bg-white',
    tableBorder: 'shadow-sm shadow-slate-200/50',
    tableHeaderBg: 'bg-slate-50/50',
    tableHeaderText: 'text-slate-500',
    tableRowHover: 'hover:bg-indigo-50/30',
    tableRowBorder: 'divide-y divide-slate-100',
    tableCellText: 'text-slate-600',
    tableCellBold: 'text-slate-900',

    inputBg: 'bg-white',
    inputBorder: 'border-slate-200',
    inputText: 'text-slate-900',
    inputPlaceholder: 'placeholder:text-slate-400',
    inputFocus: 'focus:ring-2 focus:ring-indigo-500 focus:border-transparent',

    badgeActiveBg: 'bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/20',

    filterActive: 'bg-indigo-50 text-indigo-600',
    filterInactive: 'text-slate-500 hover:text-slate-700 hover:bg-slate-100',

    involveBg: 'bg-white shadow-sm shadow-slate-200/50 hover:shadow-lg hover:-translate-y-0.5',

    transition: 'transition-all duration-300',

    panelBg: 'bg-white',
    panelBorder: 'shadow-sm shadow-slate-200/50',
    panelHeaderBorder: 'border-b border-slate-100',
  },

  // ────────────────────────────────────────────
  // OPTION 4 — Bold Premium
  // ────────────────────────────────────────────
  4: {
    name: 'Bold Premium',
    pageBg: 'bg-stone-50',
    pageText: 'text-stone-900',

    navbarBg: 'bg-stone-900/95 backdrop-blur-md border-b border-stone-800',
    navbarLogoBg: 'bg-gradient-to-br from-amber-400 to-amber-600',
    navbarLogoText: 'text-white',
    navbarSubtext: 'text-stone-400',
    navbarLink: 'text-stone-300 hover:text-amber-400 hover:bg-stone-800',
    navbarLinkActive: 'text-amber-400 bg-amber-500/10',
    navbarCta: 'text-stone-900 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600',
    navbarMobileBg: 'bg-stone-900 border-t border-stone-800',
    navbarToggle: 'text-stone-300 hover:bg-stone-800',

    footerBg: 'bg-stone-950',
    footerText: 'text-stone-400',
    footerHeading: 'text-amber-400',
    footerMuted: 'text-stone-500',
    footerLink: 'text-stone-500 hover:text-amber-400',
    footerBorder: 'border-stone-800',
    footerCopy: 'text-stone-600',

    cardBg: 'bg-white',
    cardBorder: 'border border-stone-200/80',
    cardHover: 'hover:shadow-xl hover:shadow-stone-200/40 hover:-translate-y-0.5',
    cardRadius: 'rounded-2xl',

    headingColor: 'text-stone-900',
    bodyColor: 'text-stone-600',
    mutedColor: 'text-stone-500',
    subtleColor: 'text-stone-400',

    accentColor: 'text-amber-600',
    accentHover: 'hover:text-amber-700',
    accentBg: 'bg-amber-50',
    accentBgHover: 'hover:bg-amber-50',
    accentBorder: 'border-amber-200',
    accentRing: 'focus:ring-amber-500',

    btnPrimary: 'text-stone-900 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 shadow-lg shadow-amber-200/50 font-bold',
    btnSecondary: 'text-stone-700 bg-white hover:bg-stone-50 border-2 border-stone-200 font-bold',
    btnOutline: 'text-white border-2 border-white/30 hover:bg-white/10 font-bold',

    heroBg: 'bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900/40',
    heroOverlay: 'bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent',
    heroBadgeBg: 'bg-amber-500/15 text-amber-400',
    heroAccentText: 'text-amber-400',

    statCardBg: 'bg-white border border-stone-200/80 shadow-sm',

    sectionAltBg: 'bg-stone-100/50 border-y border-stone-200/60',
    ctaBg: 'bg-gradient-to-r from-stone-900 via-stone-800 to-amber-900/60',
    ctaText: 'text-white',
    ctaSubtext: 'text-stone-300',
    ctaBtnPrimary: 'text-stone-900 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 shadow-lg font-bold',

    dashboardHeaderBg: 'bg-white border-b border-stone-200',

    tableBg: 'bg-white',
    tableBorder: 'border border-stone-200/80',
    tableHeaderBg: 'bg-stone-50',
    tableHeaderText: 'text-stone-500',
    tableRowHover: 'hover:bg-amber-50/30',
    tableRowBorder: 'divide-y divide-stone-100',
    tableCellText: 'text-stone-600',
    tableCellBold: 'text-stone-900',

    inputBg: 'bg-white',
    inputBorder: 'border-stone-300',
    inputText: 'text-stone-900',
    inputPlaceholder: 'placeholder:text-stone-400',
    inputFocus: 'focus:ring-2 focus:ring-amber-500 focus:border-transparent',

    badgeActiveBg: 'bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/20',

    filterActive: 'bg-amber-50 text-amber-700',
    filterInactive: 'text-stone-500 hover:text-stone-700 hover:bg-stone-100',

    involveBg: 'bg-white border border-stone-200/80 hover:shadow-xl hover:shadow-stone-200/40 hover:-translate-y-0.5',

    transition: 'transition-all duration-300',

    panelBg: 'bg-white',
    panelBorder: 'border border-stone-200/80',
    panelHeaderBorder: 'border-b border-stone-100',
  },

  // ────────────────────────────────────────────
  // OPTION 5 — Artistic Vision
  // ────────────────────────────────────────────
  5: {
    name: 'Artistic Vision',
    pageBg: 'bg-gradient-to-b from-violet-950 via-slate-950 to-slate-900',
    pageText: 'text-white',

    navbarBg: 'bg-white/5 backdrop-blur-xl border-b border-white/10',
    navbarLogoBg: 'bg-gradient-to-br from-violet-500 to-fuchsia-500',
    navbarLogoText: 'text-white',
    navbarSubtext: 'text-violet-300/60',
    navbarLink: 'text-violet-200/70 hover:text-white hover:bg-white/5',
    navbarLinkActive: 'text-white bg-white/10',
    navbarCta: 'text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600',
    navbarMobileBg: 'bg-slate-900/95 backdrop-blur-xl border-t border-white/10',
    navbarToggle: 'text-violet-200 hover:bg-white/5',

    footerBg: 'bg-black/50',
    footerText: 'text-violet-200/60',
    footerHeading: 'text-white',
    footerMuted: 'text-violet-300/40',
    footerLink: 'text-violet-300/40 hover:text-violet-200',
    footerBorder: 'border-white/5',
    footerCopy: 'text-violet-300/30',

    cardBg: 'bg-white/5 backdrop-blur-sm',
    cardBorder: 'border border-white/10',
    cardHover: 'hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-violet-500/5',
    cardRadius: 'rounded-2xl',

    headingColor: 'text-white',
    bodyColor: 'text-violet-100/80',
    mutedColor: 'text-violet-200/60',
    subtleColor: 'text-violet-300/40',

    accentColor: 'text-violet-400',
    accentHover: 'hover:text-violet-300',
    accentBg: 'bg-violet-500/10',
    accentBgHover: 'hover:bg-violet-500/10',
    accentBorder: 'border-violet-500/20',
    accentRing: 'focus:ring-violet-500',

    btnPrimary: 'text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 shadow-lg shadow-violet-500/25',
    btnSecondary: 'text-violet-100 bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-sm',
    btnOutline: 'text-white border border-white/20 hover:bg-white/5 backdrop-blur-sm',

    heroBg: 'bg-gradient-to-br from-violet-950 via-fuchsia-950/50 to-slate-950',
    heroOverlay: 'bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-500/15 via-fuchsia-500/5 to-transparent',
    heroBadgeBg: 'bg-violet-500/15 text-violet-300 backdrop-blur-sm border border-violet-500/20',
    heroAccentText: 'text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400',

    statCardBg: 'bg-white/5 backdrop-blur-sm border border-white/10',

    sectionAltBg: 'bg-white/[0.02] border-y border-white/5',
    ctaBg: 'bg-gradient-to-r from-violet-600/30 to-fuchsia-600/30 backdrop-blur-sm',
    ctaText: 'text-white',
    ctaSubtext: 'text-violet-200/70',
    ctaBtnPrimary: 'text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 shadow-lg shadow-violet-500/25',

    dashboardHeaderBg: 'bg-white/5 backdrop-blur-sm border-b border-white/10',

    tableBg: 'bg-white/5 backdrop-blur-sm',
    tableBorder: 'border border-white/10',
    tableHeaderBg: 'bg-white/5',
    tableHeaderText: 'text-violet-300/60',
    tableRowHover: 'hover:bg-white/5',
    tableRowBorder: 'divide-y divide-white/5',
    tableCellText: 'text-violet-200/70',
    tableCellBold: 'text-white',

    inputBg: 'bg-white/5 backdrop-blur-sm',
    inputBorder: 'border-white/10',
    inputText: 'text-white',
    inputPlaceholder: 'placeholder:text-violet-300/40',
    inputFocus: 'focus:ring-2 focus:ring-violet-500 focus:border-transparent',

    badgeActiveBg: 'bg-emerald-500/15 text-emerald-400 ring-1 ring-inset ring-emerald-500/20',

    filterActive: 'bg-violet-500/15 text-violet-300',
    filterInactive: 'text-violet-300/50 hover:text-violet-200 hover:bg-white/5',

    involveBg: 'bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20',

    transition: 'transition-all duration-300',

    panelBg: 'bg-white/5 backdrop-blur-sm',
    panelBorder: 'border border-white/10',
    panelHeaderBorder: 'border-b border-white/10',
  },

  // ────────────────────────────────────────────
  // OPTION 6 — Command Center
  // ────────────────────────────────────────────
  6: {
    name: 'Command Center',
    pageBg: 'bg-gray-100',
    pageText: 'text-gray-900',

    navbarBg: 'bg-slate-900 border-b border-slate-800',
    navbarLogoBg: 'bg-teal-500',
    navbarLogoText: 'text-white',
    navbarSubtext: 'text-slate-500',
    navbarLink: 'text-slate-400 hover:text-white hover:bg-slate-800',
    navbarLinkActive: 'text-teal-400 bg-teal-500/10',
    navbarCta: 'text-white bg-teal-500 hover:bg-teal-600',
    navbarMobileBg: 'bg-slate-900 border-t border-slate-800',
    navbarToggle: 'text-slate-300 hover:bg-slate-800',

    footerBg: 'bg-slate-900',
    footerText: 'text-slate-400',
    footerHeading: 'text-white',
    footerMuted: 'text-slate-500',
    footerLink: 'text-slate-500 hover:text-teal-400',
    footerBorder: 'border-slate-800',
    footerCopy: 'text-slate-600',

    cardBg: 'bg-white',
    cardBorder: 'border border-gray-200/60',
    cardHover: 'hover:shadow-md hover:border-teal-200/50',
    cardRadius: 'rounded-xl',

    headingColor: 'text-gray-900',
    bodyColor: 'text-gray-600',
    mutedColor: 'text-gray-500',
    subtleColor: 'text-gray-400',

    accentColor: 'text-teal-600',
    accentHover: 'hover:text-teal-700',
    accentBg: 'bg-teal-50',
    accentBgHover: 'hover:bg-teal-50',
    accentBorder: 'border-teal-200',
    accentRing: 'focus:ring-teal-500',

    btnPrimary: 'text-white bg-teal-600 hover:bg-teal-700 shadow-sm',
    btnSecondary: 'text-gray-700 bg-white hover:bg-gray-50 border border-gray-200',
    btnOutline: 'text-teal-600 border border-teal-200 hover:bg-teal-50',

    heroBg: 'bg-gray-100',
    heroOverlay: '',
    heroBadgeBg: 'bg-teal-100 text-teal-700',
    heroAccentText: 'text-teal-600',

    statCardBg: 'bg-white border border-gray-200/60',

    sectionAltBg: 'bg-gray-50 border-y border-gray-200/60',
    ctaBg: 'bg-teal-600',
    ctaText: 'text-white',
    ctaSubtext: 'text-teal-100',
    ctaBtnPrimary: 'text-teal-700 bg-white hover:bg-teal-50',

    dashboardHeaderBg: 'bg-white border-b border-gray-200/60',

    tableBg: 'bg-white',
    tableBorder: 'border border-gray-200/60',
    tableHeaderBg: 'bg-gray-50',
    tableHeaderText: 'text-gray-500',
    tableRowHover: 'hover:bg-teal-50/30',
    tableRowBorder: 'divide-y divide-gray-100',
    tableCellText: 'text-gray-600',
    tableCellBold: 'text-gray-900',

    inputBg: 'bg-white',
    inputBorder: 'border-gray-200',
    inputText: 'text-gray-900',
    inputPlaceholder: 'placeholder:text-gray-400',
    inputFocus: 'focus:ring-2 focus:ring-teal-500 focus:border-transparent',

    badgeActiveBg: 'bg-teal-50 text-teal-700 ring-1 ring-inset ring-teal-600/20',

    filterActive: 'bg-teal-50 text-teal-700',
    filterInactive: 'text-gray-500 hover:text-gray-700 hover:bg-gray-100',

    involveBg: 'bg-white border border-gray-200/60 hover:shadow-md hover:border-teal-200/50',

    transition: 'transition-all duration-200',

    panelBg: 'bg-white',
    panelBorder: 'border border-gray-200/60',
    panelHeaderBorder: 'border-b border-gray-100',
  },

  // ────────────────────────────────────────────
  // OPTION 7 — Community Feed
  // ────────────────────────────────────────────
  7: {
    name: 'Community Feed',
    pageBg: 'bg-orange-50/30',
    pageText: 'text-gray-900',

    navbarBg: 'bg-white/80 backdrop-blur-lg border-b border-rose-100/50',
    navbarLogoBg: 'bg-gradient-to-br from-rose-500 to-pink-500',
    navbarLogoText: 'text-gray-900',
    navbarSubtext: 'text-rose-300',
    navbarLink: 'text-gray-500 hover:text-rose-600 hover:bg-rose-50',
    navbarLinkActive: 'text-rose-600 bg-rose-50',
    navbarCta: 'text-white bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600',
    navbarMobileBg: 'bg-white border-t border-rose-100',
    navbarToggle: 'text-gray-500 hover:bg-rose-50',

    footerBg: 'bg-gray-900',
    footerText: 'text-gray-400',
    footerHeading: 'text-rose-300',
    footerMuted: 'text-gray-500',
    footerLink: 'text-gray-500 hover:text-rose-300',
    footerBorder: 'border-gray-800',
    footerCopy: 'text-gray-600',

    cardBg: 'bg-white',
    cardBorder: 'border border-rose-100/50 shadow-sm shadow-rose-100/30',
    cardHover: 'hover:shadow-lg hover:shadow-rose-200/30 hover:-translate-y-0.5',
    cardRadius: 'rounded-2xl',

    headingColor: 'text-gray-900',
    bodyColor: 'text-gray-600',
    mutedColor: 'text-gray-500',
    subtleColor: 'text-gray-400',

    accentColor: 'text-rose-500',
    accentHover: 'hover:text-rose-600',
    accentBg: 'bg-rose-50',
    accentBgHover: 'hover:bg-rose-50',
    accentBorder: 'border-rose-200',
    accentRing: 'focus:ring-rose-500',

    btnPrimary: 'text-white bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 shadow-md shadow-rose-200/50',
    btnSecondary: 'text-gray-700 bg-white hover:bg-rose-50 border border-rose-200 shadow-sm',
    btnOutline: 'text-rose-500 border border-rose-200 hover:bg-rose-50',

    heroBg: 'bg-gradient-to-br from-rose-50 via-white to-pink-50',
    heroOverlay: 'bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-100/30 via-transparent to-transparent',
    heroBadgeBg: 'bg-rose-100/60 text-rose-600',
    heroAccentText: 'text-rose-500',

    statCardBg: 'bg-white border border-rose-100/50 shadow-sm shadow-rose-100/30',

    sectionAltBg: 'bg-rose-50/30 border-y border-rose-100/40',
    ctaBg: 'bg-gradient-to-r from-rose-500 to-pink-500',
    ctaText: 'text-white',
    ctaSubtext: 'text-rose-100',
    ctaBtnPrimary: 'text-rose-600 bg-white hover:bg-rose-50 shadow-md',

    dashboardHeaderBg: 'bg-white/80 backdrop-blur-sm border-b border-rose-100/50',

    tableBg: 'bg-white',
    tableBorder: 'border border-rose-100/50 shadow-sm',
    tableHeaderBg: 'bg-rose-50/30',
    tableHeaderText: 'text-gray-500',
    tableRowHover: 'hover:bg-rose-50/30',
    tableRowBorder: 'divide-y divide-rose-100/50',
    tableCellText: 'text-gray-600',
    tableCellBold: 'text-gray-900',

    inputBg: 'bg-white',
    inputBorder: 'border-rose-200',
    inputText: 'text-gray-900',
    inputPlaceholder: 'placeholder:text-rose-300',
    inputFocus: 'focus:ring-2 focus:ring-rose-500 focus:border-transparent',

    badgeActiveBg: 'bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/20',

    filterActive: 'bg-rose-100 text-rose-700',
    filterInactive: 'text-gray-500 hover:text-gray-700 hover:bg-rose-50',

    involveBg: 'bg-white border border-rose-100/50 shadow-sm hover:shadow-lg hover:-translate-y-0.5',

    transition: 'transition-all duration-300',

    panelBg: 'bg-white',
    panelBorder: 'border border-rose-100/50 shadow-sm',
    panelHeaderBorder: 'border-b border-rose-100/50',
  },
};

/**
 * Helper: get icon background colors for stat cards per theme
 */
export function getStatIconStyles(variant, color) {
  if (variant === 2) {
    const map = {
      emerald: 'bg-emerald-500/10 text-emerald-400',
      blue: 'bg-blue-500/10 text-blue-400',
      amber: 'bg-amber-500/10 text-amber-400',
      purple: 'bg-purple-500/10 text-purple-400',
    };
    return map[color] || map.emerald;
  }
  if (variant === 4) {
    const map = {
      emerald: 'bg-emerald-50 text-emerald-600',
      blue: 'bg-blue-50 text-blue-600',
      amber: 'bg-amber-50 text-amber-600',
      purple: 'bg-purple-50 text-purple-600',
    };
    return map[color] || map.emerald;
  }
  if (variant === 5) {
    const map = {
      emerald: 'bg-emerald-500/10 text-emerald-400',
      blue: 'bg-blue-500/10 text-blue-400',
      amber: 'bg-amber-500/10 text-amber-400',
      purple: 'bg-purple-500/10 text-purple-400',
    };
    return map[color] || map.emerald;
  }
  if (variant === 3) {
    const map = {
      emerald: 'bg-emerald-50 text-emerald-600',
      blue: 'bg-indigo-50 text-indigo-600',
      amber: 'bg-amber-50 text-amber-600',
      purple: 'bg-purple-50 text-purple-600',
    };
    return map[color] || map.emerald;
  }
  if (variant === 6) {
    const map = {
      emerald: 'bg-teal-50 text-teal-600',
      blue: 'bg-blue-50 text-blue-600',
      amber: 'bg-amber-50 text-amber-600',
      purple: 'bg-purple-50 text-purple-600',
    };
    return map[color] || map.emerald;
  }
  if (variant === 7) {
    const map = {
      emerald: 'bg-rose-50 text-rose-600',
      blue: 'bg-blue-50 text-blue-600',
      amber: 'bg-amber-50 text-amber-600',
      purple: 'bg-purple-50 text-purple-600',
    };
    return map[color] || map.emerald;
  }
  // Default (variant 1)
  const map = {
    emerald: 'bg-emerald-50 text-emerald-600',
    blue: 'bg-blue-50 text-blue-600',
    amber: 'bg-amber-50 text-amber-600',
    purple: 'bg-purple-50 text-purple-600',
  };
  return map[color] || map.emerald;
}

/**
 * Helper: get category badge styles per theme
 */
export function getCategoryStyles(variant, category) {
  if (variant === 2) {
    const map = {
      Event: 'bg-blue-500/10 text-blue-400 ring-blue-500/20',
      Safety: 'bg-amber-500/10 text-amber-400 ring-amber-500/20',
      News: 'bg-purple-500/10 text-purple-400 ring-purple-500/20',
      Meeting: 'bg-rose-500/10 text-rose-400 ring-rose-500/20',
    };
    return map[category] || 'bg-gray-500/10 text-gray-400 ring-gray-500/20';
  }
  if (variant === 5) {
    const map = {
      Event: 'bg-blue-500/15 text-blue-300 ring-blue-400/20',
      Safety: 'bg-amber-500/15 text-amber-300 ring-amber-400/20',
      News: 'bg-purple-500/15 text-purple-300 ring-purple-400/20',
      Meeting: 'bg-rose-500/15 text-rose-300 ring-rose-400/20',
    };
    return map[category] || 'bg-white/10 text-white/60 ring-white/20';
  }
  if (variant === 3) {
    const map = {
      Event: 'bg-blue-50 text-blue-700 ring-blue-600/20',
      Safety: 'bg-amber-50 text-amber-700 ring-amber-600/20',
      News: 'bg-indigo-50 text-indigo-700 ring-indigo-600/20',
      Meeting: 'bg-rose-50 text-rose-700 ring-rose-600/20',
    };
    return map[category] || 'bg-slate-50 text-slate-700 ring-slate-600/20';
  }
  if (variant === 4) {
    const map = {
      Event: 'bg-blue-50 text-blue-700 ring-blue-600/20',
      Safety: 'bg-amber-50 text-amber-700 ring-amber-600/20',
      News: 'bg-purple-50 text-purple-700 ring-purple-600/20',
      Meeting: 'bg-rose-50 text-rose-700 ring-rose-600/20',
    };
    return map[category] || 'bg-stone-50 text-stone-700 ring-stone-600/20';
  }
  if (variant === 6) {
    const map = {
      Event: 'bg-blue-50 text-blue-700 ring-blue-600/20',
      Safety: 'bg-amber-50 text-amber-700 ring-amber-600/20',
      News: 'bg-teal-50 text-teal-700 ring-teal-600/20',
      Meeting: 'bg-rose-50 text-rose-700 ring-rose-600/20',
    };
    return map[category] || 'bg-gray-50 text-gray-700 ring-gray-600/20';
  }
  if (variant === 7) {
    const map = {
      Event: 'bg-blue-50 text-blue-700 ring-blue-600/20',
      Safety: 'bg-amber-50 text-amber-700 ring-amber-600/20',
      News: 'bg-rose-50 text-rose-700 ring-rose-600/20',
      Meeting: 'bg-pink-50 text-pink-700 ring-pink-600/20',
    };
    return map[category] || 'bg-gray-50 text-gray-700 ring-gray-600/20';
  }
  // Default (variant 1)
  const map = {
    Event: 'bg-blue-50 text-blue-700 ring-blue-600/20',
    Safety: 'bg-amber-50 text-amber-700 ring-amber-600/20',
    News: 'bg-purple-50 text-purple-700 ring-purple-600/20',
    Meeting: 'bg-rose-50 text-rose-700 ring-rose-600/20',
  };
  return map[category] || 'bg-gray-50 text-gray-700 ring-gray-600/20';
}

/**
 * Helper: get involvement icon bg per theme
 */
export function getInvolveIconBg(variant, color) {
  if (variant === 2) {
    const map = {
      emerald: 'bg-emerald-500/10',
      blue: 'bg-blue-500/10',
      amber: 'bg-amber-500/10',
    };
    return map[color] || map.emerald;
  }
  if (variant === 5) {
    const map = {
      emerald: 'bg-emerald-500/10',
      blue: 'bg-blue-500/10',
      amber: 'bg-amber-500/10',
    };
    return map[color] || map.emerald;
  }
  if (variant === 3) {
    const map = {
      emerald: 'bg-emerald-50',
      blue: 'bg-indigo-50',
      amber: 'bg-amber-50',
    };
    return map[color] || map.emerald;
  }
  if (variant === 4) {
    const map = {
      emerald: 'bg-emerald-50',
      blue: 'bg-blue-50',
      amber: 'bg-amber-50',
    };
    return map[color] || map.emerald;
  }
  if (variant === 6) {
    const map = {
      emerald: 'bg-teal-50',
      blue: 'bg-blue-50',
      amber: 'bg-amber-50',
    };
    return map[color] || map.emerald;
  }
  if (variant === 7) {
    const map = {
      emerald: 'bg-rose-50',
      blue: 'bg-blue-50',
      amber: 'bg-amber-50',
    };
    return map[color] || map.emerald;
  }
  const map = {
    emerald: 'bg-emerald-50',
    blue: 'bg-blue-50',
    amber: 'bg-amber-50',
  };
  return map[color] || map.emerald;
}

/**
 * Helper: get involvement icon color per theme
 */
export function getInvolveIconColor(variant, color) {
  if (variant === 2 || variant === 5) {
    const map = {
      emerald: 'text-emerald-400',
      blue: 'text-blue-400',
      amber: 'text-amber-400',
    };
    return map[color] || map.emerald;
  }
  if (variant === 3) {
    const map = {
      emerald: 'text-emerald-600',
      blue: 'text-indigo-600',
      amber: 'text-amber-600',
    };
    return map[color] || map.emerald;
  }
  if (variant === 4) {
    const map = {
      emerald: 'text-amber-600',
      blue: 'text-blue-600',
      amber: 'text-amber-600',
    };
    return map[color] || map.emerald;
  }
  if (variant === 6) {
    const map = {
      emerald: 'text-teal-600',
      blue: 'text-blue-600',
      amber: 'text-amber-600',
    };
    return map[color] || map.emerald;
  }
  if (variant === 7) {
    const map = {
      emerald: 'text-rose-600',
      blue: 'text-blue-600',
      amber: 'text-amber-600',
    };
    return map[color] || map.emerald;
  }
  const map = {
    emerald: 'text-emerald-600',
    blue: 'text-blue-600',
    amber: 'text-amber-600',
  };
  return map[color] || map.emerald;
}

/**
 * Helper: event date badge styles
 */
export function getEventDateBadge(variant) {
  if (variant === 2) {
    return {
      bg: 'bg-emerald-500/10 border border-emerald-500/20',
      month: 'text-emerald-400',
      day: 'text-emerald-300',
    };
  }
  if (variant === 3) {
    return {
      bg: 'bg-indigo-50 border border-indigo-100',
      month: 'text-indigo-600',
      day: 'text-indigo-700',
    };
  }
  if (variant === 4) {
    return {
      bg: 'bg-amber-50 border border-amber-200',
      month: 'text-amber-600',
      day: 'text-amber-700',
    };
  }
  if (variant === 5) {
    return {
      bg: 'bg-violet-500/10 border border-violet-500/20',
      month: 'text-violet-400',
      day: 'text-violet-300',
    };
  }
  if (variant === 6) {
    return {
      bg: 'bg-teal-50 border border-teal-100',
      month: 'text-teal-600',
      day: 'text-teal-700',
    };
  }
  if (variant === 7) {
    return {
      bg: 'bg-rose-50 border border-rose-100',
      month: 'text-rose-600',
      day: 'text-rose-700',
    };
  }
  return {
    bg: 'bg-emerald-50 border border-emerald-100',
    month: 'text-emerald-600',
    day: 'text-emerald-700',
  };
}

/**
 * Helper: get type badge styles for payment table
 */
export function getTypeBadgeStyles(variant, type) {
  const isDonation = type === 'Donation';
  if (variant === 2) {
    return isDonation
      ? 'bg-purple-500/10 text-purple-400 ring-purple-500/20'
      : 'bg-blue-500/10 text-blue-400 ring-blue-500/20';
  }
  if (variant === 5) {
    return isDonation
      ? 'bg-purple-500/15 text-purple-300 ring-purple-400/20'
      : 'bg-blue-500/15 text-blue-300 ring-blue-400/20';
  }
  return isDonation
    ? 'bg-purple-50 text-purple-700 ring-purple-600/20'
    : 'bg-blue-50 text-blue-700 ring-blue-600/20';
}

/**
 * Helper: get status badge styles
 */
export function getStatusBadgeStyles(variant) {
  if (variant === 2) {
    return 'bg-emerald-500/10 text-emerald-400 ring-1 ring-inset ring-emerald-500/20';
  }
  if (variant === 5) {
    return 'bg-emerald-500/15 text-emerald-300 ring-1 ring-inset ring-emerald-400/20';
  }
  return 'bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20';
}

/**
 * Helper: dues panel highlight
 */
export function getDuesHighlight(variant) {
  if (variant === 2) return 'bg-emerald-500/10';
  if (variant === 3) return 'bg-indigo-50';
  if (variant === 4) return 'bg-gradient-to-r from-amber-50 to-amber-100/50';
  if (variant === 5) return 'bg-violet-500/10 backdrop-blur-sm';
  if (variant === 6) return 'bg-teal-50';
  if (variant === 7) return 'bg-rose-50';
  return 'bg-emerald-50';
}

/**
 * Helper: dues price color
 */
export function getDuesPriceColor(variant) {
  if (variant === 2) return 'text-emerald-400';
  if (variant === 3) return 'text-indigo-600';
  if (variant === 4) return 'text-amber-600';
  if (variant === 5) return 'text-violet-400';
  if (variant === 6) return 'text-teal-600';
  if (variant === 7) return 'text-rose-600';
  return 'text-emerald-700';
}

/**
 * Helper: dues support icon color
 */
export function getDuesSupportIcon(variant) {
  if (variant === 2) return 'text-emerald-400';
  if (variant === 3) return 'text-indigo-500';
  if (variant === 4) return 'text-amber-500';
  if (variant === 5) return 'text-violet-400';
  if (variant === 6) return 'text-teal-500';
  if (variant === 7) return 'text-rose-500';
  return 'text-emerald-500';
}

/**
 * Helper: tab active/inactive styles
 */
export function getTabStyles(variant, isActive) {
  if (isActive) {
    if (variant === 2) return { text: 'text-emerald-400', bar: 'bg-emerald-400' };
    if (variant === 3) return { text: 'text-indigo-600', bar: 'bg-indigo-600' };
    if (variant === 4) return { text: 'text-amber-600', bar: 'bg-amber-600' };
    if (variant === 5) return { text: 'text-violet-400', bar: 'bg-gradient-to-r from-violet-500 to-fuchsia-500' };
    if (variant === 6) return { text: 'text-teal-700', bar: 'bg-teal-600' };
    if (variant === 7) return { text: 'text-rose-600', bar: 'bg-rose-500' };
    return { text: 'text-emerald-700', bar: 'bg-emerald-600' };
  }
  if (variant === 2) return { text: 'text-gray-500 hover:text-gray-300', bar: '' };
  if (variant === 5) return { text: 'text-violet-300/50 hover:text-violet-200', bar: '' };
  return { text: 'text-gray-500 hover:text-gray-700', bar: '' };
}

/**
 * Helper: donation button styles
 */
export function getDonationBtnStyles(variant, isSelected) {
  const t = themes[variant];
  if (isSelected) {
    if (variant === 2) return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
    if (variant === 3) return 'bg-indigo-50 text-indigo-600 border-indigo-200';
    if (variant === 4) return 'bg-amber-50 text-amber-700 border-amber-200';
    if (variant === 5) return 'bg-violet-500/10 text-violet-300 border-violet-500/20';
    if (variant === 6) return 'bg-teal-50 text-teal-700 border-teal-200';
    if (variant === 7) return 'bg-rose-50 text-rose-700 border-rose-200';
    return 'bg-emerald-50 text-emerald-700 border-emerald-200';
  }
  if (variant === 2) return 'bg-gray-800 text-gray-300 border-gray-700 hover:border-gray-600';
  if (variant === 5) return 'bg-white/5 text-violet-200/70 border-white/10 hover:border-white/20';
  return `${t.cardBg} text-gray-700 border-gray-200 hover:border-gray-300`;
}

/**
 * Helper: receipt link colors
 */
export function getReceiptLinkColor(variant) {
  if (variant === 2) return 'text-emerald-400 hover:text-emerald-300';
  if (variant === 3) return 'text-indigo-600 hover:text-indigo-700';
  if (variant === 4) return 'text-amber-600 hover:text-amber-700';
  if (variant === 5) return 'text-violet-400 hover:text-violet-300';
  if (variant === 6) return 'text-teal-600 hover:text-teal-700';
  if (variant === 7) return 'text-rose-500 hover:text-rose-600';
  return 'text-emerald-600 hover:text-emerald-700';
}

/**
 * Helper: quick action link hover
 */
export function getQuickActionHover(variant) {
  if (variant === 2) return 'hover:bg-emerald-500/10 hover:text-emerald-400';
  if (variant === 3) return 'hover:bg-indigo-50 hover:text-indigo-600';
  if (variant === 4) return 'hover:bg-amber-50 hover:text-amber-700';
  if (variant === 5) return 'hover:bg-violet-500/10 hover:text-violet-300';
  if (variant === 6) return 'hover:bg-teal-50 hover:text-teal-700';
  if (variant === 7) return 'hover:bg-rose-50 hover:text-rose-600';
  return 'hover:bg-emerald-50 hover:text-emerald-700';
}

/**
 * Helper: membership check icon bg
 */
export function getMembershipCheckBg(variant) {
  if (variant === 2) return 'bg-emerald-500/10';
  if (variant === 3) return 'bg-indigo-50';
  if (variant === 4) return 'bg-amber-50';
  if (variant === 5) return 'bg-violet-500/10';
  if (variant === 6) return 'bg-teal-50';
  if (variant === 7) return 'bg-rose-50';
  return 'bg-emerald-50';
}

/**
 * Helper: membership check icon color
 */
export function getMembershipCheckColor(variant) {
  if (variant === 2) return 'text-emerald-400';
  if (variant === 3) return 'text-indigo-600';
  if (variant === 4) return 'text-amber-600';
  if (variant === 5) return 'text-violet-400';
  if (variant === 6) return 'text-teal-600';
  if (variant === 7) return 'text-rose-600';
  return 'text-emerald-600';
}
