import React, { useState } from "react"
import { ListGroup, Row, Col } from "react-bootstrap"


const Task = ({ text, _id }) => {
    return (
        <ListGroup.Item>
            <div className="task">
                <Row>
                    <Col sm={7}>
                        <span className="vertical-align-sub">{text}</span>
                    </Col>
                    <Col sm={5}>
                        <div className="task-crud">
                            <ul>
                                <li><span className="material-icons" myaction="edit" task_id={_id}>create</span></li>{/* 'create' is just the icon for edit*/}
                                <li><span className="material-icons" myaction="delete" task_id={_id}>delete</span></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>
        </ListGroup.Item>
    )
}

export default Task