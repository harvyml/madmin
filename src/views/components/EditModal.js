import React, { useState, useEffect } from "react"
import { Modal, Button, Form } from "react-bootstrap"
import axios from "axios"


const EditModal = (props) => {
    const {handleClose, show, task_id, defaulttext} = props
    const [text, setText] = useState("")

    function updateText(e){
        console.log(e.target.value, text)
        setText(e.target.value)
    }

    function submit_edited_todo(e){
        e.preventDefault()
        console.log("sending to: " + task_id)
        edit_todo(task_id, text)
        console.log("Sent")
    }

    useEffect(() => {
        console.log("Edit: ", defaulttext)
        setText(defaulttext)
    }, [defaulttext])

    return (
        <>
            <Modal show={true} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Todo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Edit your todo</Form.Label>
                            <Form.Control as="textarea" rows={3} defaultValue={defaulttext} onChange={updateText}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={submit_edited_todo}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

function edit_todo(_id, text) {
    axios.post("/api/todo/edit", { _id: _id, text: text }).then(snap => {
        window.location.href = "/panel?tab=2"
        console.log(snap)
    }).catch(err => console.log(err))
}


export default EditModal