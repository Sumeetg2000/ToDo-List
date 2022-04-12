import React, { useEffect, useState } from 'react';
import Today from './today'
import TodoData from './taskList'
import './ToDo.css'
import InputTask from './inputTask';

const getTodoItems = () => {
        const storageList = localStorage.getItem("Tasks");
        
        if (storageList) {
        return JSON.parse(localStorage.getItem("Tasks"));
        } else {
        return [];
        }
};

        export default function ToDo() {
        const [showInput,setShowInput]=useState(false);
        const [tasks, setTasks]=useState((getTodoItems));
        
        const handleClick =() =>{
                setShowInput(!showInput);
        };

        
        const selectTask = (id) => {
                let selectedTask = tasks.map(task => {
                  return( task.id === id
                    ? { ...task, completed: !task.completed }
                    : { ...task });
                });
                
                setTasks(selectedTask);
                localStorage.setItem("Tasks", JSON.stringify(selectedTask));
              };


        useEffect(()=>{
                if(tasks.length!==0){
                localStorage.setItem("Tasks",JSON.stringify(tasks));
                }

                const newDate=new Date().toLocaleDateString();
                const taskDate=localStorage.getItem("TaskDate");
                if(newDate !== taskDate){
                        localStorage.removeItem("Tasks");
                }                
        },[tasks]);

        return (
                <div className='container'>
                        <div className='to-do'>
                        <Today />
                        <TodoData selectTask={selectTask} tasks={tasks}/>
                        
                        {showInput ?
                        <InputTask setTasks={setTasks} setShowInput={setShowInput}/> :
                        <button onClick={handleClick} className='addTask'>+</button>}
                        </div>
                </div>
        );
}
