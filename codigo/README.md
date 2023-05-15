# Código do Projeto

<!DOCTYPE html>
<html>
  
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
  <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">
  <title>HOME</title>
</head>

<body>
  <header class="header" id="header">
    <nav class="navbar container">
      <div class="wrapper">
        <nav>
          <input type="checkbox" id="show-search">
          <input type="checkbox" id="show-menu">
          <label for="show-menu" class="menu-icon"><i class="fas fa-bars"></i></label>
          <div class="content">
            <div class="logo">
              <div class="logo_header">
                <img src="img/Logo.png" class="img-logo" alt="Logo">
              </div>
            </div>
            <ul class="links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Atualização</a></li>
              <li>
                <a href="#" class="desktop-link">Eventos</a>
                <input type="checkbox" id="show-features">
                <label for="show-features">Eventos</label>
                <ul>
                  <li><a href="#"></a></li>
                  <li><a href="#"></a></li>
                  <li><a href="#"></a></li>
                  <li><a href="#"></a></li>
                </ul>
              </li>
              <li>
                <a href="#" class="desktop-link">News</a>
                <input type="checkbox" id="show-services">
                <label for="show-services">News</label>
                <ul>
                  <li><a href="#"></a></li>
                  <li><a href="#"></a></li>
                  <li><a href="#"></a></li>
                </ul>
          </div>
          <a href="https://formulario-login--aniellevic.repl.co"><i class="fas fa-user white-icon" id="user"></i></a>
          <label for="show-search" class="search-icon"><i class="fas fa-search"></i></label>
          <form action="#" class="search-box">
            <input type="text" placeholder="Type Something to Search..." required>
            <button type="submit" class="go-icon"><i class="fas fa-long-arrow-alt-right"></i></button>
          </form>
        </nav>
      </div>
    </nav>
  </header>

  <footer class="footer-sec">
    <div class="main">
      <div class="link row">
        <div class="footer-header">
          <h3>Início</h3>
        </div>
        <div class="link-des">
          <a href="#" class="footer-links">Home</a>
          <a href="#" class="footer-links">Atualizações</a>
          <a href="#" class="footer-links">Eventos</a>
          <a href="#" class="footer-links">Notícias</a>
          <a href="#" class="footer-links">Premiações</a>
        </div>
      </div>
      <div class="office row">
        <div class="footer-header">
          <h3>Sobre Nós</h3>
        </div>
        <div class="office-des">
          <a href="#" class="footer-links">Central De Ajuda</a>
          <a href="#" class="footer-links">Política De Divulgação</a>
          <a href="#" class="footer-links">Trocas e Devoluçãos</a>
        </div>
      </div>
      <div class="newsletter-des">
        <div class="footer-header">
          <h3>Contact Us</h3>
        </div>
        <div class="icons">
          <a href="#"><i class="social-icon ri-facebook-fill"></i></a>
          <a href="#"><i class="social-icon ri-instagram-line"></i></a>
          <a href="#"><i class="social-icon ri-github-line"></i></a>
        </div>
      </div>
  </footer>
  <script src=" script.js"></script>
  <script src="https://replit.com/public/js/replit-badge-v2.js" theme="dark" position="bottom-right"></script>
</body>
</html>
  
<style>
@import url('https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&family=PT+Sans:ital@1&family=Poppins:wght@300&family=Sigmar&family=Vina+Sans&display=swap');

/*Cabeçalho*/
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
}

.wrapper {
  background: #000000;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 9999;
}

.wrapper nav {
  position: relative;
  display: flex;
  max-width: calc(100% - 200px);
  margin: 0 auto;
  height: 70px;
  align-items: center;
  justify-content: space-between;
}

.img-logo {
  width: 130px;
}

nav .content {
  display: flex;
  align-items: center;
}

nav .content .links {
  margin-left: 80px;
  display: flex;
}

.content .logo a {
  color: #fff;
  font-size: 30px;
  font-weight: 600;
}

.content .links li {
  list-style: none;
  line-height: 70px;
  padding: 10px;
}

.content .links li a,
.content .links li label {
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  padding: 10px 30px;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.content .links li label {
  display: none;
}

.content .links li a:hover,
.content .links li label:hover {
  background: #000000;
}

.wrapper .search-icon,
.wrapper .menu-icon {
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  line-height: 80px;
  width: 70px;
  text-align: center;
}

.wrapper .menu-icon {
  display: none;
}

.wrapper #show-search:checked~.search-icon i::before {
  content: "\f00d";
}

.wrapper .search-box {
  position: absolute;
  height: 100%;
  max-width: calc(100% - 50px);
  width: 100%;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;
}

.wrapper #show-search:checked~.search-box {
  opacity: 1;
  pointer-events: auto;
}

.search-box input {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 17px;
  color: #fff;
  background: #000000;
  padding: 0 100px 0 15px;
}

.search-box input::placeholder {
  color: #ffffff;
}

.search-box .go-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  line-height: 60px;
  width: 70px;
  background: #000000;
  border: none;
  outline: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
}

