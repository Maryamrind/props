
import Students from "./components/students";

export default function Home() {
const name="Maryam";
const city="Karachi";
const age= 20;
const qualifications="B.com";
  return (
    <div> 
  <Students name = {name} city= {city} age={age} qualifications={qualifications}/>
  
  </div>
  );
}
