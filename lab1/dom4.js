import{EventEmitter} from "events";
const form= new EventEmitter();
form.on("submit",(uname,password)=>{
    console.log("Form submitted");
    console.log(`Username: ${uname}`);
    console.log(`Password: ${password}`);
});
form.emit("submit","ANISH DAVE","123456");

