import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>
      <p>
        This website is owned and operated by <strong>Jordan Doe</strong>. We are committed to protecting your privacy.
      </p>
      <h2>Information We Collect:</h2>
      <p>
        We collect your name, phone number, and message when you submit the contact form.
      </p>
      <h2>How We Use Your Information:</h2>
      <p>
        The information is used solely to respond to your inquiries or requests.
      </p>
      <h2>Data Sharing:</h2>
      <p>
        We do not share your personal information with third parties unless required by law.
      </p>
      <h2>Cookies:</h2>
      <p>
        This website may use cookies for site functionality and analytics purposes.
      </p>
      <h2>Your Rights:</h2>
      <p>
        You can request access to, correction, or deletion of your personal data by contacting me at {" "}
        <a href="mailto:hello@jordandoe.dev">hello@jordandoe.dev</a>.
      </p>
      <h2>Contact Me:</h2>
      <p>
        For any questions about this Privacy Policy, please contact me at {" "}
        <a href="mailto:hello@jordandoe.dev">hello@jordandoe.dev</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
