export default product = (...arg)=>{
    return arg.reduce((acc,curr)=>acc*curr,1);
}