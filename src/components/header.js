function Header() {

    /* BURGER*/

    function openNav() {
        document.getElementById("mySidenav").classList.add("active");
    }

    function closeNav() {
        document.getElementById("mySidenav").classList.remove("active");
    }

    return (
<>
<header>
    {" "}
    <a href="/">
      <div className="header_container">
        <h1 id="home">LE TERRIER</h1>
      </div>
    </a>
    <div className="burger">
      <div id="mySidenav" className="sidenav">
        <a id="closeBtn" href="#" className="close" onClick={closeNav}>
          ×
        </a>
        <ul>
          <li>
            <a href="#">Résidents</a>
          </li>
          <li>
            <a href="#">Boutique</a>
          </li>
          <li>
            <a href="/faq">FAQ</a>
          </li>
          <li>
            <a href="/">Accueil</a>
          </li>
        </ul>
      </div>
      <div className="header_btn">
        <a href="#" id="openBtn" onClick={openNav}>
          <span className="burger-icon">
            <span />
            <span />
            <span />
            <div className="menu">menu</div>
          </span>
        </a>
      </div>
      <div className="sous_titre">
        <h2>Salon de Tatouage</h2>
      </div>
      <div className="pictogrammes">
        <a href="#">
          <img src="../assets/images/facebook.svg" alt="facebook" />
        </a>
        <a href="#">
          <img src="../assets/images/instagram.svg" alt="instagram" />
        </a>
      </div>
    </div>
  </header>
</>
    );
}

export default Header;