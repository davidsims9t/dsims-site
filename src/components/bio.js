import React from "react"

const Bio = () => (
    <section className="main-bio" id="about">
      <div className="main-bio-content">
        <h2 className="main-bio-title container">A Little Bit About Me</h2>
        <div className="main-bio-description container">
          <p>
            I began coding at the age of fifteen.
            I was very interested in building and collecting Legos, specifically Bionicles, at the time.
            In fact, I spent most of my days on Bionicle forums,
            sharing my own custom creations and moderating forum posts.
            Eventually I wanted to start my own Bionicle forum, so
            I started learning HTML, CSS, JavaScript, and PHP.
            Fast-forward fourteen-years later and I'm still actively coding, learning cool new technologies and
            creating solutions to complex problems.
          </p>
        </div>
        <div className="main-bio-tech container">
          <div className="main-bio-tech-col">
            <img className="main-bio-icon" src={require("../images/software.svg")} alt="Browser" />
            <h3 className="main-bio-tech-title">Software</h3>
            <ul className="main-bio-tech-list">
              <li className="main-bio-tech-list-item">Adobe Photoshop</li>
              <li className="main-bio-tech-list-item">Adobe Illustrator</li>
              <li className="main-bio-tech-list-item">Sketch</li>
              <li className="main-bio-tech-list-item">Atom</li>
              <li className="main-bio-tech-list-item">VSCode</li>
              <li className="main-bio-tech-list-item">Git</li>
              <li className="main-bio-tech-list-item">Chrome</li>
              <li className="main-bio-tech-list-item">Firefox</li>
              <li className="main-bio-tech-list-item">Edge</li>
              <li className="main-bio-tech-list-item">Safari</li>
            </ul>
          </div>
          <div className="main-bio-tech-col">
            <img className="main-bio-icon" src={require("../images/browser.svg")} alt="Browser" />
            <h3 className="main-bio-tech-title">Front-end Development</h3>
            <h4 className="main-bio-tech-subtitle">Languages</h4>
            <ul className="main-bio-tech-list">
              <li className="main-bio-tech-list-item">HTML</li>
              <li className="main-bio-tech-list-item">JavaScript</li>
              <li className="main-bio-tech-list-item">CSS</li>
            </ul>
            <h4 className="main-bio-tech-subtitle">Tools</h4>
            <ul className="main-bio-tech-list">
              <li className="main-bio-tech-list-item">React</li>
              <li className="main-bio-tech-list-item">WebPack</li>
              <li className="main-bio-tech-list-item">Babel</li>
              <li className="main-bio-tech-list-item">Typescript, Flowtype</li>
              <li className="main-bio-tech-list-item">PostCSS, LESS, SASS</li>
              <li className="main-bio-tech-list-item">Redux, Apollo</li>
              <li className="main-bio-tech-list-item">Gatsby</li>
              <li className="main-bio-tech-list-item">Bootstrap, Material UI</li>
              <li className="main-bio-tech-list-item">Mocha, Chai, Jest, Enzyme</li>
            </ul>
          </div>
          <div className="main-bio-tech-col">
            <img className="main-bio-icon" src={require("../images/db.svg")} alt="Server" />
            <h3 className="main-bio-tech-title">Back-end Development</h3>
            <h4 className="main-bio-tech-subtitle">Languages</h4>
            <ul className="main-bio-tech-list">
              <li className="main-bio-tech-list-item">Node.js</li>
              <li className="main-bio-tech-list-item">Python</li>
            </ul>
            <h4 className="main-bio-tech-subtitle">Tools</h4>
            <ul className="main-bio-tech-list">
              <li className="main-bio-tech-list-item">GraphQL</li>
              <li className="main-bio-tech-list-item">Firebase</li>
              <li className="main-bio-tech-list-item">Mongoose</li>
              <li className="main-bio-tech-list-item">Bookshelf</li>
            </ul>
            <h4 className="main-bio-tech-subtitle">Databases</h4>
            <ul className="main-bio-tech-list">
              <li className="main-bio-tech-list-item">PostgreSQL</li>
              <li className="main-bio-tech-list-item">MySQL</li>
              <li className="main-bio-tech-list-item">MongoDB</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
)

export default Bio