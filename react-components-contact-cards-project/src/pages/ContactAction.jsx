import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import styles from "./ContactAction.module.css";

export default function ContactAction() {
  const { index } = useParams(); // index passed from ContactList
  const navigate = useNavigate();
  const [contact, setContact] = useState({ name: "", email: "", phone: "" });

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
    if (savedContacts[index]) {
      setContact(savedContacts[index]);
    }
  }, [index]);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
    savedContacts[index] = contact;
    localStorage.setItem("contacts", JSON.stringify(savedContacts));
    navigate("/contactList"); // go back to contact list
  };

  const handleDelete = () => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
    savedContacts.splice(index, 1);
    localStorage.setItem("contacts", JSON.stringify(savedContacts));
    navigate("/contactList");
  };

  return (
    <main className={styles.contactAction}>
      <Header />
      <section>
        <h2>Edit Contact</h2>
        <form className={styles.form}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={contact.name}
              onChange={handleChange}
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={contact.email}
              onChange={handleChange}
            />
          </label>

          <label>
            Phone:
            <input
              type="text"
              name="phone"
              value={contact.phone}
              onChange={handleChange}
            />
          </label>

          <div className={styles.buttons}>
            <button
              type="button"
              onClick={handleUpdate}
              className={styles.updateBtn}
            >
              Update
            </button>
            <button
              type="button"
              onClick={handleDelete}
              className={styles.deleteBtn}
            >
              Delete
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
