import React, { useState, useEffect, useContext } from "react"
import ReactDOM from "react-dom"
import axios from "axios"
//bootstrap
import { Container, Row, Col, Button, Form } from "react-bootstrap"
import { password_validate } from "./components/utils/methods"
import useUser from "./components/useUser"
import Sidebar from "./components/Sidebar"
import Board from "./components/Board"
import {BoardContext} from "./components/BoardContext"
import users from "./Users"

const Panel = () => {
    const user = useUser()
    const [active, setActive] = useState(0)
    return (
        <div className="app">
            <Row>
                <BoardContext.Provider value={{active, setActive}}>
                    <Col md={3}><Sidebar/></Col>
                    <Col md={9}>
                        <TabHandler active={active} user={user}/>
                    </Col>
                </BoardContext.Provider>
            </Row>
        </div>
    )
}


const TabHandler = ({active, user}) => {
    if(active == 0) return <Board boardname="A name" user={user} customContent={CustomContent}/> 
    if(active == 1) return <Board boardname="A name" user={user} customContent={CustomContent}/> 
    if(active == 2) return <Board boardname="A name" user={user} customContent={CustomContent}/> 
    return null
}



export default Panel;