import '@/styles/globals.css'
import '@/styles/style.css'
import '@/styles/responsive.css'
import '@/styles/bootstrep.css'
import LayoutComponent from '@/Components/Layouts/LayoutComponent'
import { wrapper,store } from "../app/store"
import { Provider } from "react-redux";

function App({ Component, pageProps }) {

  return (
    <>
    
    <LayoutComponent>
    <Provider store={store}>
      <Component {...pageProps} />
      </Provider>
    </LayoutComponent>
    
    </>
  )
}

export default App;
