import styles from './SideNav.css'
import SideNavItem from './SideNavItem'

function SideNav() {
  console.log('@@@ sytles', styles)
  return (
    <nav>
      <ul>
        <SideNavItem to="/" label="Home" />
        <SideNavItem to="/launches" label="Launches" />
        <SideNavItem to="/history" label="History" />
      </ul>
    </nav>
  )
}

export default SideNav
