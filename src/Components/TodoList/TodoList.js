import React, { useState } from 'react';
import AddItem from './AddItem/AddItem';
import Info from './Info/Info';
import './TodoList.css';

function TodoList() {

    const [item, setItem] = useState([]);
    
    const addHandler = (name,age) => {
      
         setItem(currItem => [...currItem,{name,age}]);
    }
 
   const delHandler = (e,indx) => {
        const deltOp = item.filter((el,idx) => idx !== indx);
        setItem(deltOp);
   }
   

    return (
       <div style={{width:"600px", margin:"170px auto 15px",textAlign:"center"}}>

           <h1 style={{color:"#fff",marginBottom:"27px"}}>Todo List Using React Js</h1>

           <div className="head">
               <span>Name</span>
               <span>Age</span>
               <span>Action</span>
            </div>

           <Info Item={item}  deleFunc={delHandler} />
           <AddItem addInf={addHandler} />
           
       </div>
    );
}
export default TodoList;