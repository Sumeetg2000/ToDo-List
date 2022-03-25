import React from 'react';
import Today from './today'
import Task from './taskList'
import './ToDo.css'


function ToDo() {
        return (
                <div className='container'>
                        <div className='to-do'>
                        <Today />
                        <Task />
                        <button className='addTask'>+</button>
                        </div>
                </div>
        );
}

export default ToDo;