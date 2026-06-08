export default function RecentTransactions({ transactions }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
      <h2 className="text-base font-semibold text-gray-800 mb-4">Recent Transactions</h2>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-xs text-gray-400 uppercase border-b border-gray-100">
            <th className="text-left pb-2">Transaction</th>
            <th className="text-left pb-2">Date</th>
            <th className="text-left pb-2">Type</th>
            <th className="text-right pb-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((txn) => (
            <tr key={txn.id} className="border-b border-gray-50 hover:bg-gray-50">
              <td className="py-2">
                <p className="font-medium text-gray-700">{txn.customer}</p>
                <p className="text-xs text-gray-400">{txn.type}</p>
              </td>
              <td className="py-2 text-gray-500 text-xs">{txn.date}</td>
              <td className="py-2">
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium
                  ${txn.txnType === 'Debit' ? 'bg-blue-50 text-blue-600' : 'bg-orange-50 text-orange-500'}`}>
                  {txn.txnType}
                </span>
              </td>
              <td className={`py-2 text-right font-semibold text-sm
                ${txn.positive ? 'text-green-600' : 'text-red-500'}`}>
                {txn.positive ? '+' : '-'}Rs. {txn.amount.toLocaleString()}.00
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}