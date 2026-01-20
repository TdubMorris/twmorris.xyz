import { useEffect } from "react"
import resume from "/src/assets/resume.pdf"
import github from "/src/assets/images/github-mark-white.svg"
import logo from "/src/assets/images/logo.png"

export const Navbar = ({menuOpen, setMenuOpen}) => {

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);


  return (
    <nav className="fixed w-full top-0 z-40 border-b-black border-b-4 border-dotted bg-black/60 backdrop-blur-md shadow-lg">
      <div className="max-w-[80%] mx-auto px-4 my-2">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="flex items-center px-8">
            <img src={logo} className="h-12"/>
            <div className="px-4 font-bold text-2xl">
              twmorris<span className="text-amber-300">.xyz</span>
            </div>
          </a>
          <div className="w-7 h-5 relative cursor-pointer z-40 lg:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
            &#9776;
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <button onClick={() => document.getElementById('home')?.scrollIntoView()} className="text-white hover:text-amber-300 transition-colors cursor-pointer">
              Home
            </button>
            <button onClick={() => document.getElementById('about')?.scrollIntoView()} className="text-white hover:text-amber-300 transition-colors cursor-pointer">
              About
            </button>
            <button onClick={() => document.getElementById('projects')?.scrollIntoView()} className="text-white hover:text-amber-300 transition-colors cursor-pointer">
              Projects
            </button>
            <a href="https://github.com/TdubMorris" target="_blank">
              <img src={github} className="size-8"/>
            </a>
            <a download="Toby-Resume" href={resume}>
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