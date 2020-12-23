import React, {useState, useEffect} from "react"
import ReactDOM from "react-dom"
import axios from "axios"
//bootstrap
import {Container, Row, Col, Button, Form} from "react-bootstrap"
import {password_validate} from "./components/methods"




const App = () => {
    const [user, setUser] = useState({
        user: null,
        password: null,
        password_validation: null
    })
    const [passwordState, setPasswordState] = useState(false)
    
    function changeUserName(e){
        setUser(current => {
            console.log(current, e.target.value)
            return {
                user: e.target.value,
                password: current.password,
                password_validation: current.password_validation
            }
        })
    }

    function changePassword(e){
        setUser(current => {
            console.log(current, e.target.value)
            return {
                user: current.user,
                password: e.target.value,
                password_validation: current.password_validation
            }
        })
    }

    function changePasswordValidation(e){
        setUser(current => {
            console.log(current, e.target.value)
            return {
                user: current.user,
                password: current.password,
                password_validation: e.target.value
            }
        })
    }

    function validateAndSendDataToServer(e){
        e.preventDefault()
        let validation = password_validate(user.password, user.password_validation)
        if(validation.okay){
            window.location.redirect = "/something"
            return 
        }else{
            alert(validation.err.message)
        }
    }

    return (
        <div className="app">
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col sm={12} md={6} lg={6}>
                        <Form onSubmit={validateAndSendDataToServer}>
                            <Form.Text className="title center paddinged">Registro</Form.Text>
                            <Form.Group>
                                <Form.Control placeholder="Email" id="email" onChange={changeUserName}/>
                            </Form.Group>
                                <Form.Control placeholder="Contraseña" id="password" onChange={changePassword}/>
                                <Form.Control placeholder="Repetir Contraseña" id="password" onChange={changePasswordValidation}/>
                                <Form.Control placeholder="Escoger Foto de Perfil" id="profile-photo"/>
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