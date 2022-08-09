const CREATE_USER_URL = "http://localhost:8080/api/v1/user/create";

class RegisterUserService {

    createUser(user) {

        return fetch(CREATE_USER_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(response => response.json())

    }

}

export default new RegisterUserService();