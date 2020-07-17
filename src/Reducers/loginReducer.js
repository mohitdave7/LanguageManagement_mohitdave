let loginState = {

    loginData: {},
    homeData: {}
};

const loginReducer = (state = loginState, action) => {
    switch (action.type) {

        case 'SET_LOGIN_DATA': {
            return {
                ...state,
                loginData: action.result
            };
        }
        case 'SET_HOME_DATA': {
            return {
                ...state,
                homeData: action.result
            };
        }
        default:
            return state;
    }
};
export default loginReducer;