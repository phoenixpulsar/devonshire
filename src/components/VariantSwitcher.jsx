import { useTheme, VARIANTS, VARIANT_LABELS, VARIANT_DESCRIPTIONS } from '../context/ThemeContext';
import { themes } from '../themes';

export default function VariantSwitcher() {
  const { activeVariant, switchVariant } = useTheme();

  return (
    <div className="sticky top-0 z-[60] bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-11 sm:h-12">
          <span className="hidden lg:inline text-xs font-semibold text-gray-400 uppercase tracking-wider mr-4 shrink-0">
            Design Variants
          </span>
          <nav
            className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto scrollbar-none flex-1 lg:flex-none"
            role="tablist"
            aria-label="Design variant selector"
          >
            {VARIANTS.map((v) => {
              const isActive = activeVariant === v;
              return (
                <button
                  key={v}
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`${VARIANT_LABELS[v]}: ${VARIANT_DESCRIPTIONS[v]}`}
                  onClick={() => switchVariant(v)}
                  className={`
                    relative px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium
                    whitespace-nowrap transition-all duration-200 ease-out
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-violet-500
                    ${isActive
                      ? 'bg-gray-900 text-white shadow-sm'
                      : 'text-gray-500 hover:text-gray-800 hover:bg-gray-100 active:bg-gray-200'
                    }
                  `}
                >
                  <span className="sm:hidden">{VARIANT_LABELS[v]}</span>
                  <span className="hidden sm:inline">{VARIANT_LABELS[v]}</span>
                  {isActive && (
                    <span className="hidden md:inline text-[10px] text-gray-400 ml-1.5">
                      {VARIANT_DESCRIPTIONS[v]}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
