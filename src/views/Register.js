import React, {useState, useEffect} from "react"
import ReactDOM from "react-dom"

//bootstrap
import {Container, Row, Col, Button, Form} from "react-bootstrap"

const App = () => {
    return (
        <div className="app">
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col sm={12} md={6} lg={6}>
                        <Form>
                            <Form.Text className="title center paddinged">Registro</Form.Text>
                            <Form.Group>
                                <Form.Control placeholder="Email" id="email"/>
                            </Form.Group>
                                <Form.Control placeholder="Contraseña" id="password"/>
                                <Form.Control placeholder="Repetir Contraseña" id="password"/>
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