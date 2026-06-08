import { loans } from "@/lib/data";

export default function LoanTable() {
  return (
    <div className="overflow-x-auto">

      <table className="w-full">

        <thead>

          <tr className="border-b text-left text-gray-500">

            <th className="py-4">Loan ID</th>
            <th>Customer</th>
            <th>Amount</th>
            <th>Paid</th>
            <th>Balance</th>
            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {loans.map((loan) => (
            <tr key={loan.id} className="border-b hover:bg-gray-50">

              <td className="py-5 font-medium">
                {loan.id}
              </td>

              <td>{loan.customer}</td>

              <td>{loan.amount}</td>

              <td className="text-green-600">
                {loan.paid}
              </td>

              <td className="text-red-500">
                {loan.balance}
              </td>

              <td>

                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    loan.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : loan.status === "Overdue"
                      ? "bg-red-100 text-red-600"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {loan.status}
                </span>

              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}