export default function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-lg p-6 hidden md:block">

      <h1 className="text-3xl font-bold mb-10 text-green-600">
        FISS
      </h1>

      <ul className="space-y-5">

        <li className="bg-green-100 text-green-700 p-3 rounded-xl font-semibold cursor-pointer">
          Overview
        </li>

        <li className="hover:bg-gray-100 p-3 rounded-xl cursor-pointer">
          Transactions
        </li>

        <li className="hover:bg-gray-100 p-3 rounded-xl cursor-pointer">
          Micro Loans
        </li>

        <li className="hover:bg-gray-100 p-3 rounded-xl cursor-pointer">
          Customers
        </li>

        <li className="hover:bg-gray-100 p-3 rounded-xl cursor-pointer">
          Employees
        </li>

        <li className="hover:bg-gray-100 p-3 rounded-xl cursor-pointer">
          Reports
        </li>

        <li className="hover:bg-gray-100 p-3 rounded-xl cursor-pointer">
          Settings
        </li>

      </ul>

    </div>
  );
}