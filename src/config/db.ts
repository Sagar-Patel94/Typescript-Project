import mongoose, {connect} from "mongoose"

function connects() {
    return connect('mongodb://localhost:27017/smpatel')
    .then(() => {
        console.log('Db connected');
    })
    .catch((err: any) => {
        console.log(err);        
    })
}

export default connects;