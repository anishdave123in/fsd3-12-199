const fun1 = () => {
  console.log("this is fun1");
};

const fun2 = () => {
  console.log("this is fun2");
};
 

const fun3 = () => {
  console.log("this is fun3");
};

function main() {
  console.log("main");

  setTimeout(fun1, 0);
  //setInterval(f1,1000);
  setImmediate(fun2);
  process.nextTick(fun3);
  console.log("end");
}
// fht
 

main();
