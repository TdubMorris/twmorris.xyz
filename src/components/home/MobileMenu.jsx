import github from "/src/assets/images/github-mark-white.svg"
import resume from "/src/assets/resume.pdf"

export const MobileMenu = ({menuOpen, setMenuOpen}) => {
  return (
      <div className=
      {`fixed top-0 left-0 w-full bg-black/50 backdrop-blur-lg border-gray-950 border-r-2 z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out 
        ${menuOpen ? "h-full opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}
      >

        <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer">
          &times;
        </button>

        <button onClick={() => {document.getElementById('home')?.scrollIntoView(); setMenuOpen(false)}} className={`text-2xl text-white my-4 transform transition-transform duration-300 hover:text-amber-200 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          Home
        </button>
        <button onClick={() => {document.getElementById('about')?.scrollIntoView(); setMenuOpen(false)}} className={`text-2xl text-white my-4 transform transition-transform duration-300 hover:text-amber-200 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          About
        </button>
        <button onClick={() => {document.getElementById('projects')?.scrollIntoView(); setMenuOpen(false)}} className={`text-2xl text-white my-4 transform transition-transform duration-300 hover:text-amber-200 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          Projects
        </button>
        <a download="Toby-Resume" href={resume}>
          <button className="bg-transparent px-5 py-1.5 my-10 text-center border-amber-50 border-2 rounded-full cursor-pointer hover:border-amber-400 hover:text-amber-200 transition-colors">
            <i className="fa fa-download"/>&nbsp;&nbsp;&nbsp;Resume
          </button>
        </a>
        <a href="https://github.com/TdubMorris" target="_blank">
          <img src={github} className="size-8"/>
        </a>
        </div>
  )
}