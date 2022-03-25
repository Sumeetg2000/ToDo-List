import { Component } from 'react';
import './today.css'

class todayDetails extends Component{
    render(){
        return(
            <div className='today'>
                <div className='fullDate'>
                    <div className='date'>
                        <span>{new Date().toLocaleString("en-US", { day : '2-digit'})}</span>
                    </div>
                    <div className='month'>
                        <p>{new Date().toLocaleString("en-US", { month: "short" })}</p>
                        <p>{new Date().getFullYear()}</p>
                    </div>
                </div>
                <div className='day'>
                    <p>{new Date().toLocaleString("en-US", { weekday: "long" })}</p>
                </div>
            </div>
        )
    }
}
export default todayDetails;