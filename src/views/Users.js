import React, { useState, useEffect, useContext } from "react"
//bootstrap
import useUser from "./components/useUser"
import Sidebar from "./components/Sidebar"
import {BoardContext} from "./components/BoardContext"

    const Users = () => {
    const user = useUser()
    const [active, setActive] = useState(0)
    return (
        <>
        </>
    )
}


export default Users;