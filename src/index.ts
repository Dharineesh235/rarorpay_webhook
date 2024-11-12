import express from 'express';
import { handleRazorpayEvent } from './controller/smsController';
import cors from 'cors';

const PORT = 5008;
const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res)=>{console.log('/get'); res.send('/get')});
app.post('/webhook', handleRazorpayEvent);

app.listen(PORT, ()=>console.log('listening...'));