.wrapper input[type="checkbox"] {
  display: none;
}

.content .links ul {
  position: absolute;
  background: #000000;
  top: 80px;
  z-index: -1;
  opacity: 0;
  visibility: hidden;
}

.content .links li:hover>ul {
  top: 70px;
  opacity: 1;
  visibility: visible;
  transition: all 0.3s ease;
}

.content .links ul li a {
  display: block;
  width: 100%;
  line-height: 30px;
  border-radius: 0px !important;
}

.content .links ul ul {
  position: absolute;
  top: 0;
  right: calc(-100% + 8px);
}

.content .links ul li {
  position: relative;
}

.content .links ul li:hover ul {
  top: 0;
}

.white-icon {
  color: #fff;
}

.dummy-text {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  z-index: -1;
  padding: 0 20px;
  text-align: center;
  transform: translate(-50%, -50%);
}

.dummy-text h2 {
  font-size: 30px;
  margin: 5px 0;
}

@media screen and (max-width: 1250px) {
  .wrapper nav {
    max-width: 100%;
    padding: 0 20px;
  }

  nav .content .links {
    margin-left: 30px;
  }

  .content .links li a {
    padding: 8px 13px;
  }

  .wrapper .search-box {
    max-width: calc(100% - 100px);
  }

  .wrapper .search-box input {
    padding: 0 100px 0 15px;
  }
}

@media screen and (max-width: 900px) {
  .wrapper .menu-icon {
    display: block;
  }

  .wrapper #show-menu:checked~.menu-icon i::before {
    content: "\f00d";
  }

  nav .content .links {
    display: block;
    position: fixed;
    background: #0a0a0a;
    height: 100%;
    width: 100%;
    top: 70px;
    left: -100%;
    margin-left: 0;
    max-width: 350px;
    overflow-y: auto;
    padding-bottom: 100px;
    transition: all 0.3s ease;
  }

  nav #show-menu:checked~.content .links {
    left: 0%;
  }

  .content .links li {
    margin: 15px 20px;
  }

  .content .links li a,
  .content .links li label {
    line-height: 40px;
    font-size: 20px;
    display: block;
    padding: 8px 18px;
    cursor: pointer;
  }

  .content .links li a.desktop-link {
    display: none;
  }

  /* dropdown responsive code start */
  .content .links ul,
  .content .links ul ul {
    position: static;
    opacity: 1;
    visibility: visible;
    background: none;
    max-height: 0px;
    overflow: hidden;
  }

  .content .links #show-features:checked~ul,
  .content .links #show-services:checked~ul,
  .content .links #show-items:checked~ul {
    max-height: 100vh;
  }

  .content .links ul li {
    margin: 7px 20px;
  }

  .content .links ul li a {
    font-size: 18px;
    line-height: 30px;
    border-radius: 5px !important;
  }
}

@media screen and (max-width: 400px) {
  .wrapper nav {
    padding: 0 10px;
  }

  .content .logo a {
    font-size: 27px;
  }

  .wrapper .search-box {
    max-width: calc(100% - 70px);
  }

  .wrapper .search-box .go-icon {
    width: 30px;
    right: 0;
  }

  .wrapper .search-box input {
    padding-right: 30px;
  }
}

/*Rodapé*/
footer {
  color: #fff;
  background-image: linear-gradient(to bottom, #43354f, #655571);
  position: relative;
  width: 100%;
  height: 100%;
  top: 350px;
  font-size: 0.8rem;
}

.main {
  padding: 20px;
  display: grid;
  gap: 55px;
  grid-template-columns: 1fr;
}

.row {
  margin-top: 20px;
}

.footer-header {
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-header h3 {
  font-size: 1.8rem;
  margin-bottom: 15px;
}

.footer-links {
  margin-bottom: 10px;
}

.office-des {
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
}

.office a {
  text-decoration: none;
  color: #98A8F8;
}

.office a:hover {
  color: #fff;
}

.link-des {
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
}

.link-des a {
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
}

.link-des a:hover {
  color: #a316e9;
  transition: linear 0.3s;
}

.ri-arrow-right-line {
  margin-left: 0;
}

.icons a {
  text-decoration: none;
  color: #fff;
  border: 1px solid #fff;
  justify-content: center;
  padding: 10px;
  border-radius: 50%;
  align-items: center;
  font-size: 1.1rem;
  margin: 2%;
}

.social-icon {
  position: relative;
  top: 2px;
}

.icons a:hover {
  color: #fff;
  background-color: #a316e9;
  border-color: #a316e9;
}

.newsletter-des {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
  margin-top: 50px;
}

.icons {
  display: flex;
  gap: 10px;
}

@media (min-width: 768px) {
  .main {
    grid-template-columns: repeat(2, 1fr);
    margin: 2% 5%;
  }
}

@media (min-width: 992px) {
  .main {
    grid-template-columns: repeat(3, 1fr);
    margin: 2% 10%;
  }
}

@media (min-width: 1200px) {
  .main {
    margin: 2% 15%;
  }
}
</style>

Código html e css do cabeçalho e rodapé
