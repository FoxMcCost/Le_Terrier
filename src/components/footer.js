function Footer() {
    return (
<>
<footer className="footer">
    <div className="footer_container">
      <div className="footer_container--Renseignements">
        <ul>
          <li>
            <h3>Renseignements</h3>
          </li>
          <li>
            <a href="#">.FAQ</a>
          </li>
          <li>
            <a href="#">.Aftercare / Soins</a>
          </li>
        </ul>
      </div>
      <div className="footer_container--Renseignements">
        <ul>
          <li>
            <h3>Nous Trouver</h3>
          </li>
          <li>
            <a href="#localisation">.Adresse</a>
          </li>
          <li>
            <a href="#localisation">.Contact</a>
          </li>
        </ul>
      </div>
      <div className="footer_container--logos">
        <div className="footer_container--logos1">
          <a href="#">
            <img src="../assets/images/facebook.svg" alt="facebook" />
          </a>
          <a href="#">
            <img src="../assets/images/instagram.svg" alt="instagram" />
          </a>
        </div>
        <div className="footer_container--logos2">
          <a href="#">
            <img src="../assets/images/facebook.svg" alt="facebook" />
          </a>
          <a href="#">
            <img src="../assets/images/instagram.svg" alt="instagram" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</>
    );
}

export default Footer;