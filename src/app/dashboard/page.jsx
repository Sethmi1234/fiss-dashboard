import Sidebar from "@/components/dashboard/Sidebar";
import Navbar from "@/components/dashboard/Navbar";
import LoanTable from "@/components/dashboard/LoanTable";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1 p-6">

        <Navbar />

        <div className="bg-white rounded-2xl shadow p-6 mt-6">

          <div className="flex justify-between items-center mb-6">

            <div>
              <h1 className="text-3xl font-bold">
                Micro Loans
              </h1>

              <p className="text-gray-500">
                Manage and track all micro loans
              </p>
            </div>

            <button className="bg-green-600 text-white px-5 py-3 rounded-xl hover:bg-green-700">
              Create Loan
            </button>

          </div>

          <LoanTable />

        </div>

      </div>

    </div>
  );
}