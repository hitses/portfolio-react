import React from 'react'
import Nodejs from '../assets/icons/Nodejs'
import Angular from '../assets/icons/Angular'
import MongoDB from '../assets/icons/Mongodb'
import Git from '../assets/icons/Git'
import Cloudflare from '../assets/icons/Cloudflare'
import MySQL from '../assets/icons/Mysql'
import Aws from '../assets/icons/Aws'
import Python from '../assets/icons/Python'
import type { BadgeIconProps } from '../types/badgeIcon'

const iconComponents: { [key: string]: React.FC } = {
  Nodejs: Nodejs,
  Angular: Angular,
  Mongodb: MongoDB,
  Git: Git,
  Cloudflare: Cloudflare,
  Mysql: MySQL,
  Aws: Aws,
  Python: Python
}

export const BadgeIcon: React.FC<BadgeIconProps> = ({ iconName }) => {
  const IconComponent = iconComponents[iconName]

  return IconComponent ? (
    <span className='me-1'>
      <IconComponent />
    </span>
  ) : null
}
