import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
      <motion.h1
        className="text-5xl md:text-6xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Brayan Malova
      </motion.h1>

      <motion.p
        className="mt-4 text-xl md:text-2xl text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Frontend Developer | React Enthusiast
      </motion.p>

      <motion.a
        href="/projects"
        className="mt-8 px-6 py-3 bg-blue-500 rounded-lg shadow hover:bg-blue-600 transition"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        View My Work
      </motion.a>
    </section>
  );
}
