const userModel = require("./userModel");



exports.createUser = async (req, res) => {
try {
    const { userName, userAge, userGender, userAddress } = req.body;
    const obj = {
    name: userName,
    age: userAge,
    gender: userGender,
    address: userAddress,
    };

    // This will not work if someSyncFunction() does not return a promise
    someSyncFunction()
    .then((result) => { console.log(result)})
    .catch((error) => {console.log(error,"err") });

    //BY USING PROMISE

    // userModel.create(obj)
    // .then((resp)=>{res.json({resp})})
    // .catch((err)=>res.json({err}))

    //BY USING ASYNC/AWAIT

    const createReault = await userModel.create(obj)
    console.log("done")
    res.json({result:createReault})

} catch(e) {
    console.log(e,"e")
    res.json(e);
}
};

//THIS FUNCTION WONT RETURN PROMISE
// function someSyncFunction(){
//     return 5
// }

//THIS FUNCTION RETURN PROMISE
function someSyncFunction(){
    return new Promise((resolve,reject)=>{
        if(false){
            resolve("working")
        }else{
            reject("notworking")
        }
    })
}


exports.listUser = async (req, res) => {
    try {
    const data = await userModel.find();
    const result = data.map((val,i)=>{
        return {
            userName:val.name,
            userAge:val.age,
            userGender:val.gender,
            userAddress:val.address,
            };
    })
    console.log(result,"result")

    // const resultCheck = data.map((val,i)=>{
    //     //some query operation to make it asynchronous
    //     return {
    //         userName:val.name,
    //         userAge:val.age,
    //         userGender:val.gender,
    //         userAddress:val.address,
    //         };
    // })
    // const resultVal = await Promise.all(resultCheck)
    // console.log(resultVal,"resultVal")

    res.json({ status: true, data: result });
    } catch (e) {
    res.json({ staus: false });
    }
};

exports.updateUser = async(req,res)=>{
    try{
        const data = req.body
        const mapKey = {
            userName:"name",
            userAge:"age",
            userGender:"gender",
            userAddress:"address",
            userId:"id"
            
        }
        const updateKey = {};
        for (const reqKey in data) {
            // if (data.hasOwnProperty(reqKey) && mapKey[reqKey]) {
            if (mapKey[reqKey]) {
                updateKey[mapKey[reqKey]] = data[reqKey];
            }
        }
        
        const {id,...newObject} = updateKey
        const updateResult = await userModel.findByIdAndUpdate({"_id":id},{"$set":newObject},{ new: true })
        res.json({updateResult})

    }catch(e){
        console.log(e)
    }

}

exports.deleteUser = async(req,res)=>{
    try{
        const id = req.params.id;
        const delResp = await userModel.deleteOne({_id:id})
        res.json({delResp})
    }catch(e){

    }
}