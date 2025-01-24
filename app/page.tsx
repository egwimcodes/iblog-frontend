import Link from "next/link";

export default function Home() {
  return (
    <header className="fixed w-full  shadow-md z-50">
      <nav className="py-2.5">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-poltawskiNowy text-xl font-bold whitespace-nowrap dark:text-white">
              iBlog
            </span>
          </Link>

          {/* Action buttons (Log in & Sign Up) */}
          <div className="flex items-center lg:order-2">
            <Link
              href="/login"
              className="text-white bg-primarycol font-medium rounded-3xl text-sm px-4 py-2.5 sm:mr-2 lg:mr-2 dark:hover:bg-primary60 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="text-white bg-primarycol font-medium rounded-3xl text-sm px-4 py-2.5 sm:mr-2 lg:mr-0 dark:bg-primary50 dark:hover:bg-primary60 focus:outline-none"
            >
              Sign Up
            </Link>

            {/* Mobile Menu Button */}
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div
            className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  href="/"
                  className="block py-2 pl-3 pr-4 text-primary80 rounded lg:bg-transparent lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="block py-2 pl-3 pr-4 text-primary80 rounded lg:bg-transparent lg:p-0 dark:text-white"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-2 pl-3 pr-4 text-primary80 rounded lg:bg-transparent lg:p-0 dark:text-white"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
