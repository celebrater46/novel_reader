const consoleLog = (vars, names, fn, file) => {
    // console.log("Hello World at consoleLog.js!!");
    const i = 0;
    if(i === 1) {
        const message = names + " at " + fn + "() in " + file + ".js is ... ";
        console.log(message);
        for(let v of vars) {
            console.log(v);
        }
    }
}

export default consoleLog;