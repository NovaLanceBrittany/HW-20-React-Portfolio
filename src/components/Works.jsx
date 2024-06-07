


// CSS
const styles = {
  worksCardContainer: {
    backgroundColor: "var(--Tekhelet)",
    color: "(var--Licorice)",
    padding: "20px",
    margin: "20px",
  },

  aboutTitle: {
    color: "white" 
  },

  description: {
    // color: "var(--PowderBlue)" 
  },
}

// The GitHub Project Cards (Named Works)
function Works ({ works }) {
  return (
    <>
      <div className='worksCardContainer' style={styles.worksCardContainer}>

        {/* Container Title & Deployed Site*/}
        <a href={works.deployment} target='_blank'>
          <h2 className="worksCardTitle">{works.title}</h2>
        </a>

        {/* Screen shot preview & link*/}
        <a href={works.repository}>
          <img className="mockup-img" style={{backgroundImage: `url(${works.mockup})`, backgroundRepeat: 'no-repeat'}} />
        </a>

        {/* Work Description */}
        <p className='description'>{works.description}</p>

      </div>
    </>
  )
}

export default Works


