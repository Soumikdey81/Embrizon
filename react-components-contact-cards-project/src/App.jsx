import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ContactForm from "./pages/ContactForm";
import ContactList from "./pages/ContactList";
import ContactAction from "./pages/ContactAction";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/contactForm" element={<ContactForm />} />
        <Route path="/contactList" element={<ContactList />} />
        <Route path="/contactAction/:index" element={<ContactAction />} />
      </Routes>
    </BrowserRouter>
  );
}
