var express = require('express');
var router = express.router();

/* GET home page */
router.get('/', (res, req, next) => {
	res.render('index', {title: 'iLawyerNow'});
});

/* GET attorneyform directory */
router.get('/attorneyform', (req, res, next) => {
	res.render('attorneyform', {title: 'Creating Attorney Form Data'});
});

/* GET create defendantform */
router.get('/defendantform', (req, res, next) => {
	res.render('defendantform', {title: 'Creating Defendant Form Data'});
});