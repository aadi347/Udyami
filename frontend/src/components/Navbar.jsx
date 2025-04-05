import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="fixed top-0 border-solid border-gray-200 w-full border-b py-3 bg-white z-50  bg-inherit">
<div className="container mx-auto ">
  <div className="w-full flex  flex-col lg:flex-row">
      <div className=" flex justify-between  lg:flex-row">
          <a href="" className="flex items-center">
              <img src="https://pbs.twimg.com/profile_images/1823379348113768448/do4fad_q_200x200.jpg" className="h-10 mr-3 rounded-full" alt="" />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">BLUY Portal</span>
          </a>
          <button data-collapse-toggle="navbar-default-example" type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default-example" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"></path>
              </svg>
          </button>
      </div>
      <div className="hidden w-full lg:flex lg:pl-11 " id="navbar-default-example">
          <ul className="flex items-center flex-col mt-4 lg:mt-0 lg:ml-auto lg:flex-row gap-4">
              <li>
                  <a href="javascript:;"
                      className="flex items-center justify-between text-gray-500 text-sm lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 lg:mr-6 md:mb-0 md:mr-3">Home</a>
              </li>
              <li>
                  <a href="javascript:;"
                      className="flex items-center justify-between text-gray-500 text-sm lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 lg:mr-6 md:mb-0 md:mr-3">About
                      us</a>
              </li>
              <li>
                  <a href="javascript:;"
                      className="flex items-center justify-between text-gray-500 text-sm lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 lg:mr-6 md:mb-0 md:mr-3">Contact</a>
              </li>
              <li>
<button
  className="relative bg-[#4b48ff] text-white font-medium text-[17px] px-4 py-[0.35em] pl-5 h-[2.8em] rounded-[0.9em] flex items-center overflow-hidden cursor-pointer shadow-[inset_0_0_1.6em_-0.6em_#714da6] group"
>
  <span className="mr-10">Login</span>
  <div
    className="absolute right-[0.3em] bg-white h-[2.2em] w-[2.2em] rounded-[0.7em] flex items-center justify-center transition-all duration-300 group-hover:w-[calc(100%-0.6em)] shadow-[0.1em_0.1em_0.6em_0.2em_#7b52b9] active:scale-95"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      className="w-[1.1em] transition-transform duration-300 text-[#7b52b9] group-hover:translate-x-[0.1em]"
    >
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path
        fill="currentColor"
        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
      ></path>
    </svg>
  </div>
</button>

              </li>
          </ul>
      </div>
  </div>
</div>
</nav>
                                                
        </div>
    )
}

export default Navbar
