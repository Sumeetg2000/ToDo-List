import './reviewTask.css'

function Taskreview(task){
    return(
        <li className={task.completed?"completed task":"task"}>
            <span>{task.description}</span>
            <span className="circle"></span>
        </li>
    );
}
export default Taskreview;