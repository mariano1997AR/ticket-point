import {Router} from 'express'

const router = Router();

//routes
router.get('/', (req,res)=> res.render('index',{title:'First website with Node'}));

router.get('/about', (req,res)=> res.render('about',{title:'About Me'}));

router.get('/contact',(req,res) => res.render('contact',{title:'Contact Page'}));

export default router;