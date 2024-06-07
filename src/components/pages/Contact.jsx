import { useState, useEffect } from 'react';

// CSS
const styles = {
  contactTitle: {
    backgroundColor: "var(--Tekhelet)",
    borderBottom: "1px solid white",
    height: "6rem",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 3rem",
    color: "white"
  },

  form: {
    backgroundColor: "var(--Tekhelet)",
    borderBottom: "1px solid white",
    height: "6rem",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "0 3rem",
    color: "white",
    marginTop: "600px"
  },

  btn: {
    backgroundColor: "var(--SlateBlue)",
    borderBottom: "1px solid white",
    height: "3rem",
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
    padding: "0 3rem",
    color: "white"
  },

  lable: {
    backgroundColor: "var(--SlateBlue)",
    borderBottom: "1px solid white",
    height: "3rem",
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
    padding: "0 3rem",
    color: "white",
    padding: "6px"
  },
}


// Contact Me Page
export default function Contact() {

  // Form Logic
  const [formData, setFormData] = useState({name: "", email: "", message: ""})

  function handleInputChange(e){
    setFormData({...formData, [e.target.name]: e.target.value})
  }


  return (
    <main>
      <section className='Contact' style={styles.contactTitle}>

        <h2 className='AboutMe-title'>Contact</h2>

        {/* Contact Me From*/}
        <form className='form' style={styles.form}>
        <p className='from-body'>Let's Connect!</p>

          <label className="name" style={styles.lable}>Name</label>
            <input type="text" name="name"
              placeholder="First & Last Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <br />

          <label className="email" style={styles.lable}>Email</label>
            <input type="email" name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <br />


          <label className="message" style={styles.lable}>Message</label>
            <input type="message" name="message"
              placeholder="What's Up? =)"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
            <br />

          <button className="sumbitBtn" type="submit" style={styles.btn}>Submit</button>
        </form>
      </section>
    </main>
  )
}