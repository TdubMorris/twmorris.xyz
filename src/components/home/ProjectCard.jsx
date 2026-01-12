/*
  Props:
  children - body of text to be displayed
  title - String for the title of the card
  img - Path to image file
  link - url for the link
  linkText - text for the linkl
  tags - list of blue tag things as a string seperated by a comma
*/
export const ProjectCard = (props) => {
  
  const tags = props.tags.split(", ").map(text =>
  <div className="bg-blue-950 text-blue-600 rounded-full px-3 text-nowrap">{text}</div>
  )

  return (<div className="relative bg-black rounded-2xl lg:h-72 border-gray-600 border-dashed border-2 overflow-hidden flex flex-col lg:flex-row">
    <div className="flex flex-col justify-between p-4">
      <div className="mb-4">
        <h1 className="text-amber-500 text-2xl font-bold mb-2">{props.title}</h1>
        <p className="text-gray-500">{props.children}</p>
      </div>
      <div className="w-full flex flex-col md:flex-row space-y-3 items-start lg:items-end justify-between">
        <div className="flex flex-wrap-reverse gap-2">
          {tags}
        </div>
        <a className="font-bold text-blue-600 hover:underline mx-2 text-nowrap" href={props.link} target="_blank">{props.linkText}</a>
      </div>
    </div>
    <img src={props.img} className={`h-full lg:w-full object-cover ${props.img ===""?"hidden":""}`}/>
  </div>)
}