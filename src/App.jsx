function App() {
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

          {/* RIGHT SIDE CARD */}
          <div className="w-full flex justify-center md:justify-end md:mt-[-40px]">
            <div className="w-[700px] bg-white rounded-lg shadow-[0_8px_16px_rgba(0,0,0,0.1)] px-8 pt-8 pb-8">
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Email address or phone number"
                  className="w-full h-[60px] border border-[#dddfe2] rounded-lg px-4 text-[17px] placeholder:text-[#333538] focus:outline-none focus:border-[#1877f2] focus:ring-1 focus:ring-[#1877f2]"
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="w-full h-[60px] border border-[#dddfe2] rounded-lg px-4 text-[17px] placeholder:text-[#414347] focus:outline-none focus:border-[#1877f2] focus:ring-1 focus:ring-[#1877f2]"
                />

                <button className="w-full h-[56px] rounded-lg bg-[#1877f2] text-white text-[20px] font-bold hover:bg-[#166fe5]">
                  Log in
                </button>
              </div>

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
