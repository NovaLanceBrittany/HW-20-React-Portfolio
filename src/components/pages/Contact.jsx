



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


// Contact Me Page
export default function AboutMe() {
  return (
    <main>
      <section className='AboutMe'>

        <h2 className='AboutMe-title'>About Me</h2>


        {/* My Bio */}
        <p className='about-body'>The Bio</p>


      </section>
      </main>
  )
}