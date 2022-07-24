import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ResponsiveAutoExample() {
    return (
        <Container>
            <Row xs="auto">
                <Col>전체보기</Col>
                {/* <Col>2 of 3</Col> */}
            </Row>
        </Container>
    );
}

export default ResponsiveAutoExample;