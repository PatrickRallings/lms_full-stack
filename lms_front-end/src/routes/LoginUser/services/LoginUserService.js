const LOGIN_USER_SERVICE_URL = "http://localhost:8080/api/v1/user/login";

class LoginUserService {

    loginUser(tempUser) {

        return fetch(LOGIN_USER_SERVICE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(tempUser),
        })
            .then(response => response.json())
    }
}

export default new LoginUserService();