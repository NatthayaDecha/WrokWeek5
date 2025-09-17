import React, { useState }  from "react";

interface CounterProps{
    initialCount?:number;
}

const CounterButton:React.FC<CounterProps>=({initialCount=0})=>{
    const[count,setCount] = useState<number>(initialCount);
    
     const increment =() =>{
        setCount(prevCount=>prevCount+1);
    }
    const decrement =()=> {
        setCount (count-1);
    }
    const handleClear = () => {
        setCount (0);
    }

    return(
        <div style={{padding:'20px',textAlign:'center'}}>
            <h2>Counter Exercise-Solution</h2>
            <h1 style={{color:'blueviolet'}}>{count}</h1>
            <div style={{margin:'20px',}}>
                 <button type="button" style={{backgroundColor:'red', margin: '10px',color:"white"}} onClick={increment}>+เพิ่ม</button>
                 <button type="button" style={{backgroundColor:'green', margin: '10px',color:"white"}}onClick={decrement}>-ลด</button>
                 <button type="button" style={{backgroundColor:'orange', margin: '10px',color:"white"}}onClick={handleClear}>🔁Reset</button>
            </div>
        </div>
    );
};

export default CounterButton;