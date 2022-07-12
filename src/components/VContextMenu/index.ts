import ContextMenu from './ContextMenu.vue';

export declare interface Menus {
  key: string
  text: string
  handle: Function
}

export declare interface ContextMenuStyle {
  left: string
  top: string
}
interface VContextMenuOptions {
  menus: Menus[]
  style: ContextMenuStyle | {}
}

export default ContextMenu;
