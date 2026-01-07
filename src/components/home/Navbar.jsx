import { useEffect } from "react"

export const Navbar = ({menuOpen, setMenuOpen}) => {

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);


  return (
    <nav className="fixed w-full top-0 z-40 border-b-black border-b-4 border-dotted bg-black/60 backdrop-blur-md shadow-lg">
      <div className="max-w-[80%] mx-auto px-4 my-2">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="flex items-center px-8">
            <img src="./src/assets/images/logo.png" className="h-12"/>
            <div className="px-4 font-bold text-2xl">
              twmorris<span className="text-amber-300">.xyz</span>
            </div>
          </a>
          <div className="w-7 h-5 relative cursor-pointer z-40 lg:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
            &#9776;
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-amber-300 transition-colors">
              Home
            </a>
            <a href="#about" className="text-white hover:text-amber-300 transition-colors">
              About
            </a>
            <a href="#projects" className="text-white hover:text-amber-300 transition-colors">
              Projects
            </a>
            <a href="https://github.com/TdubMorris" target="_blank">
              <img src="/src/assets/images/github-mark-white.svg" className="size-8"/>
            </a>
            <a download="Toby-Resume" href="./src/assets/resume.pdf">
              <button className="bg-transparent px-5 py-1.5 text-center border-amber-50 border-2 rounded-full cursor-pointer hover:border-amber-400 hover:text-amber-200 transition-colors">
                <i className="fa fa-download"/>&nbsp;&nbsp;&nbsp;Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}