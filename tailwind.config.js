export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Crimson Text"', 'serif'],
        
         // like Harvard
      },
      colors: {
        harvardRed: '#A51C30',
        harvardDark: '#0D0D0D',
        background: '#F9F9F9',
        primary: '#1E1E1E',
        accent: '#FF4C60',
        footer: '#121212',
        secondary: '#F0F0F0',
        
      },
      backgroundImage: {
        'hero-pattern': "url('/path/to/your/background/image.png')",
      },
    },
  },
  plugins: [],
}
