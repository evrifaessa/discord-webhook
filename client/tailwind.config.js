module.exports = {
    darkMode: 'class',
    content: [
      './pages/**/*.{js,jsx}',
      './components/**/*.{js,jsx}',
    ],
    theme: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
  }