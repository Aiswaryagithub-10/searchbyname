import React, { useState } from 'react';

const contacts = [
  { id: 1, name: 'Santosh Kalwar', message: "Coding like poetry should be short and concise.", time: '10:30', img: 'https://randomuser.me/api/portraits/women/1.jpg' },
  { id: 2, name: 'Anonymous', message: "It’s not a bug; it’s an undocumented feature", time: '10:30', img: 'https://randomuser.me/api/portraits/men/2.jpg' },
  { id: 3, name: 'John Johnson', message: "First, solve the problem. Then, write the code.", time: '10:30', img: 'https://randomuser.me/api/portraits/men/3.jpg' },
  { id: 4, name: 'Cory House', message: "Make it work, make it right, make it fast. ", time: '10:30', img: 'https://randomuser.me/api/portraits/men/4.jpg' },
  { id: 5, name: 'Felienne Hermans', message: "Confusion is part of programming.", time: '10:30', img: 'https://randomuser.me/api/portraits/women/5.jpg' },
  { id: 6, name: 'Ellen Ullman', message: "There is always one more bug to fix.", time: '10:30', img: 'https://randomuser.me/api/portraits/women/6.jpg' },
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter contacts based on search input
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ margin: '20px' }}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '20px',
          borderRadius: '25px',
          border: '1px solid black',
        }}
      />
      <div style={{ backgroundColor: '#f9f9f9', borderRadius: '10px', padding: '10px' }}>
        {filteredContacts.map((contact) => (
          <div
            key={contact.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px',
              borderBottom: '1px solid #eee',
              backgroundColor: '#fff',
              borderRadius: '10px',
              marginBottom: '10px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={contact.img}
                alt={contact.name}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  marginRight: '10px',
                }}
              />
              <div>
                <strong>{contact.name}</strong>
                <p style={{ margin: 0 }}>{contact.message}</p>
              </div>
            </div>
            <div>
              <p style={{ margin: 0 }}>{contact.time}</p>
              <span>⭐</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
