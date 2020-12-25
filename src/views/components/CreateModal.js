import React, { useState, useEffect, useContext, useMemo } from "react"
import { Card, ListGroup, Table, Modal, Button, Form, Row, Col } from "react-bootstrap"
import axios from "axios"

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
                    Cerrar
                    </Button>
                <Button variant="primary" onClick={submit_todo}>
                    Crear
                    </Button>
            </Modal.Footer>
        </Modal>
    )
}

function add_todo(text) {
    axios.post("/api/todo/create", { text }).then(snap => {
        console.log(snap.data)
        window.location.href = "/panel?tab=2"
    }).catch(err => {
        console.log(err)
    })
}


export default CreateModal