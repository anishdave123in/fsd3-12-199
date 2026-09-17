import {EventEmitter} from "events";
const button = new EventEmitter();
button.on("click", (uname) => {
    console.log(`Button clicked by ${uname}`);
});

button.emit("click", "ANISH DAVE");  
button.emit("click", "AMBIKESH SINGH");
button.emit("click", "AMOGH GUPTA");
button.emit("click", "AKSHAY SHEORAN");
button.emit("click", "AMISH WAQAR");