import Editor from "../../components/ToastEditor/ToastEditor";
import Form from 'react-bootstrap/Form';

export default function NewPost(props){
    return (
        <Form>
            <h3 className="mb-3">NewPost</h3>
            <Editor />
        </Form>
    )
}