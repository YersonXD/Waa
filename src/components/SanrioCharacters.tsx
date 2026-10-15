import React from 'react';

// Authentic 2D Sanrio vector illustrations (NOT realistic, true to 2D cartoon proportions)
// CRITICAL REQUIREMENT: Do not print character names anywhere in labels or UI.

export const SadKitty: React.FC<{ className?: string }> = ({ className = 'w-64 h-64' }) => {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 240 240"
        className="w-full h-full drop-shadow-lg"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="kitty-soft-shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#f472b6" floodOpacity="0.2" />
          </filter>
        </defs>

        {/* Soft pastel floor shadow */}
        <ellipse cx="120" cy="226" rx="60" ry="9" fill="#fbcfe8" opacity="0.6" />

        {/* Body (Classic blue overalls / jumper dress) */}
        <g id="kitty-body">
          {/* Overalls dress */}
          <path
            d="M86 160 C86 150 98 144 120 144 C142 144 154 150 154 160 L162 216 C162 222 156 225 148 225 L92 225 C84 225 78 222 78 216 Z"
            fill="#93c5fd"
            stroke="#1e293b"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          {/* Yellow strap buttons */}
          <circle cx="100" cy="162" r="3.5" fill="#facc15" stroke="#1e293b" strokeWidth="1.5" />
          <circle cx="140" cy="162" r="3.5" fill="#facc15" stroke="#1e293b" strokeWidth="1.5" />

          {/* White feet / paws */}
          <ellipse cx="98" cy="223" rx="13" ry="7" fill="#ffffff" stroke="#1e293b" strokeWidth="3" />
          <ellipse cx="142" cy="223" rx="13" ry="7" fill="#ffffff" stroke="#1e293b" strokeWidth="3" />

          {/* Little arms holding handkerchief */}
          <ellipse cx="90" cy="184" rx="9" ry="8" fill="#ffffff" stroke="#1e293b" strokeWidth="3" />
          <ellipse cx="150" cy="184" rx="9" ry="8" fill="#ffffff" stroke="#1e293b" strokeWidth="3" />
          {/* Tissue paper folded */}
          <path
            d="M102 180 Q120 166 138 180 Q144 200 120 202 Q96 200 102 180 Z"
            fill="#ffffff"
            stroke="#cbd5e1"
            strokeWidth="2"
          />
          <path d="M112 184 L128 196" stroke="#e2e8f0" strokeWidth="1.5" />
        </g>

        {/* Head */}
        <g id="kitty-head" filter="url(#kitty-soft-shadow)">
          {/* Iconic horizontally-wide oval head with integrated triangular rounded ears */}
          <path
            d="M58 74 C48 66 38 42 46 34 C54 26 70 42 82 54 C94 50 107 48 120 48 C133 48 146 50 158 54 C170 42 186 26 194 34 C202 42 192 66 182 74 C202 90 210 112 210 128 C210 158 170 172 120 172 C70 172 30 158 30 128 C30 112 38 90 58 74 Z"
            fill="#ffffff"
            stroke="#1e293b"
            strokeWidth="4"
            strokeLinejoin="round"
          />

          {/* Whisker lines: Exactly 3 crisp horizontal parallel lines per side */}
          <g stroke="#1e293b" strokeWidth="3.2" strokeLinecap="round">
            {/* Left cheek whiskers */}
            <line x1="32" y1="114" x2="64" y2="117" />
            <line x1="28" y1="128" x2="62" y2="128" />
            <line x1="34" y1="142" x2="64" y2="138" />

            {/* Right cheek whiskers */}
            <line x1="208" y1="114" x2="176" y2="117" />
            <line x1="212" y1="128" x2="178" y2="128" />
            <line x1="206" y1="142" x2="176" y2="138" />
          </g>

          {/* Eyes: Classic vertical black ovals, spaced wide apart */}
          <g>
            <ellipse cx="88" cy="126" rx="6.5" ry="9" fill="#1e293b" />
            {/* Glistening glassy tear highlight inside eye */}
            <circle cx="86" cy="123" r="2.5" fill="#ffffff" />
            <circle cx="90" cy="129" r="1.2" fill="#ffffff" />

            <ellipse cx="152" cy="126" rx="6.5" ry="9" fill="#1e293b" />
            <circle cx="150" cy="123" r="2.5" fill="#ffffff" />
            <circle cx="154" cy="129" r="1.2" fill="#ffffff" />
          </g>

          {/* Soft pastel cheek blush */}
          <ellipse cx="78" cy="138" rx="8" ry="4.5" fill="#f472b6" opacity="0.4" />
          <ellipse cx="162" cy="138" rx="8" ry="4.5" fill="#f472b6" opacity="0.4" />

          {/* Big sad tears trickling down */}
          <g className="animate-pulse">
            <path
              d="M86 134 C82 140 78 146 78 152 C78 158 83 162 88 162 C93 162 98 158 98 152 C98 146 92 140 88 134 Z"
              fill="#60a5fa"
              opacity="0.9"
            />
            <circle cx="85" cy="152" r="2" fill="#ffffff" />
          </g>
          <g className="animate-pulse" style={{ animationDelay: '350ms' }}>
            <path
              d="M152 134 C148 140 144 146 144 152 C144 158 149 162 154 162 C159 162 164 158 164 152 C164 146 158 140 154 134 Z"
              fill="#60a5fa"
              opacity="0.9"
            />
            <circle cx="151" cy="152" r="2" fill="#ffffff" />
          </g>

          {/* Nose: Pure horizontal yellow oval centered between the eyes */}
          <ellipse cx="120" cy="132" rx="6.5" ry="4.8" fill="#facc15" stroke="#1e293b" strokeWidth="2.5" />

          {/* (Note: True Hello Kitty has NO mouth - keeping it mouthless makes her instantly authentic!) */}

          {/* Classic Red Ribbon Bow on left ear */}
          <g id="kitty-bow" transform="rotate(-6 64 52)">
            {/* Left loop */}
            <ellipse cx="48" cy="50" rx="15" ry="13" fill="#f43f5e" stroke="#1e293b" strokeWidth="3" />
            <path d="M54 48 C51 51 50 53 50 53" stroke="#9f1239" strokeWidth="2" strokeLinecap="round" />

            {/* Right loop */}
            <ellipse cx="80" cy="50" rx="15" ry="13" fill="#f43f5e" stroke="#1e293b" strokeWidth="3" />
            <path d="M74 48 C77 51 78 53 78 53" stroke="#9f1239" strokeWidth="2" strokeLinecap="round" />

            {/* Center knot */}
            <ellipse cx="64" cy="50" rx="9" ry="8.5" fill="#e11d48" stroke="#1e293b" strokeWidth="3" />
          </g>
        </g>
      </svg>
    </div>
  );
};

