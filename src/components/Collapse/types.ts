import type { Ref, InjectionKey } from 'vue'
export type nameType = string | number

export interface CollapseItemprops {
  name: nameType;
  title?: string;
  disabled?: boolean;
}

export interface CollapseContext {
  activeNames: Ref<nameType[]>;
  handleItemClick: (name: nameType) => void;
}

export const collapseContextKey: InjectionKey<CollapseContext> = Symbol('collapseContextKey')