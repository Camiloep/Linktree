import { ArrowUpRight, Star } from 'lucide-react'
import { motion } from 'framer-motion'

export interface isCardProps {
  name: string
  description: string
  stargazers_count: number
  url: string
}

export const CardPulseBorder = ({
  name,
  description,
  stargazers_count,
  url
}: isCardProps) => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <motion.div variants={item} className='relative h-[110px]'>
      <div className='absolute top-0 flex w-full justify-center'>
        <div className='left-0 h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000' />
      </div>
      <div className='flex flex-col h-full items-start px-8 pb-4 justify-center rounded-md border border-solid border-slate-800 bg-black'>
        <a
          href={url}
          className='flex items-center justify-between w-full underline-transparent'
          target='_blank'
          rel='noopener'
        >
          <span className='flex gap-x-1'>
            <span className='text-md text-White-Custom'>{name}</span>
            <ArrowUpRight color='#BBBBBB' size={12} />
          </span>
          <span className='flex items-center text-sm gap-x-1 text-slate-200'>
            <Star size={14} />
            <p>{stargazers_count}</p>
          </span>
        </a>
        <span className='text-[13px] text-Text-Custom'>{description}</span>
      </div>
    </motion.div>
  )
}