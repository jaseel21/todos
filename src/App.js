import React,{useState} from "react";
import "./App.css"



function App() {

const [toDo,setToDo]=useState('')
const [toDos,setToDos]=useState([])


  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input  onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setToDos([...toDos,{id:Date.now(),delete:false, text:toDo, status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
      {
        toDos.map((obj)=>{

          if(obj.delete===!true){
            return(
            
              <div className="todo">
  
                <div className="left">
                  <input onChange={(e)=>{
                    console.log(e);
                    console.log(obj);
                    setToDos(toDos.filter(obj2=>{
                      console.log(obj2);
                      if (obj2.id===obj.id){
                        obj2.status=e.target.checked
                      }
                      return obj2
  
                    }))
                  }}  type="checkbox" name="" id="" />
                  
                  <p>{obj.text}</p>
                </div>
  
  
                <div className="right">
                  <i onClick={()=>setToDos(toDos.filter(obj3=>{
                    if(obj3.id===obj.id){
                      obj.delete=true
                      console.log(obj3);
                    }
                    return obj3
  
                  }))}  className="fas fa-times"></i>
                </div>
              </div>
           
            )
          }

          
         
        })
        
      }

      {
        toDos.map((obj)=>{

          if(obj.delete===false){
            if(obj.status){
              return(<h1>{obj.text}</h1>)
            }
          }
          
          return null;
        })
      }
       </div>
      
    </div>
  );
}

export default App