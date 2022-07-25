import React from "react";
import {useHistory} from 'react-router-dom'

// 부트스트랩
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const items=[{title: '아이템1', text: 'a'}, {title: '아이템2', text: 'b'},{title: '아이템3', text: 'c'},{title: '아이템4', text: 'd'},{title: '아이템5', text: 'e'}]

const MainArticle=(props)=>{
    const history=useHistory();
    return (
        <>
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {items.map((_, idx) => (
                <Col>
                <Card onClick={()=>{
                    history.push('/page/00')
                }}>
                    <Card.Img variant="top" src="" style={{ backgroundColor: "#aaa", height: "160px"}} />
                    <Card.Body>
                    <Card.Title>{items[idx].title}</Card.Title>
                    <Card.Text>
                        {items[idx].text}
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            ))}
            </Row>
        </>
    );
}

export default MainArticle;