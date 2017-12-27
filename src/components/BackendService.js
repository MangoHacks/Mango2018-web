class Service {
    constructor() {}
    const endpoint ="http://localhost:8050/users/"

    GetUsers() {
        return fetch(endpoint,
            {
                method: 'GET',
                headers: {
                    "Authorization": "Bearer " + token,
                }
            });
    }

    DeleteUser(id) {
        return fetch(endpoint+id,
            {
                method: 'DELETE',
                headers: {
                    "Authorization": "Bearer " + token,
                }
            });
    }

    DownloadResumeForUser(id) {
        return fetch(endpoint+id,
            {
                method: 'GET',
                headers: {
                    "Authorization": "Bearer " + token,
                }
            });
    }

    CheckinUser(id, bool) {
        return fetch(endpoint+id,
            {
                method: 'PUT',
                headers: {
                    "Authorization": "Bearer " + token,
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    checkin: bool,
                })
            });
    }

}
export default Service;
