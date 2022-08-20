import PageLayout from "../components/PageLayout";
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router'
import { getEnglishNameFromLocaleCode } from "../components/Locales";

export default function Home() {
  const t = useTranslations('index');
  const shared = useTranslations('shared');
  const { locale } = useRouter()

  return (
    <PageLayout home title={t('title')}>
      <div className="dark:bg-zinc-900 dark:text-neutral-100 flex min-h-screen flex-col items-center justify-center py-2">

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-5xl font-bold">
          {t.rich('header', {
            blue: (children) => <span className="text-blue-600 dark:text-blue-400">{children}</span>
          })}
        </h1>
        <h2 className="mt-3 text-2xl">{t('subheader')}</h2>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        
      </footer>
    </div>
    </PageLayout>
  )
}

export async function getStaticProps({locale}) {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by language and read
      // the desired one based on the `locale` received from Next.js.
      messages: {
        ...require(`../messages/${locale}/shared.json`),
        ...require(`../messages/${locale}/index.json`),
      },
    }
  };
}