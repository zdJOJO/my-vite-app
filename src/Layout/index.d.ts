/* 导航栏路由 */
export namespace LayoutSpace {
  interface INavMenu {
    id: number
    pid: number
    name: string
    url: string | null
    subMenus: INavMenu[]
    icon: string | null
    methods: () => void
    code: string
  }

  interface IState {
    label: string
    color: string
  }
}
