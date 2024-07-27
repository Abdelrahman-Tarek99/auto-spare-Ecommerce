import { AuthActions } from "./AuthSlice";




export const LoggingIn =  (authContent) => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyATQtCHZf5WVpeu1mp73Sw0OW5TBnx6bfc",
                {
                    method: "POST",
                    body: JSON.stringify({
                        email: authContent.email,
                        password: authContent.password,
                        returnSecureToken: true,
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (!response.ok) {
                throw new Error("Authentication failed!");
            }

            const data = await response.json();
            return data;
        };

        try {
            const userData = await fetchData();
            console.log(userData);
            dispatch(
                AuthActions.login({
                    email: userData.email,
                    token: userData.idToken,
                    isLoggedIn: true,
                })
            );
            return userData.idToken; 
        } catch (error) {
            // alert(error.message);
            return Promise.reject();
        }
    };
   
};

export const signUp = (authContent) => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyATQtCHZf5WVpeu1mp73Sw0OW5TBnx6bfc",
                {
                    method: "POST",
                    body: JSON.stringify({
                        email: authContent.email,
                        password: authContent.password,
                        returnSecureToken: true,
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (!response.ok) {
                throw new Error("Authentication failed!");
            }

            const data = await response.json();
            return data;
        };

        try {
            const userData = await fetchData();
            console.log(userData);
            dispatch(
                AuthActions.login({
                    email: userData.email,
                    token: userData.idToken,
                    isLoggedIn: true,
                })
            );
            return userData.idToken;
        } catch (error) {
            // alert(error.message);
            return Promise.reject();

        }
    };
};
