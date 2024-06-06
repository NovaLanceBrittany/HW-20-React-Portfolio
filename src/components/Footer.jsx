// imports
import { useState, useEffect } from "react" 
import { Link } from "react-router-dom"

//CSS
const styles = {
  footer: {
    // The container
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    height: '3rem',
    backgroundColor: "var(--VioletJTC)",
    borderTop: "1px solid var(--PowderBlue)",
    paddingTop: "30px",
  },

  footerTitle: {
    justifyContent: 'space-around',
    color: 'white',
  },

  socials: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    display: 'flex',
    width: '60%'
  },

}

export default function Footer() {
  return (
    <footer style={styles.footer}>
    
    <h2 style={styles.footerTitle}>Visit My Socials:</h2>

        {/* Social Media Links */}
        <div style={styles.socials}>
          <a href="https://www.linkedin.com/in/brittany-jungclaus-14933b101/" target="_blank">LinkedIn</a>
          <a href="https://x.com/NovaLanceBritt" target="_blank">Twitter</a>
          <a href="https://github.com/NovaLanceBrittany" target="_blank">GitHub</a>
        </div>
    </footer>
  )
}
