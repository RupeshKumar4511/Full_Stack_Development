import os from 'node:os';

console.log(os.version()) // Windows 10 Pro
console.log(os.type()) //Windows_NT
console.log(os.platform()) // win32
console.log(os.release()) // 10.0.19045 
console.log(os.hostname()) // DESKTOP-2GBKJIV
console.log(os.homedir()) // C:\Users\admin 
console.log(os.arch()) // x64
console.log(os.uptime()) //3119.64 second
console.log(os.totalmem()) 
// returns the total system memory(RAM) in bytes

console.log(os.freemem())
// Returns the amount of free system memory(RAM) in bytes.

console.log(os.cpus()) 
// Returns an array of objects with information about each logical CPU core.

console.log(os.networkInterfaces())
// Returns information about network interfaces.

console.log(os.tmpdir())
// Returns the OS default temporary files directory.

console.log(os.userInfo())
// Returns info about the current user.