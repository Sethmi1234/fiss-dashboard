export default function StatsCards({ stats }) {
  const cards = [
    {
      title: 'Total Income',
      value: `Rs. ${stats.totalIncome.toLocaleString()}.00`,
      change: stats.incomeChange,
      positive: true,
      icon: '💰',
    },
    {
      title: 'Customers',
      value: stats.customers,
      change: stats.customersChange,
      positive: true,
      icon: '👤',
    },
    {
      title: 'Employees',
      value: stats.employees,
      change: stats.employeesChange,
      positive: true,
      icon: '👥',
    },
    {
      title: 'Total Expenses',
      value: `Rs. ${stats.totalExpenses.toLocaleString()}.00`,
      change: stats.expensesChange,
      positive: false,
      icon: '📉',
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {cards.map((card) => (
        <div key={card.title} className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-gray-500">{card.title}</p>
            <span className="text-xl">{card.icon}</span>
          </div>
          <p className="text-xl font-bold text-gray-800">{card.value}</p>
          <p className={`text-xs mt-1 ${card.positive ? 'text-green-500' : 'text-red-500'}`}>
            {card.positive ? '▲' : '▼'} {card.change}% from last month
          </p>
        </div>
      ))}
    </div>
  )
}