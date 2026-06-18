import { Helmet } from 'react-helmet-async'
import { useLanguage } from '../context/LanguageContext'

export function SEO() {
  const { data, lang } = useLanguage()

  const title = data.meta.title
  const description = data.meta.description
  const locale = lang === 'es' ? 'es_ES' : 'en_US'

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content={locale} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}
