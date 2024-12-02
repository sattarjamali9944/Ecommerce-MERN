const billingShippings = require('../models/billingShipping');

const addShippingBilling = async(req, res) => {
  
    const successMessage = req.flash('success');
    const errors = req.flash('errors'); // Retrieve flash errors
  

    res.render('admin/add-shippingBilling',{
        pageTitle: 'Add Shipping Billing Attribute',
        errors,
        successMessage,
        userId: req.session.userId,
    });
}
const postShippingBilling = (req, res) => {
    const { 
      userId, 
      shippingName, shippingAddress, shippingCity, shippingState, shippingZip, shippingPhone, shippingEmail,
      billingName, billingAddress, billingCity, billingState, billingZip, billingPhone, billingEmail,
      sameAsShipping
    } = req.body;
  
    try {
      // Create a new BillingShipping document
      const billingShipping = new billingShippings({
        userId,
        shipping: {
          name: shippingName,
          address: shippingAddress,
          city: shippingCity,
          state: shippingState,
          zip_code: shippingZip,
          phone: shippingPhone,
          email: shippingEmail
        },
        billing: {
          name: billingName,
          address: billingAddress,
          city: billingCity,
          state: billingState,
          zip_code: billingZip,
          phone: billingPhone,
          email: billingEmail
        },
        sameAsShipping: sameAsShipping === 'on' // Convert checkbox to boolean
      });
  
      // Save the new BillingShipping entry
       billingShipping.save();
  
      // Respond with a success message
      res.status(201).json({ message: 'Billing and shipping information saved successfully' });
    } catch (err) {
      console.error('Error saving billing and shipping info:', err);
      res.status(500).json({ error: 'Error saving billing and shipping information' });
    }
  }


module.exports={
    addShippingBilling,
    postShippingBilling
}