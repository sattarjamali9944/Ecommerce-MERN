const attribute = require('../models/Attributes');
const SubAttribute = require('../models/SubAttribute');

const addAttribute = async(req, res) => {
    const getAttributes = await attribute.find({userId:req.session.userId});
    const successMessage = req.flash('success');


    res.render('admin/add_attribute',{
        pageTitle: 'Attribute Setting',
        getAttributes,
        successMessage,
    });
}
const addSubAttribute = async(req, res) => {
   // const getAttributes = await attribute.find({status:"active",userId:req.session.userId~});
   
   const getAttributes = await attribute.find({
    $and: [
      { status: "active" },
      { userId: req.session.userId }
    ]
  });
  
   const getSubAttributes = await SubAttribute.find();
   const successMessage = req.flash('success');


    res.render('admin/add-attribute-sub',{
        pageTitle: 'Sub Attribute Setting',
        getAttributes,
        getSubAttributes,
        successMessage,
    });
}
const createAttribute = async (req, res) => {
    
    try{
	
        const attribute_name = req.body.name;
        const add_attribute = new attribute({
            attribute_name: attribute_name,
            userId:req.session.userId,
            status:'active'
            });
            add_attribute.save()
                .then(result => {
                    req.flash('success', 'Attribute is successfully Added');
                    res.redirect('/add-attribute')
                })
                .catch(err => {
                    console.log(err);
                })
        } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
      }

}
const createSubAttribute = async (req, res) => {

    
    try{
        const {sub_attribute_name,attributeId} = req.body;
        const newSubAttribute = new  SubAttribute({
            sub_attribute_name,
            attributeId
        })
        newSubAttribute.save().then(result => {
            req.flash('success', 'Sub Attribute is successfully Added');
            res.redirect('/add-sub-attribute')
        })
        .catch(err => {
            console.log(err);
        })
        } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
        }

}
    
const changeAttributeStatus = async (req, res) => {
    try {
        const updatedAtrribute = await attribute.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
        if (!updatedAtrribute) {
            return res.status(404).send('Atrribute not found');
        }
        res.json(updatedAtrribute);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}
const getSubAttributes = async(req, res) =>{
    try {
         //console.log(req.params.id);
         const getSubAttribute = await SubAttribute.find({attributeId:req.params.id});
         if (!getSubAttribute) {
            return res.status(404).send('Atrribute not found');
        }
        res.json(getSubAttribute);
         

    } catch (error) {
        
    }

}
module.exports = {
    addAttribute,
    createAttribute,
    addSubAttribute,
    createSubAttribute,
    changeAttributeStatus,
    getSubAttributes
}