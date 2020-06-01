import React, { useState } from "react";

const Inquiries = () => {
  const [inquiries, setInquiries] = useState({});

  function submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setInquiries({ inquiries: "SUCCESS" });
      } else {
        setInquiries({ inquiries: "ERROR" });
      }
    };
    xhr.send(data);
  }

  return (
    <form
      onSubmit={submitForm}
      action="https://formspree.io/xrgypnwo"
      method="POST"
    >
      <label>Email:</label>
      <input type="email" name="email" />
      <label>Message:</label>
      <input type="text" name="message" />
      {inquiries === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
      {inquiries === "ERROR" && <p>Ooops! There was an error.</p>}
    </form>
  );
};

export default Inquiries;
