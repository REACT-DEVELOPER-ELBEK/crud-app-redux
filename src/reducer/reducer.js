const initialState = {
    username: "",
    password: ""
}

const loginReducer = (state = initialState, action) =>{
    switch(action.type){
        case "LOGIN_USER":
            return {
                username: action.user,
                password: action.password
            }
        default: return{
            username: "Guest",
        }
    }
}

export {loginReducer}