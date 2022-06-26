import {Request, Response} from "express";
import UserModel from "../models/users";
import {createUser, findAndUpdate, findUser, deleteUser} from "../services/usersService";

const homeDetail = async (req: Request, res: Response) => {

    // const user = UserModel.myNewStaticFn();
    const user = UserModel.mathStaticFn();

    // let myData = await UserModel.find();

    // Add
    // const user = await createUser({ name: 'test data', dept: 'xyz' });

    // Update
    // const user = await findAndUpdate({ name: 'Ram' }, { dept: 'HR' }, { new: true });

    // Find
    // const user = await findUser({ _id: '6280ec047c8f68a70dc8ad60' });

    // Delete
    // const user = await deleteUser({ _id: '6280ec047c8f68a70dc8ad60' });
    
    let ob = {
        x: 12,
        y: 30
    }
    // let data = sumData(12, 24);
    let data = sumData(ob);
    res.json({
        message: "Home Page New",
        data: data,
        // myData: myData,
        myData: user
    })
}

interface params {
    x: number,
    y: number
}

// const sumData = (x: number, y: number) => {
//     return x + y;
// }

// const sumData = (ob: params) => {
//     return ob.x + ob.y;
// }

type sumCheck = (x: params) => string

const sumData: sumCheck = (ob: params) => {
    return ob.x + ob.y + 'ss';
}

export {
    homeDetail
}