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

export const loginUser = () => {
    return async function (dispatch) {
    dispatch(loginUser());
    }
}

export const registerUser = (user) => {
    console.log(user)
    return async function (dispatch) {
    try {
        let test = await Axios.post("/register", user)
        // let test = await Axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(test.data)
    }
    catch(e) {
        console.log(e)
    }
    }
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