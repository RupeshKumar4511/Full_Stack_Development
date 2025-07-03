let count = 1 ;
console.log("Hello, I'm Rupesh Kumar");
const timer = setInterval(()=>{
    console.log(count);
    count++;
},1000)


setTimeout(()=>{
    clearInterval(timer)
},11000)
