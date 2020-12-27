import React, {useState, useEffect} from "react"
import ReactDOM from "react-dom"
import axios from "axios"
//bootstrap
import {Container, Row, Col, Button, Form} from "react-bootstrap"
import {password_validate} from "./components/utils/methods"
import useFetch from "./components/hooks/useFetch"




const App = () => {
    const userLogged = useFetch("/api/user")

    useEffect(() => {
        if(user.name){
            window.location.href = "/panel"
        }
    }, [userLogged])
    const [user, setUser] = useState({
        user: null,
        password: null,
    })
    const [passwordState, setPasswordState] = useState(false)
    
    function changeUserName(e){
        setUser(current => {
            console.log(current, e.target.value)
            return {
                user: e.target.value,
                password: current.password
            }
        })
    }

    function changePassword(e){
        setUser(current => {
            console.log(current, e.target.value)
            return {
                user: current.user,
                password: e.target.value
            }
        })
    }

    function handleSignIn(e){
        e.preventDefault()
        axios.post("/api/login", user).then(snap => {
            console.log(snap)
            snap.data.name ? window.location.href = "/panel" : null
        }).catch(err => console.log("Error: ", err))
    }

    return (
        <div className="app">
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col sm={12} md={6} lg={6}>
                        <Form onSubmit={handleSignIn}>
                            <Form.Text className="title center paddinged">Login</Form.Text>
                            <Form.Group>
                                <Form.Control placeholder="Email" id="email" type="email" onChange={changeUserName}/>
                            </Form.Group>
                                <Form.Control placeholder="Contraseña" id="password" type="password" onChange={changePassword}/>    
                                <Form.Text className=""><a href="/register">¿Aún no estás registrado?</a></Form.Text>
                                <Button type="submit"variant="dark" className="margined-top" id="submit">Send</Button>
                            
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}




export default App;