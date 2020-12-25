import React, { useState, useEffect, useContext, useMemo } from "react"
//custom hook
import useFetch from "./components/hooks/useFetch"
//bootstrap
import useUser from "./components/useUser"
import { BoardContext } from "./components/BoardContext"
import { Card, ListGroup, Table, Modal, Button, Form, Row, Col } from "react-bootstrap"
import axios from "axios"
import Task from "./components/Task"
import All_Tasks from "./components/All_Tasks"
import CreateModal from "./components/CreateModal"
const Tasks = () => {
    const user = useUser()
    const todos = useFetch("/api/todos")
    const [createModal, setCreateModal] = useState(false)
    return (
        <>
            <div className="todos-component">
                <Row className="margined-top">
                    <Col sm={9}>
                        <h4>Create your todos!</h4>
                    </Col>
                    <Col sm={3}>
                        <div className="float-right">
                            <Button onClick={() => setCreateModal(true)} ><i className="material-icons">add</i></Button>
                        </div>
                    </Col>
                </Row>
                <CreateModal show={createModal} handleClose={() => setCreateModal(false)} userId={user._id} />
                <All_Tasks all_tasks={todos}/>
            </div>
        </>
    )
}

export default Tasks;