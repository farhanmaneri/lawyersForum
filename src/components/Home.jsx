import React from 'react'
import '../styles/home.css'; // ✅ This imports the styles

function Home() {
  const people = [
    {
      name: 'Farhan Khan',
      role: 'Legal Advisor',
      contact: "0313-3134555",
      imageUrl:
      "https://res.cloudinary.com/farahnmaneri/image/upload/w_256,h_256,c_fill,g_face,r_max/v1754552743/Farhan_Khan_dptugo.jpg"
    },
      {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      contact: "0313-3134555",
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Dries Vincent',
      role: 'Business Relations',
      contact: "0313-3134555",
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Lindsay Walton',
      role: 'Front-end Developer',
      contact: "0313-3134555",
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Courtney Henry',
      role: 'Designer',
      contact: "0313-3134555",
      imageUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Tom Cook',
      role: 'Director of Product',
      contact: "0313-3134555",
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ]
  return (
    <div className="home-container">
      <div className="home-grid">
        <div className="max-w-xl">
          <h2 className="home-title">Swabi Lawyer's Forum</h2>
          <p className="home-description">
            We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
            best results for our clients.
          </p>
        </div>
        <ul role="list" className="people-list">
  {people.map((person) => (
    <li key={person.name}>
      <div className="person">
        <img alt="" src={person.imageUrl} className="person-img" />
        <div>
          <h3 className="person-name">{person.name}</h3>
          <p className="person-role">{person.role}</p>
          <a
            href={`https://wa.me/92${person.contact.replace(/^0/, '').replace(/-/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-link"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </li>
  ))}
</ul>


      </div>
    </div>
  )
}

export default Home
