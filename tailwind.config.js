/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            beige: {
              50: "#e1d8cc",
              100: "#c3b19a",
              900: "#61584d",
            },
            blue: {
              50: "#939aaa",
              100: "#283556",
              900: "#141a2b",
            },
            pink: {
              50: "#e398b0",
              100: "#c83262",
              900: "#641931",
            },
            green: {
              50: "#7c8c03",
              100: "#324001",
              900: "#1a2601",
            },
            black: {
              50: "#1a1a1a",
              100: "#141414",
              900: "#000000",
            },
          },
      extend: {
        spacing: {
          'hero': '20.38rem',
          'hero-web': '960px',
          'hero-height': '560px',
        },
        backgroundImage: {
          // Navbar buttons
          'nav-menu': "url('https://milpa-cardgame.s3.us-east-2.amazonaws.com/navbar.svg#menu-button-usage')",
          'nav-menu-active': "url('https://milpa-cardgame.s3.us-east-2.amazonaws.com/navbar.svg#menu-button-pressed-usage')",
          'nav-leaderboard': "url('https://milpa-cardgame.s3.us-east-2.amazonaws.com/navbar.svg#leaderboard-button-usage')",
          'nav-leaderboard-active': "url('https://milpa-cardgame.s3.us-east-2.amazonaws.com/navbar.svg#leaderboard-button-pressed-usage')",
          'nav-logo': "url('https://milpa-cardgame.s3.us-east-2.amazonaws.com/navbar.svg#logo-button-usage')",
          'nav-logo-active': "url('https://milpa-cardgame.s3.us-east-2.amazonaws.com/navbar.svg#logo-button-pressed-usage')",

          // Action buttons
          'btn-blue': "url('/buttons.svg#blue-button-usage')",
          'btn-blue-active': "url('/buttons.svg#blue-button-pressed-usage')",
          'btn-pink': "url('/buttons.svg#pink-button-usage')",
          'btn-pink-active': "url('/buttons.svg#pink-button-pressed-usage')",

          // Hero section
          'hero-nopal': "url('/welcome.svg#nopal-herobox-usage')",
          'hero-milpa-desktop': "url('/welcome.svg#milpa-web-herobox-usage')",
          'hero-milpa-mobile': "url('/welcome.svg#milpa-mobile-herobox-usage')",
          'hero-mountains': "url('/welcome.svg#mountains-herobox-usage')",

          // Decorative elements
          'corner-1': "url('/art.svg#symbol-corner-1-usage')",
          'corner-4': "url('/art.svg#symbol-corner-4-usage')",
          'brush-1': "url('/art.svg#brush-pink-1-usage')",
          'brush-2': "url('/art.svg#brush-pink-2-usage')",
        },
        screens: {
          'desktop': '960px',
        },
        boxShadow: {
          'frame': '4px 4px 0px 0px rgba(30,58,138,0.3)',
        },
        transformOrigin: {
          'left': '0% 0%',
          'top': '100% 0%',
        },
        fontFamily: {
          'bubblegum': ['var(--font-bubblegum)', 'cursive'],
        },
      },
    },
    plugins: [],
  };
