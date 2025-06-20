import React from 'react'

function About() {
  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
            About iNoteBook
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <h2>About iNoteBook</h2>
            <p>
              iNoteBook is your personal, cloud-based note management app, designed to help you stay organized and productive.
              Whether you're a student, professional, or creative thinker, iNoteBook offers a simple and secure way to write, store, edit, and manage your notes from anywhere, at any time.
            </p>
            <h3>Key Features:</h3>
            <ul>
              <li><strong>Secure Notes:</strong> Your notes are protected and accessible only with your login.</li>
              <li><strong>Easy to Use:</strong> Clean and user-friendly interface with quick navigation.</li>
              <li><strong>Tagging Support:</strong> Organize your notes using custom tags.</li>
              <li><strong>Edit Anytime:</strong> Update your notes whenever you need.</li>
              <li><strong>Cross-device:</strong> Access your notes from any device with a browser.</li>
            </ul>
            <p>
              iNoteBook is built using the MERN Stack (MongoDB, Express.js, React, Node.js), ensuring high performance, scalability, and a smooth user experience.
            </p>
            <p>
              <strong>Built with ❤️ by Dheeraj Kaushik</strong>
            </p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            About Developer
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <p>
              <strong>About the Developer:</strong> iNoteBook is proudly developed by <strong>Dheeraj Kaushik</strong>, a passionate full-stack developer with a strong interest in building modern, efficient, and user-friendly web applications. This project is a part of a journey to master the <strong>MERN Stack</strong> and deliver real-world solutions through code. With a focus on clean design, secure backend systems, and responsive interfaces, Dheeraj aims to create tools that help people stay productive and organized in their daily lives.
            </p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Technologies Used in this project
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <p>
              <strong>Technologies Used:</strong> iNoteBook is built using the powerful <strong>MERN Stack</strong>:
              </p>
              <ul>
                <li><strong>MongoDB</strong> – for the database</li>
                <li><strong>Express.js</strong> – for the backend API</li>
                <li><strong>React.js</strong> – for the frontend UI</li>
                <li><strong>Node.js</strong> – for the server-side runtime</li>
              </ul>
              <p>
              Additional tools include <strong>Bootstrap</strong> for styling, <strong>React Router</strong> for navigation, and <strong>JWT Authentication</strong> for user login/logout security.
            </p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
            Contact To Developer
          </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse">
          <div className="accordion-body">
            <p>
              <strong>Contact the Developer:</strong> If you have any queries, suggestions, or just want to connect, feel free to reach out. I would love to hear your feedback!
            </p>
            <ul>
              <li><strong>Name:</strong> Dheeraj Kaushik</li>
              <li><strong>Email:</strong> <a href="mailto:kaushikdheeraj777@gmail.com">kaushikdheeraj777@gmail.com</a></li>
              <li><strong>Mobile:</strong> <a href="tel:+919306479470">9306479470</a></li>
              <li><strong>GitHub:</strong> <a href="https://github.com/dheerajkaushik1" target="_blank" rel="noreferrer">github.com/dheerajkaushik1</a></li>
            </ul>

          </div>
        </div>
      </div>
    </div>
  )
}

export default About