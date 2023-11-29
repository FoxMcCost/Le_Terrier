import {useState} from 'react'
function FormContact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [tattoo, setTattoo] = useState("");
    const [message, setMessage] = useState("");
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(JSON.stringify({name, email, tattoo, message}))
    
    
        fetch(
            'http://localhost:5000/mail', {
                method: "post",
                body: JSON.stringify({name, email, tattoo, message}),
                headers: {
                    'Content-Type': 'application/json'
                }
            }) 
    }

    return (
<>
<form className="contact_form" onSubmit={handleSubmit}>
      <h2>CONTACT</h2>
      <input type="text" id="name" placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)}/>
      <br />
      <input type="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <label htmlFor="tatoo-select">Tatoueuse/r</label>
      <select name="Tatoueurs" id="tattoo-select" value={tattoo} onChange={(e) => setTattoo(e.target.value)}>
        <option value="Renard">Renard</option>
        <option value="Antoine">Antoine</option>
        <option value="Ben">Ben</option>
      </select>
      <textarea
        id="message"
        placeholder="Message"
        cols={30}
        rows={10}
        value={message} onChange={(e) => setMessage(e.target.value)}
      />
      <br />
      <input type="submit" className="submit" defaultValue="Send Message"/>
    </form>
</>
    );
}

export default FormContact;