import FolatingButton from "@/components/FolatingButton";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <FolatingButton />
    </>

  )
}
