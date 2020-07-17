import { login,homedata,addlanguage,removelanguage } from "../Services";

export function handleLogin(body) {
    return async (dispatch) => {
        const result = await login(body);
        if (typeof result !== undefined && result && result.status === 200) {
            if (result) {
                localStorage.setItem("LanguageToken",result.data.token)
                
                dispatch({ type: "SET_LOGIN_DATA", result });
            }
        } else {
            dispatch({ type: "SET_LOGIN_DATA", result: {} });
        }
    };
}

export function getHomeData() {
    return async (dispatch) => {
        const result = await homedata();
        if (typeof result !== undefined && result && result.status === 200) {
            if (result) {
                    dispatch({ type: "SET_HOME_DATA", result });
            }
        } else {
            dispatch({ type: "SET_HOME_DATA", result: {} });
        }
    };
}

export function addlanguagedata(body){
    return async (dispatch) => {
        const result = await addlanguage(body);
        if (typeof result !== undefined && result && result.status === 200) {
            if (result) {
                
                dispatch({ type: "SET_LANGUAGE_DATA", result });

            }
        } else {
            dispatch({ type: "SET_LANGUAGE_DATA", result: {} });
        }
    };
}

export function removelanguagedata(id){
    return async (dispatch) => {
        const result = await removelanguage(id);
        if (typeof result !== undefined && result && result.status === 200) {
            alert("Language Removed Successfully")
        }
    };

    
}