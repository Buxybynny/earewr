function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-black/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
        <h1 className="text-2xl font-bold text-purple-500">
          GameVerse
        </h1>

        <ul className="hidden md:flex gap-8 text-sm">
          <li className="hover:text-purple-400 cursor-pointer">Home</li>
          <li className="hover:text-purple-400 cursor-pointer">Games</li>
          <li className="hover:text-purple-400 cursor-pointer">Team</li>
          <li className="hover:text-purple-400 cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;