import { useTranslation } from 'react-i18next'
import type { ProjectProps } from '../types/project'

export const Project = ({
  year,
  sector,
  title,
  description,
  link,
  img
}: ProjectProps) => {
  const { t } = useTranslation()

  return (
    <div className='group'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start'>
        <div className='order-2 md:order-1'>
          <div className='mb-6'>
            <span className='text-neutral-500 text-sm'>
              {year} — {sector}
            </span>
            <h3 className='text-2xl md:text-3xl mt-1 font-light dark:text-white'>
              {title}
            </h3>
          </div>
          <p className='text-neutral-700 mb-8 leading-relaxed dark:text-neutral-300'>
            {description}
          </p>
          <a
            className='inline-flex items-center text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-current after:origin-right after:scale-x-0 hover:after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300 dark:text-neutral-50'
            href={link}
            rel='noopener noreferrer'
            target='_blank'
          >
            {t('projects.view')}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='ml-1 h-4 w-4'
            >
              <path d='M7 7h10v10' />
              <path d='M7 17 17 7' />
            </svg>
          </a>
        </div>
        <div className='relative overflow-hidden order-1 md:order-2'>
          <div className='aspect-[4/3] w-full relative'>
            <img
              alt='Rediseño de Marca para Artesanía Local'
              className='object-cover transition-transform duration-500 group-hover:scale-105'
              src={img}
              loading='lazy'
            />
          </div>
          <div className='absolute inset-0 border border-neutral-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
        </div>
      </div>
    </div>
  )
}
