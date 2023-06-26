module.exports.main = async(event, context) => {
  try{
    return ({status: true, data: "Welcome to my first serverless integration. "})
  }catch(error){
    return ({status: false, error: error})
  }
}
