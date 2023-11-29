
import Header from '../components/header.js'
import Footer from '../components/footer.js'
import FormContact from '../components/formContact.js'



function Home() {
    return (
<>
<Header />
  <article id="localisation" className="main_localization">
    <h2>Où nous trouver</h2>
    <div className="main_localization--boxes">
      <div className="main_localization--photo1">
        <div>
          <img src="../assets/images/porte-cailhau.jpg" alt="Porte Caillau" />
          <figcaption>Porte Caillau</figcaption>
        </div>
      </div>
      <div className="main_localization--photo2">
        <a href="https://maps.app.goo.gl/YZNLdiWwXmJVrCLF6">
          <img src="../assets/images/Gmaps.png" alt="Google Maps" />
        </a>
        <a href="https://maps.app.goo.gl/YZNLdiWwXmJVrCLF6">MAP</a>
      </div>
      <div className="main_localization--photo3">
        <div>
          <img src="../assets/images/LeTerrier.jpg" alt="Le Terrier" />
          <figcaption>Le Terrier</figcaption>
        </div>
      </div>
    </div>
    <div id="localisation" className="main_localization--adress">
      <span>Adresse:</span> 5 Rue Ausone, 33000 Bordeaux.{" "}
      <span>Téléphone:</span> 06066066606
    </div>
  </article>
  <article className="form_container">
    <FormContact />
  </article>
 <Footer />
</>
    );
}

export default Home;