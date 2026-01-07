import { Background } from "../components/home/Background"

export const NotFound = () => {
  return (<>
  <Background/>
  <div className="h-screen w-screen flex justify-center items-center flex-col space-y-32">
      <h1 className="text-9xl font-bold italic">404</h1>
      <p className="text-white/10">Let the mind wander.</p>
  </div>
  </>)
}