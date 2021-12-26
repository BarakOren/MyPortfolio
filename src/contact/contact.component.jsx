import React, {useState, useEffect} from "react";
import "./contact.styles.scss";
import emailjs from 'emailjs-com';
import EmailIcon from '@material-ui/icons/Email';
import orange from '@material-ui/core/colors/orange';

const Container = styled.div`
width: 100%;
height: 80vh;
margin: 3vh 0;
cursor: default;

@media only screen and (max-width: 800px){

}
::placeholder {
    color: #8e8d8f;
    opacity: 1; /* Firefox */
  }
  
  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #8e8d8f;
  }
  
  ::-ms-input-placeholder { /* Microsoft Edge */
    color: #8e8d8f;
  }
`
const Title = styled.p`
    margin: 0 0 10vh 0;
    @media only screen and (max-width: 800px){
    font-size: 10vw;
    }
`
const ContactContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 800px){
    flex-direction: column;
    justify-content: space-evenly;
    }
`
const Email = styled.div` 
    font-size: 1.5vw;
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 800px){
    font-size: 5vw;
    margin-bottom: 5vh;
    width: 100%;
    justify-content: space-evenly;
    }
`
const EmailIcon = styled(EmailIcon)``
const EmailAddress = styled.p`margin: 0 0 0 20px`
const Button = styled.button`
    padding: 0.5vw 1vw;
    text-align: center;
    background-color: #423f47;
    color: white;
    text-align: center;
    border: 2px solid rgb(255, 136, 0);
    box-shadow: rgb(0 0 0 / 60%) 1px 3px 2px;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.5s ease 0s;
    font-size: 1vw;
    margin-left: 1vw;
    &:hover {
        box-shadow: rgb(255, 136, 0) 0px 0px 20px;
    }
    &:active {
        transform: scale(0.9);
    }
    @media only screen and (max-width: 800px){
       padding: 1vw 3vw;
        font-size: 3vw;
    }
`
const ConatctForm = styled.form`
    margin: 0 0 0 0;
    padding: 0 0 2vw 0;
    width: 50%;
    @media only screen and (max-width: 800px){
    width: 90%;
    }
`
const Inputs = styled.div`
 
`
const Input = styled.input`
border-radius: 0;
padding: 8px;
font-size: 1.5vw;
margin: 0 0 20px 0 !important;
color: #8e8d8f;
background-color: transparent;
border: solid 1px #8e8d8f;
width: 50%;
transition: 300ms;
&:focus {
    transition: 300ms;
    outline: none !important;
    border: 1px solid rgb(255, 136, 0);
}
@media only screen and (max-width: 800px){
font-size: 5vw;
width: 70%;
}
`
const TextArea = styled.textarea`
padding: 8px;
margin: 0 0 20px 0 !important;
width: 90%;
height: 13vh;
font-size: 1.5vw;
color: #8e8d8f;
border: solid 1px #8e8d8f;
background-color: transparent;
transition: 300ms;

&:focus {
    transition: 300ms;
    outline: none !important;
    border: 1px solid rgb(255, 136, 0);
  }     
@media only screen and (max-width: 800px){
font-size: 4vw;
width: 90%;
}
`
const Submit = styled.input`
padding: 1% 10%;
text-align: center;
background-color: #423f47;
color: white;
text-align: center;
border: 2px solid rgb(255, 136, 0);
box-shadow: rgb(0 0 0 / 60%) 1px 3px 2px;
border-radius: 50px;
cursor: pointer;
transition: all 0.5s ease 0s;
font-size: 1.5vw;
&:hover {
    box-shadow: rgb(255, 136, 0) 0px 0px 20px;
}
&:active {
    transform: scale(0.9);
}
@media only screen and (max-width: 800px){
    font-size: 5vw;
    width: 90%;
}
`
const Message = styled.p`
margin: 0;
`

const Contact = () => {

    
    const [msgStatus, setMsgStatus] = useState("");
    const [color, setColor] = useState("");

    function msg(status){
        if(status === "success"){
            setColor("rgb(208, 240, 197)");
            setMsgStatus("Thank You For Reaching Out! I Will Contact You Shortly!");
        }
        if(status === "error"){
            setColor("rgb(207, 45, 33)")
            setMsgStatus("We Had An Error, Please Try To Contact Me Through Email/Linkedin")
        }
        if(status === ""){
            setMsgStatus("")
        }
    }

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_cxf1jih', 'template_dxxi3ee', e.target, 'user_kcKtr2ts6gQmnopIS2Ds1')
          .then((result) => {
              msg("success")
          }, (error) => {
              console.log(error.text);
              msg("error")
          });
          e.target.reset();
      }


    return(
      

        <div className="contact">
            <h1 className="contactme">Get In Touch</h1>
            <div className="contactContainer">
            <div className="email">
            <EmailIcon style={{fontSize: 60, color: orange[600]}}/>
            <p style={{margin: "0 0 0 20px"}}>barakoren5@gmail.com</p>
            <button className="copy" onClick={() => navigator.clipboard.writeText("barakoren5@gmail.com")}>Copy</button>
            </div>

            <form className="contact-form" onSubmit={sendEmail}>
            <div className="inputs">
            <input style={{marginRight: "0.8vw"}} className="input" type="text" name="name" placeholder="Name" required />
            <input style={{marginLeft: "0.8vw"}} className="input" type="email" name="email" placeholder="Email" required />
            <input style={{marginLeft: "0.8vw"}} className="input" type="email" name="subject" placeholder="Subject" required />

            </div>
            
            <textarea className="textarea" name="message" placeholder="Message" required />
            <input className="submit" type="submit" value="Send" />
            <p style={{color: color}}>{msgStatus}</p>
            </form>
            </div>
        </div>
    )
}

export default Contact;