function askPassword(ok, fail) {
    let password = prompt("Password?", '');
//     old version:
//     if ( password == "rockstar" ) ok();
//     else fail ();
    if (password === "rockstar") {
        ok.bind(user)();
    } else {
        fail.bind(user)();
    }
}

let user = {
    name: 'John',

    loginOk() {
        alert(`${this.name} logged in`);
    },

    loginFail() {
        alert(`${this.name} failed to log in`);
    },
};

askPassword(user.loginOk, user.loginFail);


let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function() {
        this.students.forEach(function(student) {
            console.log(this.title + ": " + student);
        //.bind(this) is added here:
        }.bind(this));
    }
};

group.showList();

