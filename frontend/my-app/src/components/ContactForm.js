
import {useState} from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage('An error occurred');
    }
  };

  return (
    <div className="map-content-9 form-bg-img">
      <div className="layer section-gap py-5">
        <div className="container py-lg-5">
          <div className="form">
            <h3 className="hny-title two text-center">Fill out the form.</h3>
            {message && <p style={{color:'#fff',fontWeight:'bold'}}>{message}</p>}
            <form 
              onSubmit={handleSubmit}
              className="mt-md-5 mt-4" 
              method="post"
            >
              <div className="input-grids">
                <input 
                  type="text" 
                  name="name" 
                  id="w3lName" 
                  placeholder="Name" 
                  onChange={handleChange}
                />
                <input 
                  type="email" 
                  name="email" 
                  id="w3lSender" 
                  placeholder="Email" 
                  onChange={handleChange}
                  required 
                />
                <input 
                  type="text" 
                  name="subject" 
                  id="w3lSubject" 
                  placeholder="Subject" 
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="input-textarea">
                <textarea 
                  name="message" 
                  id="w3lMessage" 
                  placeholder="Message" 
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
