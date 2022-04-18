import { useEffect,useState } from "react";
import css from "./student.css";
export const ShowStudents = () => {

const [Data,setData]=useState([]); 
var d;

useEffect(()=>{
getData();
},[])

async function getData(){
    const data=await fetch("http://localhost:8080/students").then((d)=>d.json());
    setData(data);

}

function handleChange(e){

// var val;
// console.log(e.taget.val)
//   if(e.target.className=="sortby"){
// val=e.target.value;
// }

// if(e.target.className=="sortorder"){

// if(e.target.value=="asc"){
//   console.log(e.target.val)
//   d=[...Data].sort((a,b)=>{
// return Number(a.val)-Number(b.val);
//   })
// }
// if(e.target.value=="desc")
// {
//   d=[...Data].sort((a,b)=>{
//     return Number(b.val)-Number(a.val);
//       })



// console.log(d)    }
// }


// console.log(e.target.value)
if(e.target.value=="age"){
  const d= [...Data].sort((a,b)=>{
return Number(a.age)-Number(b.age);

  })
console.log(d)
  setData(d);
}
if(e.target.value=="tenth_score"){
  const d= [...Data].sort((a,b)=>{
return Number(a.tenth_score)-Number(b.tenth_score);

  })
console.log(d)
  setData(d);
}
if(e.target.value=="twelth_score"){
  const d= [...Data].sort((a,b)=>{
return Number(a.twelth_score)-Number(b.twelth_score);

  })
console.log(d)
  setData(d);
}
}


    return (
      <div>
        <div className="controls">
          <div>
            Sort By:{" "}
            <select onChange={handleChange}
              // select dropdown needs both value and onChange
              className="sortby"
            >
              <option value="first_name">First Name</option>
              <option value="gender">Gender</option>
              <option value="age">Age</option>
              <option value="tenth_score">10th Score</option>
              <option value="twelth_score">12th Score</option>
            </select>
          </div>
          <div>
            Order:
            <select
            
              // select dropdown needs both value and onChange
              className="sortorder"
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
          <button 
          
          className="sort">sort</button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Age</th>
              <th>10th Score</th>
              <th>12th Score</th>
              <th>Branch</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {/* populate all rows like below: */}

            {Data.map((data)=>( <tr className="row">
              <td className="first_name">{data.first_name}</td>
              <td className="last_name">{data.last_name}</td>
              <td className="email">{data.email}</td>
              <td className="gender">{data.gender}</td>
              <td className="age">{data.age}</td>
              <td className="tenth_score">{data.tenth_score}</td>
              <td className="twelth_score">{data.twelth_score}</td>
              <td className="preferred_branch">{data.preferred_branch}</td>
            </tr>))}
           
          </tbody>
        </table>
      </div>
    );
  };