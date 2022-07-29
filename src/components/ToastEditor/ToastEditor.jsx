import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { useHistory } from 'react-router-dom'
import React from 'react'
import Button from 'react-bootstrap/Button'


export default function PostEditor(){
    const history=useHistory();

    const editorRef = React.useRef(null)
    // const [editorText, setEditorText] = useState(""); 
    // function textSaved(e){
        // const newText=e.target.value;
        // console.log(e) // markdown
    // }
    function submitHandler(event) {
        event.preventDefault()
        console.log(editorRef.current?.getInstance().getHTML())
        console.log(editorRef.current?.getInstance().getMarkdown())
    }

    return (     
        <>   
            <Editor
                initialValue="## 게시글을 작성하세요🥦"
                previewStyle="vertical"
                height="60vh"
                initialEditType="markdown"
                useCommandShortcut={true}
                ref={editorRef}
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
                onClick={submitHandler}
                >
                
                    작성완료
                </Button>
            </div>
        </>
    )
};