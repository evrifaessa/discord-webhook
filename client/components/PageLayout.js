import Head from "next/head"
import Script from "next/script"
import Link from "next/link";
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/router'
import { Toaster } from "react-hot-toast"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function PageLayout({ children, title }) {
  const t = useTranslations('index');
  const { locale } = useRouter()

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="A minimal online application to interact with Discord webhooks easily. You cand send stuff to Discord webhooks right inside your browser using this website."
        />
        <meta name="author" content="Yağızhan Burak Yakar (evrifaessa), https://github.com/evrifaessa" />
        <meta name="keywords" content="evrifaessa, webhook, online, client, discord, discordapp, sender, send, channel" />
        <meta name="title" content="Online client for Discord webhooks" />

        <title>{`${title}`}</title>

        {/* Favicons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta
          name="msapplication-config"
          content="/favicons/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />

        {/* Open Graph */}

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://webhook.yagiz.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="webhook.yagiz.dev" />
        <meta property="og:description" content="A minimal online application to interact with Discord webhooks easily." />
        <meta property="og:image" content="https://raw.githubusercontent.com/evrifaessa/discord-webhook/master/assets/images/placeholder.png" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="webhook.yagiz.dev" />
        <meta property="twitter:url" content="https://webhook.yagiz.dev" />
        <meta name="twitter:title" content="webhook.yagiz.dev" />
        <meta name="twitter:description" content="A minimal online application to interact with Discord webhooks easily." />
        <meta name="twitter:image" content="https://raw.githubusercontent.com/evrifaessa/discord-webhook/master/assets/images/placeholder.png" />

      </Head>

      {/* Execute ASAP to avoid FOUC */}
      <Script src="/theme.js" strategy="beforeInteractive" />

      <main>
        <div><Toaster/></div>
        {children}
      </main>
      <Script src="/main.js" />
    </div>
  );
}