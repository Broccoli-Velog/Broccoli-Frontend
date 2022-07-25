import React from "react";
import {useHistory} from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const Page=(props)=>{
    const history=useHistory();
    return (
        <>
            <h3>Page</h3>
            <div className="mb-5">게시글</div>

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

export default Page;