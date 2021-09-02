const log = require('./logger')(module);
const db = require('./db');
db.connect();

const User = require('./user/index');

function run() {
    var Vasya = new User("Vasya");
    var Petya = new User("Petya");

    Vasya.hello(Petya);

    log(db.getPhrase("Run successful"));
}


if (module.parent) {
    exports.run = run;
} else {
    run();
}