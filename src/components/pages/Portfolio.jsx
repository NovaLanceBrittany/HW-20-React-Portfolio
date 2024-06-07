import works from '../../../src/assets/works.json'
import Works from '../Works'


// CSS
const styles = {
  portfolioTitle: {
    backgroundColor: "var(--PowderBlue)",
    borderBottom: "1px solid white",
    height: "6rem",
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
    padding: "0 3rem",
    color: "var(--Licorice)"
  },

  workboard: {
    backgroundColor: "var(--PowderBlue)",
    borderBottom: "1px solid white",
    height: "6rem",
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
    padding: "0 3rem",
    color: "var(--Licorice)",
    marginTop: "600px"
  },
}



export default function Portfolio() {
  return (
    <main>
      <section className='portfolio' style={styles.portfolioTitle}>
        <h2 className='portfolio-title'>Portfolio</h2>

        {/* My GibHub Project Links / Cards */}
        <div className='workboard' style={styles.workboard}>{works.map((work, i) => (
          <Works works={work} key={i} />
          ))}
        </div>





      </section>
    </main>
  )
}