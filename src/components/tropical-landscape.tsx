export function TropicalLandscape() {
  return (
    <svg
      viewBox="0 0 1440 420"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      className="select-none"
      role="presentation"
    >
      <defs>
        <linearGradient id="glow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#eaf6cd" stopOpacity="0" />
          <stop offset="100%" stopColor="#a8d65a" stopOpacity="0.35" />
        </linearGradient>
        <linearGradient id="sunFace" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c4e58a" />
          <stop offset="100%" stopColor="#97c54b" />
        </linearGradient>
      </defs>

      {/* sun */}
      <circle cx="1130" cy="130" r="120" fill="#eaf6cd" opacity="0.55" />
      <circle cx="1130" cy="130" r="92" fill="url(#sunFace)" />

      {/* distant mogotes */}
      <path
        d="M0 300 C180 210 320 236 470 288 C620 340 760 286 920 262 C1080 238 1220 288 1440 210 L1440 420 L0 420 Z"
        fill="#cfdbb0"
        opacity="0.9"
      />

      {/* mid hills */}
      <path
        d="M0 340 C150 280 300 318 470 292 C640 266 780 316 960 296 C1140 276 1290 316 1440 268 L1440 420 L0 420 Z"
        fill="#2f6b47"
      />

      {/* near mogotes */}
      <path
        d="M0 380 C120 334 240 356 390 336 C540 316 660 356 830 336 C1000 316 1160 356 1330 330 C1390 322 1420 330 1440 338 L1440 420 L0 420 Z"
        fill="#12562d"
      />

      {/* foreground mogote mass */}
      <path
        d="M0 420 L0 402 C80 372 170 382 280 376 C430 368 560 392 720 388 C880 384 1040 402 1200 380 C1300 368 1390 382 1440 390 L1440 420 Z"
        fill="#0f3a20"
      />

      {/* striated limestone suggestion */}
      <g stroke="#2a5c3d" strokeWidth="2" strokeLinecap="round" opacity="0.7">
        <path d="M200 388 C260 384 300 388 340 386" fill="none" />
        <path d="M360 402 C400 400 440 402 480 400" fill="none" />
        <path d="M620 396 C660 394 700 396 740 394" fill="none" />
        <path d="M960 402 C1000 400 1030 402 1060 400" fill="none" />
      </g>

      {/* palms */}
      <g fill="#0a2517">
        <path d="M160 420 c-2 -34 4 -58 10 -84 c3 -13 8 -13 12 -2 c6 24 6 54 4 86 Z" />
        <path
          d="M120 366 c24 -14 44 -18 58 -16 c4 -10 14 -16 26 -18 c-12 8 -18 18 -18 30 c14 2 28 8 36 16 c-16 -2 -30 -2 -44 2 c2 8 8 16 8 20 c-10 -4 -20 -8 -28 -14 c-12 4 -26 6 -38 6 c2 -6 2 -14 0 -26 Z"
        />
        <path
          d="M196 366 c-22 -14 -42 -16 -56 -12 c-6 -10 -16 -16 -30 -18 c14 8 20 20 24 32 c-14 2 -28 10 -38 20 c16 -4 32 -6 46 -6 c-2 8 -6 16 -8 20 c10 -6 22 -10 32 -14 c12 6 26 8 36 8 c0 -8 -2 -16 -6 -30 Z"
        />

        <path d="M300 420 c-1 -32 3 -54 9 -78 c3 -12 8 -12 11 -2 c6 22 6 50 5 80 Z" />
        <path
          d="M262 370 c22 -12 40 -16 56 -14 c4 -10 12 -14 24 -16 c-12 8 -18 18 -18 28 c14 0 26 8 34 14 c-16 -2 -30 -2 -42 2 c2 8 8 14 10 18 c-10 -4 -20 -6 -28 -12 c-12 4 -24 4 -36 2 c2 -8 4 -14 0 -22 Z"
        />

        <path d="M500 420 c0 -30 2 -52 7 -72 c2 -11 7 -11 10 -1 c5 18 5 44 4 73 Z" />
        <path
          d="M466 372 c20 -12 38 -14 54 -12 c4 -8 12 -12 22 -14 c-10 6 -16 16 -16 26 c12 0 24 6 32 12 c-14 -2 -28 -2 -40 2 c2 6 6 12 8 16 c-10 -4 -18 -6 -26 -10 c-12 2 -24 2 -34 0 c2 -8 2 -12 -2 -20 Z"
        />

        <path d="M780 420 c0 -28 4 -48 8 -68 c3 -11 7 -12 10 -1 c5 15 5 40 4 69 Z" />
        <path
          d="M748 374 c18 -10 34 -14 50 -12 c4 -8 12 -12 20 -12 c-10 6 -14 14 -14 24 c12 0 22 6 30 12 c-14 -2 -26 -2 -38 2 c2 6 6 12 8 14 c-8 -4 -16 -6 -24 -8 c-10 2 -22 2 -32 0 c2 -8 2 -12 0 -20 Z"
        />
      </g>

      {/* casa with warm light */}
      <g>
        <rect
          x="620"
          y="398"
          width="26"
          height="20"
          fill="#f4efe4"
          rx="1.5"
        />
        <path d="M620 398 L633 388 L646 398 Z" fill="#0a2517" />
        <rect x="638" y="405" width="5" height="13" fill="#e8ddcb" />
        <rect x="625" y="405" width="6" height="6" fill="#c58a2a" />
      </g>

      <path d="M0 420 L1440 420" stroke="#0a2517" strokeWidth="3" />
    </svg>
  );
}