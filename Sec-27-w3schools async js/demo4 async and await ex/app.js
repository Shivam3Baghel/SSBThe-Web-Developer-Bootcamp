function step1() {
  return Promise.resolve("A");
}
function step2(value) {
  return Promise.resolve(value + "B");
}
function step3(value) {
  return Promise.resolve(value + "C");
}

async function run(){
    let v1=await step1();
    let v2=await step2(v1);
    let v3=await step3(v2);
    console.log(v3);
}
run();