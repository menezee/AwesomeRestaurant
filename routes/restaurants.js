var express = require('express');
var router = express.Router();


// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function(req, res) {
	var restaurantsRef = ref.child("restaurants");
  	restaurantsRef.set({
  		restaurant: {
    		name: "Silva2",
    		price: 18.5
  		}
	}, function(err, res){
		console.log("err: " + err + "\nres: " + res);
	});
});
// define the about route
router.get('/about', function(req, res) {
  res.send('About birds');
});



// ---------------------- REAL CODE ----------------------------------------

router.post('/', function(req, res) {
	var restaurantsRef = ref.child("restaurants");
  	restaurantsRef.set({
  		restaurant: {
    		name: req.body.restaurant,
    		price: req.body.price
  		}
	}, function(error) {
	  if (error) {
	    res.status(500).send("error: " + error);
	  } else {
	    res.status(200).send(req.body.restaurant + " saved.");
	  }
	});
});

// ---------------------- REAL CODE ----------------------------------------

module.exports = router;