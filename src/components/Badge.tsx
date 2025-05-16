import React from 'react'
import Nodejs from '../assets/icons/Nodejs' // Asegúrate de la ruta correcta
import Angular from '../assets/icons/Angular'
import MongoDB from '../assets/icons/Mongodb'
import Git from '../assets/icons/Git'
import Cloudflare from '../assets/icons/Cloudflare'
import MySQL from '../assets/icons/Mysql'
import Aws from '../assets/icons/Aws'
import Python from '../assets/icons/Python'

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
      {/* NodeJS */}
      {icon === 'Nodejs' ? (
        <span className='me-1'>
          <Nodejs />
        </span>
      ) : null}
      {/* NodeJS */}

      {/* Angular */}
      {icon === 'Angular' ? (
        <span className='me-1'>
          <Angular />
        </span>
      ) : null}
      {/* Angular */}

      {/* MongoDB */}
      {icon === 'Mongodb' ? (
        <span className='me-1'>
          <MongoDB />
        </span>
      ) : null}
      {/* MongoDB */}

      {/* Git */}
      {icon === 'Git' ? (
        <span className='me-1'>
          <Git />
        </span>
      ) : null}
      {/* Git */}

      {/* Cloudflare */}
      {icon === 'Cloudflare' ? (
        <span className='me-1'>
          <Cloudflare />
        </span>
      ) : null}
      {/* Cloudflare */}

      {/* MySQL */}
      {icon === 'Mysql' ? (
        <span className='me-1'>
          <MySQL />
        </span>
      ) : null}
      {/* MySQL */}

      {/* AWS */}
      {icon === 'Aws' ? (
        <span className='me-1'>
          <Aws />
        </span>
      ) : null}
      {/* AWS */}

      {/* Python */}
      {icon === 'Python' ? (
        <span className='me-1'>
          <Python />
        </span>
      ) : null}
      {/* Python */}

      {name}
    </span>
  )
}
