import resumeV1 from './../../assets/brittany-jungclaus-resume-2024.pdf'


// CSS
const styles = {
  container: {
    backgroundColor: "var(--SlateBlue)",
    borderBottom: "1px solid white",
    height: "9rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 3rem",
    color: "white"
  },

  resumeTitle: {
    backgroundColor: "var(--SlateBlue)",
    borderBottom: "1px solid white",
    height: "3rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 3rem",
    color: "white",
    textAlign: "center"
  },

  resumeButton: {
    backgroundColor: "var(--PowderBlue)",
    borderBottom: "1px solid white",
    height: "3rem",
    display: "block",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 3rem",
    color: "white",
    margin: "center"
  },
}


// The Resume Downlaod Page
export default function Resume() {
  return (
    <section style={styles.section}>

      <h2 style={styles.resumeTitle}>Resume Download</h2>
      <a href={resumeV1} target='_blank' download="Brittany Jungclaus">
        <button style={styles.resumeButton}>Download Resume</button>
      </a>
      <br />

      
      <div style={styles.container}>
        <h3>Languages</h3>
          <ul>
            <li>JavaScript</li>
          </ul>
      </div>

      <br />
      <div style={styles.container}>
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
      <div style={styles.container}>
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