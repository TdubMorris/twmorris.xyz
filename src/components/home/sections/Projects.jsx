import { ProjectCard } from "../ProjectCard";

export const Projects = () => {
    
  return (<section id="projects" className="min-h-screen p-16">
    <h1 className="text-5xl font-bold bg-linear-to-t /hsl from-orange-500 to-yellow-300 bg-clip-text text-transparent p-10 text-left w-96">
      My Projects
    </h1>

    <div className="grid grid-cols-1 2xl:grid-cols-2 gap-8">

      <ProjectCard 
      title="Space Sage" 
      img="/src/assets/images/spacesage.png" 
      tags="Game Design, Version Control, Godot, Art"
      link="https://github.com/TdubMorris/Space-Sage"
      linkText="Take me there!"
      >
        An open-source racing game made using the Godot game engine. Currently in devlopment but has
        a fully working test level and the start of a level editor. The game is being devloped for android and PC. 
        Roadmap includes a basic campaign, fully functioning level editor, and possibly LAN multiplayer.
      </ProjectCard>


      <ProjectCard
      title="Countaclysm"
      img="/src/assets/images/countaclysm.png"
      tags="Game Design, Cersion Control, Godot, Collaboration"
      link="https://tdubmorris.itch.io/countaclysm"
      linkText="Take me there!"
      >
        A fully completed 3d game made for the 2025 Game Design Club Spooky Jam at UWM. The game features a lab to navigate, and keys and keycards are
        used to open doors. I worked as the lead programmer in a group with 2 other people when making this game.
      </ProjectCard>

      <ProjectCard
      title="Data Structures and Algorithms"
      img=""
      tags="Java, Version Control, Debugging"
      link="https://github.com/TdubMorris/cs351-coursework"
      linkText="Completed Coursework"
      >
        In fall of 2025 I finished my data structures and algorithms class at UWM where I programmed various data structures to pass tests and do tasks.
        Completed data structures includes dynamic arrays, linked lists, binary search trees, hash maps, graphs, and linked lists. 
        Sorting algorithms were also a big focus of the class and includes insertion sort, selection sort, merge sort, quick sort, and heap sort.
      </ProjectCard>

      <ProjectCard
      title="Random Side Projects"
      img="/src/assets/images/domaincolor.png"
      tags="Java, Version Control, Debugging"
      link="/random"
      linkText="Suprise me!"
      >
        I have a lot of random side projects including demonstrations in the online graphing calculator known as Desmos, and various fragment shaders made using GLSL on Shadertoy.
        Most of these were made in just a couple hours and visualize various things I learned that I thought were interesting.
        Click the link below to see a random one!
      </ProjectCard>

    </div>

  </section>)
}