import React, { useEffect, useState } from "react";
import './inputTask.css'

export default function InputTask({setTasks, setShowInput}) {
    const[curTask,setCurTask]=useState("");


    const changeHandler=(e)=>{
        setCurTask(e.target.value);
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        const taskDate=new Date().toLocaleDateString();
        localStorage.setItem("TaskDate",taskDate);

        const todoTask=[{
            id:Math.random()*1000,
            description:curTask,
            completed:false
        }];
        
        setTasks((tasks)=>[...tasks,...todoTask]);
        setCurTask("");
    }

useEffect(()=>{
    const handleKey =(event)=>{
        if(event.key ==='Escape'){
            setShowInput(false);
        }
    };
    document.addEventListener("keydown",handleKey);
    return ()=>{
        document.removeEventListener("keydown",handleKey);
    };
},[setShowInput]);

    return(
        <form onSubmit={submitHandler}>
            <div className="inputBlock">
                <input type="text" 
                       value={curTask} 
                       className="inputBox" 
                       placeholder="Enter your Task "
                       onChange={changeHandler}
                       required
                       autoFocus                          
                    />
            </div> 
        </form>
    )
}
