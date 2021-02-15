// tailwind.config.js

module.exports = {
  purge: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.html',
  ],

  darkMode: false,

  variants: {
	extend: {
		borderColor: ['active'],
		backgroundColor: ['active'],
	}
  },
  
  plugins: [
    require('@tailwindcss/typography')
  ],

  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      '16': '16px',
    },
    extend: {
      colors: {
        blue: {
          450: '#0000FF'
        },
      }
    },
  }
}
