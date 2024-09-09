import React, { useState } from "react";

const EmailForm = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State for error messages
  const [errorMessages, setErrorMessages] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State for displaying success message
  const [successMessage, setSuccessMessage] = useState("");

  // Helper function to validate email format
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear the error message for the field being edited
    setErrorMessages({
      ...errorMessages,
      [name]: "",
    });
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Initialize error messages
    let newErrorMessages = {};
    let hasError = false;

    // Validate each field
    if (!formData.name.trim()) {
      newErrorMessages.name = "Name is required";
      hasError = true;
    }
    if (!validateEmail(formData.email)) {
      newErrorMessages.email = "Invalid email address";
      hasError = true;
    }
    if (!formData.message.trim()) {
      newErrorMessages.message = "Message is required";
      hasError = true;
    }

    // If there are errors, set error messages and stop submission
    if (hasError) {
      setErrorMessages(newErrorMessages);
      return;
    }

    // Simulate successful form submission
    setSuccessMessage(`Hello ${formData.name}, your message has been sent successfully!`);

    // Clear form data after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    // Clear success message after a delay
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  return (
    <div>
      {successMessage && <p className="success-message">{successMessage}</p>}
      <form className="contact-form" onSubmit={handleFormSubmit}>
        <input
          className="contact-input"
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        {errorMessages.name && <p className="error-text">{errorMessages.name}</p>}

        <input
          className="contact-input"
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {errorMessages.email && <p className="error-text">{errorMessages.email}</p>}

        <textarea
          className="contact-textarea"
          placeholder="Message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows="5"
        />
        {errorMessages.message && <p className="error-text">{errorMessages.message}</p>}

        <button className="contact-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EmailForm;