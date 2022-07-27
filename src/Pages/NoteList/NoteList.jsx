import React from "react";
import {useHistory} from 'react-router-dom'
import Bar from '../../components/Bar/Bar'

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const items = [{
    title: '게시글1',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, aut?'
}, {
    title: '게시글2',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, aut?'
}, {
    title: '게시글3',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, aut?'
}, {
    title: '게시글4',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, aut?'
}, {
    title: '게시글5',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, aut?'
}]


export default function MainArticle(props){
    const history=useHistory();
    return (
        <>
            <Bar />

            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {items.map((_, idx) => (
                <Col>
                <Card
                className="shadow-sm"
                onClick={()=>{
                    history.push('/page/00')
                }}>
                    <Card.Img variant="top" src="" style={{ backgroundColor: "#ccc", height: "160px"}} />
                    <Card.Body>
                        <Card.Title>{items[idx].title}</Card.Title>
                        <Card.Text>
                            {items[idx].text}
                        </Card.Text>
                        <Card.Text 
                        className="pt-2" 
                        style={{color: "#aaa", display: "flex", justifyContent: "space-between", borderTop: '1px solid #ddd'}}>
                            <span>글자</span>
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            ))}
            </Row>
        </>
    );
}