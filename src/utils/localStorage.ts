const addToken = (token: string) => {
    localStorage.setItem("authToken", token);
};

const addDateToken = () => {
    localStorage.setItem("dateToken", Date.now().toString());
};

const getToken = () => {
    return localStorage.getItem("authToken");
};

const getDateToken = () => {
    return localStorage.getItem("dateToken");
};

export { addToken, addDateToken, getToken, getDateToken };