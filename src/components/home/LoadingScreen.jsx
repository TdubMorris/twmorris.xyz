import { useEffect, useState } from "react";

const loadingTexts = [
  "saying hello world...",
  "getting ready...",
  "beautifying...",
  "setting up...",
  "rendering stuff...",
  "loading animation...",
  "squashing bugs...",
  "eating cheese...",
  "parsing gibberish...",
  "compiling humor...",
]

const getRandomObject = (array) => {
  const randomObject = array[Math.floor(Math.random() * array.length)];
  return randomObject;
};

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState(() => getRandomObject(loadingTexts));

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index))
      index++;

      if (index > fullText.length) {
        clearInterval(interval)
        setTimeout(() => {
            onComplete();
        }, 1000)
      }
    }, 50);
 
    return () => clearInterval(interval)
  }, [onComplete]);


  return (
    <div className="fixed inset-0 z-50 bg-[#060613] text-gray-100 flex flex-col items-left justify-end p-[5%]">
      <div className="mb-4 text-4xl font-mono font-bold">
        {text}<span className="animate-blink">|</span>
      </div>

      <div className="w-64 h-0.5 bg-amber-900 rounded-full relative overflow-hidden">
        <div className="w-[50%] h-full bg-amber-300 shadow-[0_0_15px_#112647FF] animate-loading-bar"></div>
      </div>
   </div>
  )
}