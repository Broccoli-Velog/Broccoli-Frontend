import styled from "styled-components"
import Button from "react-bootstrap/esm/Button"

import {useSelector} from 'react-redux'

export default function Comment(props){
    const comment=useSelector((state)=>state.comment)
    return (
        <MyComment>
            <ul>
                {comment.map(x=>{
                    return (
                        <li>
                            <span>
                                {x.content}
                            </span>
                            <span>
                                {x.author}
                            </span>
                            <span>
                                {x.createdAt}
                            </span>
                        </li>
                    )
                })}
                <li>
                    <textarea 
                    name="content"
                    style={{resize: "none", padding: '10px', boxSizing: 'border-box'}}/>
                    <Button variant="success" type="submit">
                        COMMENT
                    </Button>
                    <input 
                    type="hidden" 
                    value={props.note_id}
                    name='note_id' />
                </li>
            </ul>
        </MyComment>
    )
}

const MyComment = styled.form`
ul {
    padding :0
}

li {   
    list-style: none;
    padding: 24px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px dotted #aaa;
    gap: 20px
}

li > *:first-child  {
    flex: 1 1 30%;
    text-align: left;
}
`