class Service {
    constructor() {
            this.endpoint = "http://localhost:8050/users/"
            this.token = config.GetToken()
    }


    GetUsers() {
        return fetch(this.endpoint,
            {
                method: 'GET',
                headers: {
                    "Authorization": "Bearer " + this.token,
                }
            });
    }

    DeleteUser(id) {
        return fetch(this.endpoint+id,
            {
                method: 'DELETE',
                headers: {
                    "Authorization": "Bearer " + this.token,
                }
            });
    }

    DownloadResumeForUser(id) {
        return fetch(this.endpoint+id,
            {
                method: 'GET',
                headers: {
                    "Authorization": "Bearer " + this.token,
                }
            });
    }

    CheckinUser(id, bool) {
        return fetch(this.endpoint+id,
            {
                method: 'PUT',
                headers: {
                    "Authorization": "Bearer " + this.token,
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    checkin: bool,
                })
            });
    }

}
export default Service;
