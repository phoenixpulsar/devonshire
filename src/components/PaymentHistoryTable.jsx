import { Download } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { themes, getTypeBadgeStyles, getStatusBadgeStyles, getReceiptLinkColor } from '../themes';

export default function PaymentHistoryTable({ payments }) {
  const { activeVariant } = useTheme();
  const t = themes[activeVariant];

  return (
    <div className={`${t.tableBg} ${t.cardRadius} ${t.tableBorder} overflow-hidden ${t.transition}`}>
      {/* Desktop Table */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className={`border-b ${t.panelHeaderBorder.replace('border-b ', '')}`}>
              <th className={`text-left px-6 py-3.5 text-xs font-semibold ${t.tableHeaderText} uppercase tracking-wider transition-colors duration-500`}>
                Date
              </th>
              <th className={`text-left px-6 py-3.5 text-xs font-semibold ${t.tableHeaderText} uppercase tracking-wider transition-colors duration-500`}>
                Description
              </th>
              <th className={`text-left px-6 py-3.5 text-xs font-semibold ${t.tableHeaderText} uppercase tracking-wider transition-colors duration-500`}>
                Type
              </th>
              <th className={`text-right px-6 py-3.5 text-xs font-semibold ${t.tableHeaderText} uppercase tracking-wider transition-colors duration-500`}>
                Amount
              </th>
              <th className={`text-center px-6 py-3.5 text-xs font-semibold ${t.tableHeaderText} uppercase tracking-wider transition-colors duration-500`}>
                Status
              </th>
              <th className={`text-center px-6 py-3.5 text-xs font-semibold ${t.tableHeaderText} uppercase tracking-wider transition-colors duration-500`}>
                Receipt
              </th>
            </tr>
          </thead>
          <tbody className={t.tableRowBorder}>
            {payments.map((payment) => (
              <tr key={payment.id} className={`${t.tableRowHover} transition-colors`}>
                <td className={`px-6 py-4 ${t.tableCellText} whitespace-nowrap transition-colors duration-500`}>
                  {new Date(payment.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </td>
                <td className={`px-6 py-4 ${t.tableCellBold} font-medium transition-colors duration-500`}>{payment.description}</td>
                <td className="px-6 py-4">
                  <TypeBadge type={payment.type} variant={activeVariant} />
                </td>
                <td className={`px-6 py-4 text-right ${t.tableCellBold} font-semibold tabular-nums transition-colors duration-500`}>
                  ${payment.amount.toFixed(2)}
                </td>
                <td className="px-6 py-4 text-center">
                  <StatusBadge status={payment.status} variant={activeVariant} />
                </td>
                <td className="px-6 py-4 text-center">
                  <a
                    href={payment.receiptUrl}
                    className={`inline-flex items-center gap-1 ${getReceiptLinkColor(activeVariant)} font-medium transition-colors`}
                  >
                    <Download className="w-3.5 h-3.5" />
                    PDF
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className={`sm:hidden ${t.tableRowBorder}`}>
        {payments.map((payment) => (
          <div key={payment.id} className="p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-medium ${t.tableCellBold} transition-colors duration-500`}>{payment.description}</p>
                <div className="mt-1 flex items-center gap-2">
                  <TypeBadge type={payment.type} variant={activeVariant} />
                  <span className={`text-xs ${t.subtleColor} transition-colors duration-500`}>
                    {new Date(payment.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>
              </div>
              <div className="text-right shrink-0">
                <p className={`text-sm font-semibold ${t.tableCellBold} tabular-nums transition-colors duration-500`}>
                  ${payment.amount.toFixed(2)}
                </p>
                <StatusBadge status={payment.status} variant={activeVariant} />
              </div>
            </div>
            <div className="mt-2">
              <a
                href={payment.receiptUrl}
                className={`inline-flex items-center gap-1 text-xs ${getReceiptLinkColor(activeVariant)} font-medium`}
              >
                <Download className="w-3 h-3" />
                Download receipt
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TypeBadge({ type, variant }) {
  const styles = getTypeBadgeStyles(variant, type);
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-semibold ring-1 ring-inset transition-colors duration-500 ${styles}`}
    >
      {type}
    </span>
  );
}

function StatusBadge({ status, variant }) {
  const styles = getStatusBadgeStyles(variant);
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-semibold transition-colors duration-500 ${styles}`}>
      {status}
    </span>
  );
}
