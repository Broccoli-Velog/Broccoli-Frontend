import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
    return (
        <Form>
            <h3 className='mb-5'>회원가입</h3>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>이메일</Form.Label>
                <Form.Control type="email" name="email" placeholder="메일 주소를 입력하세요." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>이름</Form.Label>
                <Form.Control type="name" name="name" placeholder="이름을 입력하세요." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
                <Form.Label>비밀번호</Form.Label>
                <Form.Control type="password" name="password" placeholder="비밀번호를 입력하세요." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="passwordConfirm">
                <Form.Label>비밀번호 확인</Form.Label>
                <Form.Control type="password" name="passwordConfirm" placeholder="비밀번호를 입력하세요." />
            </Form.Group>
            <Button className='mt-5' variant="dark" type="submit">
                로그인
            </Button>
        </Form>
    );
}

export default BasicExample;