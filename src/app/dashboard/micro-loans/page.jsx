import { microLoans } from '@/lib/data'

export default function MicroloanPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Micro Loans</h1>
          <p className="text-gray-400 text-sm">View and track all micro loans in the system.</p>
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700">
          + New Loan
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-500 uppercase text-xs">
            <tr>
              <th className="px-4 py-3 text-left">ID</th>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Customer</th>
              <th className="px-4 py-3 text-left">Phone</th>
              <th className="px-4 py-3 text-left">Principal</th>
              <th className="px-4 py-3 text-left">Total</th>
              <th className="px-4 py-3 text-left">Paid</th>
              <th className="px-4 py-3 text-left">Balance</th>
              <th className="px-4 py-3 text-left">Installments</th>
              <th className="px-4 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {microLoans.map((l) => (
              <tr key={l.id} className="border-t border-gray-100 hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-500">{l.id}</td>
                <td className="px-4 py-3 text-gray-600">{l.date}</td>
                <td className="px-4 py-3 font-medium text-gray-800">{l.customer}</td>
                <td className="px-4 py-3 text-gray-600">{l.phone}</td>
                <td className="px-4 py-3 text-gray-600">{l.principal}</td>
                <td className="px-4 py-3 text-gray-600">{l.total}</td>
                <td className="px-4 py-3 text-gray-600">{l.paid}</td>
                <td className="px-4 py-3 text-gray-600">{l.balance}</td>
                <td className="px-4 py-3 text-gray-600">{l.installments}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${l.status === 'ACTIVE' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                    {l.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}