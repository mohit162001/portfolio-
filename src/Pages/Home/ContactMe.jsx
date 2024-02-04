import { useRef } from "react";
import { Link } from "react-scroll";
import emailjs from 'emailjs-com'
export default function ContactMe() {
  const form = useRef();
  const sendEmail = (e) => {
    

    e.preventDefault();

    emailjs.sendForm('service_6mzt1l7', 'template_ewxhxhc', form.current, 'C34zptAsRL5cdM-ge')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h1>Contact Me</h1>
        <p className="text-lg">
      <a href="mailto:mohit.devade123@gmail.com" style={{textDecoration: 'none'}} target='_blank'>Sent a message</a>
        </p>
      </div>
      <form ref={form} onSubmit={sendEmail} className="contact--form--container">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">Full Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="name"
              id="first-name"
              required
            />
          </label>
          {/* <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label> */}
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          {/* <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">phone-number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label> */}
        </div>
        {/* <label htmlFor="choode-topic" className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select id="choose-topic" className="contact--input text-md">
            <option>Select One...</option>
            <option>Item 1</option>
            <option>Item 2</option>
            <option>Item 3</option>
          </select>
        </label> */}
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            name="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        {/* <label htmlFor="checkboc" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label> */}
        <div>
          <button type="submit" className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
    </section>
  );
}
