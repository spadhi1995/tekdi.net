
import React from 'react'
import Modal from 'react-modal';
import { loadReCaptcha } from 'react-recaptcha-v3';
import { ReCaptcha } from 'react-recaptcha-v3';

const axios = require(`axios`);

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
      recaptchaToken:"",
      submitMessage:"",
    };
  
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.fileInput = React.createRef();
  }
  componentDidMount() {
    loadReCaptcha(process.env.GATSBY_GOOGLE_RECAPTCHA_KEY);
  }

  verifyCallback = (recaptchaToken) => {
    this.setState({ recaptchaToken: recaptchaToken });
  }
  handleOpenModal () {
    //console.log(position)
    this.setState({ showModal: true });

  }
  
  handleCloseModal () {

    this.setState({ showModal: false });
  }

  response = async ()  => { 
    await axios.post(
      process.env.GATSBY_AWS_API_GETEWAY,
      JSON.stringify (this.state.data),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",        
        },  
    }).then((response) => {
          this.setState({ submitMessage: response });
          this.setState({name:"", email: "",phone:"",message:"",data:"",errors:"",recaptchaResponse:"" });   
    }, (error) => {
     // console.log(error);
    });
  }
  


  handleSubmit =  event => {
    event.preventDefault();
    // if(this.handleValidation())
    // {  
      this.state.data = { 
                  "name" : this.state.name , 
                  "email" : this.state.email , 
                  "phone" : this.state.phone , 
                  "resume" : this.fileInput.current.files[0],
                  "recaptchaToken": this.state.recaptchaToken,
               }

               let  selectedFile = this.fileInput.current.files[0];
                    // console.log('Pratiksha selectedFile here 2 ', this.fileInput.current);

              // let file = null;
  //this.fileToBase64('tekdi.pdf', 'tekdi.pdf');
let _self = this;
               if (selectedFile) {
                                  //  console.log('Pratiksha selectedFile here 11 ', selectedFile);
 // Select the very first file from list
                let fileToLoad = selectedFile[0];
                // FileReader function for read the file.
                let fileReader = new FileReader();
                // Onload of file read the file content
                fileReader.onload = function(fileLoadedEvent)
                 {
                    var file = fileLoadedEvent.target.result;
                        let base64String = file.split(',');
                       console.log(base64String[1]); 
 

                    _self.saveFile(base64String[1]);
                };
                // Convert data to base64
                fileReader.readAsDataURL(selectedFile);
           }
           
           
           // this.saveFile(file, "this is file before upload");
    //}  
  }

  async saveFile(fileUrl) {
    let url = "https://eunghtsbs6.execute-api.ap-south-1.amazonaws.com/default/get-upload-url";

    const payloadDate = {
      FileName: "application.pdf",
      methodType: "POST"
    }

    const headers = {
      'Content-Type': 'application/json'
    }

    await axios.post(url, payloadDate, {
      headers: headers
    }).then(
      (result) => {
        console.log(JSON.stringify(result.data));
        this.postFile(fileUrl, result);
        //localStorage.setItem('dataBody', JSON.stringify(result.data));
        //window.open('/gst', '_self');
      },
      (error) => {

        // Toast.show({
        //   text: 'Something went wrong',
        //   duration: 'short'
        // });

        // localStorage.clear();
        // window.open('/home', '_self');
      });
  }


  async  postFile(fileUrl, awsData) {
    let url = awsData.data.url;
    
    const blob = this.b64toBlob(fileUrl, 'application/pdf', 512);

    let payloadDate = new FormData();
    payloadDate.append('key', awsData.data.fields['key'])
    payloadDate.append('AWSAccessKeyId', awsData.data.fields['AWSAccessKeyId'])
    payloadDate.append('x-amz-security-token', awsData.data.fields['x-amz-security-token'])
    payloadDate.append('policy', awsData.data.fields['policy'])
    payloadDate.append('signature', awsData.data.fields['signature'])
    payloadDate.append('file', await blob, awsData.data.fields['key'])
    const headers = {
      'Content-Type': 'multipart/form-data'
    }

    await axios.post(url, payloadDate, {
      headers: headers
    }).then(
      (result) => {
       // this.getFileText(awsData.data.fields['key']);
        console.log(result);
      },
      (error) => {
        console.log(error);

        // Toast.show({
        //   text: 'Something went wrong',
        //   duration: 'short'
        // });

        // localStorage.clear();
        // window.open('/home', '_self');
      });
  }

  // async  getFileText(fileName)
  // {
  //   console.log(fileName, "this is the file name")
  //   let url = "https://fjqxci7t0c.execute-api.ap-south-1.amazonaws.com/default/gst-extract-fields";

  //   const payloadDate = {
  //     'Image': fileName
  //   };

  //   const headers = {
  //     'Content-Type': 'text/plain'
  //   }
    
  //    await axios.post(url, payloadDate, {
  //     headers: headers
  //   }).then(
  //     (result) => {
  //       console.log(result, "This is the actual last entry");
  //       //localStorage.setItem('dataBody', JSON.stringify(result.data));
  //       //window.open('/gst', '_self');
  //       //setShowLoading(false)
  //     },
  //     (error) => {
  //       console.log(error)
  //       // Toast.show({
  //       //   text: 'Something went wrong',
  //       //   duration: 'short'
  //       // });

  //       // localStorage.clear();
  //       // window.open('/home', '_self');
  //     });

  // }

  async  b64toBlob(b64Data, contentType, sliceSize) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;
 //b64Data = "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YW0KZW5kb2JqCjkgMCBvYmoKPDwgL0ZpbHRlciAvRmxhdGVEZWNvZGUgL0xlbmd0aCAyNzYgPj4Kc3RyZWFtCnicXZHbSsQwEIbv8xRzuV4s7WbbXYVS0OpCLzxg9QHSZFoDNglpetG3N4e6goEEPmb+fyYzWdM+tko6yN6s5h06GKQSFme9WI7Q4ygVOVAQkruN4ssnZkjmxd06O5xaNWhSVQDZu4/Ozq6wuxe6xxuSvVqBVqoRdp9N57lbjPnGCZWDnNQ1CBy80zMzL2xCyKJs3wofl27de81fxsdqEGjkQ+qGa4GzYRwtUyOSKvenhuriT01QiX/xMqn6gX8xG7OPPjvPaV4HOp4jlUWkool0ukv0lOghUllGOtNYZfOjv+7XZopkWNwmbfItaaqSSp8um0UShZ7DbK8D4Yu1fhZxAXEI4ftS4XVHRpugCvcHZGaLumVuZHN0cmVhbQplbmRvYmoKMTAgMCBvYmoKPDwgL1R5cGUgL09ialN0bSAvTGVuZ3RoIDQ3NyAvRmlsdGVyIC9GbGF0ZURlY29kZSAvTiA2IC9GaXJzdCAzOCA+PgpzdHJlYW0KeJx9Uk1v2kAQvfdXvCMc8H7aa0tRJAilQRUpCrQ5RBw2eONaNbZlL1L59501CaE9VJa969k38968WSHAISSUgFCIYwgNYWiJIUUGkUBr/unmBmzdNflx7zqMNr9Ky9bzBQ6pHOP2djiercAemu5gK7C9hbjEbe8WTe3Bpl1pq9UWbO76vatzW/tw0OM50HA8Ygf2ud43eVkXYMvc1b70p8k92Ob44k+tA9vSl9PSfK9LAjpkQ+IQBxt43njvmiP9CLCvZR4oLgxn6NoWrn/HToMej4zHkTRKa8q27b0ri58eRsRRKjn586bbYyKFiDKheUKUlS166DP3bNb8JqpJkugojrlJMVFSR4YbriC5TCNFlSC4MpHgmUqDnpC4KCsnkZ57CYEHe3BXji29rcr9tC4qRxi28e7wA5qEZammKlftB41d2fqm+88A7pbzzamnIsv6tUEAfety1wXbR++2j8EeXVH2vjthNM2bFzcOc2jbyh2CCZzqD5W2zZflfGXbj4mRU09B5j966EoN/V2GSckBEsTLv0bInshFTq+JOcIjjYnSwbtduKM0TcEpQN1TwAgYSeEkErFUGiYhgJQyEonJDGXH/FyFX4E+dhxKqYjTtAQV2wXb/gAnydXbZW5kc3RyZWFtCmVuZG9iagoxIDAgb2JqCjw8IC9UeXBlIC9YUmVmIC9MZW5ndGggMTYgL0ZpbHRlciAvRmxhdGVEZWNvZGUgL0RlY29kZVBhcm1zIDw8IC9Db2x1bW5zIDQgL1ByZWRpY3RvciAxMiA+PiAvVyBbIDEgMiAxIF0gL1NpemUgMiAvSUQgWzw1OWFkYjdmNDQ3MDFmZDc1M2EyZjQ1NTcwN2M5OTIyYT48NTlhZGI3ZjQ0NzAxZmQ3NTNhMmY0NTU3MDdjOTkyMmE+XSA+PgpzdHJlYW0KeJxjYgACJkatYAYAAVAAgwplbmRzdHJlYW0KZW5kb2JqCiAgICAgICAgICAgICAgIApzdGFydHhyZWYKMjE2CiUlRU9GCg=="
    var byteCharacters = window.atob(b64Data);//atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);

      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      var byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, { type: contentType });

    return blob;
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
         <ReCaptcha
            sitekey = {process.env.GATSBY_GOOGLE_RECAPTCHA_KEY}
            action='careers'
            verifyCallback={this.verifyCallback}
        />
        <button className="btn-apply mb-4 p-0 font-weight-bold" onClick={this.handleOpenModal}>
          Apply Now
        </button>
        <Modal 
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}  
           style={customStyles}
        > 
          <button className="btn-close" onClick={this.handleCloseModal}>
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
          <div>
            <form  onSubmit={this.handleSubmit} encType="multipart/form-data">  
              <h3 className="section-title text-black text-center mb-5">
                Please fill the form below
                <p>{this.state.position}</p>
              </h3>
              {this.state.submitMessage !== "" ? 
              
              <div className= {this.state.submitMessage.data.success === true ? "alert alert-success" : "alert alert-danger"} role = "alert">    
                {this.state.submitMessage.data.message}
              </div>
              :null }
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
                <button type="submit" className="btn-submit p-0">Submit Now</button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    );
   }
}
export default CareersModal;