"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    setSubmitted(true);

    if (!form.checkValidity()) {
      e.preventDefault();
      setHasError(true);
      return;
    }

    setHasError(false);
  };

  return (
    <form
      className={`contact-form${submitted ? " was-submitted" : ""}`}
      id="contact-form"
      action="/thank-you"
      method="get"
      noValidate
      onSubmit={onSubmit}
    >
      <div className="form-fields">
        <h3>Tell us what&apos;s going&nbsp;on</h3>
        <p className="form-note">Fields marked with an asterisk (*) are&nbsp;required.</p>
        {hasError ? (
          <p className="form-error" role="alert">
            Please fill in all required&nbsp;fields.
          </p>
        ) : null}
        <div className="form-row">
          <label className="field">
            <span className="field-label">
              Name<span className="req">*</span>
            </span>
            <input type="text" name="name" autoComplete="name" required />
          </label>
          <label className="field">
            <span className="field-label">
              Phone<span className="req">*</span>
            </span>
            <input type="tel" name="phone" autoComplete="tel" required />
          </label>
        </div>
        <label className="field">
          <span className="field-label">
            Vehicle / equipment<span className="req">*</span>
          </span>
          <select name="vehicle" required>
            <option value="">Select an option</option>
            <option>Car, pickup or&nbsp;SUV</option>
            <option>Side-by-side /&nbsp;UTV</option>
            <option>4-wheeler</option>
            <option>Lawnmower</option>
            <option>Others</option>
          </select>
        </label>
        <label className="field">
          <span className="field-label">What&apos;s the problem?</span>
          <textarea name="message" rows={4}></textarea>
        </label>
        <button className="form-submit" type="submit">
          Send
        </button>
      </div>
    </form>
  );
}
