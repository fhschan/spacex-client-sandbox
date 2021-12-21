import React from 'react'
import { Link, LinkProps } from 'react-router-dom'

interface SideNavItemProps extends LinkProps {
  label: string
  icon?: any
}

function SideNavItem(props: SideNavItemProps) {
  const { label, icon, to, ...otherNavProps } = props

  return (
    <li>
      {icon}
      <Link to={to} {...otherNavProps}>
        {label}
      </Link>
    </li>
  )
}

export default SideNavItem
