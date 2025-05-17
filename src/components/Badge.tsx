import type { BadgeProps } from '../types/badge'
import { BadgeIcon } from './BadgeIcon'

export const Badge: React.FC<BadgeProps> = ({
  name,
  backgroundColor,
  borderColor,
  textColor,
  icon
}) => {
  // Estilos para el badge cuando se pasa el ratón por encima
  const hoverStyle = {
    backgroundColor: borderColor
  }

  return (
    <span
      className={`inline-flex items-center text-xs font-medium me-2 px-2.5 py-0.5 rounded-full border transition duration-200 ease-in-out cursor-crosshair`}
      // Estilos para el badge
      style={{
        backgroundColor,
        color: textColor,
        borderColor
      }}
      // Eventos cuando se pasa el ratón por encima
      onMouseEnter={e => {
        Object.assign(e.currentTarget.style, hoverStyle)
      }}
      // Eventos cuando se quita el ratón de encima
      onMouseLeave={e => {
        Object.assign(e.currentTarget.style, {
          backgroundColor,
          color: textColor,
          borderColor
        })
      }}
    >
      <BadgeIcon iconName={icon} />

      {name}
    </span>
  )
}
