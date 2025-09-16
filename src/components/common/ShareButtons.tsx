'use client'
import React, { useState } from 'react'
import { shareOnFacebook, shareOnLinkedIn, shareOnTwitter, shareOnWhatsApp } from './utils'
import { ShareIcon, TwitterIcon } from '@/assets/svgIcons'
import { cn } from '@/lib/utils'
import { Link2, Linkedin, LinkedinIcon, LucideLinkedin, X } from 'lucide-react'
import { buttonVariants } from '../ui/button'

export default function ShareButtons() {
  return (
    <div>
      <div className="tw-pt-9 tw-flex tw-gap-3 ">
        {/* <!-- Twitter --> */}
        <button
          className={cn(buttonVariants({ variant: 'dark' }), 'tw-w-10 tw-h-10 !tw-px-4')}
          onClick={() => shareOnTwitter(window.location.href)}
        >
          {/* <i className="fab fa-twitter"></i> */}
          <TwitterIcon />
        </button>

        {/* <!-- Instagram --> */}
        <button
          className={cn(buttonVariants({ variant: 'dark' }), 'tw-w-10 tw-h-10 !tw-px-4')}
          onClick={() => shareOnFacebook(window.location.href)}
        >
          <i className="fab fa-facebook tw-text-base"></i>
        </button>
        {/* <!-- Linkedin --> */}
        <button
          className={cn(buttonVariants({ variant: 'dark' }), 'tw-w-10 tw-h-10 !tw-px-4')}
          onClick={() => shareOnLinkedIn(window.location.href)}
        >
          <i className="fab fa-linkedin-in tw-text-lg"></i>
          {/* <Linkedin className="!tw-w-6 !tw-h-6" /> */}
        </button>
        <button
          className={cn(buttonVariants({ variant: 'dark' }), 'tw-w-10 tw-h-10 !tw-px-4')}
          onClick={() => shareOnWhatsApp(window.location.href)}
        >
          <i className="fab fa-whatsapp tw-text-lg"></i>
        </button>
        <button
          className={cn(buttonVariants({ variant: 'dark' }), 'tw-w-10 tw-h-10 !tw-px-0 !tw-py-0')}
          onClick={() => navigator.clipboard.writeText(window.location.href)}
        >
          {/* <i className="fa fa-link"></i> */}
          <Link2 size={24} className="!tw-w-6 !tw-h-6" />
        </button>
      </div>
    </div>
  )
}

// src/components/FAB.jsx

export const FABComponent = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleFAB = () => {
    setIsOpen(!isOpen)
  }
  const copyLink = () => navigator?.clipboard?.writeText(window.location.href)
  return (
    <div className="tw-fixed tw-bottom-14 tw-right-14 tw-flex tw-flex-col tw-items-end tw-z-50 tw-gap-4">
      <ul
        className={cn(
          'tw-list-none tw-p-0 tw-m-0 tw-flex tw-flex-col tw-gap-3',
          'tw-transition-all tw-duration-300 tw-origin-bottom-right',
          isOpen ? 'tw-opacity-100 tw-visible' : 'tw-opacity-0 tw-invisible'
        )}
      >
        {[
          {
            icon: <TwitterIcon />,
            action: shareOnTwitter,
            bg: 'tw-bg-black',
          },
          {
            icon: <i className="fab fa-linkedin-in"></i>,
            action: shareOnLinkedIn,
            bg: 'tw-bg-[#0077b5]',
          },
          {
            icon: <i className="fab fa-whatsapp"></i>,
            action: shareOnWhatsApp,
            bg: 'tw-bg-[#25d366]',
          },
          {
            icon: <i className="fab fa-facebook"></i>,
            action: shareOnFacebook,
            bg: 'tw-bg-[#4267b2]',
          },
          { icon: <i className="fa fa-link"></i>, action: copyLink, bg: 'tw-bg-purple-500' },
        ].map((item, index) => (
          <li
            key={index}
            className={cn(
              'btn-floating tw-text-white tw-w-12 tw-h-12 tw-flex tw-items-center tw-justify-center',
              'tw-rounded-full tw-shadow-lg tw-cursor-pointer tw-transition-all tw-duration-300',
              'tw-transform tw-translate-y-0 hover:tw-scale-110',
              item.bg,
              !isOpen && 'tw-translate-y-10 tw-opacity-0'
            )}
            onClick={() => item.action(window.location.href)}
            style={{
              transitionDelay: isOpen ? `${index * 75}ms` : '0ms',
            }}
          >
            {item.icon}
          </li>
        ))}
      </ul>

      <button
        onClick={toggleFAB}
        className={cn(
          'tw-border-0 tw-bg-[#f9d311] tw-text-white tw-w-12 tw-h-12 tw-flex tw-items-center',
          'tw-justify-center tw-rounded-full tw-shadow-lg tw-transition-all tw-duration-300',
          'tw-relative tw-transform hover:tw-scale-110',
          isOpen ? 'tw-rotate-45' : 'tw-rotate-0'
        )}
      >
        <ShareIcon className={cn('tw-w-6 tw-h-6 tw-transition-all', isOpen && 'tw-opacity-0')} />
        <div className="tw-absolute tw-w-6 tw-h-6 tw-flex tw-items-center tw-justify-center">
          <span
            className={cn(
              'tw-absolute tw-w-4 tw-h-0.5 tw-bg-white tw-transition-all',
              isOpen ? 'tw-rotate-90 tw-opacity-100' : 'tw-rotate-0 tw-opacity-0'
            )}
          />
          <span
            className={cn(
              'tw-absolute tw-w-4 tw-h-0.5 tw-bg-white tw-transition-all',
              isOpen ? 'tw-rotate-0 tw-opacity-100' : 'tw-rotate-90 tw-opacity-0'
            )}
          />
        </div>
      </button>
    </div>
  )
}
