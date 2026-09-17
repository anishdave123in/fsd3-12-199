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

  setTimeout(fun1, 1);
  setImmediate(fun2);

  fun3();

  console.log("end");
}

main();
