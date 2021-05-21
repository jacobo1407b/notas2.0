import "carbon-components/css/carbon-components.css";
import "semantic-ui-css/semantic.min.css";
import "../assets/main.css";

import Layout from "../Layout/Layout";
import { Provider } from "../context";
import Modal from '../Components/Modal'

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Modal/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
