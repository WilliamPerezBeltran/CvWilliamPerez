import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <div id="header" className="header-tops">
        <div className="container">
          <h1>
            <a href="index.html">William Pérez</a>
          </h1>
          <h2>
            Ingeniero industrial y <span>desarrollador de software.</span>{" "}
          </h2>

          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li className="active">
                <a href="#header">Home</a>
              </li>
              <li>
                <a href="#about">Hoja de vida</a>
              </li>
              {/*

          <li><a href="#resume">Hoja de vida</a></li>
        */}
            </ul>
          </nav>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/williamperezb"
              className="linkedin"
              target="_blank"
            >
              <i className="icofont-linkedin"></i>
            </a>
            <a
              href="https://github.com/WilliamPerezBeltran/"
              target="_blank"
              className="github"
            >
              <i className="icofont-github"></i>
            </a>
          </div>
        </div>
      </div>

      <div id="about" className="about">
        <div className="about-me container">
          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img src="assets/img/me.jpeg" className="img-fluid" alt="" />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <br />
              <br />
              <br />
              <br />
              <br />
              <h3>Ingeniero industrial &amp; Desarrollador de software</h3>
              <p style={{ textAlign: "justify", color: "rgb(78, 97, 108)" }}>
                Desarrollador full-stack con conocimientos en javascript, ruby y
                python. Manejo de diferentes frameworks, para front-end
                (react-js), para móviles (react-native) para back-end (ruby on
                rails y django).
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li style={{ color: "rgb(78, 97, 108)" }}>
                      <i className="icofont-rounded-right"></i>{" "}
                      <strong>Ciudad:</strong> Bogotá, Colombia
                    </li>
                    <li style={{ color: "rgb(78, 97, 108)" }}>
                      <i className="icofont-rounded-right"></i>{" "}
                      <strong>Age:</strong> 35
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul style={{ color: "rgb(78, 97, 108)" }}>
                    <li>
                      <i className="icofont-rounded-right"></i>{" "}
                      <strong>Profesional:</strong> Ingeniero industrial
                    </li>
                    <li>
                      <i className="icofont-rounded-right"></i>{" "}
                      <strong>Correo:</strong>{" "}
                      williampbeltranprogramador@gmail.com{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <p style={{ textAlign: "justify", color: "rgb(78, 97, 108)" }}>
                Ingeniero industrial dedicado al desarrollo de software con
                capacidad de desarrollar aplicaciones moviles, aplicaciones web
                y aplicativos de escritorio. Apasionado por las matemáticas, por
                el desarrollo de software y por la música clasica.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="resume" className="resume">
        <div className="container">
          <br />

          <div className="section-title">
            <h2>Hoja de vida</h2>
            <p>Hoja de vida</p>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div style={{ marginBottom: "50px" }}>
                <h4>William Pérez</h4>
                <p style={{ color: "rgb(78, 97, 108)" }}>
                  <em>
                    Desarrollador full-stack con conocimientos en javascript,
                    ruby y python. Manejo de diferentes frameworks, para
                    front-end (react-js), para móviles (react-native) para
                    back-end (ruby on rails y django).
                  </em>
                </p>
              </div>
            </div>
            <br />
          </div>

          <div className="row">
            <div className="col-lg-3">
              <h3 className="resume-title">Educación</h3>
            </div>

            <div className="col-lg-9">
              <br />
              <div className="resume-item" style={{ marginBottom: "50px" }}>
                <h4>Título de Ingeniero industrial</h4>
                <h5>2008 - 2012</h5>
                <p>
                  <em>Universidad Sergio arboleda </em>
                </p>
                <p>
                  <em>Bogotá, Colombia</em>
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3">
              <h3 className="resume-title">Formación complementaría</h3>
            </div>

            <div className="col-lg-9">
              <br />

              <div className="resume-item">
                <h4>Curso de inglés </h4>
                <h5>College Australia Language School</h5>
                <h5>2013 y 2014</h5>
                <p>
                  <em>Australia -Brisbane</em>
                </p>
              </div>
              <div className="resume-item" style={{ marginBottom: "50px" }}>
                <h4>Curso de inglés </h4>
                <h5>International house</h5>
                <h5>2012 y 2013</h5>
                <p>
                  <em>Australia -Brisbane</em>
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3">
              <h3 className="resume-title">Experiencia profesional</h3>
            </div>

            <div className="col-lg-9">
              <br />
              <div className="resume-item">
                <h4>Freelance-desarrollador de software</h4>
                <h5>Seimarsas </h5>
                <h5>Profesional independiente </h5>
                <h5>Sept. 2020 - Ene. 2021</h5>
                <p>
                  <em>Cartagena de Indias, Bolívar, Colombia</em>
                </p>
                <p>
                  <ul>
                    <li style={{ textAlign: "justify" }}>
                      Desarrollo de aplicación de escritorio para la gestión de
                      un stack de inventario que organiza, controla y actualiza
                      entradas y salidas de productos utilizando la pistola UHF
                      reader (tsl) con el uso de tecnología RFID vía bluetooth.
                      Proyecto realizado con node.js, react.js y electron.js
                      utilizando mysqlite3 como base de datos.{" "}
                    </li>
                  </ul>
                </p>
              </div>

              <div className="resume-item">
                <h4>Freelance-desarrollador de software</h4>
                <h5>Elite flower </h5>
                <h5>Profesional independiente </h5> <br />
                <h5>Nov. 2020 </h5>
                <p>
                  <em>Bogotá, Distrito Capital, Colombia</em>
                </p>
                <p>
                  <ul>
                    <li style={{ textAlign: "justify" }}>
                      Desarrollo de aplicativo web para la visualización del
                      porcentaje de hongos en pétalos de rosa roja implementando
                      inteligencia artificial para generar los resultados.
                      Proyecto realizado en react-js en el front-end y django en
                      el back-end.
                    </li>
                    <li style={{ textAlign: "justify" }}>
                      <b>Nota:</b> Código de inteligencia artificial
                      desarrollado por{" "}
                      <a
                        href="https://www.linkedin.com/in/aestebanpl/"
                        target="_blank"
                      >
                        Andres Esteban puerto
                      </a>
                    </li>
                  </ul>
                </p>
              </div>

              <div className="resume-item">
                <h4>Freelance-desarrollador de software</h4>
                <h5>Universidad uptc </h5>
                <h5>Profesional independiente </h5>
                <h5>mar. 2020 – may. 2020</h5>
                <p>
                  <em>Boyacá, Tunja, Colombia</em>
                </p>
                <p>
                  <ul>
                    <li style={{ textAlign: "justify" }}>
                      Desarrollo de aplicación movil y pagina web para la
                      enseñanza de teoría de conjuntos en el area de
                      matemáticas. Este proyecto se desarrollo utilizando
                      react.js para web y react native para la aplicación movil.{" "}
                    </li>
                  </ul>
                </p>
              </div>

              <div className="resume-item">
                <h4>Freelance-desarrollador de software</h4>
                <h5>Qp Surtinegocios </h5>
                <h5>Profesional independiente </h5>
                <br />
                <h5>Nov. 2019 – Feb. 2020</h5>
                <p>
                  <em>Bogotá, Distrito Capital, Colombia</em>
                </p>
                <p>
                  <ul>
                    <li style={{ textAlign: "justify" }}>
                      Desarrollo de applicación movil para android y iOS cuya
                      funcionalidad es controlar los recibos de pagos de la
                      empresa y sus devoluciones generando datos concretos para
                      el control de la mercancia de la empresa. El proyecto fue
                      hecho con el framework de react-native y en el back-end
                      con ruby on rails.{" "}
                    </li>
                  </ul>
                </p>
              </div>

              <div className="resume-item">
                <h4>Desarrollador de software</h4>
                <h5>Melius Investigacion y Desarrollo - Jornada completa</h5>
                <br />
                <h5>Ene. 2019 – Dic. 2019</h5>
                <p>
                  <em>Bogotá, Distrito Capital, Colombia</em>
                </p>
                <p>
                  <ul>
                    <li style={{ textAlign: "justify" }}>
                      Desarrollo de aplicaciones moviles para transmicable y
                      desarrollo de administrador web para empresa exportadora
                      de flores (flores aurora). Soporte y mantenimiento de las
                      aplicaciones ya existentes.{" "}
                    </li>
                  </ul>
                </p>
              </div>

              <div className="resume-item">
                <h4>Freelance Desarrollador de software</h4>
                <h5>Octopus</h5>
                <br />
                <h5>Sept. 2017 – Ene. 2019</h5>
                <p>
                  <em>Londres, Inglaterra, Reino Unido</em>
                </p>
                <p>
                  <em>Remoto</em>
                </p>
                <p>
                  <ul>
                    <li style={{ textAlign: "justify" }}>
                      Bajar información de la web con la libreria scrapy con los
                      lenguajes python y el framework django para la empresa
                      octopus de londres.{" "}
                    </li>
                  </ul>
                </p>
              </div>
              <div className="resume-item">
                <h4>Desarrollador de aplicaciones móviles</h4>
                <h5>There Marketing</h5>
                <br />
                <h5>Sept. 2017 – Dic. 2017</h5>
                <p>
                  <em>Bogotá, Distrito Capital, Colombia</em>
                </p>
                <p>
                  <ul>
                    <li style={{ textAlign: "justify" }}>
                      Encargado del front end de la aplicación móvil de la
                      compañía con el framework ionic2 y angular 2.
                    </li>
                  </ul>
                </p>
              </div>

              <div className="resume-item">
                <h4>Desarrollador web y aplicaciones móviles</h4>
                <h5>it group</h5>
                <br />
                <h5>Sept. 2016 – Ago. 2017</h5>
                <p>
                  <em>Bogotá, Distrito Capital, Colombia</em>
                </p>
                <p>
                  <ul>
                    <li style={{ textAlign: "justify" }}>
                      (Front End y Back End )Desarrollo de aplicaciones móviles
                      hibridas con el framework ionic2 y angular 2,
                      mantenimiento y desarrollo de las páginas web de la
                      compañía con angular 1.
                    </li>
                  </ul>
                </p>
              </div>

              <div className="resume-item">
                <h4>Freelance Desarrollador de software</h4>
                <h5>ALIANZA TEMPORALES S.A.S</h5>
                <br />
                <h5>Ene. 2017 – Feb. 2017</h5>
                <p>
                  <em>Bogotá, Distrito Capital, Colombia</em>
                </p>
                <p>
                  <ul>
                    <li style={{ textAlign: "justify" }}>
                      Desarrollo de administrador para administrar los datos de
                      los empleados de la empresa.
                    </li>
                  </ul>
                </p>
              </div>
              <div className="resume-item">
                <h4>Programador</h4>
                <h5>Litsor Publicidad</h5>
                <br />
                <h5>Abr. 2016 – Ago. 2016</h5>
                <p>
                  <em>Bogotá, Distrito Capital, Colombia</em>
                </p>
                <p>
                  <ul>
                    <li style={{ textAlign: "justify" }}>
                      Maquetación de los diseños para las páginas, soporte del
                      back end y del front end de todos los proyectos web de la
                      compañía. Proyecto realizado con php utilizando el
                      framework codeigniter.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
