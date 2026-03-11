import { useTheme } from '../context/ThemeContext';
import { themes } from '../themes';

export default function DashboardPanel({ title, children, className = '', action }) {
  const { activeVariant } = useTheme();
  const t = themes[activeVariant];

  return (
    <section className={`${t.panelBg} ${t.cardRadius} ${t.panelBorder} ${t.transition} ${className}`}>
      {title && (
        <div className={`flex items-center justify-between px-5 sm:px-6 py-4 ${t.panelHeaderBorder} transition-colors duration-500`}>
          <h2 className={`text-base font-semibold ${t.headingColor} transition-colors duration-500`}>{title}</h2>
          {action && action}
        </div>
      )}
      <div className="p-5 sm:p-6">{children}</div>
    </section>
  );
}
