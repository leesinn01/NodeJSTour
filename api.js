const dboperations = require('./dboperations');
var Tour = require('./tour');

var  express = require('express');
var  bodyParser = require('body-parser');
var  cors = require('cors');
var  app = express();
var  router = express.Router();

app.use(bodyParser.urlencoded({ extended:  true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

router.use((request,response,next) => {
    console.log('middlewware');
    next();
}) 
// api tour full
router.route('/tour').get((request , response) =>{

    dboperations.getTour().then(result => {
        //console.log(result);
        response.json(result[0]);
    })
})

//api theo tour id 
router.route('/tour/:id').get((request , response) =>{

    dboperations.getTourId(request.params.id).then(result => {
        //console.log(result);
        response.json(result[0]);
    })
})
//api add tour
router.route('/tour').post((request , response) =>{

    let tour = {...request.body}
    dboperations.addTour().then(result => {
        //console.log(result);
        response.status(201).json(result);
    })
})
// xet port
var  port = process.env.PORT || 8080;
app.listen(port);
console.log('Tour API is runnning at ' + port);

