import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css'

export default function MiddleBar(props){
    const user=props.user
    return (
        <Container className='mt-2 mb-2 middle-bar'>
            <Row xs="auto">
                <Col className='pb-2 pt-2'>
                    <a href="/">
                        전체보기
                    </a>
                </Col>

                {user &&
                <Col className='ms-auto pb-2 pt-2'>
                    <a href="/note">
                        글 쓰기
                    </a>
                </Col>
                }

            </Row>
        </Container>
    );
}