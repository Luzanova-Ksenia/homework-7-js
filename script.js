class User {
    static canSendMessage = true;

    constructor (name, password) {
        this.name = name
        this.password = password
    }

    canSendMessage(msg) {
        console.log(msg);
    }
};

class SuperUser extends User {
    static createdUsers = true;
    constructor (name, password) {
        super(name, password);
    }  
    
    getCreatedUsers() {
        return(createdUsersList)
    }

    createUser (name, password) {
        let userPerson = new User(name, password)
        createdUsersList.push(userPerson)
        return(userPerson)
    }
};

let createdUsersList = [];
let deletedUsersList = [];

class Admin extends SuperUser {
    static createdUsers = true;

    constructor (name, password) {
        super(name, password);
    }  
    
    getCreatedUsers() {
        super.getCreatedUsers();
    }

    createUser (name, password) {
        super.createUser(name, password);    
    }

    deleteUser(ind) {
        deletedUsersList.push(createdUsersList[ind])
        delete createdUsersList[ind]
        return(createdUsersList)
    }

    getDeletedUsers() {
        return(deletedUsersList)
    }
};