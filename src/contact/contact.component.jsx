import React, {useState, useEffect} from "react";
import "./contact.styles.scss";
import emailjs from 'emailjs-com';
import EmailIcon from '@material-ui/icons/Email';
import orange from '@material-ui/core/colors/orange';



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

      const [width, setWidth] = useState(window.innerWidth)
      useEffect(() => {
        function handleResize() {
          setWidth(window.innerWidth)    
          }
          window.addEventListener('resize', handleResize)
      },[width])

    return(
        <div className="contact">
            <h1 className="contactme">Get In Touch</h1>
            <div className="contactContainer">
            <div className="email">
            {width > 800 && <EmailIcon style={{fontSize: 60, color: orange[600]}}/>}
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