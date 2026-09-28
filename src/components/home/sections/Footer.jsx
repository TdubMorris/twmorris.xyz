
export const Footer = () => {

  function creativeMode() {
    document.designMode = 'on';
    alert("Creative mode has been enabled.");
  }

  return (<div className="bg-[#060e1a] w-full px-[5%] py-4 text-gray-400 flex justify-between items-center">
    
    <p>
      Copyright © 2026 Toby Morris <br/>
      Built using React, Vite, and Tailwind CSS <br/>
      No AI was used in making this website.
    </p>
    <div className="flex flex-col text-right">
    <a href="/secret" className="underline hover:text-white">Tell me a secret</a>
    <button onClick={creativeMode} className="underline hover:text-white cursor-pointer">Enable creative mode</button>
    </div>


  </div>)
}