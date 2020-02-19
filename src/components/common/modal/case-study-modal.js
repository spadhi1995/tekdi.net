
import React from 'react'
import Modal from 'react-modal';
import { navigate, Link } from "gatsby"
import './case-study-modal.scss';
import { loadReCaptcha } from 'react-recaptcha-v3'
import { ReCaptcha } from 'react-recaptcha-v3'

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
class CaseStudyModal extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      showModal: false,
      name: "",
      email: "",
      phone: "",
      data: "",
      errors: {},
      slug: this.props.slug,
      caseStudyName: this.props.caseStudyName,

      submitMessage:"",
      recaptchaToken:"",
    };
  
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    navigate(this.state.slug,
      {
        state: { 
          modalSubmit:true,
         },
         replace: true
      }
      )
   // this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  response = async () => { 
    await axios.post(
      process.env.GATSBY_AWS_API_GETEWAY,
      JSON.stringify (this.state.data),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' },   
    }).then((response) => {
      this.setState({ submitMessage: response }); 
      this.setState({name:"", email: "",phone:"",message:"",data:"",errors:"",recaptchaResponse:"" });   
      loadReCaptcha(process.env.GATSBY_GOOGLE_RECAPTCHA_KEY);  
      }, (error) => {
      // console.log(error);
      });
  }

  componentDidMount() {
    loadReCaptcha(process.env.GATSBY_GOOGLE_RECAPTCHA_KEY);
  }

  verifyCallback = (recaptchaToken) => {
    this.setState({ recaptchaToken: recaptchaToken });
  }
  
  handleSubmit = event => {
    event.preventDefault();
    
    if(this.handleValidation())
    {
      this.state.data = { "name" : this.state.name , "email" : this.state.email , "phone" : this.state.phone , "message" : this.state.message }
      this.response();
      navigate(this.state.slug,
        {
          state: { 
            modalSubmit:true,
           },
           replace: true
        }
        )
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
    this.setState({
      [name]: value,
    })
  }
  
  render () {
    return (
      <div>
  {/* <button onClick={this.handleOpenModal} className="btn-apply mb-4 p-0  font-weight-bold text-black mb-3">{this.props.caseStudyName}</button> */}
  <Link to={this.props.slug}>{this.props.caseStudyName}</Link>

        <Modal 
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}  
           style={customStyles}
        > 
        <ReCaptcha
                sitekey = {process.env.GATSBY_GOOGLE_RECAPTCHA_KEY}
                verifyCallback={this.verifyCallback}
             /> 
          <button className="btn-close" onClick={this.handleCloseModal}>
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
          <div >
            <form  onSubmit={this.handleSubmit}>  
              <h3 className="section-title text-black text-center mb-4">
                Please fill the form below
              </h3>
              <div className="row">
                  {this.state.submitMessage !== "" ?   
                      <div className= {this.state.submitMessage.data.success === true ? "alert alert-success  col form-group" : "alert alert-danger col form-group"} role = "alert">    
                        {this.state.submitMessage.data.message}
                        
                      </div>
                    :null }
                </div>
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
                
              {/* </div> */}
              <div className="text-center mb-4 my-3">
                <button type="submit" className="btn-submit">Submit Now</button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

const props = {};
export default CaseStudyModal;