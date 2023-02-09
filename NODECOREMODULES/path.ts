import path from "path"

console.log(path.basename("./NODECOREMODULES/OS/path.ts")) //output : path.ts
//this returns the base file name (the last index position ) or rather the file closer to the extname

console.log(path.dirname("./NODECOREMODULES/OS.ts")) //output :./NODECOREMODULES
//this returns the directory(path) to that particular file 

console.log(path.extname("./NODECOREMODULES/OS.ts"))// output : .ts
console.log(path.extname("./NODECOREMODULES/OS.html.ts"))// output : .ts
/*Return the extension of the path, from the last '.' to end of string in the last portion of the path. If there is no '.' in the last portion of the path or the first character of it is '.', then it returns an empty string. */

console.log(path.isAbsolute("./GlobalJavascriptNumberMethods.ts")) //output : false
//return type : boolean
/*Determines whether {path} is an absolute path. An absolute path will always resolve to the same location, regardless of the working directory. 
If the given {path} is a zero-length string, false will be returned.
*/


console.log(path.join("./GlobalJavascriptNumberMethods.ts"))
//Join all arguments together and normalize the resulting path
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  