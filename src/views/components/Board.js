import React, { useState, useEffect, useContext } from "react"
import ReactDOM from "react-dom"
import axios from "axios"
//bootstrap
import { Container, Row, Col, Button, Form, Card} from "react-bootstrap"

const Board = ({user, customContent}) => {
    const CustomContent = customContent
    return (
        <div className="board paddinged">
            <div className="board-header">
                <div className="board-name">
                    <h4>{}</h4>
                </div>
            </div>
            <CustomContent/>
        </div>
    )
}

export default Board