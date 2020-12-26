import Head from 'next/head'
import Link from 'next/link'
import styles from './layout.module.scss'


import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

export default ({ children }) => {
  /*
   * Added this to toggle the is-active class. See:
   * 
   * https://bulma.io/documentation/components/navbar/#navbar-menu
   * https://github.com/jgthms/bulma/issues/856
   */

  const theme = createMuiTheme({
    palette: {
      primary: { main: '#212121' },
      secondary: { main: '#B71C1C' }
    },
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>St. Mary's Events</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <img src="images/logo.png" alt="Church Logo" width="90px"></img>
              <h1 className={styles.title}>
                  St. Mary&apos;s <span className={styles.subTitle}>Malankara Orthodox Church</span>
              </h1>
            </a>
          </Link>
        </div>
      </header>
      <hr className={styles.line}/>
      <h3>Service Attendance</h3>
      <hr className={styles.line}/>
      <MuiThemeProvider theme = { theme }>
        {children}
       </MuiThemeProvider>
      {/* <footer className="footer">
        <div className="content has-text-centered">
          <span>I'm the footer</span>
        </div>
      </footer> */}
    </div>
  )
}