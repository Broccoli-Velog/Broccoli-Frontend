import React from "react";
import {useHistory} from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';

const NewPost=(props)=>{
    const history=useHistory();
    return (
        <Form>
            <h3>NewPost</h3>
            <div className="mb-5">
                게시글
                <br />
                <textarea name="newPost" id="newPost" cols="30" rows="10">
                    
                </textarea>
            </div>

            <Button 
            className="shadow mx-2"
            variant="light"
            onClick={()=>{
                history.goBack();
            }}
            >
                뒤로 가기
            </Button>
            <Button
            className="shadow mx-2" 
            variant="dark"
            type="submit"
            >
                작성완료
            </Button>
        </Form>
    )
}

export default NewPost;