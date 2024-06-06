import resumeV1 from './../../assets/brittany-jungclaus-resume-2024.pdf'


// CSS
const styles = {
  header: {
    backgroundColor: "#193589",
    borderBottom: "1px solid white",
    height: "6rem",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 3rem",
    color: "white"
  },
}


export default function Resume() {
  return (
    <section className='resume'>

      <h2 className='resume-title'>Resume Download</h2>
      <a href={resumeV1} target='_blank' download="Brittany Jungclaus">
        <button className='resumeButton'>Download Resume</button>
      </a>

      <br />
      <div>
        <h3>Languages</h3>
          <ul>
            <li>JavaScript</li>
          </ul>
      </div>

      <br />
      <div>
        <h3>Client End Profeciencies</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>BootStrap</li>
            <li>JQuery</li>
            <li>Media Queries</li>
            <li>React</li>
          </ul>
      </div>

      <br />
      <div>
        <h3>Server End Profeciencies</h3>
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>MySQL</li>
            <li>Sequelize</li>
            <li>MongoDB & Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
      </div>
    </section>
  )
}