const mongoose = require('mongoose')

const User = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true 
		},
		email: { 
			type: String, 
			required: true, 
			unique: true 
		},
		password: {
			 type: String,
			  required: true 
		},
		company: { 
			// low-high-average
			type: String,
				
				},
				street: { 
			// 3 images
			type: String, 
			
			},
			postcode:{
			// Slider value
			type:String,
			
			},
			location:{
			// Name of customer
			type: String,
			
			},
			phone:{
			// Phone number
			type: String,
			
			},
			vat:{
			// Address field 
			type: String,
			
			} 
		
	},
	{ collection: 'subcontractors' }
)

const model = mongoose.model('UserData', User)

module.exports = model