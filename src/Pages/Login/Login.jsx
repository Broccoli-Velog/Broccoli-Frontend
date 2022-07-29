import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.css'
import React from 'react';

export default function Login(props) {
    let temp = true;
    let emailRef = React.useRef(null);
    let nameRef = React.useRef(null);
    let pwRef = React.useRef(null);
    let pwRef2 = React.useRef(null);

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
        console.log(obj.current.value)
        var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,30}$/;
        if(obj.current.value.length>1 && !regExp.test(obj.current.value)){
            obj.current.focus();
            obj.current.value = "";
            alert('비밀번호는 영문과 숫자를 포함해주세요.');
        }
    }

    const isPasswordSame=()=>{
        if(pwRef2.current.value.length>1 && pwRef.current.value!==pwRef2.current.value){
            pwRef2.current.focus();
            pwRef2.current.value = "";
            alert('비밀번호를 확인해주세요.');
        }
    }

    return (
        <>
            <Form className='form-register'>

                <h3 className='mt-5 mb-4 title'>
                    {temp ? "회원가입" : "로그인"}
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

                { temp &&
                <Form.Group 
                className="mb-3">
                    <Form.Label>
                        이름
                    </Form.Label>
                    <Form.Control 
                    type="nickname" 
                    name="nickname" 
                    placeholder="이름을 입력하세요."
                    ref={nameRef}
                    onChange={()=>characterCheck(nameRef)}
                    required
                    maxLength={10}
                />
                </Form.Group>
                }

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

                { temp &&
                <Form.Group 
                className="mb-3"
                >
                    <Form.Label>
                        비밀번호 확인
                    </Form.Label>
                    <Form.Control 
                    type="password"
                    placeholder="비밀번호를 입력하세요."
                    ref={pwRef2}
                    minLength={8}
                    maxLength={30}
                    required
                    onBlur={()=>isPasswordSame(pwRef2)}
                    />
                </Form.Group>
                }

                <div className="button-box">
                    <Button 
                    className='mt-5' 
                    variant="dark" 
                    type="submit" 
                    onClick={props.userToggle}
                    >
                        {temp ? "회원가입" : "로그인"}
                    </Button>
                </div>
            </Form>
        </>
    );
}