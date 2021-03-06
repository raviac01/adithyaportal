import { library, config } from "@fortawesome/fontawesome-svg-core";
import { faBorderAll, faList } from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;
library.add(faList, faBorderAll);

import "@fortawesome/fontawesome-svg-core/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "styles/index.scss";
import "styles/globals.css";
import Head from "next/head";
import Layout from "components/layout/Layout";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import styled from "styled-components";

// const store = createStore(
//   allReducers
//   //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

//store.subscribe(() => console.log(store.getState()));

function MyApp({ Component, pageProps }) {
  return (
    <StyledContiner>
      <Head>
        <title>Adithya Portal</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StyledContiner>
  );
}

export default MyApp;

const StyledContiner = styled.div`
  height: 100vh;
  margin: 0px;
  padding-bottom: 0px;
`;
