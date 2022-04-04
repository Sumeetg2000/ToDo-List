import TaskReview from './reviewTask'
import './taskList.css'

export default function TodoData({tasks, selectTask}){

    return(     
        <div className='displayTask'>  
        <ul>
            {tasks.map((task)=>{
                return(
                    <TaskReview  key={task.id} task={task} selectTask={selectTask}/>
                );
            })}
        </ul>
        </div>
    );
    
}
