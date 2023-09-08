import constants from "../utils/constant";

class User {
    #id;
    #password;

    constructor(id, password) {
      this.id = id;
      this.password = password;
    }

    static createFromJson(json){
      return json !== constants.localStrorage.userLocalStorageDefaultValue ? new User(json.id,json.password) : constants.localStrorage.userLocalStorageDefaultValue
    }

    getId() {
        return this.id;
    }
}

export default User