import '../styles/globals.css'
import 'react-responsive-modal/styles.css';
import Navbar from '../components/Navbar/Navbar';
import { Provider } from 'react-redux'
import store from '../store'
import { useMediaQuery } from 'react-responsive'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import 'react-toastify/dist/ReactToastify.css';
const Tablet = () => {
  const isTablet = useMediaQuery({ minWidth: 601, maxWidth: 1226 })
  return isTablet
}
const closeIcon = (
  <svg style={{display:"none"}}>
  </svg>
);
function MyApp({ Component, pageProps }) {
  return (
    Tablet()?(<>
    <Modal open={true} onClose={false} center closeIcon={closeIcon}>
<h2>This Web service is not available in Tablet mode :(</h2>
</Modal>
</>):(<Provider store={store}>
      <Navbar/>
      <Component {...pageProps} />
    </Provider>)
    
  )
}

export default MyApp