export const SadCinnamoroll: React.FC<{ className?: string }> = ({ className = 'w-64 h-64' }) => {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 280 230"
        className="w-full h-full drop-shadow-lg"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="cinna-soft-shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#38bdf8" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Floor shadow */}
        <ellipse cx="140" cy="214" rx="80" ry="10" fill="#bae6fd" opacity="0.6" />

        {/* Droopy Long Floppy Puppy Ears (signature look: fluffy, long, hanging down) */}
        {/* Left floppy ear */}
        <path
          d="M80 110 C45 105 10 135 12 172 C14 198 42 204 64 186 C82 170 88 138 80 110 Z"
          fill="#ffffff"
          stroke="#1e293b"
          strokeWidth="3.6"
          strokeLinejoin="round"
        />
        {/* Right floppy ear */}
        <path
          d="M200 110 C235 105 270 135 268 172 C266 198 238 204 216 186 C198 170 192 138 200 110 Z"
          fill="#ffffff"
          stroke="#1e293b"
          strokeWidth="3.6"
          strokeLinejoin="round"
        />

        {/* Chubby white body */}
        <g id="cinna-body">
          <ellipse cx="140" cy="172" rx="44" ry="36" fill="#ffffff" stroke="#1e293b" strokeWidth="3.6" />
          {/* Paws */}
          <ellipse cx="122" cy="192" rx="9" ry="8" fill="#ffffff" stroke="#1e293b" strokeWidth="3" />
          <ellipse cx="158" cy="192" rx="9" ry="8" fill="#ffffff" stroke="#1e293b" strokeWidth="3" />

          {/* Signature curly cinnamon roll swirl tail */}
          <path
            d="M96 178 C85 176 82 164 90 158 C98 152 104 160 98 168 C94 172 88 172 88 172"
            fill="none"
            stroke="#1e293b"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
        </g>

        {/* Chubby Marshmallow Head */}
        <g id="cinna-head" filter="url(#cinna-soft-shadow)">
          {/* Wide rounded chubby face */}
          <path
            d="M140 70 C85 70 68 96 68 124 C68 154 100 162 140 162 C180 162 212 154 212 124 C212 96 195 70 140 70 Z"
            fill="#ffffff"
            stroke="#1e293b"
            strokeWidth="4"
            strokeLinejoin="round"
          />

          {/* Signature large bright blue eyes */}
          <g>
            {/* Left eye */}
            <ellipse cx="106" cy="120" rx="9" ry="12" fill="#0284c7" stroke="#0369a1" strokeWidth="1.5" />
            <circle cx="103" cy="116" r="3.5" fill="#ffffff" />
            <circle cx="108" cy="124" r="1.8" fill="#ffffff" />

            {/* Right eye */}
            <ellipse cx="174" cy="120" rx="9" ry="12" fill="#0284c7" stroke="#0369a1" strokeWidth="1.5" />
            <circle cx="171" cy="116" r="3.5" fill="#ffffff" />
            <circle cx="176" cy="124" r="1.8" fill="#ffffff" />
          </g>

          {/* Flushed rosy pink cheeks */}
          <ellipse cx="94" cy="134" rx="10" ry="6" fill="#f472b6" opacity="0.45" />
          <ellipse cx="186" cy="134" rx="10" ry="6" fill="#f472b6" opacity="0.45" />

          {/* Tiny sad wobbly mouth */}
          <path
            d="M134 135 Q140 130 146 135"
            stroke="#1e293b"
            strokeWidth="2.8"
            strokeLinecap="round"
            fill="none"
          />

          {/* Dropping teardrops */}
          <g className="animate-pulse">
            <path
              d="M108 130 C104 137 100 144 100 150 C100 156 105 160 110 160 C115 160 120 156 120 150 C120 144 113 137 110 130 Z"
              fill="#38bdf8"
              opacity="0.9"
            />
            <circle cx="108" cy="151" r="2.2" fill="#ffffff" />
          </g>
          <g className="animate-pulse" style={{ animationDelay: '300ms' }}>
            <path
              d="M172 130 C168 137 164 144 164 150 C164 156 169 160 174 160 C179 160 184 156 184 150 C184 144 177 137 174 130 Z"
              fill="#38bdf8"
              opacity="0.9"
            />
            <circle cx="172" cy="151" r="2.2" fill="#ffffff" />
          </g>
        </g>
      </svg>
    </div>
  );
};

