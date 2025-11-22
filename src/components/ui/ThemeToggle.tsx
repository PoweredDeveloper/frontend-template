import { useState } from 'react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean>(false)

  const handleThemeChange = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  return <button onClick={handleThemeChange}>{!isDark ? 'Dark' : 'Light'}</button>
}
