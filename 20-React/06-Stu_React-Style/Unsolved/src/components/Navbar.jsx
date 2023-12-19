
const styles = {
     navbar: {
          background: '#6a1b9a',
          height: '60px',
        },        
     a: {
          color: white,
          fontSize: '1.3rem',
          textDecoration: none,
          margin: '5px',
          lineHeight: 3,
        }
};

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <a style={styles.a} href="/">Welcome</a>
    </nav>
  );
}

export default Navbar;
