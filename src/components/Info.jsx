import img from "./images/pqr.jpg";
function Info() {
  return (
    <div className="info">
      <img src={img} alt="my-img" />
      <div className="info--profile">
        <h1>Sanketh kumar</h1>
        <h3>Frontend Developer</h3>
        <div className="btn">
          <a className="email" href="/">
            <ion-icon name="logo-github"></ion-icon>
            <span> Github </span>
          </a>
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/kistappagari-sanketh-kumar-3b5676216/"
          >
            <ion-icon name="logo-linkedin"></ion-icon> LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default Info;
