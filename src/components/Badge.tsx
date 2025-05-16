import React from 'react'
import Nodejs from '../assets/icons/Nodejs' // Asegúrate de la ruta correcta
import Angular from '../assets/icons/Angular'

export interface BadgeProps {
  name: string
  backgroundColor: string
  borderColor: string
  textColor: string
  icon: string
}

export const Badge: React.FC<BadgeProps> = ({
  name,
  backgroundColor,
  borderColor,
  textColor,
  icon
}) => {
  const hoverStyle = {
    backgroundColor: borderColor
  }

  return (
    <span
      className={`inline-flex items-center text-xs font-medium me-2 px-2.5 py-0.5 rounded-full border transition duration-200 ease-in-out cursor-crosshair`}
      style={{
        backgroundColor,
        color: textColor,
        borderColor
      }}
      onMouseEnter={e => {
        Object.assign(e.currentTarget.style, hoverStyle)
      }}
      onMouseLeave={e => {
        Object.assign(e.currentTarget.style, {
          backgroundColor,
          color: textColor,
          borderColor
        })
      }}
    >
      {icon === 'Nodejs' ? (
        <span className='me-1'>
          <Nodejs />
        </span>
      ) : null}

      {icon === 'Angular' ? (
        <span className='me-1'>
          <Angular />
        </span>
      ) : null}

      {name}
    </span>
  )
}
