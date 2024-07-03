import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'Início', page: '/' },
  { label: 'Notícias', page: '/blog' },
  // { label: 'Contact', page: '/contact' },
  // { label: 'Source Code', link: 'https://github.com/ijjk/notion-blog' },
]

const ogImageUrl = 'https://notion-blog.now.sh/og-image.png'

const Header = ({ titlePre = '' }) => {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} Blog Autoclipper</title>
        <meta
          name="description"
          content="Seu portal de notícias sobre marketing e tecnologia aplicada à criação de conteúdo. Descubra insights sobre as últimas tendências, ferramentas inovadoras e estratégias eficazes para potencializar suas campanhas de marketing e aprimorar a produção de conteúdo."
        />
        <meta name="og:title" content="Blog Autoclipper" />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:site" content="@_ijjk" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>
      <ul>
        <img src="/Logoprincipal.png" alt="Logo_autoclipper.png" />
        <div className="link">
          {navItems.map(({ label, page, link }) => (
            <li key={label}>
              {page ? (
                <Link href={page}>
                  <a className={pathname === page ? 'active' : undefined}>
                    {label}
                  </a>
                </Link>
              ) : (
                <ExtLink href={link}>{label}</ExtLink>
              )}
            </li>
          ))}
        </div>
        <button id="primary-btn">Cadastrar</button>
      </ul>
    </header>
  )
}

export default Header
