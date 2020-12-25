import React, { useState, useEffect, useContext, useMemo } from "react"
//custom hook
import { Modal, Button} from "react-bootstrap"
import axios from "axios"


const DeleteModal = ({show, handleClose, task_id}) => {
    function delete_todo() {
        remove_todo(task_id)
    }
    return (
        <Modal show={true} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete a todo!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>¿Estás seguro de que quieres borrar este Todo?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                    </Button>
                <Button variant="Danger" onClick={delete_todo}>
                    Eliminar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}


function remove_todo(_id) {
    axios.post("/api/todo/remove", {_id: _id}).then(snap => {
        console.log(snap.data)
        window.location.href = "/panel?tab=2"
        return snap
    }).catch(err => console.log(err))
}

export default DeleteModal