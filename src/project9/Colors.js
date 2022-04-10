import React, { useState } from 'react';
import './App.css'
import Values from 'values.js';
import Printer from './Printer';

const Colors=()=>{
    const [color,setColor]=useState();
    var [list,setList]=useState(new Values('hotpink').all(10));
    var [error,setError] = useState(false);
    var before='blue';
    const submitHandler=(e)=>{
        e.preventDefault();
        try{
            let colors=new Values(color).all(10);
            setError(false);
            setList(colors);
            console.log(list);
        }
        catch(error){
            setError(true);
            console.log(error);
        }
    }
    return(
        <>
            <div style={{ color: `${before}` }} >
                <div className="head">
                    <h1>Color Genarator</h1>
                </div>

                <form onSubmit={submitHandler}>
                    <label htmlFor="col" className={` ${error && 'wrong'} `} >Pick Color : </label>
                    <input type="text" name="color" id="col" value={color} onChange={(e)=>setColor(e.target.value)}
                    className={`${error ? 'inpt' : null }`}
                    placeholder='#f25cf2'
                    />
                    <button className='btn' >Genarate</button>
                </form>

                
                <div className="boxes">
                    {
                        list.map((ele,index)=>{
                            return(
                                <div key={index} >
                                <Printer  {...ele} index={index} hexColor={ele.hex}  />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Colors;