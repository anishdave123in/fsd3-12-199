import { EventEmitter } from "node:events";

const login = (name) => {
  console.log(`${name} logged in`);
};

const start = () => {
  console.log("System starts");
};

const working = (name) => {
  console.log(`${name} adds items to cart`);
};

const checkout = (name) => {
  console.log(`${name} logged out`);
};

const task = new EventEmitter();

task.on("login", login);
task.on("start", start);
task.on("working", working);
task.on("checkout", checkout);


task.emit("login", "ANISH DAVE");
task.emit("start");
task.emit("working", "ANISH DAVE");
task.emit("checkout", "ANISH DAVE");


task.once``