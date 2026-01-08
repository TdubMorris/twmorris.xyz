import stem from "/src/assets/images/stem.jpg"

export const About = () => {

  return (<section id="about" className="min-h-128 flex justify-center items-center py-32 bg-black">
    
    <div className="flex justify-between items-center flex-col md:flex-row space-y-12 md:space-x-16 p-12">
      <div className="">
      <h1 className="text-5xl font-bold mb-6 bg-linear-to-t/hsl from-orange-500 to-yellow-300 bg-clip-text text-transparent py-2 text-center">
          About Me
      </h1>
      <p className="text-gray-500 max-w-lg">
        I'm a computer science enthusiast with interests in game and web development.
        I also enjoy math and science, and love working with data. Learning and improving is my top priority during all my projects.
      </p>
      </div>
      <div>
        <img src={stem} className="w-lg rounded-3xl"/>
        <span className="text-gray-500">Golda Meir STEM club, 2023</span>
      </div>
    </div>

  </section>)
}