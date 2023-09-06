class User {
    #id;
    #password;

    constructor(id, password) {
      this.id = id;
      this.password = password;
    }

    getId() {
        return this.id;
    }
}

export default User