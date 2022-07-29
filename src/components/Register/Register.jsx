import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Register(props) {
    return (
        <Form className='form-register'>
            <h3 className='mt-5 mb-4 title'>회원가입</h3>
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
            <div className="button-box">
                <Button 
                className='mt-5' 
                variant="dark" 
                type="submit" 
                onClick={props.userToggle}>
                    로그인
                </Button>
            </div>
        </Form>
    );
}