import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex w-full max-w-6xl">

        {/* Left Image */}
        <div className="hidden md:block md:w-1/2">

          <img
            src="/images/login.jpg"
            alt="login"
            className="h-full w-full object-cover"
          />

        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">

          <h1 className="text-4xl font-bold mb-2">
            Welcome Back
          </h1>

          <p className="text-gray-500 mb-8">
            Login to your account
          </p>

          <LoginForm />

        </div>

      </div>

    </div>
  );
}