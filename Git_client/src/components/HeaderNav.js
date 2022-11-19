export const HeaderNav = () => {
  return (
    <div>
      <myNavBar>
        <h3 style={{ color: "#494d5f", fontWeight: "900", fontFamily: "Lato" }}>
          Auto-Toll
        </h3>
        <nav>
          <ul className="nav__links">
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#Service">Services</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
          </ul>
        </nav>
        <a className="cta" href="#button">
          <button>Contact</button>
        </a>
      </myNavBar>
    </div>
  );
};
