import React from 'react'
import taskcss from './task.module.css'
function Task(arr) {
  return (
 
<div style={{paddingRight:'20px'}} className={taskcss.output}>
   
    
    
    <button  className={taskcss.btn} style={{marginLeft:"0px", paddingRight:"15px"}}><i class="fas fa-heart"></i>
</button>
<p className={taskcss.task}>{arr.val}</p>
    <button className={taskcss.btn} ><i onClick={()=>delete(arr.ind)} class="fas fa-trash"></i></button>
    </div>
  )
}

export default Task;