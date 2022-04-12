import './reviewTask.css'

export default function Taskreview({task , selectTask}){    
    const select = () => {
        selectTask(task.id);
      };
    return(
        <li className={task.completed?"completed task":"task"} >
            <span>{task.description}</span>
            <span
             onClick={select}
            className="circle" />
        </li>
    );
}