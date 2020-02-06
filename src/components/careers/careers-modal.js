
import React from 'react'
import Modal from 'react-modal';
import { navigate } from "gatsby"
const axios = require(`axios`);
const queryString = require('query-string');
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
class CareersModal extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      showModal: false,
      name: "",
      email: "",
      phone: "",
      data: "",
      position : this.props.position,
      resume:"",
      errors: {},
      file:null
    };
  
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.fileInput = React.createRef();
  }
  
  handleOpenModal () {
    //console.log(position)
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  response = async () => { 
    await axios.post(
      'http://ttpllt-php72.local/gatsby-from/',
      queryString.stringify (this.state.data),
      // { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, 
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          
        },  
      //},
      
    })
  }
  
  handleSubmit = event => {
    event.preventDefault();
        const formData = new FormData();

        formData.append('avatar',this.state.file)
        console.log(formData)
        var options = { content: formData };
        console.log(options)

   // this.setState({ resume: this.fileInput.current.files[0].name });

    if(this.handleValidation())
    {
      this.state.data = { "name" : this.state.name , "email" : this.state.email , "phone" : this.state.phone , "message" : this.state.message, "position": this.state.position, "resume":this.fileInput.current.files[0].name }
      this.response();
      console.log(this.state.data)
    }  
  }

  handleValidation(){
    let fields = this.state;
    let errors = {};
    let formIsValid = true;

    //Name
    if (this.state.name === ""){
       formIsValid = false;
       errors["name"] = "Please enter an Name";
    }

    if (this.state.name !== ""){
       if (!this.state.name.match(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/)){
          formIsValid = false;
          errors["name"] = "Please enter only letters";
       }        
    }

    //Email
    if (this.state.email === ""){
       formIsValid = false;
       errors["email"] = "Please enter an Email";
    }

    if (this.state.email !== ""){
       let lastAtPos = fields["email"].lastIndexOf('@');
       let lastDotPos = fields["email"].lastIndexOf('.');

       if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
          formIsValid = false;
          errors["email"] = "Email is not valid";
        }
    } 
    if (this.state.phone === ""){
    formIsValid = false;
    errors["phone"] = "Please enter an Phone";
    }

    if (this.state.phone!== ""){
      if(!this.state.phone.match(/^[0]?[789]\d{9}$/)){
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
   // this.setState({file:e.target.files[0]})
    this.setState({
      [name]: value,
    })
  }
  
   render () {
    return (
      <div>
        <button onClick={this.handleOpenModal}>Apply</button>
        <Modal 
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}  
           style={customStyles}
        > 
        
      <button onClick={this.handleCloseModal}>Close Modal</button>
        <div >
        <div className="container">
          <div className="row com-cover">
            <div className="col-md-10 offset-md-1">
              <h2 className="com-heading text-center text-white mb-3">
                Let's transform your business today
              </h2>
              <form  onSubmit={this.handleSubmit} encType="multipart/form-data">  
                {/* <div className="row"> */}
                  <div className="col-md-12 col-xs-12 form-group">
                    <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleInputChange}  className="form-control" placeholder="Name"  />
                    <span className="error">{this.state.errors["name"]}</span>
                  </div>
                  <div className="col-md-12 col-xs-12 form-group">
                      <input type="email" name="email" id="email" value={this.state.email} onChange={this.handleInputChange} className="form-control" placeholder="Email"  />
                      <span className="error">{this.state.errors["email"]}</span>
                  </div> 
                  <div className="col-md-12 col-xs-12 form-group">
                      <input type="text" name="phone" id="phone" value={this.state.phone} onChange={this.handleInputChange} className="form-control" placeholder="Phone"  />
                      <span className="error">{this.state.errors["phone"]}</span>
                  </div>
                  <input type="file" ref={this.fileInput} />
                {/* </div> */}
                <div className="text-center my-3">
                  <button type="submit" className="btn-submit">Submit Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
        </Modal>
      </div>
     
    );
   }
}
export default CareersModal;