import { useTheme } from '../context/ThemeContext';
import { themes, getStatIconStyles } from '../themes';

export default function StatCard({ icon: Icon, label, value, color = 'emerald' }) {
  const { activeVariant } = useTheme();
  const t = themes[activeVariant];
  const iconStyles = getStatIconStyles(activeVariant, color);

  return (
    <div className={`${t.statCardBg} ${t.cardRadius} p-5 ${t.transition}`}>
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-500 ${iconStyles}`}>
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <p className={`text-2xl font-bold ${t.headingColor} tabular-nums transition-colors duration-500`}>{value}</p>
          <p className={`text-xs ${t.mutedColor} font-medium transition-colors duration-500`}>{label}</p>
        </div>
      </div>
    </div>
  );
}
