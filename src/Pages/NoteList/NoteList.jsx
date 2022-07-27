import React from "react";
import {useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux'

import Bar from '../../components/Bar/Bar'
import './style.css'

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function MainArticle(props){
    const history=useHistory();
    const note=useSelector((state)=>state.note)
    console.log(note)
    return (
        <>
            <Bar />

            <Row xs={1} sm={2} md={3} lg={4} className="g-4 card-container">
            {note.map((_, idx) => (
                <Col>
                <Card
                className="shadow-sm"
                onClick={()=>{
                    history.push('/page/'+idx) //idx=>id로 교체
                }}>
                    <Card.Img variant="top" src="" style={{ backgroundColor: "#ccc", height: "160px"}} />
                    <Card.Body>
                        <Card.Title>{_.title}</Card.Title>
                        <Card.Text>
                            {_.context}
                        </Card.Text>
                        <Card.Text 
                        className="pt-2" 
                        style={{color: "#aaa", display: "flex", justifyContent: "space-between", borderTop: '1px solid #ddd'}}>
                            <span>{_.createdAt}</span>
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            ))}
            </Row>
        </>
    );
}