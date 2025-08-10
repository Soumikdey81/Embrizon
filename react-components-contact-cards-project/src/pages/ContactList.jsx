import { useEffect, useState } from "react";
import Header from "../components/Header";
import styles from "./ContactList.module.css";
import { Link } from "react-router-dom";

export default function ContactList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
    setContacts(savedContacts);
  }, []);

  return (
    <main className={styles.contactList}>
      <Header />
      <section>
        <h2>My Contacts</h2>
        {contacts.length === 0 ? (
          <p>No contacts found. Please add some!</p>
        ) : (
          <div className={styles.cardGrid}>
            {contacts.map((contact, index) => (
              <Link
                key={index}
                to={`/contactAction/${index}`}
                className={styles.cardLink}
              >
                <div className={styles.card}>
                  <h3>{contact.name}</h3>
                  <p>
                    <strong>Email:</strong> {contact.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {contact.phone}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
