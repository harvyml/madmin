import React, { useState, useEffect, useContext, useMemo } from "react"
//custom hook
import useFetch from "./components/hooks/useFetch"
//bootstrap
import useUser from "./components/useUser"
import { BoardContext } from "./components/BoardContext"
import { Card, ListGroup, Table, Modal, Button, Form } from "react-bootstrap"
import axios from "axios"

const Tasks = () => {
    const user = useUser()
    const todos = useFetch("/api/todos")
    const [createModal, setCreateModal] = useState(false)
    return (
        <>
            <div className="users-component">
                <div className="users-list">
                    <Card>
                        <Card.Header className="flex">
                            <Button onClick={() => setCreateModal(true)} ><i className="material-icons">add</i></Button>
                        </Card.Header>
                        <ListGroup variant="flush">

                        </ListGroup>
                    </Card>
                </div>
                <CreateModal show={createModal} handleClose={() => setCreateModal(false)} userId={user._id} />
                <All_Tasks all_tasks={todos}/>
            </div>
        </>
    )
}


const Task = ({ text, _id }) => {
    return (
        <ListGroup.Item>
            <div className="task">
                <div className="text">
                    <p>{text}</p>
                </div>
                <div className="task-crud">
                    <ul>
                        <li><img src="./public/assets/check_green.png" /></li>
                        <li><span className="material-icons" myaction="edit" task_id={_id}>create</span></li>{/* 'create' is just the icon for edit*/}
                        <li><span className="material-icons" myaction="delete" task_id={_id}>delete</span></li>
                    </ul>
                </div>
            </div>
        </ListGroup.Item>
    )
}


const All_Tasks = ({all_tasks}) => {
    const [editModal, setEditModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const [taskId, setTaskId] = useState("")

    function handleTaskAction(e) {
        const task_id = e.target.getAttribute("task_id")
        setTaskId(task_id)
        const action = e.target.getAttribute("myaction")
        console.log(action, task_id)
        if(action == "edit"){
            setEditModal(true)
        }else if(action == "delete"){
            setDeleteModal(true)
        }
    }

    return (
        <div className="all-tasks-container">
            <div className="all-tasks" onClick={handleTaskAction}>
                {
                    all_tasks.map((task, i) => (
                        <Task {...task} key={i} />
                    ))
                }
            </div>
            <EditModal show={editModal} handleClose={() => setEditModal(false)} task_id={taskId}/>
            <DeleteModal show={deleteModal} handleClose={() => setDeleteModal(false)} task_id={taskId}/>
        </div>
    )
}

const EditModal = ({handleClose, show }) => {
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Edit your todo</Form.Label>
                            <Form.Control as="textarea" rows={3} onChange={updateText} defaultValue={defaultText}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

const DeleteModal = ({show, handleClose, task_id}) => {
    function delete_todo() {
        remove_todo(task_id)
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete a todo!</Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                    </Button>
                <Button variant="primary" onClick={delete_todo}>
                    Save Changes
                    </Button>
            </Modal.Footer>
        </Modal>
    )
}

const CreateModal = ({ show, handleClose }) => {
    const [text, setText] = useState("")

    function updateText(e) {
        console.log(e.currentTarget.value)
        setText(e.currentTarget.value)
    }

    function submit_todo() {
        add_todo(text)
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Create a todo!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Write your todo here</Form.Label>
                        <Form.Control as="textarea" rows={3} onChange={updateText} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                    </Button>
                <Button variant="primary" onClick={submit_todo}>
                    Save Changes
                    </Button>
            </Modal.Footer>
        </Modal>
    )
}

function add_todo(text) {
    axios.post("/api/createtodo", { text }).then(snap => {
        console.log(snap.data)
        window.location.href = "/panel?tab=2"
    }).catch(err => {
        console.log(err)
    })
}

function remove_todo(_id) {
    axios.post("/api/removetodo", {_id: _id}).then(snap => {
        console.log(snap.data)
        window.location.href = "/panel?tab=2"
        return snap
    }).catch(err => console.log(err))
}

function edit_todo(id, text) {
    axios.post("/api/edittask", { id, text }).then(snap => {
        window.location.href = "/panel?tab=2"
        console.log(snap.data)
    }).catch(err => console.log(err))
}



export default Tasks;