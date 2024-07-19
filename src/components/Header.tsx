// src/components/Header.tsx
const Header: React.FC = () => {
  return (
    <section className="w-full px-8 text-gray-700 bg-white">
      <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
        <div className="relative flex flex-col md:flex-row">
          <a
            href="/"
            className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
          >
            <span className="mx-auto text-xl font-black leading-none text-gray-900 select-none">
              <svg
                className="data-[auto=true]:hidden data-[auto=true]:sm:block block text-foreground h-5 md:h-6"
                fill="currentColor"
                viewBox="0 0 100 24.48"
              >
                <path d="M18.745 0v24.069h-2.139L2.386 3.914h-.188v20.155H0V0h2.127l14.267 20.179h.188V0zm13.256 24.445a7.934 7.934 0 01-4.371-1.181 7.79 7.79 0 01-2.85-3.279 11.069 11.069 0 01-1-4.836 11.2 11.2 0 011-4.848 8.1 8.1 0 012.785-3.326 7.175 7.175 0 014.119-1.2 7.689 7.689 0 012.832.535 7.042 7.042 0 012.45 1.634 7.836 7.836 0 011.722 2.756 11.015 11.015 0 01.635 3.931v1.034h-12.1V13.82h9.963a6.882 6.882 0 00-.7-3.132 5.55 5.55 0 00-1.939-2.2 5.11 5.11 0 00-2.862-.811 5.121 5.121 0 00-3.02.917 6.251 6.251 0 00-2.039 2.421 7.513 7.513 0 00-.746 3.291v1.1a8.822 8.822 0 00.746 3.755 5.751 5.751 0 002.124 2.487 5.9 5.9 0 003.255.881 5.873 5.873 0 002.251-.4 4.843 4.843 0 001.634-1.075 4.729 4.729 0 001-1.487l1.986.646a5.885 5.885 0 01-1.346 2.1 6.889 6.889 0 01-2.327 1.545 8.251 8.251 0 01-3.202.587zm12.74-18.428l4.654 7.7 4.654-7.7h2.433l-5.806 9.026 5.806 9.026H54.05l-4.654-7.451-4.655 7.451H42.32l5.735-9.026-5.735-9.026zm23.246 0v1.822h-8.615V6.017zm-5.923-4.325h2.1v17.664a3.414 3.414 0 00.388 1.769 2.159 2.159 0 001.011.9 3.363 3.363 0 001.328.264 4.045 4.045 0 00.705-.053q.294-.053.517-.112l.447 1.892a5.433 5.433 0 01-.752.217 5.162 5.162 0 01-1.1.1 5.1 5.1 0 01-2.215-.505 4.337 4.337 0 01-1.743-1.499 4.3 4.3 0 01-.682-2.48zM89.211 0h2.2v15.936a8.411 8.411 0 01-1.152 4.389 8.18 8.18 0 01-3.2 3.044 9.854 9.854 0 01-4.77 1.111 9.82 9.82 0 01-4.76-1.116 8.225 8.225 0 01-3.208-3.044 8.379 8.379 0 01-1.152-4.384V0h2.2v15.783a6.747 6.747 0 00.858 3.414 6.13 6.13 0 002.415 2.356 7.444 7.444 0 003.649.858 7.478 7.478 0 003.655-.858 6.08 6.08 0 002.413-2.353 6.784 6.784 0 00.852-3.414zM100 0v24.069h-2.2V0z"></path>
              </svg>
            </span>
          </a>
          <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
            {/* <a
              href="/components"
              className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
            >
              Components
            </a> */}
          </nav>
        </div>

        <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
          <a
            href="#"
            className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-[#319795] border border-transparent rounded-md shadow-sm hover:[#319795] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:[#319795]"
          >
            Hire Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
