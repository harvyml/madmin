import React, { useState, useEffect, useContext, useMemo } from "react"
//custom hook
import useFetch from "./components/hooks/useFetch"
//bootstrap
import useUser from "./components/useUser"
import {BoardContext} from "./components/BoardContext"
import {Card, ListGroup, Table} from "react-bootstrap"

const Users = () => {
    const user = useUser()
    const users = useFetch("/api/orderedusers") 
    
    
    return (
        <>
            <div className="users-component">
                <div className="users-list">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>Nombres</th>
                            <th>Apellidos</th>
                            <th>Telefono</th>
                            <th>Mail</th>
                            <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <MapUsers users={users}/>
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}


const User = ({user}) => {
    const Img = ({src}) => <img src={src}/>
    return (
        <tr>
            <td>{user.nombres}</td>
            <td>{user.apellidos}</td>
            <td>{user.telefono}</td>
            <td>{user.email}</td>
            <td>{user.estado ? <Img src="./public/assets/check_green.png"/> : <Img src="./public/assets/cancel_x.png"/>}</td>
        </tr>
    )
}

const MapUsers = ({users}) => {
    return (
        users.map((user, i) => {
            return <User user={user} key={i}/>
        })
    )
}


export default Users;