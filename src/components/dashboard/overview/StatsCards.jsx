export default function StatsCards({ stats }) {
  const cards = [
    {
      title: 'Total Income',
      value: `Rs. ${stats.totalIncome.toLocaleString()}.00`,
      change: stats.incomeChange,
      positive: true,
      icon: '💰',
      border: 'border-l-4 border-l-green-400',
    },
    {
      title: 'Customers',
      value: stats.customers,
      change: stats.customersChange,
      positive: true,
      icon: '👤',
      border: 'border-l-4 border-l-blue-400',
    },
    {
      title: 'Employees',
      value: stats.employees,
      change: stats.employeesChange,
      positive: true,
      icon: '👥',
      border: 'border-l-4 border-l-purple-400',
    },
    {
      title: 'Total Expenses',
      value: `Rs. ${stats.totalExpenses.toLocaleString()}.00`,
      change: stats.expensesChange,
      positive: false,
      icon: '📉',
      border: 'border-l-4 border-l-red-400',
    },
  ]

  return (
    // Mobile: 1 column, Tablet: 2 columns, Desktop: 4 columns
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className={`bg-white rounded-xl border border-gray-100 p-4 shadow-sm ${card.border}`}
        >
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-gray-500">{card.title}</p>
            <span className="text-xl">{card.icon}</span>
          </div>
          <p className="text-lg md:text-xl font-bold text-gray-800">{card.value}</p>
          <p className={`text-xs mt-1 ${card.positive ? 'text-green-500' : 'text-red-500'}`}>
            {card.positive ? '▲' : '▼'} {card.change}% from last month
          </p>
        </div>
      ))}
    </div>
  )
}