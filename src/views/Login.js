import React, {useState, useEffect} from "react"
import ReactDOM from "react-dom"
import axios from "axios"
//bootstrap
import {Container, Row, Col, Button, Form} from "react-bootstrap"
import {password_validate} from "./components/utils/methods"




const App = () => {
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
                                <Form.Control placeholder="Email" id="email" onChange={changeUserName}/>
                            </Form.Group>
                                <Form.Control placeholder="Contraseña" id="password" onChange={changePassword}/>    
                                <Form.Text className="text-muted">Something really cool</Form.Text>
                                <Button type="submit"variant="dark" className="margined-top" id="submit">Send</Button>
                            
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}




export default App;