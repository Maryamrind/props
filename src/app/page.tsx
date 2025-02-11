import Image from "next/image";
import Students from "./components/students";

export default function Home() {
// let name="Maryam";
// let city="Karachi";
let obj={
  name: "Civics",
  model:"cv2234"
}
  return (
    <div> 
  {/* <Students name = {name} city= {city} /> */}
  <Students object = {obj}  />
  </div>
  );
}
