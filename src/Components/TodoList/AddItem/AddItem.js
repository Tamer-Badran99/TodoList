import React, { useRef } from 'react';


function AddItem({addInf}) {

    const nameR = useRef(null);
    const ageR = useRef(null);

    const addItem = () => {
         const name = nameR.current.value;
         const age = ageR.current.value;
         
         if(name.length === 0 || age.length === 0)
         {
            alert("Please Enter name and age");
         }
         else {
         addInf(name,age);
         }

         nameR.current.value = "";
         ageR.current.value = "";
    }
 

    return (
       <div className="add">
           <input ref={nameR} type="text" name="userName" placeholder="Enter name..." />
           <input ref={ageR} type="number" name="age" placeholder="Enter age..." />
           <button onClick={addItem} >Add</button>
       </div>
    );
}

export default AddItem;