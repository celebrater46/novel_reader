// const getVarNames = () => {
//     for()
// }

const errorLog = (vars, names, fn, file) => {
    // console.log("Hello World at consoleLog.js!!");
    const i = 0;
    if(i === 0) {
        // const varNames = 
        const message = names + " at " + fn + "() in " + file + ".js, either of vars is wrong.";
        console.log(message);
        // error(message);
        for(let v of vars) {
            console.log(v);
        }
    } else {
        console.log("errorLog is error. vars or names or fn or file at errorLog() in errorLog.js are ... ");
        console.log(vars);
        console.log(names);
        console.log(fn);
        console.log(file);
    }
}

export default errorLog;