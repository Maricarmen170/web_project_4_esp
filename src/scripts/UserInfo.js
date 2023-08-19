export default class UserInfo {
    constructor({userName, userJob, userAvatar, userId}) {
        this._userName = userName,
        this._userJob = userJob,
        this._userAvatar= userAvatar,
        this._userId = userId
    }

    getUserInfo(){
        return {
            userName : this._userName.textContent,
            userJob : this._userJob.textContent,
            userAvatar : this._userAvatar.src
        };
    }

    setUserInfo(data){
        const {username, userjob, useravatar, userId} = data;
        this._userName.textContent = username;
        this._userJob.textContent = userjob;
        this._userAvatar.src = useravatar;
        this._userId = userId
    }

    changeAvatar(avatar){
        this._userAvatar.src = avatar;
    }
}