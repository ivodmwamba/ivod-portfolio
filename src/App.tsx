
import { useTranslation } from 'react-i18next'
import Header from './components/Header'
import Footer from './components/Footer'

const expertise = [
  { number: '01', key: 'software', symbol: '</>' },
  { number: '02', key: 'frontend', symbol: '◈' },
  { number: '03', key: 'design', symbol: '◎' },
] as const

function App() {
  const { t, i18n } = useTranslation()
  const isFrench = i18n.language.startsWith('fr')

  return (
    <main className="min-h-screen overflow-hidden bg-[#081827] text-white">
      {/* HEADER */}
      <Header />

      {/* HERO */}
      <section id="home" className="hero container">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative z-10">
            <p className="section-label">
              {t('hero.welcome')}
            </p>

            <h1 className="hero-title">
              IVOD
              <br />
              MWAMBA<span className="text-accent">.</span>
            </h1>

            <div className="mt-8 border-l-2 border-[#20C5C8] pl-5">
              <h2 className="font-heading text-xl font-semibold sm:text-2xl">
                {t('hero.role')}
              </h2>

              <p className="mt-2 text-sm leading-7 text-[#A8B7C7] sm:text-base">
                {t('hero.specialties')}
              </p>
            </div>

            <p className="mt-8 max-w-xl text-base leading-8 text-[#A8B7C7]">
              {t('hero.description')}
            </p>

            <p className="mt-8 max-w-xl font-heading text-sm font-semibold uppercase leading-7 tracking-[0.12em] sm:text-base">
              {t('hero.tagline')}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#projects" className="btn btn-primary">
                {t('hero.projectsButton')} ↗
              </a>

              <a href="#contact" className="btn btn-outline">
                {t('hero.contactButton')}
              </a>
            </div>
          </div>

          {/* PROFILE PHOTO */}
          <div className="relative mx-auto flex w-full max-w-[440px] items-center justify-center">
            <div
              aria-hidden="true"
              className="absolute h-[330px] w-[330px] rounded-full bg-[#20C5C8]/10 blur-[100px]"
            />

            <div className="w-full max-w-[380px]">
              <div className="relative overflow-hidden rounded-2xl border-2 border-[#20C5C8]/50 bg-[#111F30] shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
                <img
                  src="/images/ivod-mwamba.jpg"
                  alt="Portrait d’Ivod Mwamba"
                  className="aspect-[4/5] w-full object-cover object-center"
                />
              </div>

              <div className="mt-5 text-center">
                <h2 className="font-heading text-xl font-bold text-white">
                  Ingénieur logiciel junior
                </h2>

                <p className="mt-2 font-mono text-xs leading-6 tracking-wide text-[#20C5C8]">
                  Développeur front-end · Designer UI/UX inclusif
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="scroll-mt-24 border-t border-white/10 bg-[#111F30]"
      >
        <div className="container grid gap-10 py-20 md:grid-cols-[0.8fr_1.2fr] md:py-28">
          <div>
            <p className="section-label">
              {t('about.label')}
            </p>

            <h2 className="section-title">
              {t('about.title')}
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <p className="max-w-2xl text-base leading-8 text-[#A8B7C7]">
              {t('about.description')}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              {(
                isFrench
                  ? ['Technologie', 'Ingénierie', 'Inclusion', 'Innovation']
                  : ['Technology', 'Engineering', 'Inclusion', 'Innovation']
              ).map((item) => (
                <span
                  key={item}
                  className="rounded border border-white/10 px-4 py-2 font-mono text-xs text-[#A8B7C7]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section
        id="expertise"
        className="scroll-mt-24 border-t border-white/10"
      >
        <div className="container py-20 md:py-28">
          <p className="section-label">
            {t('expertise.label')}
          </p>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="section-title !mb-0">
              {t('expertise.title')}
            </h2>

            <span className="font-mono text-xs tracking-widest text-[#A8B7C7]">
              {isFrench
                ? '03 / DOMAINES D’EXPERTISE'
                : '03 / AREAS OF FOCUS'}
            </span>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {expertise.map((item) => (
              <article key={item.number} className="card group">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-sm text-[#20C5C8]">
                    {item.number}
                  </span>

                  <span className="font-mono text-3xl text-[#20C5C8] transition-transform duration-300 group-hover:scale-110">
                    {item.symbol}
                  </span>
                </div>

                <h3 className="mt-12 font-heading text-xl font-semibold">
                  {t(`expertise.${item.key}.title`)}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#A8B7C7]">
                  {t(`expertise.${item.key}.description`)}
                </p>

                <div className="mt-8 h-px w-10 bg-[#20C5C8] transition-all duration-300 group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="scroll-mt-24 border-t border-white/10 bg-[#111F30]"
      >
        <div className="container py-20 md:py-28">
          <p className="section-label">
            {t('projects.label')}
          </p>

          <h2 className="section-title">
            {t('projects.title')}
          </h2>

          <article className="relative mt-12 overflow-hidden rounded-xl border border-[#20C5C8]/25 bg-[#081827]">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative z-10 p-7 sm:p-10 lg:p-14">
                <p className="font-mono text-xs tracking-[0.2em] text-[#20C5C8]">
                  {t('projects.featured')}
                </p>

                <h3 className="mt-8 font-heading text-3xl font-bold sm:text-4xl">
                  {t('projects.transcripto.title')}
                </h3>

                <p className="mt-6 max-w-xl text-sm leading-8 text-[#A8B7C7] sm:text-base">
                  {t('projects.transcripto.description')}
                </p>

                <div className="mt-9 inline-flex items-center gap-3 border border-[#20C5C8]/30 px-4 py-3">
                  <span className="h-2 w-2 rounded-full bg-[#20C5C8]" />

                  <span className="text-xs font-medium text-[#A8B7C7]">
                    {t('projects.transcripto.status')}
                  </span>
                </div>
              </div>

              <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden border-t border-white/10 bg-[#111F30] p-8 lg:border-l lg:border-t-0">
                <div
                  aria-hidden="true"
                  className="absolute h-64 w-64 rounded-full border border-[#20C5C8]/20"
                />

                <div
                  aria-hidden="true"
                  className="absolute h-48 w-48 rounded-full border border-[#20C5C8]/30"
                />

                <div className="relative text-center">
                  <div className="font-heading text-6xl font-bold tracking-tight">
                    T<span className="text-accent">.</span>
                  </div>

                  <p className="mt-4 font-mono text-xs uppercase tracking-[0.3em] text-[#A8B7C7]">
                    TRANSCRIPTO
                  </p>

                  <p className="mt-2 font-mono text-[10px] tracking-widest text-[#20C5C8]">
                    BY ITC
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="scroll-mt-24 border-t border-white/10 bg-[#111F30]"
      >
        <div className="container py-20 md:py-28">
          <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            {/* CONTACT INTRODUCTION */}
            <div>
              <p className="section-label">
                {t('contact.label')}
              </p>

              <h2 className="mt-5 max-w-3xl font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                {t('contact.title')}
                <span className="text-[#20C5C8]">.</span>
              </h2>

              <p className="mt-8 max-w-xl text-base leading-8 text-[#A8B7C7]">
                {t('contact.description')}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="https://github.com/ivodmwamba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border border-[#20C5C8] bg-[#20C5C8] px-6 py-4 font-heading text-sm font-semibold text-[#081827] transition-all duration-300 hover:bg-transparent hover:text-[#20C5C8]"
                >
                  {isFrench ? 'Découvrir mon GitHub' : 'Explore my GitHub'}
                  <span aria-hidden="true">↗</span>
                </a>

                <a
                  href="#home"
                  className="inline-flex items-center gap-2 border border-white/15 px-6 py-4 font-heading text-sm font-semibold text-[#A8B7C7] transition-colors hover:border-[#20C5C8] hover:text-[#20C5C8]"
                >
                  {isFrench ? 'Retour à l’accueil' : 'Back to home'}
                </a>
              </div>
            </div>

            {/* CONTACT INFORMATION */}
            <div className="flex flex-col justify-center">
              <div className="border-y border-white/10">
                <div className="py-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#20C5C8]">
                    01 / PROFESSION
                  </p>

                  <p className="mt-3 font-heading text-lg font-semibold text-white">
                    {isFrench
                      ? 'Développement logiciel'
                      : 'Software development'}
                  </p>
                </div>

                <div className="border-t border-white/10 py-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#20C5C8]">
                    02 / {isFrench ? 'LOCALISATION' : 'LOCATION'}
                  </p>

                  <p className="mt-3 font-heading text-lg font-semibold text-white">
                    Kinshasa, RDC
                  </p>
                </div>

                <div className="border-t border-white/10 py-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#20C5C8]">
                    03 / {isFrench ? 'COLLABORATION' : 'COLLABORATION'}
                  </p>

                  <p className="mt-3 font-heading text-lg font-semibold text-white">
                    {isFrench
                      ? 'Ouvert aux collaborations'
                      : 'Open to collaborations'}
                  </p>
                </div>
              </div>

              {/* SOCIAL LINKS */}
              <div className="mt-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A8B7C7]">
                  {isFrench
                    ? 'RETROUVEZ-MOI EN LIGNE'
                    : 'FIND ME ONLINE'}
                </p>

                <div className="mt-5">
                  <a
                    href="https://github.com/ivodmwamba"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub - Ivod Mwamba"
                    className="group inline-flex items-center gap-3 border border-white/10 px-5 py-4 transition-all duration-300 hover:border-[#20C5C8] hover:bg-[#081827]"
                  >
                    <span className="font-heading text-sm font-semibold text-white transition-colors group-hover:text-[#20C5C8]">
                      GitHub
                    </span>

                    <span className="font-mono text-xs text-[#A8B7C7]">
                      @ivodmwamba
                    </span>

                    <span className="text-[#20C5C8]" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  )
}

export default App
