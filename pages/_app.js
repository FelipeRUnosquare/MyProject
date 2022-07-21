import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import AuthContextProvider from "../store/AuthContextProvider";
import DataContextProvider from "../store/DataContextProvider";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Layout>
        <DataContextProvider>
          <Component {...pageProps} />
        </DataContextProvider>
      </Layout>
    </AuthContextProvider>
  );
}

export default MyApp;
