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
import Users from "./Users"
import Tasks from "./Tasks"
import HomeBoard from "./HomeBoard"

const Panel = () => {
    const user = useUser()
    //just added for now while the conditional session handling bug is corrected
    useEffect(() => {
        if(!user){
            window.location.href = "/login"
        }
    }, [user])
    const [active, setActive] = useState(0)
    useEffect(() => {
        const url = new URL(window.location.href);
        const params = new URLSearchParams(url.search)
        var active_tab_from_url = params.get("tab") ? params.get("tab") : active

        setActive(active_tab_from_url)
    }, [])
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
    if(active == 0) return <Board boardname="Home" user={user} customContent={HomeBoard}/> 
    if(active == 1) return <Board boardname="Usuarios" user={user} customContent={Users}/> 
    if(active == 2) return <Board boardname="Tareas" user={user} customContent={Tasks}/> 
    return null
}

export default Panel;