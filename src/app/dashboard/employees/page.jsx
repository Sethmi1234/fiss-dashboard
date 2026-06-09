import { employees } from '@/lib/data'

export default function EmployeesPage() {
  return (
    <div>
      <div className="flex items-start justify-between mb-6 gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">Employees</h1>
          <p className="text-gray-400 text-sm mt-1">Manage all staff members.</p>
        </div>
        <button className="shrink-0 bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition">
          + New Employee
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">

        {/* Mobile - cards */}
        <div className="md:hidden divide-y divide-gray-100">
          {employees.map((e) => (
            <div key={e.id} className="p-4 flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-gray-800">{e.name}</p>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
                  {e.status}
                </span>
              </div>
              <p className="text-xs text-gray-400">{e.id}</p>
              <p className="text-sm text-gray-600">{e.role}</p>
              <p className="text-sm text-gray-600">{e.email}</p>
              <p className="text-sm text-gray-600">{e.phone}</p>
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
                <th className="px-4 py-3 text-left">Role</th>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3 text-left">Phone</th>
                <th className="px-4 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((e) => (
                <tr key={e.id} className="border-t border-gray-100 hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-500">{e.id}</td>
                  <td className="px-4 py-3 font-medium text-gray-800">{e.name}</td>
                  <td className="px-4 py-3 text-gray-600">{e.role}</td>
                  <td className="px-4 py-3 text-gray-600">{e.email}</td>
                  <td className="px-4 py-3 text-gray-600">{e.phone}</td>
                  <td className="px-4 py-3">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
                      {e.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-4 py-3 text-xs text-gray-400 border-t border-gray-100">
          Showing {employees.length} results
        </div>
      </div>
    </div>
  )
}