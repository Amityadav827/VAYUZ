import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FormDetails = () => {
    const [contacts, setContacts] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [editData, setEditData] = useState({ name: '', email: '', phone: '' });

    // Load data from localStorage
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('contacts')) || [];
        setContacts(storedData);
    }, []);

    // Delete contact
    const handleDelete = (index) => {
        const updated = contacts.filter((_, i) => i !== index);
        setContacts(updated);
        localStorage.setItem('contacts', JSON.stringify(updated));
    };

    // Edit - initiate
    const handleEdit = (index) => {
        setEditIndex(index);
        setEditData(contacts[index]);
    };

    // Edit - save
    const handleSave = () => {
        const updated = [...contacts];
        updated[editIndex] = editData;
        setContacts(updated);
        localStorage.setItem('contacts', JSON.stringify(updated));
        setEditIndex(null);
        setEditData({ name: '', email: '', phone: '' });
    };

    return (
        <div>
            <div className='sec_app'>
                <h1>Securing Your Flutter App: Best Practices and Techniques</h1>
            </div>

            <div className='contact_details'>
                <h2>Submitted Contact Details</h2>

                {contacts.length === 0 ? (
                    <p>No submissions yet.</p>
                ) : (
                    <div className="table_wrapper">
                    <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', textAlign: 'left' }}>
                        <thead style={{ backgroundColor: '#000', color: '#fff' }}>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>
                                        {editIndex === index ? (
                                            <input
                                                type="text"
                                                value={editData.name}
                                                onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                                            />
                                        ) : (
                                            item.name
                                        )}
                                    </td>
                                    <td>
                                        {editIndex === index ? (
                                            <input
                                                type="email"
                                                value={editData.email}
                                                onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                                            />
                                        ) : (
                                            item.email
                                        )}
                                    </td>
                                    <td>
                                        {editIndex === index ? (
                                            <input
                                                type="tel"
                                                value={editData.phone}
                                                onChange={(e) => {
                                                    const val = e.target.value;
                                                    if (/^\d*$/.test(val)) {
                                                        setEditData({ ...editData, phone: val });
                                                    }
                                                }}
                                            />
                                        ) : (
                                            item.phone
                                        )}
                                    </td>
                                    <td>
                                        {editIndex === index ? (
                                            <button className='save_btn' onClick={handleSave}>Save</button>
                                        ) : (
                                            <>
                                                <button className='edit_btn' onClick={() => handleEdit(index)}>Edit</button>{' '}
                                                <button className='delete_btn' onClick={() => handleDelete(index)}>Delete</button>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                )}
            </div>

            <div className='footer_menu_main'>
                <div className='footer_menu'>
                    <ul>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">Insights</Link></li>
                        <li><Link to="/">Community</Link></li>
                        <li><Link to="/">Privacy & Policies</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FormDetails;
