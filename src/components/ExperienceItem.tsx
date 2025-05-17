import { t } from 'i18next'
import { Badge } from './Badge'
import type { ExperienceProps } from '../types/experience'

export const ExperienceItem = ({
  date,
  title,
  position,
  badges,
  description,
  achievements
}: ExperienceProps) => {
  return (
    <div className='group mb-8'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
        <div className='lg:col-span-4'>
          <div className='sticky top-8'>
            <span className='text-neutral-500 block mb-1'>{date}</span>
            <h3 className='text-2xl font-light mb-2 dark:text-white'>
              {title}
            </h3>
            <p className='text-lg text-neutral-700 dark:text-neutral-300'>
              {position}
            </p>
            <div className='mt-8 flex flex-wrap gap-2'>
              {badges.map((badge, index) => (
                <Badge key={index} {...badge} />
              ))}
            </div>
          </div>
        </div>

        <div className='lg:col-span-8'>
          <div className='relative pl-0 lg:pl-8 before:hidden lg:before:block before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-neutral-400 dark:before:bg-neutral-200'>
            <p className='text-neutral-700 mb-8 leading-relaxed dark:text-neutral-300'>
              {description}
            </p>
            <div className='space-y-4 mb-8'>
              <h4 className='text-lg font-medium dark:text-white'>
                {t('experience.achievements')}
              </h4>
              <ul className='space-y-3'>
                {achievements.map((achievement, index) => (
                  <li className='flex items-start' key={index}>
                    <span className='inline-block h-1.5 w-1.5 rounded-full bg-neutral-400 mt-2 mr-3 flex-shrink-0' />
                    <span className='text-neutral-700 dark:text-neutral-300'>
                      {achievement}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
