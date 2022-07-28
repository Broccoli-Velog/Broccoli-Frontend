import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.css'

export default function Login(props) {
    return (
        <Form className='form-login'>
            <h3 className='mt-5 mb-5 title'>로그인</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>이메일</Form.Label>
                <Form.Control type="email"
                name="email"
                placeholder="메일 주소를 입력하세요." />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"
                name="password" 
                placeholder="비밀번호를 입력하세요." />
            </Form.Group>
            <div className="button-box">
                <Button variant="dark" type="submit">
                    로그인
                </Button>
            </div>
        </Form>
    );
}