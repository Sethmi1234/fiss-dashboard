import { premiumLoans } from '@/lib/data'

const statusStyles = {
  ACTIVE: 'bg-green-100 text-green-700',
  OVERDUE: 'bg-red-100 text-red-600',
  CLOSED: 'bg-gray-200 text-gray-500',
}

export default function PremiumLoansPage() {
  return (
    <div>
      <div className="flex items-start justify-between mb-6 gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">Premium Loans</h1>
          <p className="text-gray-400 text-sm mt-1">Manage premium loan products and repayments.</p>
        </div>
        <button className="shrink-0 bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition">
          + New Premium Loan
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">

        {/* Mobile - cards */}
        <div className="md:hidden divide-y divide-gray-100">
          {premiumLoans.map((loan) => (
            <div key={loan.id} className="p-4 flex flex-col gap-2">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{loan.id}</p>
                  <p className="text-xs text-gray-400">{loan.date}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusStyles[loan.status]}`}>
                  {loan.status}
                </span>
              </div>
              <p className="text-sm font-medium text-gray-700">{loan.customer}</p>
              <p className="text-xs text-gray-400">{loan.phone}</p>
              <div className="grid grid-cols-2 gap-2 mt-1">
                <div className="bg-gray-50 rounded-lg p-2">
                  <p className="text-xs text-gray-400">Principal</p>
                  <p className="text-sm font-semibold text-gray-700">Rs. {loan.principal.toLocaleString()}</p>
                </div>
                <div className="bg-red-50 rounded-lg p-2">
                  <p className="text-xs text-gray-400">Balance</p>
                  <p className="text-sm font-semibold text-red-500">Rs. {loan.balance.toLocaleString()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop - table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-500 uppercase text-xs">
              <tr>
                <th className="px-4 py-3 text-left">Loan Details</th>
                <th className="px-4 py-3 text-left">Customer</th>
                <th className="px-4 py-3 text-left">Financials</th>
                <th className="px-4 py-3 text-left">Payment Info</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {premiumLoans.map((loan) => (
                <tr key={loan.id} className="border-t border-gray-100 hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <p className="font-semibold text-gray-800">{loan.id}</p>
                    <p className="text-gray-400 text-xs">{loan.date}</p>
                  </td>
                  <td className="px-4 py-3">
                    <p className="font-medium text-gray-700">{loan.customer}</p>
                    <p className="text-gray-400 text-xs">{loan.phone}</p>
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-gray-600">Principal: <span className="font-medium">Rs. {loan.principal.toLocaleString()}</span></p>
                    <p className="text-gray-600">Total: <span className="font-medium">Rs. {loan.total.toLocaleString()}</span></p>
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-gray-600">Paid: <span className="text-green-600 font-medium">Rs. {loan.paid.toLocaleString()}</span></p>
                    <p className="text-gray-600">Balance: <span className="text-red-500 font-medium">Rs. {loan.balance.toLocaleString()}</span></p>
                    <p className="text-gray-400 text-xs">{loan.installments} installments</p>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusStyles[loan.status]}`}>
                      {loan.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-400 text-lg cursor-pointer hover:text-gray-600">⋯</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-4 py-3 text-xs text-gray-400 border-t border-gray-100">
          Showing {premiumLoans.length} results
        </div>
      </div>
    </div>
  )
}