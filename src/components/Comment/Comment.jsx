import styled from "styled-components"
import Button from "react-bootstrap/esm/Button"

export default function Comment(props){
    const temp_list = [
        {
            author: '작성자',
            content: '코멘트',
            createdAt: '0000-00-00'
        },
        {
            author: '작성자',
            content: '코멘트',
            createdAt: '0000-00-00'
        }
    ]
    return (
        <MyComment>
            <ul>
                {temp_list.map(x=>{
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
        {/* // "comment_id": { type: Number, Auto_Icrement, PK },
        // "content": { type: String, min: 1, max: 100},
        // "createdAt": { type: Datetime },
        // "updatedAt": { type: Datetime },
        // "fk_note_id": { type: Number, FK },
        // "fk_user_id": { type: Number, FK } */}

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