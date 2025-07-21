localStorage.setItem("friends",JSON.stringify(["aakash","lakshit","harsh"]))

const a=JSON.parse(localStorage.getItem("friends"))
console.log(a);
