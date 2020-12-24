import React, { useState, useEffect, useContext } from "react"
import ReactDOM from "react-dom"
import axios from "axios"
//bootstrap
import { Container, Row, Col, Button, Form } from "react-bootstrap"
import { password_validate } from "./components/utils/methods"
import useUser from "./components/useUser"


const Panel = () => {
    const user = useUser()
    return (
        <div className="app">
            <Container fluid>
                <Row className="justify-content-md-center">
                    <h1>{user.name}</h1>
                </Row>
            </Container>
        </div>
    )
}




export default Panel;