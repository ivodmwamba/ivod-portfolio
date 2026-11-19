
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
    <footer className="site-footer border-t border-white/10 bg-[#061421]">
      <div className="container">
        {/* MAIN FOOTER */}
        <div className="footer-main">
          {/* BRAND */}
          <div className="footer-brand">
            <a
              href="#home"
              className="footer-logo inline-flex items-center font-heading font-bold tracking-tight"
              aria-label="Ivod Mwamba - Accueil"
            >
              IM<span className="text-[#20C5C8]">.</span>
            </a>

            <p className="footer-tagline">
              ENGINEERING IDEAS. DESIGNING THE FUTURE.
            </p>

            <p className="footer-description">
              {isFrench
                ? 'Technologie, ingénierie et innovation inclusive. Je conçois des expériences numériques utiles, accessibles et tournées vers l’avenir.'
                : 'Technology, engineering and inclusive innovation. I build useful, accessible and future-focused digital experiences.'}
            </p>
          </div>

          {/* NAVIGATION */}
          <div className="footer-navigation">
            <h3>
              {isFrench ? 'Explorer' : 'Explore'}
            </h3>

            <nav
              aria-label={
                isFrench
                  ? 'Navigation de pied de page'
                  : 'Footer navigation'
              }
              className="mt-5 flex flex-col gap-3"
            >
              {footerNavigation.map((item) => (
                <a
                  href={item.href}
                  key={item.label}
                  className="group inline-flex items-center gap-2 transition-colors hover:text-[#20C5C8]"
                >
                  {t(`navigation.${item.label}`)}

                  <Icon name="external" size={13} />
                </a>
              ))}
            </nav>
          </div>

          {/* EXPERTISE */}
          <div className="footer-social">
            <h3>
              {isFrench ? 'Domaines' : 'Focus areas'}
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                {isFrench ? 'Développement logiciel' : 'Software development'}
              </li>

              <li>
                {isFrench ? 'Développement front-end' : 'Front-end development'}
              </li>

              <li>
                {isFrench ? 'Design UI/UX inclusif' : 'Inclusive UI/UX design'}
              </li>

              <li>
                {isFrench ? 'Technologies accessibles' : 'Accessible technologies'}
              </li>
            </ul>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="footer-bottom flex flex-col gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-6 text-[#A8B7C7]">
            © 2026 IVOD MWAMBA.{' '}
            {t('footer.rights')}
          </p>

          <p className="font-mono text-[10px] tracking-[0.18em] text-[#20C5C8]">
            DESIGNED & BUILT WITH PURPOSE.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
