import { header } from './Header.module.css'
import socialLogo from '../../assets/social-logo.svg'

export function Header() {
  return (
    <header className={header}>
      <img src={socialLogo} alt="Social Feed Logo" />
      <strong>Social Feed</strong>
    </header>
  )
}
