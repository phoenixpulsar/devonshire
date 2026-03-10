export default function DashboardPanel({ title, children, className = '', action }) {
  return (
    <section className={`bg-white rounded-xl border border-gray-100 ${className}`}>
      {title && (
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-gray-50">
          <h2 className="text-base font-semibold text-gray-900">{title}</h2>
          {action && action}
        </div>
      )}
      <div className="p-5 sm:p-6">{children}</div>
    </section>
  );
}
