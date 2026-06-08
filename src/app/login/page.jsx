import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex w-full max-w-6xl">

        {/* Left marketing / image panel */}
        <div className="hidden lg:flex lg:w-1/2 items-center justify-center">
          <div className="w-full h-full relative">
            <img src="/1photo.webp" alt="marketing" className="absolute inset-0 w-full h-full object-cover rounded-l-3xl" />
            <div className="relative z-10 max-w-sm p-10 text-white">
              <h2 className="text-3xl font-bold mb-4">Faster, More Secure, More Reliable.</h2>
              <p className="opacity-90 mb-6">Manage loans, customers and transactions with confidence. Welcome to FINEXA dashboard.</p>
            </div>
          </div>
        </div>

        {/* Right login form panel */}
        <div className="w-full lg:w-1/2 p-10 flex flex-col justify-center">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-semibold text-gray-800 mb-2">Welcome Back</h1>
            <p className="text-gray-500 mb-6">Sign in to your account to continue to FINEXA</p>

            <div className="bg-white">
              <LoginForm />

              <div className="mt-4 text-center">
                <button className="text-sm text-gray-500 underline">Continue with OTP code</button>
              </div>
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