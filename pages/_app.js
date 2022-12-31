import { AppContextProvider } from '../components/context/AppContext'
import Layout from '../components/Layout'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {

  return (
         <AppContextProvider>     
            <Layout>
            <Component {...pageProps} />
            </Layout>
         </AppContextProvider>
  )
}


