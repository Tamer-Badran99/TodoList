import React, { Fragment } from 'react';


function Info({Item,deleFunc})
{

    const sp1 = {display:"inline-block",width:"53%",backgroundColor:"#fff",color:"#48519f",padding:"10px 16px",border:"0.1px solid #eee"};
    const sp2 = {display:"inline-block",width:"32%",backgroundColor:"#fff",color:"#48519f",padding:"10px 16px",border:"0.1px solid #eee"};
    const sp3 = {display:"inline-block",width:"15%",backgroundColor:"#fff",color:"#48519f",padding:"10px 16px",border:"0.1px solid #eee",cursor:"pointer"};


    const t = Item.map(({name,age},idx) => {
       
        return ( <div style={{width:"100%"}} key={idx}>
                    <span style={sp1}>{name}</span>
                    <span style={sp2}>{age}</span>
                    <span onClick={(e) => deleFunc(e,idx)}  style={sp3}>X</span>
                 </div>
        )
    }) 

    const leng = Item.length;
    const sty = {backgroundColor:"#fff",color:"#48519f",display:"inline-block",width:"100%",padding:"10px"}

    return (
        <Fragment>
            {leng === 0 ? <span style={sty}>There is no item to show</span> : t }
        </Fragment>
    );
}

export default Info;