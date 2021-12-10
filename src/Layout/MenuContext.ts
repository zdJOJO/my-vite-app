import { createContext } from 'react'
import { LayoutSpace } from './index.d'

interface IMenuContext {
  menus: LayoutSpace.INavMenu[]
}

const MenuContext = createContext<IMenuContext>({ menus: [] })

export default MenuContext
