const os=require("os");

// console.log("CPU ARCHITACTURE:",os.arch());
// console.log("Free MOmery:",os.freemem());
// console.log("Total MOmery:",os.totalmem());
// console.log("Network interface:",JSON.stringify(os.networkInterfaces()));
// console.log("os default temporary dir:",os.tmpdir());
console.log("HostName:",os.hostname());
console.log("type:",os.type());
console.log("Platform:",os.platform());
console.log("release:",os.release());