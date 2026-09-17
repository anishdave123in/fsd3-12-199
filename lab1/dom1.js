//DOM->DOCUMENT OBJECT MODEL
import{EventEmitter} from "events";
const button = new EventEmitter();
button.on("click", () => {
    console.log("Button clicked");
});
button.emit("click");    //event emiiter KA MEANS KISI EVENT KO GENERATE KARNA
                         //AUR HAMARA KAM HAI USSE REGISTER KARNA