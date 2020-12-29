Contact = require('./contactModel');

exports.index = function(request,response) {
    Contact.get(function(error,contacts){
        if (error) {
            response.json({
                status : 'error',
                message: error
            });
        } else {
            response.json({
                status : 'success',
                message : 'Contacts retrieved successfully',
                data : contacts
            })
        }
    });
}

exports.new = function(request,response) {
    let contact = new Contact();
    contact.name = request.body.name;
    contact.gender = request.body.gender;
    contact.email = request.body.email;
    contact.phone = request.body.phone;

    contact.save(function (error) {
        response.json({
            message : 'New Contact created!',
            data : contact
        });
    });
}