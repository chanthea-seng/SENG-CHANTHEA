import Link from "next/link";
import { FaGithub, FaTelegram, FaJava } from "react-icons/fa";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen px-6 py-10 text-center gap-10">
      {/* MAIN SECTION */}
      <main className="flex flex-col gap-6 items-center">
        <h6 className="text-sm text-gray-500">Hello, I&apos;m</h6>
        <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
          Seng Chanthea
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          I’m a DevOps Engineer.
        </p>

        {/* NAVIGATION */}
        <nav className="flex gap-6 flex-wrap justify-center mt-4">
          <Link
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition underline underline-offset-4"
            href="https://nextjs.org/learn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaJava />
            Resume
          </Link>
          <Link
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition underline underline-offset-4"
            href="https://github.com/chanthea-seng"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            Project
          </Link>
          <Link
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition underline underline-offset-4"
            href="https://t.me/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegram />
            Get in touch
          </Link>
        </nav>
      </main>

      {/* FOOTER */}
      <footer className="text-sm text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} Seng Chanthea. All rights reserved.
      </footer>
    </div>
  );
}
