import me_jpg from "/src/assets/images/me.jpg"
import resume from "/src/assets/resume.pdf"
import github from "/src/assets/images/github-mark-white.svg"

export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center flex-col relative">
      <div className="z-10 flex flex-col md:flex-row justify-between items-center space-y-12 md:space-x-14 m-12">
        <div className="text-left px-4 py-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-linear-to-t/hsl from-orange-500 to-yellow-300 bg-clip-text text-transparent py-2">
            Hello, I'm Toby!
          </h1>
          <p className="text-gray-500 text-lg mb-8 max-w-lg mx-auto">
            I'm a sophmore at the University of Wisconsin-Milwaukee. I have a strong passion to create and learn, and a desire to help others.
            My goal is to make great apps and programs for everyone to use and enjoy.
          </p>
          <div className="flex flex-row space-x-10">
              <a className="flex flex-row text-center items-center space-x-3 hover:text-yellow-400 transition-colors" href="https://github.com/TdubMorris" target="_blank">
              <p>Github</p>
                <img src={github} className="size-8"/>
              </a>
            <a download="Toby-Resume" href={resume}>
              <button className="bg-transparent px-5 py-1.5 text-center border-amber-50 border-2 rounded-full cursor-pointer hover:border-amber-400 hover:text-amber-200 transition-colors text-nowrap mx-3">
                <i className="fa fa-download"/>&nbsp;&nbsp;&nbsp;Resume
              </button>
            </a>
          </div>
        </div>
        <img src={me_jpg} className="max-w-[75%] md:max-w-sm lg:max-w-lg rounded-2xl object-cover"/>
      </div>
    </section>
  )
}