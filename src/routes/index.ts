import express,{Router, Request, Response} from 'express';
const router:Router = express.Router();

router.get('/',(req:Request,res:Response)=>{
  res.send("this is from the index");
})

router.get('/hello', async(req:Request,res:Response)=>{
  res.send("THIS IS DIFFERENT AND ASYNC")
})




export default router; 