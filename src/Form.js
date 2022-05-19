
import { render } from "@testing-library/react";
import { useState } from "react";

function MyForm() {
  const [name, setName] = useState("");
  const [Dept,SetDept] = useState("");
  const [rating,setRating] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

   render(<div id="display"><p className="para">{name} <br/>

{Dept} <br/>
{rating}
</p>
</div>
   );

  
  }

 

 
  

  

  return (
    <form onSubmit={handleSubmit} className="Form">
    
        <input className="name" placeholder="Name"
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />


      <br/><br/>

        <input placeholder="Department" className="text"
          type="text" 
          value={Dept}
          onChange={(e) => SetDept(e.target.value)}
        />
        
    
      <br/><br/>
:
        <input placeholder="Rating"  className="rating"
          type="Number" 
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        
      
      <br/><br/>
      <input className="btn" type="Submit" />
    </form>




  )
  };


export default MyForm;