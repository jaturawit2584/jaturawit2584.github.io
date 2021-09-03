let chkUppercase = (str) => {

    regex = /^[A-Z]/;
    if (regex.test(str)) {
        console.log(str + " has the First Charecter as uppercase.");
    } else {
        console.log(str + " does not have the first charector as uppercase.");
    }

}
chkUppercase("Kku");
chkUppercase("kku");