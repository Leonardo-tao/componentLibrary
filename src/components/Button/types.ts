export type ButtonType = 'primary' | 'danger' | 'warning' | 'success' | 'info'
export type ButtonSize = 'small' | 'medium' | 'large'
export type NativeType = 'submit' | 'reset' | 'button'

export interface ButtonProps {
  type?: ButtonType
  size?: ButtonSize
  plain?: boolean
  round?: boolean
  circle?: boolean
  loading?: boolean
  disabled?: boolean
  nativeType?: NativeType
  autofocus?: boolean
}
