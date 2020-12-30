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

exports.view = function(request,response) {
    Contact.findById(request.params.contact_id, function(error,contact) {
        if (error) 
            response.send(error);
        
        response.json({
            message : 'Contact detalis',
            data : contact
        });
    });
}

exports.update = function(request,response) {
    Contact.findById(request.params.contact_id, function(error,contact) {
        if (error)
            response.send(error);

        contact.name = request.body.name;
        contact.genger = request.body.genger;
        contact.phone = request.body.phone;
        contact.email = request.body.email;

        contact.save(function(error) {
            if (error)
                response.json(error);

            response.json({
                message : 'Contact Info Updated',
                data : contact
            });
        }); 
    });
}

exports.delete = function(request,response) {
    Contact.remove({_id:request.params.contact_id},function(error,contact) {
        if (error)
            response.send(error);

        response.json({
            status : 'success',
            message : 'Contact deleted'
        });
    });
}