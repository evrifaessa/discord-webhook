import '../styles/globals.css'
import {NextIntlProvider} from 'next-intl';

function MyApp({ Component, pageProps }) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Component {...pageProps} />
    </NextIntlProvider>
  )
}

export default MyApp
