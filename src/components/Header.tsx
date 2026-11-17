
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Icon } from './Icon'

const navigation = [
  { label: 'home', href: '#home', icon: 'home' },
  { label: 'about', href: '#about', icon: 'about' },
  { label: 'expertise', href: '#expertise', icon: 'expertise' },
  { label: 'projects', href: '#projects', icon: 'projects' },
  { label: 'contact', href: '#contact', icon: 'contact' },
] as const

function Header() {
  const { t, i18n } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  const isFrench = i18n.language.startsWith('fr')

  const changeLanguage = (language: 'fr' | 'en') => {
    void i18n.changeLanguage(language)
    setMenuOpen(false)
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="container flex min-h-[76px] items-center justify-between gap-6">
        <a
          href="#home"
          className="font-heading text-2xl font-bold tracking-tight"
          aria-label="IVOD MWAMBA - Home"
          onClick={closeMenu}
        >
          IM<span className="text-accent">.</span>
        </a>

        <nav
          id="main-navigation"
          className={`${menuOpen ? 'flex' : 'hidden'} absolute left-0 top-full z-50 w-full flex-col gap-6 border-b border-white/10 bg-[#081827] p-6 md:static md:flex md:w-auto md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0`}
          aria-label={isFrench ? 'Navigation principale' : 'Main navigation'}
        >
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className="flex items-center gap-2 text-sm text-muted transition hover:text-accent"
            >
              <Icon name={item.icon} size={16} />
              {t(`navigation.${item.label}`)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 font-mono text-xs font-semibold">
            <button
              type="button"
              onClick={() => changeLanguage('fr')}
              className={isFrench ? 'text-accent' : 'text-muted'}
              aria-label="Français"
              aria-pressed={isFrench}
            >
              FR
            </button>

            <span className="text-muted">/</span>

            <button
              type="button"
              onClick={() => changeLanguage('en')}
              className={!isFrench ? 'text-accent' : 'text-muted'}
              aria-label="English"
              aria-pressed={!isFrench}
            >
              EN
            </button>
          </div>

          <a href="#contact" className="btn btn-primary hidden md:inline-flex">
            {t('navigation.talk')}
            <Icon name="external" size={16} />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((previous) => !previous)}
            className="flex size-10 items-center justify-center rounded border border-white/10 text-white transition hover:border-accent hover:text-accent md:hidden"
            aria-label={
              menuOpen
                ? (isFrench ? 'Fermer le menu' : 'Close menu')
                : (isFrench ? 'Ouvrir le menu' : 'Open menu')
            }
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
