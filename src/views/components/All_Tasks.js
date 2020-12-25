import React, { useState } from "react"
import { ListGroup } from "react-bootstrap"
import axios from "axios"
import Task from "./Task"
import EditModal from "./EditModal"
import DeleteModal from "./DeleteModal"

const All_Tasks = ({all_tasks}) => {  
    const [showEdit, setShowEdit] = useState(false)
    const [showDelete, setShowDelete] = useState(false)
    const [textForModal, setTextForModal] = useState("")
    const [taskId, setTaskId] = useState("")
    function handleTaskAction(e){
        axios.get("/api/todo?_id=" + e.target.getAttribute("task_id")).then(snap => {
            console.log("my text: " + snap.data.text)
            setTextForModal(snap.data.text)
            setTaskId(e.target.getAttribute("task_id"))
            if(e.target.getAttribute("myaction") == "delete"){
                setShowDelete(true)
            }else if(e.target.getAttribute("myaction") == "edit"){
                setShowEdit(true)
            }
        })
    }
    return (
        <div className="all-tasks-container margined-top">
            <div className="all-tasks" onClick={handleTaskAction}>
                <ListGroup>
                {
                    all_tasks.map((task, i) => (
                        <Task {...task} key={i} task_id={task._id} text={task.text}/>
                    ))
                }
                </ListGroup>
            </div>
            {showEdit ? <EditModal defaulttext={textForModal} handleClose={() => setShowEdit(false)} task_id={taskId}/> : null}
            {showDelete ? <DeleteModal handleClose={() => setShowDelete(false)} task_id={taskId}/> : null}
        </div>
    )
}

export default All_Tasks