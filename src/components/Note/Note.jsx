import Card from 'react-bootstrap/Card';
import {useHistory} from 'react-router-dom'

const lodash=(str)=>{
    return str.split(" ").join("-")
}

export default function Note(props){
    const history=useHistory();
    const {id, note} = props
    const _ = note;
    return (
        <Card
        className="shadow-sm"
        onClick={()=>{
            history.push('/note/'+lodash(_.title))
        }}>
            <Card.Body>
                <Card.Title>{_.title}</Card.Title>
                <Card.Text>
                    {_.context.length > 50 ? _.context.splice(0, 49) : _.context}
                </Card.Text>
                <Card.Text 
                className="pt-2" 
                style={{color: "#aaa", display: "flex", justifyContent: "space-between", borderTop: '1px solid #ddd'}}>
                    <span>{_.author}</span>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}