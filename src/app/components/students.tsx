export default function Students(data:any) {
 
    return (
      <div> 
          
       {/* <h1><b><u>Students Data</u></b></h1>
       <h3>Name:{data.name}</h3>
       <p>City:{data.city}</p> */}
       <h1><b><u>Car Data</u></b></h1>
       <h3>Name:{data.object.name}</h3>
       <p>Model:{data.object.model}</p>
      </div>
    );
  }