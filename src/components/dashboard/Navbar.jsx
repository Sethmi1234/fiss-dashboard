export default function Navbar() {
  return (
    <div className="flex justify-between items-center">

      <input
        type="text"
        placeholder="Search..."
        className="border border-gray-300 rounded-xl p-3 w-80 outline-none"
      />

      <div className="flex items-center gap-4">

        <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center">
          A
        </div>

        <div>
          <h2 className="font-semibold">
            Admin User
          </h2>

          <p className="text-sm text-gray-500">
            Administrator
          </p>
        </div>

      </div>

    </div>
  );
}