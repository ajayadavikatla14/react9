import React, { useEffect, useState }  from 'react'

const Printer = ({rgb,weight,index,hexColor}) => {
    const [copy,setCopy]=useState(false);
    console.log(rgb);
    const bg=rgb.join(',');
    const hex=`#${hexColor}`;
    console.log(hexColor);


    useEffect(()=>{
      const timeout=setTimeout(()=>{
        setCopy(false)
      },3000)

      return ()=> clearTimeout(timeout);
    },[copy])


  return (
    <>
        <div className="box" style={{backgroundColor:`rgb(${bg})`, color: `${index >10 ? 'white' : 'hotpink'}`  }} 
        onClick={()=>{
          setCopy(true)
          navigator.clipboard.writeText(hex);
        }}
        >
            <p>{weight}%</p> 
            <p>{hex}</p>
            {copy && <p>Copied</p> }
        </div>
    </>
  )
}

export default Printer