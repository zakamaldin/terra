const FakeAuth = {
    isAuthenticated: false,

    authenticate(callBack){
        this.isAuthenticated = true;
        setTimeout(callBack, 100);
    },

    logout(callBack){
        this.isAuthenticated = false;
        setTimeout(callBack, 100);
    }
  };

export default FakeAuth;
