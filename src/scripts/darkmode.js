const theme = localStorage.getItem('theme')
if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
  window.localStorage.setItem('theme', 'dark')
} else {
  document.documentElement.classList.remove('dark')
  window.localStorage.setItem('theme', 'light')
}
