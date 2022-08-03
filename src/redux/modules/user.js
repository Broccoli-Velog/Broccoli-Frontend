import Axios from "axios";

const LOGIN = "user/LOGIN";
const REGISTER = "user/REGISTER";

const initialState = {}

export function loginAction(user){
    return {type: LOGIN, user};
}

export function registerAction (user){
    return {type: REGISTER, user};
}

export const loginUser = (user) => {
    console.log(user);

    Axios.post('http://localhost:3000/auth/login', user)
    .then(res=>{
        const token = res.data.result.token;
        localStorage.setItem('broccolis', token);
    })
    .catch(err=>{
        console.log(err.response.data);
    })
    .finally(() => console.log('axios 실행'))

    return {type: LOGIN, user}
}

export const registerUser = (user) => {
    console.log(user);

    Axios.post('http://localhost:3000/auth/register', user).then(res=>console.log(res.data))
    .catch(err=>{
        console.log(err.response.data);
    })
    .finally(() => console.log('axios 실행'))

    return {type: REGISTER, user}
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "user/LOGIN": {
        return state;
        }
        case "user/REGISTER": {
            return state;
        }
        default:
        return state;
    }
}