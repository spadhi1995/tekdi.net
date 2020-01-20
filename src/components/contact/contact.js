import React from "react"
import '../css/contact.css'
const axios = require(`axios`);


export class contactUs extends React.Component {
  form = "";
  state = {
    name: "",
    email: "",
    phone: "",
    message: "",
    form: "",
    formData: "",
    errors: {}
  }

  response = async () => { 
    await axios.post(
      'http://ttpllt-php72.local/gatsby-from/',
      { data: this.state},
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' },   
    })
  }
  
  handleSubmit = event => {
    event.preventDefault();
    this.handleValidation()
    this.response();
  }

  handleValidation(){
    let fields = this.state;
    let errors = {};
    let formIsValid = true;

    //Name
    if (this.state.name === ""){
       formIsValid = false;
       errors["name"] = "Enter an Name";
    }

    if (this.state.name !== ""){
       if (!fields["name"].match(/^[a-zA-Z]+$/)){
          formIsValid = false;
          errors["name"] = "Please enter only letters";
       }        
    }

    //Email
    if (this.state.email === ""){
       formIsValid = false;
       errors["email"] = "Enter an Email";
    }

    if (this.state.name !== ""){
       let lastAtPos = fields["email"].lastIndexOf('@');
       let lastDotPos = fields["email"].lastIndexOf('.');

       if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
          formIsValid = false;
          errors["email"] = "Email is not valid";
        }
    } 
    if (this.state.message === ""){
      formIsValid = false;
      errors["message"] = "Enter an Message";
    } 

    if (this.state.phone === ""){
    formIsValid = false;
    errors["phone"] = "Enter an Phone";
    }

    if (this.state.phone!== ""){
      if(!fields["phone"].match(/^[0]?[789]\d{9}$/)){
        formIsValid = false;
        errors["phone"] = "Phone number is not valid";
    }        
}

   this.setState({errors: errors});
   return formIsValid;
}


  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    const message = target.message
    this.setState({
      [name]: value,
    })
  }

  // Send a POST request
  render() {
    return (
        <form  onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col form-group">
              <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleInputChange}  className="form-control" placeholder="Name"  />
              <span className="error">{this.state.errors["name"]}</span>
            </div>
            </div>
            <div className="row">
            <div className="col form-group">
                 <input type="text" name="phone" id="phone" value={this.state.phone} onChange={this.handleInputChange} className="form-control" placeholder="Phone"  />
                 <span className="error">{this.state.errors["phone"]}</span>
              </div>
              <div className="col form-group">
                 <input type="email" name="email" id="email" value={this.state.email} onChange={this.handleInputChange} className="form-control" placeholder="Email"  />
                 <span className="error">{this.state.errors["email"]}</span>
              </div> 
            </div>
            <div className="form-group form-group">
             <textarea className="form-control" name="message" id="message" value={this.state.massage} onChange={this.handleInputChange} rows="3" placeholder="Message" ></textarea>
             <span className="error">{this.state.errors["message"]}</span>
            </div> 
          <button type="submit">Submit Now</button>
        </form>
    );
  }
}
export default contactUs