export const SadMyMelody: React.FC<{ className?: string }> = ({ className = 'w-64 h-64' }) => {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 240 240"
        className="w-full h-full drop-shadow-xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="melody-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#f472b6" floodOpacity="0.3" />
          </filter>
          <radialGradient id="blush-grad-left" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.75" />
            <stop offset="60%" stopColor="#fb7185" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#fda4af" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="blush-grad-right" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.75" />
            <stop offset="60%" stopColor="#fb7185" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#fda4af" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="hood-soft-pink" x1="0" y1="0" x2="0.3" y2="1">
            <stop offset="0%" stopColor="#fbcfe8" />
            <stop offset="35%" stopColor="#f9a8d4" />
            <stop offset="100%" stopColor="#f472b6" />
          </linearGradient>
        </defs>

        {/* Floor shadow */}
        <ellipse cx="120" cy="226" rx="56" ry="8" fill="#fbcfe8" opacity="0.6" />

        {/* Body (White shirt with pink collar, NO poncho as in reference image) */}
        <g id="melody-body">
          {/* White body / shirt */}
          <path
            d="M86 168 C86 162 100 156 120 156 C140 156 154 162 154 168 L160 216 C160 222 154 225 146 225 L94 225 C86 225 80 222 80 216 Z"
            fill="#ffffff"
            stroke="#1e293b"
            strokeWidth="3.2"
            strokeLinejoin="round"
          />

          {/* Feet */}
          <ellipse cx="102" cy="223" rx="12" ry="6.5" fill="#ffffff" stroke="#1e293b" strokeWidth="2.8" />
          <ellipse cx="138" cy="223" rx="12" ry="6.5" fill="#ffffff" stroke="#1e293b" strokeWidth="2.8" />

          {/* Two triangular pink collar flaps resting on white chest (exact style from reference image) */}
          <g id="pink-collar">
            {/* Left pink collar flap */}
            <polygon
              points="120,166 84,172 106,194"
              fill="#f9a8d4"
              stroke="#1e293b"
              strokeWidth="2.8"
              strokeLinejoin="round"
            />
            {/* Right pink collar flap */}
            <polygon
              points="120,166 156,172 134,194"
              fill="#f9a8d4"
              stroke="#1e293b"
              strokeWidth="2.8"
              strokeLinejoin="round"
            />
          </g>

          {/* Little arms resting politely at sides */}
          <path d="M82 178 C76 190 82 204 90 206" stroke="#1e293b" strokeWidth="2.8" strokeLinecap="round" fill="none" />
          <path d="M158 178 C164 190 158 204 150 206" stroke="#1e293b" strokeWidth="2.8" strokeLinecap="round" fill="none" />
        </g>

        {/* Soft Pink Hood Head (No flower, matching reference) */}
        <g id="melody-head" filter="url(#melody-glow)">
          {/* Left upright bunny ear (tilted slightly left, rounded tip) */}
          <path
            d="M80 84 C62 52 46 8 72 4 C96 0 106 44 106 80 Z"
            fill="url(#hood-soft-pink)"
            stroke="#1e293b"
            strokeWidth="3.6"
            strokeLinejoin="round"
          />

          {/* Right folded/drooping bunny ear (classic bend sideways/downward) */}
          <path
            d="M156 82 C172 48 196 26 182 16 C168 8 148 26 142 46 L138 78 Z"
            fill="url(#hood-soft-pink)"
            stroke="#1e293b"
            strokeWidth="3.6"
            strokeLinejoin="round"
          />

          {/* Main pink hood framing face */}
          <path
            d="M58 120 C58 82 86 66 120 66 C154 66 182 82 182 120 C182 154 154 168 120 168 C86 168 58 154 58 120 Z"
            fill="url(#hood-soft-pink)"
            stroke="#1e293b"
            strokeWidth="3.8"
            strokeLinejoin="round"
          />

          {/* White inner face cutout */}
          <ellipse cx="120" cy="126" rx="46" ry="34" fill="#ffffff" stroke="#1e293b" strokeWidth="3.2" />

          {/* Soft lavender-blue shadow under face contour (subtle 3D feel from reference) */}
          <path
            d="M82 142 C92 154 120 158 140 150 C154 144 162 136 162 136 C162 152 144 160 120 160 C96 160 82 150 82 142 Z"
            fill="#e0e7ff"
            opacity="0.45"
          />

          {/* Large prominent rosy airbrushed blush circles on cheeks (from reference) */}
          <circle cx="86" cy="138" r="14" fill="url(#blush-grad-left)" />
          <circle cx="154" cy="138" r="14" fill="url(#blush-grad-right)" />

          {/* Eyes with 3 delicate upward eyelashes and golden anime crying sparkles */}
          <g id="sparkly-crying-eyes">
            {/* Left Eye */}
            <g>
              {/* Eye oval */}
              <ellipse cx="98" cy="124" rx="9" ry="12" fill="#422006" />

              {/* 3 Upper Eyelashes */}
              <path d="M90 117 C85 113 82 110 80 110" stroke="#422006" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M92 114 C90 108 88 105 88 103" stroke="#422006" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M97 113 C98 108 100 104 102 103" stroke="#422006" strokeWidth="2.2" strokeLinecap="round" />

              {/* Sparkly golden-yellow 4-pointed stars inside eye */}
              <g fill="#fef08a" opacity="0.95">
                {/* Upper Star */}
                <path d="M98 116 Q98 119 95 119 Q98 119 98 122 Q98 119 101 119 Q98 119 98 116 Z" />
                {/* Lower Star */}
                <path d="M96 123 Q96 126 93 126 Q96 126 96 129 Q96 126 99 126 Q96 126 96 123 Z" />
              </g>

              {/* Huge round light-cyan tear pooling at outer eye corner */}
              <circle cx="88" cy="136" r="6.5" fill="#a5f3fc" stroke="#67e8f9" strokeWidth="1.2" className="animate-pulse" />
              <circle cx="86.5" cy="134.5" r="2" fill="#ffffff" />
            </g>

            {/* Right Eye */}
            <g>
              {/* Eye oval */}
              <ellipse cx="142" cy="124" rx="9" ry="12" fill="#422006" />

              {/* 3 Upper Eyelashes */}
              <path d="M150 117 C155 113 158 110 160 110" stroke="#422006" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M148 114 C150 108 152 105 152 103" stroke="#422006" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M143 113 C142 108 140 104 138 103" stroke="#422006" strokeWidth="2.2" strokeLinecap="round" />

              {/* Sparkly golden-yellow 4-pointed stars inside eye */}
              <g fill="#fef08a" opacity="0.95">
                {/* Upper Star */}
                <path d="M142 116 Q142 119 139 119 Q142 119 142 122 Q142 119 145 119 Q142 119 142 116 Z" />
                {/* Lower Star */}
                <path d="M144 123 Q144 126 141 126 Q144 126 144 129 Q144 126 147 126 Q144 126 144 123 Z" />
              </g>

              {/* Huge round light-cyan tear pooling at outer eye corner */}
              <circle cx="152" cy="136" r="6.5" fill="#a5f3fc" stroke="#67e8f9" strokeWidth="1.2" className="animate-pulse" />
              <circle cx="150.5" cy="134.5" r="2" fill="#ffffff" />
            </g>
          </g>

          {/* Yellow round bead nose right between the eyes */}
          <ellipse cx="120" cy="128" rx="4.5" ry="3.8" fill="#facc15" stroke="#1e293b" strokeWidth="1.8" />

          {/* Flat horizontal straight line mouth (exact meme expression `._.`) */}
          <line
            x1="110"
            y1="140"
            x2="130"
            y2="140"
            stroke="#475569"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
};

