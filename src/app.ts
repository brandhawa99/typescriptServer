import express, {Application} from 'express';
import indexRoute from './routes/index'

const app:Application = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}))


app.use('/',indexRoute)

app.listen(5000, ()=>{
  console.log("Server running on port 5000")
})