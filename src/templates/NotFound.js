import React from "react";
import {useHistory} from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const NotFound=(props)=>{
    const history=useHistory();
    return (
        <>
            <div>404</div>
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

export default NotFound;