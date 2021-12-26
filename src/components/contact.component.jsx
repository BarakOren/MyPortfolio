import React, {useState} from "react";
import emailjs from 'emailjs-com';
import EmailIcon from '@material-ui/icons/Email';
import orange from '@material-ui/core/colors/orange';
import styled, {keyframes} from "styled-components"

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
const Title = styled.h1`
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

const EmailAddress = styled.p`
    margin: 0 0 0 20px;
    @media only screen and (max-width: 800px){
        font-size: 5vw;
        margin: 0 2vw;
    }
`

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
const Submit = styled.button`
    width: 10vw;
    height: 3vw;
    background-color: #423f47;
    color: white;
    text-align: center;
    border: 2px solid rgb(255, 136, 0);
    box-shadow: rgb(0 0 0 / 60%) 1px 3px 2px;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.5s ease 0s;
    font-size: 1.5vw;
    font-family: 'Montserrat', sans-serif;
    &:hover {
        box-shadow: rgb(255, 136, 0) 0px 0px 20px;
    }
    &:active {
        transform: scale(0.9);
    }
    @media only screen and (max-width: 800px){
        font-size: 5vw;
        width: 90%;
        height: auto;
        padding: 1vw 0;
    }
`
const Message = styled.p`
margin: 1vw 0 0 0;
color: rgb(208, 240, 197);
`
const Error = styled.p`
margin: 1vw 0 0 0;
color: rgb(207, 45, 33);
`

const rotation = keyframes`
    from{
        transform: rotate(0deg)
    }
    to{
        transform: rotate(360deg)
    }
`;

const Spinner = styled.div`
    border: 3px solid white;
    width: 2vw;
    height: 2vw;
    border-radius: 50%;
    border-top: none;
    border-right: none;
    margin: 3px auto;
    animation: ${rotation} 1s linear infinite;
`

const Contact = () => {

    
    const [msgStatus, setMsgStatus] = useState(null);
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null);
    
    function sendEmail(e) {
        e.preventDefault();
        setLoading(true)
        emailjs.sendForm('service_cxf1jih', 'template_dxxi3ee', e.target, 'user_kcKtr2ts6gQmnopIS2Ds1')
          .then((result) => {
                setLoading(false)
                setMsgStatus("Thank You, ill write you back ASAP!")
          }, (error) => {
              console.log(error.text);
              setLoading(false)
              setError("We Had An Error, Please Try To Contact Me Through Email/Linkedin")
          });
          e.target.reset();
      }


    return(
        <Container>
            <Title>Get In Touch</Title>
        <ContactContainer>
            <Email>
                <EmailIcon style={{fontSize: 60, color: orange[600]}}/>
                <EmailAddress>barakoren5@gmail.com</EmailAddress>
                <Button onClick={() => navigator.clipboard.writeText("barakoren5@gmail.com")}>Copy</Button>
            </Email>
            <ConatctForm onSubmit={sendEmail}>
                <Inputs>
                <Input style={{marginRight: "0.8vw"}} className="input" type="text" name="name" placeholder="Name" required />
                <Input style={{marginLeft: "0.8vw"}} className="input" type="email" name="email" placeholder="Email" required />
                <Input style={{marginLeft: "0.8vw"}} className="input" type="text" name="subject" placeholder="Subject" required />
                </Inputs>
                <TextArea name="message" placeholder="Message" required />
                <Submit type="submit" >{loading ? <Spinner /> : "Send"}</Submit>
                {msgStatus && <Message>{msgStatus}</Message>}
                {error && <Error>{error}</Error>}
            </ConatctForm>
        </ContactContainer>
        </Container>
    )
}

export default Contact;