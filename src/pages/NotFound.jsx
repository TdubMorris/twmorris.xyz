import { Background } from "../components/home/Background"

export const NotFound = () => {
  return (<>
  <Background/>
  <div className="h-screen w-screen flex justify-center items-center flex-col">
      <h1 className="text-9xl font-bold italic">404</h1>
      <p className="text-white/10 mb-[5%]">Let the mind wander.</p>
      <a className="font-bold text-blue-600 hover:underline mx-2 text-nowrap" href="/" target="_self">Return to home page</a>
  </div>
  </>)
}