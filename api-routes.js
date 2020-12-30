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
router.route('/contacts/:contact_id').get(contactController.view);
router.route('/contacts/:contact_id').put(contactController.update);
router.route('/contacts/:contact_id').delete(contactController.delete);

module.exports = router;