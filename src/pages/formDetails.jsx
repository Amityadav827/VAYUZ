import React, { useEffect, useState } from 'react';

const formDetails = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(storedData);
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Submitted Contact Details</h2>
      {contacts.length === 0 ? (
        <p>No submissions yet.</p>
      ) : (
        <ul>
          {contacts.map((item, index) => (
            <li key={index}>
              <strong>Name:</strong> {item.name} <br />
              <strong>Email:</strong> {item.email} <br />
              <strong>Phone:</strong> {item.phone}
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default formDetails;
