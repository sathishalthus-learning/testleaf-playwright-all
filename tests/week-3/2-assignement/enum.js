var Environment;
(function (Environment) {
    Environment["Local"] = "local";
    Environment["Development"] = "development";
    Environment["Production"] = "production";
    Environment["Testing"] = "testing";
})(Environment || (Environment = {}));
function runTests(env) {
    switch (env) {
        case Environment.Local:
            console.log("Running local tests");
            break;
        case Environment.Development:
            console.log("Running development tests");
            break;
        case Environment.Production:
            console.log("Running production tests");
            break;
        case Environment.Testing:
            console.log("Running testing tests");
            break;
        default:
            console.log("Unknown environment");
    }
}
runTests(Environment.Development);
runTests(Environment.Production);
runTests(Environment.Testing);
runTests(Environment.Local);
