import {useHistory, useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import styled from 'styled-components'
import Comment from '../../components/Comment/Comment'

export default function Note() {
    const history = useHistory();
    const params = useParams();
    const noteList = useSelector((state) => state.note);
    let [note] = noteList.filter(note => note.title === params.title.replace('-', ' '))
    // note.series 안씀 배치해야됨
    return (
      <Container className='text-center'>
        <Title><h1>{note.title}</h1></Title>
        <Author><h4>{note.author}</h4></Author>

        <hr/>

        <Context>{note.context}</Context>

        <hr style={{margin: 0}} />

        <Comment note_id={note.note_id} />

        <Button variant="dark" style={{color: "#aaa"}} onClick={() => {history.goBack();}}>뒤로 가기</Button>
      </Container>
  );
}

const Title = styled.div`
  margin-bottom: 40px;
`

const Author = styled.div`
  display: flex;
  justify-content: end;
  padding-right: 0px;
`

const Context = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 35vh;
`