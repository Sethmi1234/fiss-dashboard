const actions = [
  { label: 'New Micro Loan', icon: '➕', color: 'text-green-600' },
  { label: 'New Premium Loan', icon: '💎', color: 'text-purple-600' },
  { label: 'New Customer', icon: '👤', color: 'text-blue-600' },
  { label: 'Transactions', icon: '⇄', color: 'text-orange-500' },
  { label: 'Company Ledger', icon: '📒', color: 'text-gray-600' },
  { label: 'Overdue Loan Report', icon: '⚠️', color: 'text-red-500' },
  { label: 'Daily Collection Report', icon: '📊', color: 'text-teal-600' },
  { label: 'Change Password', icon: '🔒', color: 'text-gray-500' },
]

export default function QuickActions() {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
      <h2 className="text-base font-semibold text-gray-800 mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => (
          <button
            key={action.label}
            className="flex flex-col items-center justify-center gap-1 p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition text-center"
          >
            <span className={`text-xl ${action.color}`}>{action.icon}</span>
            <span className="text-xs text-gray-600 font-medium leading-tight">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}