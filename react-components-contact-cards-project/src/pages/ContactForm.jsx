import { useState, useEffect } from "react";
import Header from "../components/Header";
import styles from "./ContactForm.module.css";
import { useNavigate } from "react-router-dom";

export default function ContactForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState({});
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
    setContacts(storedContacts);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      tempErrors.email = "Email is not valid";
    }
    if (!formData.phone) tempErrors.phone = "Phone is required";
    else if (!/^\d{10}$/.test(formData.phone))
      tempErrors.phone = "Phone must be 10 digits";
    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tempErrors = validate();
    setErrors(tempErrors);

    if (Object.keys(tempErrors).length === 0) {
      // ✅ Duplicate check: only reject if BOTH email & phone match
      const isDuplicate = contacts.some(
        (contact) =>
          contact.email === formData.email && contact.phone === formData.phone
      );

      if (isDuplicate) {
        alert("A contact with the same email and phone already exists.");
        return;
      }

      const updatedContacts = [...contacts, formData];
      setContacts(updatedContacts);
      localStorage.setItem("contacts", JSON.stringify(updatedContacts));
      setFormData({ name: "", email: "", phone: "" });
      navigate("/contactList");
    }
  };

  return (
    <main className={styles.contactForm}>
      <Header />
      <section>
        <div>
          <h2>Add a New Contact</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter full name"
              />
              {errors.name && (
                <span className={styles.error}>{errors.name}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
              />
              {errors.email && (
                <span className={styles.error}>{errors.email}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
              />
              {errors.phone && (
                <span className={styles.error}>{errors.phone}</span>
              )}
            </div>

            <button type="submit" className={styles.submitBtn}>
              Add Contact
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
