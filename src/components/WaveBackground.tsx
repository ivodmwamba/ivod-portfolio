
function WaveBackground() {
  return (
    <svg
      className="wave-background"
      viewBox="0 0 1440 500"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="wave-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#20C5C8" />
          <stop offset="50%" stopColor="#536DFE" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>

        <linearGradient id="wave-purple" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#20C5C8" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>
      </defs>

      <path
        d="M0 250 C200 100 350 400 600 230 S1000 100 1200 250 S1350 350 1440 180 V500 H0 Z"
        fill="url(#wave-cyan)"
        opacity="0.12"
      />

      <path
        d="M0 330 C250 180 400 450 650 300 S1000 180 1200 320 S1350 400 1440 270"
        fill="none"
        stroke="url(#wave-purple)"
        strokeWidth="3"
        opacity="0.7"
      />

      <path
        d="M0 390 C220 280 400 480 650 370 S1050 260 1440 350"
        fill="none"
        stroke="#20C5C8"
        strokeWidth="1.5"
        opacity="0.45"
      />
    </svg>
  )
}

export default WaveBackground
