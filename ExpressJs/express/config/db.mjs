import { connect } from 'mongoose';

const connection =  connect('mongodb://localhost:27017/test').
then(()=>console.log("Database Connected Successfully"))
.catch((error)=>console.error(error))


export default connection;
