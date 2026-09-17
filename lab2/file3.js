import { stat } from "fs/promises";

const fstat = await stat("file1.js");

console.log("File size:", fstat.size, "bytes");
console.log(`Is file: ${fstat.isFile()}`);
console.log(`Is folder: ${fstat.isDirectory()}`);
console.log(`Is symlink: ${fstat.isSymbolicLink()}`);
console.log(`Is created on: ${fstat.birthtime}`);
console.log(`Is accessed on: ${fstat.atime}`);
