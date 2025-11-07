export default function Layout({ children }) {
  return (
    <div className="site">
      <header className="header">
        <div className="wrap">
          <a className="brand" href="/">
            {/* If you upload logo.png instead, change the src below */}
            <img src="/logo.svg" alt="Wessex Fabrications Ltd" />
            <span>Wessex Fabrications Ltd</span>
          </a>
          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact" className="btn">Contact</a>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <div className="wrap">
          <p>© {new Date().getFullYear()} Wessex Fabrications Ltd. All rights reserved.</p>
          <div className="badges">
            {/* You can replace with your badge images in /public if you prefer */}
            <img src="https://wessexfabricationsltd.com/wp-content/uploads/2023/03/ukca-badge.png" alt="UKCA" />
            <img src="https://wessexfabricationsltd.com/wp-content/uploads/2023/03/ssip-badge.png" alt="SSIP" />
          </div>
        </div>
      </footer>
    </div>
  );
}
