const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

exports.addContactPost = async (req, res) => {

  try {
    const { name, email, subject, message } = req.body;

    // Save to MongoDB
    const contact = new Contact({ name, email, subject, message });
    await contact.save();


    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
          user: 'sattarfiver@gmail.com',
          pass: 'fwjgjdktodumzrgc'
      }
      });
      let mailOptions = {
          from: 'sattarfiver@gmail.com',
          to: email,
          subject: 'Contact Us',
          text: `Dear ${name},\n\nThank you for reaching out to us. We have received your message and will get back to you soon.\n\nBest regards,\nYour Company`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error.message);
          }
          console.log('success');
      });

    res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }

          
}

exports.cronJobs = async (req, res) =>{
  
  res.body;


}

exports.allContactJson = async (req, res) => {
  try {
    // Find products where the categoryId matches the provided one
    const contacts = await Contact.find();

    if (!contacts || contacts.length === 0) {
      return res.status(404).json({ message: 'No Contact found for this category' });
    }

    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
}

exports.contacts  = async (req,res,) => {
  const contactses = await  Contact.find();
  res.render('admin/contact',{
  pageTitle:'Get Contact',
  cntacts:contactses,
  success:req.flash('success')

  })

};