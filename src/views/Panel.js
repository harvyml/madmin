import React, { useState, useEffect, useContext } from "react"
import ReactDOM from "react-dom"
import axios from "axios"
//bootstrap
import { Container, Row, Col, Button, Form } from "react-bootstrap"
import { password_validate } from "./components/utils/methods"
import useUser from "./components/useUser"
import Sidebar from "./components/Sidebar"
import Board from "./components/Board"


const panelContext = React.createContext({active: 0})

const Panel = () => {
    const user = useUser()
    return (
        <div className="app">
            <Row>
                <Col md={3}><Sidebar/></Col>
                <Col md={9}><Board/></Col>
            </Row>
        </div>
    )
}




export default Panel;