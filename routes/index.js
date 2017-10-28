var express = require('express');
var router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
	res.render('index', {title: 'iLawyerNow'});
});

router.get('/:resource', (req, res, next) => {
	res.render('index', {title: 'iLawyerNow'});
});

router.get('/:resource/:id', (req, res, next) => {
	res.render('index', {title: 'iLawyerNow'});
});

/* GET attorneyform directory */
// router.get('/attorneyform', (req, res, next) => {
// 	res.render('attorneyform', {title: 'Creating Attorney Form Data'});
// });

/* GET create defendantform */
// router.get('/defendantform', (req, res, next) => {
// 	res.render('defendantform', {title: 'Creating Defendant Form Data'});
// });

module.exports = router;