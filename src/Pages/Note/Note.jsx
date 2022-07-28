import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import {useHistory} from 'react-router-dom'

export default function Note(props){
    const history=useHistory();
    const {id, note} = props
    const _ = note;
    return (
        <Col>
            <Card
            className="shadow-sm"
            onClick={()=>{
                history.push('/note/'+_.title)
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
    )
}