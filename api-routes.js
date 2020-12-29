let router = require('express').Router();

router.get('/',function(request,response) {
    response.json({
        status : 'API It´s working!',
        message : 'Welcome to Api Rest'
    });
});

var contactController = require('./contactController');

router.route('/contacts').get(contactController.index);
router.route('/contacts').post(contactController.new);

module.exports = router;