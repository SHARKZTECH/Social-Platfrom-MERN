import  jwt from "jsonwebtoken";

 const verify=(req,res,next)=>{
    const token=req.header("auth-token");
    if(!token) return res.status(401).send("Access denied");

    try{
        const verified=jwt.verify(token,"secrete_token")
        req.user=verified;
        next();
    }catch(err){
        res.status(400).send("Invalid Token")
    }
}
export default verify;