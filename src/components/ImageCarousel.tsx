'use client'
import clsx from 'clsx'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

export function ImageCarousel({ medias }: { medias: any[] }) {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  const scrollContainer = useRef<any>(null)

  useEffect(() => {
    if (scrollContainer.current) {
      const element = scrollContainer.current
      element.scrollTo({
        left: (element.scrollWidth - element.clientWidth) / 2,
        behavior: 'smooth',
      })
    }
  }, [])

  return (
    <div className="mt-16 flex sm:mt-20">
      <div
        ref={scrollContainer}
        className="scrollbar-hide -my-4 mx-auto flex gap-5 overflow-x-scroll py-4 sm:justify-center sm:gap-8"
      >
        {medias.map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
