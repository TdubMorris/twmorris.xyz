import { useEffect } from "react";
import { Background } from "../components/home/Background";

const websites = [
  "https://www.desmos.com/calculator/vbctrdj2hl",
  "https://www.desmos.com/geometry/rxb3dhgvnf",
  "https://www.desmos.com/calculator/zwvb4hlzyw",
  "https://www.desmos.com/calculator/9i7qmgyowv",
  "https://www.desmos.com/calculator/6fqc1rbzvu",
  "https://www.desmos.com/calculator/h27awsyen1",
  "https://www.shadertoy.com/view/X3Sfzd",
  "https://www.shadertoy.com/view/tclGRl",
  "https://www.shadertoy.com/view/t3c3R2",
  "https://www.shadertoy.com/view/W32GWt"
];

export default function RandomProject() {
  useEffect(() => {
    const randomSite =
      websites[Math.floor(Math.random() * websites.length)];

    window.location.replace(randomSite);
  }, []);

  return (<>
      <Background/>
      <div className="h-screen w-screen p-18">Redirecting...</div>
    </>);
}