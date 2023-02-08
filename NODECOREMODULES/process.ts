//Process
import fs from "fs"
/*It is a global object and provides information related to the program execution. You do not need to load it using require() method.
What are the NodeJS process properties?
Image result for process in node js
Node. js provides the facility to get process information such as process id, architecture, platform, version, release, uptime, upu usage etc. It can also be used to kill process, set uid, set groups, unmask etc. The process is a global object, an instance of EventEmitter, can be accessed from anywhere.

*/

console.log(process.argv)
//process.argv
/**The process.argv property returns an array containing the command-line arguments passed when the Node.js process was launched. The first element will be execPath. See process.argv0 if access to the original value of argv[0] is needed. The second element will be the path to the JavaScript file being exec */
console.log(process.execPath)
console.log(process.argv[1])


const msg = "hello world"
process.stdout.write(msg + "\n")
//process.stdout.write : this help output your values .....its the same thing as doing console.log(msg)
// fs.createReadStream(process.argv[0]).pipe(process.stdout)
