import RootLayout from "@/components/Layout/RootLayout";
import "@/styles/globals.css";

export default function App({ Component, pageProps, router }) {
  return (
    <RootLayout router={router}>
      <Component {...pageProps} />
    </RootLayout>
  );
}
