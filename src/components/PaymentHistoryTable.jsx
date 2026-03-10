import { Download, ArrowUpRight } from 'lucide-react';

export default function PaymentHistoryTable({ payments }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
      {/* Desktop Table */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="text-right px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="text-center px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="text-center px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Receipt
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {payments.map((payment) => (
              <tr key={payment.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4 text-gray-600 whitespace-nowrap">
                  {new Date(payment.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </td>
                <td className="px-6 py-4 text-gray-900 font-medium">{payment.description}</td>
                <td className="px-6 py-4">
                  <TypeBadge type={payment.type} />
                </td>
                <td className="px-6 py-4 text-right text-gray-900 font-semibold tabular-nums">
                  ${payment.amount.toFixed(2)}
                </td>
                <td className="px-6 py-4 text-center">
                  <StatusBadge status={payment.status} />
                </td>
                <td className="px-6 py-4 text-center">
                  <a
                    href={payment.receiptUrl}
                    className="inline-flex items-center gap-1 text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
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
      <div className="sm:hidden divide-y divide-gray-50">
        {payments.map((payment) => (
          <div key={payment.id} className="p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">{payment.description}</p>
                <div className="mt-1 flex items-center gap-2">
                  <TypeBadge type={payment.type} />
                  <span className="text-xs text-gray-400">
                    {new Date(payment.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>
              </div>
              <div className="text-right shrink-0">
                <p className="text-sm font-semibold text-gray-900 tabular-nums">
                  ${payment.amount.toFixed(2)}
                </p>
                <StatusBadge status={payment.status} />
              </div>
            </div>
            <div className="mt-2">
              <a
                href={payment.receiptUrl}
                className="inline-flex items-center gap-1 text-xs text-emerald-600 hover:text-emerald-700 font-medium"
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

function TypeBadge({ type }) {
  const isdonation = type === 'Donation';
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-semibold ring-1 ring-inset ${
        isdonation
          ? 'bg-purple-50 text-purple-700 ring-purple-600/20'
          : 'bg-blue-50 text-blue-700 ring-blue-600/20'
      }`}
    >
      {type}
    </span>
  );
}

function StatusBadge({ status }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-semibold bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20">
      {status}
    </span>
  );
}
