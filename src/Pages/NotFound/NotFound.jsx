import {useHistory} from 'react-router-dom'
import Button from 'react-bootstrap/Button'

export default function NotFound(props){
    const history=useHistory();
    return (
        <>
            <h1 className="mb-4">404</h1>
            <Button 
            variant="dark"
            style={{color: "#aaa"}}
            onClick={()=>{
                history.goBack();
            }}
            >
                뒤로 가기
            </Button>
        </>
    )
}