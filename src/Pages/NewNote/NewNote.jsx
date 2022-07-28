import Editor from "../../components/ToastEditor/ToastEditor";
import Form from 'react-bootstrap/Form';
import './style.css'

export default function NewPost(props){
    return (
        <Form className="row">
            <h3 className="my-4 title">New Note</h3>
            <Editor />
        </Form>
    )
}