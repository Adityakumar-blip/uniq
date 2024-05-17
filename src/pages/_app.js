import store from "@/Store/store";
import RootLayout from "@/components/Layout/RootLayout";
import "@/styles/globals.css";
import { Provider } from "react-redux";

export default function App({ Component, pageProps, router }) {
  return (
    <Provider store={store}>
      <RootLayout router={router}>
        <Component {...pageProps} />
      </RootLayout>
    </Provider>
  );
}
