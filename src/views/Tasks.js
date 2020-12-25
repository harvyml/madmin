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
    const users = useFetch("/api/orderedusers")
    const [createModal, setCreateModal] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const [currentSelectedTask, setCurrentSelectedTask] = useState("")
    function handleTaskAction(e) {
        console.log("add")
        var id = e.target.getAttribute("task_id")
        var action = e.target.getAttribute("")
        console.log(action)
        if (action == "create") {
            setCreateModal(true)
        }
    }
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
                <EditModal show={editModal} />
                <CreateModal show={createModal} handleClose={() => setCreateModal(false)}/>
            </div>
        </>
    )
}


const Task = ({ text, id }) => {
    return (
        <ListGroup.Item>
            <div className="task">
                <div className="text">
                    <p>{text}</p>
                </div>
                <div className="task-crud">
                    <ul>
                        <li><img src="./public/assets/check_green.png"/></li>
                        <li><span class="material-icons" custom_action="edit" task_id={id}>create</span></li>{/* 'create' is just the icon for edit*/}
                        <li><span class="material-icons" custom_action="delete" task_id={id}>delete</span></li>
                    </ul>
                </div>
            </div>
        </ListGroup.Item>
    )
}

const All_Tasks = (all_tasks) => {
    return (
        <div className="all-tasks" onClick={handleTaskAction}>
            {
                all_tasks.map((task, i) => (
                    <Task {...task} key={i} />
                ))
            }
        </div>
    )
}

const EditModal = ({ handleShow, handleClose, show }) => {
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
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

const DeleteModal = () => {

}

const CreateModal = ({show, handleClose}) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Create a todo!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Write your todo here</Form.Label>
                        <Form.Control as="textarea" rows={3} />
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
    )
}

function add_task(id) {
    axios.post("/api/addtask", { id: id }).then(snap => {
        console.log(snap.data)
    }).catch(err => console.log(err))
}

function remove_task(id) {
    axios.post("/api/addtask", { id: id }).then(snap => {
        console.log(snap.data)
    }).catch(err => console.log(err))
}

function edit_task(id, text) {
    axios.post("/api/addtask", { id, text }).then(snap => {
        console.log(snap.data)
    }).catch(err => console.log(err))
}



export default Tasks;