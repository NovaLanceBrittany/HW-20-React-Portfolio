// The Home Page & About Me Page


// CSS
const styles = {
  about: {
    backgroundColor: "var(--SlateBlue)",
    borderBottom: "1px solid white",
    height: "6rem",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 3rem",
    color: "white"
  },

  hobbies: {
    backgroundColor: "var(--SlateBlue)",
    borderBottom: "1px solid white",
    height: "6rem",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 3rem",
    color: "white"
  }, 

  AboutMeTitle: {
    textAlign: "center",
    height: "6rem",
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
    padding: "0 3rem",
    color: "white",
  }
}



// About Me Page
export default function AboutMe() {
  return (
    <main>
      <h2 style={styles.AboutMeTitle}>About Me</h2>

      <section style={styles.about}>
        {/* My Bio */}
        <h2 className='about-body'>Hello! My name is Brittany!</h2>
        <br />

        <p>I'm versatile full-stack developer with a knack for crafting seamless digital experiences from the ground up. With a blend of front-end finesse and back-end expertise, I thrive on turning innovative ideas into functional, user-friendly applications.</p>
        <br />
      </section>

      <section style={styles.about}>
        <h3>🔧 Tech Toolbox:</h3>
          <ul>
            <li>JavaScript (Node.js & React.js)</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SQL & MongoDB</li>
            <li>Git</li>
          </ul>
        <br />
      </section>

      <section style={styles.about}>
        <h3>🚀 Highlights:</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>BootStrap</li>
            <li>JQuery</li>
            <li>Media Queries</li>
            <li>React</li>
          </ul>
        <br />
      </section>

      <section style={styles.about}>
        <h3>🎓 Education:</h3>
          <ul>
            <li>Certificate in Comupter Science with a focus for Full Stack Developer</li>
          </ul>
        <br />
      </section>

      <section style={styles.hobbies}>
        <h3 className='hobbiesTitle'>🌟 Passions: When I'm not coding, you can find me exploring the latest tech trends, dabbling in my own projects, or indulging in my hobbies below.</h3>
          <ul>
            <li>Longboarding</li>
            <li>Card Games</li>
            <li>Model Building</li>
          </ul>
        <br />
      </section>
    </main>
  )
}