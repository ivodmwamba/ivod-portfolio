
import { useTranslation } from 'react-i18next'
import { Icon } from './Icon'

const footerNavigation = [
  { label: 'about', href: '#about' },
  { label: 'expertise', href: '#expertise' },
  { label: 'projects', href: '#projects' },
  { label: 'contact', href: '#contact' },
] as const

function Footer() {
  const { t, i18n } = useTranslation()
  const isFrench = i18n.language.startsWith('fr')

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              IM<span>.</span>
            </a>

            <p className="footer-tagline">
              ENGINEERING IDEAS. DESIGNING THE FUTURE.
            </p>

            <p className="footer-description">
              {isFrench
                ? 'Technologie, ingénierie et innovation inclusive.'
                : 'Technology, engineering and inclusive innovation.'}
            </p>
          </div>

          <div className="footer-navigation">
            <h3>{isFrench ? 'Navigation' : 'Navigation'}</h3>

            <nav
              aria-label={
                isFrench
                  ? 'Navigation de pied de page'
                  : 'Footer navigation'
              }
            >
              {footerNavigation.map((item) => (
                <a href={item.href} key={item.label}>
                  {t(`navigation.${item.label}`)}
                  <Icon name="external" size={13} />
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-social">
            <h3>
              {isFrench
                ? 'Réseaux professionnels'
                : 'Professional networks'}
            </h3>

            <p>
              {isFrench
                ? 'Profils professionnels à ajouter.'
                : 'Professional profiles coming soon.'}
            </p>

            <p className="mt-4">
              {isFrench
                ? 'Développement logiciel · Design inclusif'
                : 'Software development · Inclusive design'}
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2026 IVOD MWAMBA. {t('footer.rights')}
          </p>

          <a href="#home" className="footer-back-top">
            {isFrench ? 'Retour en haut' : 'Back to top'}
            <Icon name="top" size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
