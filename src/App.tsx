
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

          {/* SIGNATURE VISUAL */}
          <div className="relative mx-auto flex w-full max-w-[440px] items-center justify-center">
            <div
              aria-hidden="true"
              className="absolute h-[330px] w-[330px] rounded-full bg-[#20C5C8]/10 blur-[100px]"
            />

            <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-white/10 bg-[#111F30] p-6 sm:p-9">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(168,183,199,.25) 1px, transparent 1px), linear-gradient(90deg, rgba(168,183,199,.25) 1px, transparent 1px)',
                  backgroundSize: '32px 32px',
                }}
              />

              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs tracking-widest text-[#A8B7C7]">
                    IM / 001
                  </span>

                  <span className="h-2 w-2 rounded-full bg-[#20C5C8] shadow-[0_0_15px_#20C5C8]" />
                </div>

                <div className="text-center">
                  <div className="font-heading text-[clamp(6rem,17vw,10rem)] font-bold leading-none tracking-[-0.12em]">
                    IM<span className="text-accent">.</span>
                  </div>

                  <div className="mx-auto mt-5 h-px w-16 bg-[#20C5C8]" />

                  <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.3em] text-[#A8B7C7]">
                    IVOD MWAMBA
                  </p>
                </div>

                <div className="flex items-end justify-between gap-4">
                  <span className="max-w-[170px] font-mono text-[10px] uppercase leading-5 tracking-widest text-[#A8B7C7]">
                    {isFrench ? (
                      <>
                        Technologie
                        <br />
                        Ingénierie
                        <br />
                        Inclusion
                      </>
                    ) : (
                      <>
                        Technology
                        <br />
                        Engineering
                        <br />
                        Inclusion
                      </>
                    )}
                  </span>

                  <span className="font-mono text-xs text-[#20C5C8]">
                    2026
                  </span>
                </div>
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
        className="scroll-mt-24 border-t border-white/10"
      >
        <div className="container py-20 md:py-32">
          <p className="section-label">
            {t('contact.label')}
          </p>

          <div className="max-w-4xl">
            <h2 className="font-heading text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
              {t('contact.title')}
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-[#A8B7C7]">
              {t('contact.description')}
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  )
}

export default App
