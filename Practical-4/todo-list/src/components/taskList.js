import TaskReview from './reviewTask'
import './taskList.css'

function todoData(){
    const tasks=[{
        key:1,
        description: "Buy new sweat shirt",
        completed:true
    },
    {
        key:2,
        description: "Begin promotional phase",
        completed:true
    },
    {
        key:3,
        description: "Read an article",
        completed:false
    },
    {
        key:4,
        description: "Try not to fall asleep",
        completed:false
    },
    {
        key:5,
        description: "Watch 'sherlock'",
        completed:false
    },
    {
        key:6,
        description: "Begin QA for the product",
        completed:false
    },
    {
        key:7,
        description: "Go for a walk",
        completed:false
    }];
    return(
        <ul>
            {tasks.map((task)=>{
                return(
                    <TaskReview key={task.key}{...task}/>
                );
            })}
        </ul>
    );
    
}
export default todoData;