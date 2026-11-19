"use client";

import { FormEvent, useState } from "react";

const REQUIRED_FIELDS = [
  { name: "name", label: "Name" },
  { name: "phone", label: "Phone number" },
  { name: "vehicle", label: "Vehicle or equipment" },
] as const;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [missingFields, setMissingFields] = useState<string[]>([]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    setSubmitted(true);

    const missing = REQUIRED_FIELDS.filter(({ name }) => {
      const el = form.elements.namedItem(name);
      if (!(el instanceof HTMLInputElement || el instanceof HTMLSelectElement || el instanceof HTMLTextAreaElement)) {
        return false;
      }
      return !el.checkValidity();
    }).map(({ label }) => label);

    if (missing.length > 0 || !form.checkValidity()) {
      e.preventDefault();
      setMissingFields(missing);
      return;
    }

    setMissingFields([]);
  };

  const errorMessage =
    missingFields.length > 0
      ? `Please complete the required fields so we can get back to you: ${missingFields.join(", ")}. The message field is optional.`
      : null;

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
        <h3>Tell us how we can&nbsp;help</h3>
        <p className="form-note">
          Required fields are marked with an asterisk&nbsp;(*).
        </p>
        {errorMessage ? (
          <p className="form-error" role="alert">
            {errorMessage}
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
              Phone number<span className="req">*</span>
            </span>
            <input type="tel" name="phone" autoComplete="tel" required />
          </label>
        </div>
        <label className="field">
          <span className="field-label">
            Vehicle or equipment<span className="req">*</span>
          </span>
          <select name="vehicle" required>
            <option value="">Select an option</option>
            <option>Car, pickup or&nbsp;SUV</option>
            <option>Side-by-side /&nbsp;UTV</option>
            <option>4-wheeler</option>
            <option>Lawnmower</option>
            <option>Something else</option>
          </select>
        </label>
        <label className="field">
          <span className="field-label">Service details</span>
          <textarea
            name="message"
            rows={4}
            placeholder="Optional: briefly describe the issue or service you need."
          ></textarea>
        </label>
        <button className="form-submit" type="submit">
          Send message
        </button>
      </div>
    </form>
  );
}
