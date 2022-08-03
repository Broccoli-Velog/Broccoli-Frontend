import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.css'
import React from 'react';
import { useDispatch } from 'react-redux'
import { loginUser } from '../../redux/modules/user';
import { useHistory } from 'react-router-dom';

export default function Login(props) {
    let history = useHistory();
    let emailRef = React.useRef(null);
    let pwRef = React.useRef(null);
    let dispatch = useDispatch();
    
    function submitHandler(event) {
        event.preventDefault()
        const newUser = {
            email: emailRef.current.value,
            password: pwRef.current.value
        }
        dispatch(loginUser(newUser))        
        history.push('/')
        console.log(localStorage.getItem('broccolis'))
    }

    const characterCheck=(obj)=>{
        let regExp;
        if(obj.current.name == "nickname"){
            regExp = /[ \{\}\[\]\/?.,;:|\)*~`!@^\-_+┼<>\#$%&\'\"\\\(\=]/gi; 
        } else {
            regExp = /[ \{\}\[\]\/?,;:|\)*~`!^\-_+┼<>\#$%&\'\"\\\(\=]/gi; 
        }
        if( regExp.test(obj.current.value) ){
            alert("특수문자는 입력하실수 없습니다.");
            obj.current.value = obj.current.value.substring( 0 , obj.current.value.length - 1 );
        }
    }

    const isPassword=(obj)=>{
        var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,30}$/;
        if(obj.current.value.length>1 && !regExp.test(obj.current.value)){
            obj.current.focus();
            obj.current.value = "";
            alert('비밀번호는 영문과 숫자를 포함해서 8자 이상 입력해주세요.');
        }
    }


    return (
        <>
            <Form className='form-register'>

                <h3 className='mt-5 mb-4 title'>
                    로그인
                </h3>

                <Form.Group 
                className="mb-3" 
                >
                    <Form.Label>
                        이메일
                    </Form.Label>
                    <Form.Control 
                    type="email" 
                    name="email" 
                    placeholder="메일 주소를 입력하세요."
                    maxLength={50}
                    ref={emailRef}
                    onChange={()=>characterCheck(emailRef)}
                    required
                    />
                </Form.Group>

                <Form.Group 
                className="mb-3"
                >
                    <Form.Label>
                        비밀번호
                    </Form.Label>
                    <Form.Control 
                    type="password" 
                    name="password" 
                    placeholder="비밀번호를 입력하세요."
                    ref={pwRef}
                    minLength={8}
                    maxLength={30}
                    required
                    onBlur={()=>isPassword(pwRef)}
                    />
                </Form.Group>

                <div className="button-box">
                    <Button 
                    className='mt-5' 
                    variant="dark" 
                    type="submit" 
                    onClick={submitHandler}
                    >
                        로그인
                    </Button>
                </div>
            </Form>
        </>
    );
}