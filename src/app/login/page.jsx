import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-3 sm:p-6">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row w-full max-w-6xl">

        {/* Left marketing / image panel */}
        <div className="relative h-56 sm:h-72 lg:h-auto lg:w-1/2 lg:min-h-[640px]">
          <img
            src="/1photo.webp"
            alt="marketing"
            className="absolute inset-0 h-full w-full object-cover lg:rounded-l-3xl"
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="relative z-10 flex h-full items-end lg:items-center justify-start p-6 sm:p-8 lg:p-10 text-white">
            <div className="max-w-sm">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Faster, More Secure, More Reliable.</h2>
              <p className="text-sm sm:text-base opacity-90 mb-4 sm:mb-6">Manage loans, customers and transactions with confidence. Welcome to FINEXA dashboard.</p>
            </div>
          </div>
        </div>

        {/* Right login form panel */}
        <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2">Welcome Back</h1>
            <p className="text-sm sm:text-base text-gray-500 mb-6">Sign in to your account to continue to FINEXA</p>

            <LoginForm />

            <div className="mt-4 text-center">
              <button className="text-sm text-gray-500 underline">Continue with OTP code</button>
            </div>

            <div className="mt-8 text-center text-xs text-gray-400">
              <p>© {new Date().getFullYear()} FINEXA. All rights reserved.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}