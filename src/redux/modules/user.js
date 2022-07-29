const LOGIN = "user/LOGIN"
const REGISTER = "user/REGISTER";

const initialState = {}

export function loginUser(user){
    return {type: LOGIN, user};
  }
  
  export function registerUser (user){
      return {type: REGISTER, user};
  }

  export const loginFB = () => {
    return async function (dispatch) {

        dispatch(loginUser());
    }
  }

  export const registerFB = (user) => {
    return async function (dispatch) {

      dispatch(registerUser());
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