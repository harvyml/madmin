import React, { useState, useEffect, useContext } from "react"
import ReactDOM from "react-dom"
import axios from "axios"
//bootstrap
import { Container, Row, Col, Button, Form, Card} from "react-bootstrap"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="company-info">
                    <Card className="company-info-card">
                        <Card.Body>
                            <div className="main-company-info flex space-around">
                                <div className="company-logo">
                                    <img src="./public/assets/logo.png" className="rounded"/>
                                </div>
                                <div className="company-name justify-self-center paddinged-right">
                                    <span className="vertical-align-sub semi-bold">Mi Aguila</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
            </div>
        </div>
    )
}

export default Sidebar