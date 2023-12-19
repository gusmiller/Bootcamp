const styles = {
     header: {
          background: '#b71775',
          height: '200px'
     },

     h1: {
          margin: 0,
          paddingTop: '75px',
          textAlign: center,
          color: white,
          fontSize: '3rem',
        },       

};

function Header() {

     return (
          <header style={styles.header}>
               <h1 style={styles.h1}>Welcome</h1>
          </header>
     );
}

export default Header;