export const CryingKittyFinal: React.FC<{ className?: string }> = ({ className = 'w-72 h-72' }) => {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 280 250"
        className="w-full h-full drop-shadow-xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="crying-shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="5" stdDeviation="6" floodColor="#38bdf8" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Puddle of tears with ripples */}
        <ellipse cx="140" cy="236" rx="95" ry="12" fill="#bae6fd" opacity="0.8" />
        <ellipse cx="140" cy="236" rx="65" ry="8" fill="#7dd3fc" opacity="0.6" />
        <circle cx="65" cy="234" r="3.5" fill="#60a5fa" opacity="0.7" />
        <circle cx="215" cy="235" r="4" fill="#60a5fa" opacity="0.7" />

        {/* Anime cartoon fountain tear streams shooting outwards */}
        <g className="animate-pulse">
          {/* Left arc tear stream */}
          <path
            d="M98 122 C68 118 36 140 30 180 C24 210 48 234 72 234 C55 226 42 205 46 180 C50 150 78 134 102 126 Z"
            fill="#60a5fa"
            opacity="0.85"
          />
          <circle cx="45" cy="165" r="4.5" fill="#ffffff" opacity="0.9" />
          <circle cx="36" cy="202" r="3.5" fill="#ffffff" opacity="0.9" />

          {/* Right arc tear stream */}
          <path
            d="M182 122 C212 118 244 140 250 180 C256 210 232 234 208 234 C225 226 238 205 234 180 C230 150 202 134 178 126 Z"
            fill="#60a5fa"
            opacity="0.85"
          />
          <circle cx="235" cy="165" r="4.5" fill="#ffffff" opacity="0.9" />
          <circle cx="244" cy="202" r="3.5" fill="#ffffff" opacity="0.9" />
        </g>

        {/* Body in pastel blue/pink overalls */}
        <g id="body">
          <path
            d="M102 156 C102 148 116 142 140 142 C164 142 178 148 178 156 L186 218 C186 224 178 228 170 228 L110 228 C102 228 94 224 94 218 Z"
            fill="#93c5fd"
            stroke="#1e293b"
            strokeWidth="3.6"
            strokeLinejoin="round"
          />
          {/* Feet */}
          <ellipse cx="118" cy="226" rx="13" ry="6.5" fill="#ffffff" stroke="#1e293b" strokeWidth="3" />
          <ellipse cx="162" cy="226" rx="13" ry="6.5" fill="#ffffff" stroke="#1e293b" strokeWidth="3" />

          {/* Hands holding a gentle folded pastel letter with little seal */}
          <g transform="translate(140, 185)">
            <rect x="-24" y="-12" width="48" height="32" rx="4" fill="#ffffff" stroke="#1e293b" strokeWidth="2.5" />
            <path d="M-24 -12 L0 8 L24 -12" stroke="#cbd5e1" strokeWidth="2" fill="none" />
            {/* Little pastel seal */}
            <circle cx="0" cy="8" r="4.5" fill="#f472b6" />
            {/* Paws clutching the letter */}
            <ellipse cx="-22" cy="6" rx="7.5" ry="7" fill="#ffffff" stroke="#1e293b" strokeWidth="2.5" />
            <ellipse cx="22" cy="6" rx="7.5" ry="7" fill="#ffffff" stroke="#1e293b" strokeWidth="2.5" />
          </g>
        </g>

        {/* Head */}
        <g id="head" filter="url(#crying-shadow)">
          <path
            d="M78 74 C68 66 58 42 66 34 C74 26 90 42 102 54 C114 50 127 48 140 48 C153 48 166 50 178 54 C190 42 206 26 214 34 C222 42 212 66 202 74 C222 90 230 112 230 128 C230 158 190 172 140 172 C90 172 50 158 50 128 C50 112 58 90 78 74 Z"
            fill="#ffffff"
            stroke="#1e293b"
            strokeWidth="4"
            strokeLinejoin="round"
          />

          {/* Whiskers */}
          <g stroke="#1e293b" strokeWidth="3.2" strokeLinecap="round">
            <line x1="54" y1="114" x2="84" y2="117" />
            <line x1="50" y1="128" x2="82" y2="128" />
            <line x1="56" y1="142" x2="84" y2="138" />

            <line x1="226" y1="114" x2="196" y2="117" />
            <line x1="230" y1="128" x2="198" y2="128" />
            <line x1="224" y1="142" x2="196" y2="138" />
          </g>

          {/* Crying shut eyes: classic anime/Sanrio crying eyes (> <) */}
          <g stroke="#1e293b" strokeWidth="3.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M96 116 L106 122 L96 128" fill="none" />
            <path d="M184 116 L174 122 L184 128" fill="none" />
          </g>

          {/* Flushed crying cheeks */}
          <ellipse cx="98" cy="134" rx="11" ry="6" fill="#f43f5e" opacity="0.4" />
          <ellipse cx="182" cy="134" rx="11" ry="6" fill="#f43f5e" opacity="0.4" />

          {/* Nose: yellow oval */}
          <ellipse cx="140" cy="128" rx="6.5" ry="4.8" fill="#facc15" stroke="#1e293b" strokeWidth="2.4" />

          {/* Classic Bow on ear */}
          <g id="bow" transform="rotate(-6 84 52)">
            <ellipse cx="68" cy="50" rx="15" ry="13" fill="#f43f5e" stroke="#1e293b" strokeWidth="3" />
            <path d="M74 48 C71 51 70 53 70 53" stroke="#9f1239" strokeWidth="2" strokeLinecap="round" />

            <ellipse cx="100" cy="50" rx="15" ry="13" fill="#f43f5e" stroke="#1e293b" strokeWidth="3" />
            <path d="M94 48 C97 51 98 53 98 53" stroke="#9f1239" strokeWidth="2" strokeLinecap="round" />

            <ellipse cx="84" cy="50" rx="9" ry="8.5" fill="#e11d48" stroke="#1e293b" strokeWidth="3" />
          </g>
        </g>
      </svg>
    </div>
  );
};
