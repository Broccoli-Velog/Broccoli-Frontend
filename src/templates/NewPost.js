import React from "react";
import Editor from "./Editor";

import Form from 'react-bootstrap/Form';

const NewPost=(props)=>{
    return (
        <Form>
            <h3 className="mb-3">NewPost</h3>
            <Editor />
        </Form>
    )
}

export default NewPost;