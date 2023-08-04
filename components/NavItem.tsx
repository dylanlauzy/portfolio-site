import Link from 'next/link'

const NavItem = ({route, currPath}: {route: string, currPath: string}) => {
  const isActive = route === currPath.split('/')[1];

  return (
    <Link
      href={`/${route}`}
      className={"transition-all" + (isActive ? " text-black" : " text-gray-400 hover:text-black")}
    >
        {route.charAt(0).toUpperCase() + route.slice(1)}
    </Link>
  )
}

export default NavItem