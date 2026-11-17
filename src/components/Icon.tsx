
import { icons, type IconName } from './iconMap'

type IconProps = {
  name: IconName
  size?: number
  className?: string
}

export function Icon({
  name,
  size = 20,
  className,
}: IconProps) {
  const Component = icons[name]

  return (
    <Component
      size={size}
      strokeWidth={1.8}
      className={className}
      aria-hidden="true"
    />
  )
}
