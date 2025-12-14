function ProfileCard() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg overflow-hidden">

        {/* Header */}
        <div className="bg-[#1877f2] h-28 flex items-center justify-center">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="profile"
            className="w-24 h-24 rounded-full border-4 border-white -mb-16"
          />
        </div>

        {/* Body */}
        <div className="pt-20 pb-6 px-6 text-center">
          <h2 className="text-2xl font-bold">John Doe</h2>
          <p className="text-gray-500 text-sm">Frontend Developer</p>

          <p className="mt-4 text-gray-600 text-sm">
            Passionate about building clean UI, React apps and modern web
            experiences.
          </p>

          {/* Stats */}
          <div className="flex justify-around mt-6">
            <div>
              <p className="text-lg font-bold">120</p>
              <p className="text-xs text-gray-500">Posts</p>
            </div>
            <div>
              <p className="text-lg font-bold">3.4K</p>
              <p className="text-xs text-gray-500">Followers</p>
            </div>
            <div>
              <p className="text-lg font-bold">180</p>
              <p className="text-xs text-gray-500">Following</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-6">
            <button className="flex-1 bg-[#1877f2] text-white py-2 rounded-lg hover:bg-[#166fe5]">
              Follow
            </button>
            <button className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-100">
              Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
