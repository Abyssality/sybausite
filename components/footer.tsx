import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-blue-900/20 bg-black py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview-xwznF4g0P6uwaCDebyMaFwFU5DnSup.png"
              alt="Orbyte Hosting Logo"
              width={40}
              height={40}
            />
            <span className="font-bold text-xl">Orbyte</span>
          </div>
          <p className="text-sm text-blue-300/80 max-w-xs">
            High-performance server hosting with unbeatable uptime and lightning-fast speeds.
          </p>
          <div className="flex gap-4">
            <Link href="/discord" className="text-blue-400 hover:text-blue-300">
              <span className="sr-only">Discord</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-message-circle"
              >
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
              </svg>
            </Link>
            <Link href="#" className="text-blue-400 hover:text-blue-300">
              <span className="sr-only">Twitter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-twitter"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-lg">Plans</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#plans" className="text-sm text-blue-300/80 hover:text-blue-400">
                Dirt
              </Link>
            </li>
            <li>
              <Link href="#plans" className="text-sm text-blue-300/80 hover:text-blue-400">
                Stone
              </Link>
            </li>
            <li>
              <Link href="#plans" className="text-sm text-blue-300/80 hover:text-blue-400">
                Iron
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-lg">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="text-sm text-blue-300/80 hover:text-blue-400">
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-sm text-blue-300/80 hover:text-blue-400">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/status" className="text-sm text-blue-300/80 hover:text-blue-400">
                Status
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-lg">Support</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/help" className="text-sm text-blue-300/80 hover:text-blue-400">
                Help Center
              </Link>
            </li>
            <li>
              <Link href="/discord" className="text-sm text-blue-300/80 hover:text-blue-400">
                Discord Community
              </Link>
            </li>
            <li>
              <Link href="/status" className="text-sm text-blue-300/80 hover:text-blue-400">
                Status
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-blue-900/20 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-blue-300/80">© {new Date().getFullYear()} Orbyte Hosting. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="#" className="text-sm text-blue-300/80 hover:text-blue-400">
            Terms
          </Link>
          <Link href="#" className="text-sm text-blue-300/80 hover:text-blue-400">
            Privacy
          </Link>
          <Link href="#" className="text-sm text-blue-300/80 hover:text-blue-400">
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  )
}
