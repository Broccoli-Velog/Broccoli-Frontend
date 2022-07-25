import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import {useHistory} from 'react-router-dom'
import React from 'react'
import Button from 'react-bootstrap/Button'


const PostEditor = () => {
    const history=useHistory();

    // const editorRef = React.useRef(null)
    // const [editorText, setEditorText] = useState(""); 
    // function textSaved(e){
    //     // const newText=e.target.value;
    //     console.log(e) // markdown
    // }

    return (     
        <>   
            <Editor
                initialValue="## 게시글을 작성하세요🥦"
                previewStyle="vertical"
                height="70vh"
                initialEditType="markdown"
                useCommandShortcut={true}
                // onChange={textSaved}
            />

            <div className="btn-box mt-4">
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
            </div>
        </>
    )
};

export default PostEditor;