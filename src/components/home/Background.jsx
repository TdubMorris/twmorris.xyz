
export const Background = () => {
  return (
    <div className="fixed size-full min-h-512 bg-black -z-100">
      <div className="fixed h-full w-full -z-100 animate-bg">
        <div className="absolute top-0 left-0 translate-[-50%] size-[300vh] bg-radial from-blue-800/50 to-transparent to-50% -z-100"></div>
        <div className="absolute bottom-0 right-0 translate-[50%] size-[300vh] bg-radial from-amber-800/50 to-transparent to-50% -z-100"></div>
      </div>
      <div className="absolute t-0 l-0 w-full h-full min-h-512 bg-[url(/src/assets/images/noise.png)] -z-100"></div>
    </div>
  )
}

