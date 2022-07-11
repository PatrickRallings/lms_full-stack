const CREATE_USER_URL = "http://localhost:8080/api/v1/user/create";

class UserService {

    saveUser(user) {

        fetch(CREATE_USER_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

}

export default new UserService();