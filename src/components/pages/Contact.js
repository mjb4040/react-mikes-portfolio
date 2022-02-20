import React ,{useState} from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            } 
          } 
          else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
          }
         
          if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
          }
       
    }
      
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    

    return (
        <section>
          <div className="contact">
          <h2 data-testid="h1tag">Contact</h2>
          </div> 
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="contact">
            <label htmlFor="name">Name: </label>
            </div>
            <div>
            <input type="text" name="name" defaultValue={name} onBlur={handleChange}/>
            </div>           
            <div className="contact">
                <label htmlFor="email">Email address: </label>
            </div>
            <div>
                <input type="email" name="email" defaultValue={email} onBlur={handleChange}/>
            </div>
            <div className="contact">
                <label htmlFor="message">Message: </label>
                <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange}/>
            </div>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
                )}
            <button data-testid="button" type="submit">Submit</button>
          </form>
        </section>
      )
}
    
export default Contact;