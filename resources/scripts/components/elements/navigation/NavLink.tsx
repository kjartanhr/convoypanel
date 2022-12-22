import {
  NavLink as RouterLink,
  NavLinkProps,
} from 'react-router-dom'

interface Props extends Omit<NavLinkProps, 'className'> {

}

const NavLink = ({ children, ...props }: Props) => {
  const defaultClasses =
    'text-sm transition-colors leading-4 py-4 px-3 sm:hover:text-foreground relative grid place-items-center nav-link'

  return (
    <RouterLink
      {...props}
      end={true}
      className={({ isActive }) =>
        isActive
          ? `${defaultClasses} nav-link-active text-foreground`
          : `${defaultClasses} text-accent-500`
      }
    >
      {children}
    </RouterLink>
  )
}

export default NavLink
