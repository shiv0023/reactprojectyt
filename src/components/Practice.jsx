import React, { useEffect, useState } from "react";
import ReactProject1 from "./ReactProject1";
const Practice=()=>{
const [data,setdata]=useState(0)
 async function Fetchdata(){
const url="https://jsonplaceholder.typicode.com/todos/1";
let data= await fetch(url)
let myData= await data.json();
setdata(myData)
console.log(myData);

}
useEffect(()=>{
  Fetchdata();
},[])

return(
  <div>

<div style={{color:"red",backgroundColor:"black",width:'200px',flexDirection:'row',textAlign:'center'}}>
{data.title}
<p style={{color:'green',fontSize:'20px'}}>{data.id}</p>
<h2>{data.userId}</h2>
</div>
</div>

)



}
export default Practice;