import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useUserActions = () => {
    const navigate = useNavigate();
    const baseURL = "http://localhost:8000/api";

    // Login the user
    function login(data) {
        return axios.post(`${baseURL}/auth/login/`, data)
            .then((res) => {
                // Registering the account and tokens in the store
                setUserData(res.data);
                navigate("/");
            })
            .catch((err) => {
                // Handle login errors if necessary
                console.error("Login failed:", err);
                throw err;
            });
    }

    // Logout the user
    function logout() {
        localStorage.removeItem("auth");
        navigate("/login");
    }

    // Get the user
    function getUser() {
        const auth = JSON.parse(localStorage.getItem("auth"));
        return auth ? auth.user : null;
    }

    // Get the access token
    function getAccessToken() {
        const auth = JSON.parse(localStorage.getItem("auth"));
        return auth ? auth.access : null;
    }

    // Get the refresh token
    function getRefreshToken() {
        const auth = JSON.parse(localStorage.getItem("auth"));
        return auth ? auth.refresh : null;
    }

    // Set the access, token and user property
    function setUserData(data) {
        localStorage.setItem(
            "auth",
            JSON.stringify({
                access: data.access,
                refresh: data.refresh,
                user: data.user,
            })
        );
    }

    return {
        login,
        logout,
        getUser,
        getAccessToken,
        getRefreshToken,
    };
}

export default useUserActions;
