// tailwind.config.js | tailwind.config.ts

import { Config } from "tailwindcss"

const config: Config = {
  "presets": [
    // Ajoute la couleur brand
    require('@arthur.eudeline/starbucks-tp-kit/tailwind/preset')
  ],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
}

export default config;