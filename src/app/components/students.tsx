export default function Students(data:{name:string,city:string,age:number,qualifications:string}) {
 
    return (
      <div> 
          
   <h1 style={{backgroundColor :"grey", fontSize:"30px", margin:"10px", border:"black 2px solid", borderRadius:"10px" }}>Students Data:</h1>
       <p style={{backgroundColor :"lightgreen", fontSize:"20px", margin:"10px", border:"black 2px solid", borderRadius:"10px" }}>Name:{data.name}</p>
       <p style={{backgroundColor :"lightgreen", fontSize:"20px", margin:"10px", border:"black 2px solid", borderRadius:"10px" }}>City:{data.city}</p>
       <p style={{backgroundColor :"lightgreen", fontSize:"20px", margin:"10px", border:"black 2px solid", borderRadius:"10px" }}>Age:{data.age}</p>
       <p style={{backgroundColor :"lightgreen", fontSize:"20px", margin:"10px", border:"black 2px solid", borderRadius:"10px" }}>Qualifications:{data.qualifications}</p>
       
      </div>
    );
  }