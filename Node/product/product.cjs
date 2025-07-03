const product = (...arg)=>{
    return arg.reduce((acc,curr)=>acc*curr,1);
}
module.exports= product;