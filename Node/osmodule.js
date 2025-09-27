import os from 'node:os';

console.log(os.version()) //OS version :  Windows 10 Pro
console.log(os.type()) // Operating system name : ("Windows_NT", "Linux", "Darwin")
console.log(os.platform()) // Platform name ("win32", "linux", "darwin")
console.log(os.release()) // OS release version:  10.0.19045 
console.log(os.hostname()) //Computer hostname :  DESKTOP-2GBKJIV
console.log(os.homedir()) // Path to current user's home directory:  C:\Users\admin 
console.log(os.arch()) // CPU architecture ("x64", "arm64")
console.log(os.uptime()) // System uptime 3119.64 second
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