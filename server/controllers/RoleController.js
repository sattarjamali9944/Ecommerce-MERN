const role = require('../models/Role');
const express = require('express');
const router = express.Router();
const  session = require('express-session');
const cors = require('cors');
const {
    body,
    validationResult,
    matchedData
} = require('express-validator'); //validation pio kare
/* get home  */
exports.getHome = async (req,res,next) => {
	const successMessage = req.flash('success');
	try {
    const roles = await role.find();
    res.render('admin/add-role',{
        pageTitle: 'Role Setting',
        currentMenu: "Categories",
        userName:req.session.userName,
        roles,
        successMessage,
        

    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
    /* res.render('admin/add-role',{
        pageTitle:'Role',
        currentMenu:"Role",
    }); */  
};
exports.addRolePost = async (req, res) => {
	
	const role_name = req.body.add_cat;
        const add_role  = new role({
              role_name: role_name
        });
        add_role.save()
            .then(result => {
                console.log(result);
                req.flash('success', 'Role is successfully Added');
                res.redirect('/add-role')
            })
            .catch(err => {
                console.log(err);
            })
}

exports.deleteRole = async (req, res) => 
{
	
	const id = req.params.id;
    role.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
               res.status(200).send({
               "id":`${id}`, "message" : "Data is successfully deleted"});
             }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
}
exports.getRole = async (req, res) => {
    try {
        const roleInfo = await role.findById(req.params.id);
        if (!roleInfo) {
          return res.status(404).json({ message: 'Role not found' });
        }
        res.json(roleInfo);
      } catch (error) {
        res.status(500).json({ message: 'Server error' });
      }

}





