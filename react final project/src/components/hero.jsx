import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="h-screen flex items-center justify-center text-center px-5 bg-gradient-to-b from-[#0f172a] to-black">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          NEXT GEN <span className="text-purple-500">GAMING</span>
        </motion.h1>

        <p className="mt-6 text-gray-300 max-w-xl mx-auto">
          Experience futuristic gaming worlds with immersive stories,
          realistic graphics and powerful multiplayer action.
        </p>

        <button className="mt-8 px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full transition">
          Explore Games
        </button>
      </div>
    </section>
  );
}

export default Hero;