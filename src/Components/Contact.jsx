import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-us" id="ContactUs">
      <div className="contact-column">
        <h2>Contact Information</h2>
        <p>
          Email:
          <a href="mailto:support@dahiyaconsulting.com">
            support@dahiyaconsulting.com
          </a>
        </p>
        <h1>
          © by Dahiya Consulting. IMPORTANT: Earnings and Results
          Disclaimer:-The Dahiya Consulting does not warrant or guarantee any
          specific level of performance or end results, with the application of
          Dahiya Consulting's tools, ideas, suggestions and strategies. Any
          attainable result depends on a number of factors, circumstances and
          conditions. Dahiya Consulting's guarantee is limited to progression
          and growth without any definitive minimum or maximum limit given that
          the Client has duly followed and adhered to the directives and
          suggestions issued by Dahiya Consulting. We just want to help you by
          giving great content, direction and strategies that worked well for us
          and our students and that we believe can move you forward. All of our
          terms, privacy policies and disclaimers for this program and website
          can be accessed via the link above. We feel transparency is important
          and we hold ourselves (and you) to a high standard of integrity.
          Thanks for stopping by. We hope this training and content brings you a
          lot of value.
        </h1>
      </div>
      <div className="contact-column">
        <h2>Stay Updated for latest learning</h2>
        <form>
          <label htmlFor="userEmail">Enter your Email here:</label>
          <input type="email" id="userEmail" name="userEmail" required />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="contact-column">
        <h2>Follow Us</h2>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/sachindahiya78"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href=" https://twitter.com/sachin_dahiya07"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/thesachindahiya07/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/sachindahiya07/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@sachindahiya07"
              target="_blank"
              rel="noopener noreferrer"
            >
              Youtube
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
