import { customers } from '@/lib/data'

export default function CustomersPage() {
  return (
    <div>
      <div className="flex items-start justify-between mb-6 gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">Customers</h1>
          <p className="text-gray-400 text-sm mt-1">Manage all registered customers.</p>
        </div>
        <button className="shrink-0 bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition">
          + New Customer
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">

        {/* Mobile - cards */}
        <div className="md:hidden divide-y divide-gray-100">
          {customers.map((c) => (
            <div key={c.id} className="p-4 flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-gray-800">{c.name}</p>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold
                  ${c.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                  {c.status}
                </span>
              </div>
              <p className="text-xs text-gray-400">{c.id}</p>
              <p className="text-sm text-gray-600">{c.phone}</p>
              <p className="text-sm text-gray-600">{c.email}</p>
              <p className="text-xs text-gray-400">{c.loans} loan(s)</p>
            </div>
          ))}
        </div>

        {/* Desktop - table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-500 uppercase text-xs">
              <tr>
                <th className="px-4 py-3 text-left">ID</th>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Phone</th>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3 text-left">Loans</th>
                <th className="px-4 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((c) => (
                <tr key={c.id} className="border-t border-gray-100 hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-500">{c.id}</td>
                  <td className="px-4 py-3 font-medium text-gray-800">{c.name}</td>
                  <td className="px-4 py-3 text-gray-600">{c.phone}</td>
                  <td className="px-4 py-3 text-gray-600">{c.email}</td>
                  <td className="px-4 py-3 text-gray-600">{c.loans}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold
                      ${c.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                      {c.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-4 py-3 text-xs text-gray-400 border-t border-gray-100">
          Showing {customers.length} results
        </div>
      </div>
    </div>
  )
}