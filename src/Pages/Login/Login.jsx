import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Login() {
    return (
        <Form>
            <h3 className='mb-5'>로그인</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>이메일</Form.Label>
                <Form.Control type="email"
                name="email"
                placeholder="메일 주소를 입력하세요." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"
                name="password" 
                placeholder="비밀번호를 입력하세요." />
            </Form.Group>
            <Button variant="dark" type="submit">
                로그인
            </Button>
        </Form>
    );
}