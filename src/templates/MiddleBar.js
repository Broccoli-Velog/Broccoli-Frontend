import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MiddleBar=(props)=>{
    return (
        <Container className='mb-4'>
            <Row xs="auto">
                <Col className='pb-2 pt-2'>
                    <a href="/">
                        전체보기
                    </a>
                </Col>
                {/* <Col className='pb-2 pt-2'>
                    <a href="/">
                        안 전체보기
                    </a>
                </Col> */}
            </Row>
        </Container>
    );
}

export default MiddleBar;