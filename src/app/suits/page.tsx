'use client'
import Image, { StaticImageData, type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import {
  AirbnbIcon,
  BookingIcon,
  InstagramIcon,
} from '@/components/SocialIcons'
import logoAirbnb from '@/images/logos/airbnb.svg'
import logoFacebook from '@/images/logos/facebook.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoStarbucks from '@/images/logos/starbucks.svg'
import image6 from '@/images/photos/image-6.jpg'
import image7 from '@/images/photos/image-7.webp'
import image8 from '@/images/photos/image-8.jpg'
import image9 from '@/images/photos/image-9.jpg'
import image10 from '@/images/photos/image-10.jpg'
import image11 from '@/images/photos/image-11.jpg'
import image12 from '@/images/photos/image-12.jpg'
import image13 from '@/images/photos/image-13.jpg'
import image14 from '@/images/photos/image-14.webp'
import image15 from '@/images/photos/image-15.webp'
import { CheckIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { Disclosure } from '@headlessui/react'

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Photos({ images }: { images: StaticImageData[] }) {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {images.map((image, imageIndex) => (
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

export default function Home() {
  return (
    <>
      <Container className="mt-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Quarto Duplo
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Dispondo de jardim e Wi-Fi gratuito em todas as áreas, a Pousada
            Cordel de Itaúnas está localizada em Itaúnas. O hotel dispõe de
            quartos família. Os quartos do hotel possuem varanda. Na Pousada
            Cordel de Itaúnas, todos os quartos estão equipados com
            ar-condicionado e banheiro privativo. A propriedade serve café da
            manhã continental diariamente. O aeroporto mais próximo é o
            Aeroporto Teixeira De Freitas, a 170 km da Pousada Cordel de
            Itaúnas.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://www.instagram.com/pousadacordeldeitaunas?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA=="
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://www.booking.com/hotel/br/pousada-cordel-de-itaunas.pt-br.html?aid=1263239&label=PShare-Pulse-x8mH6V%401684200375&sid=1d74949a0df697056207e39cf23bf05b&dist=0&keep_landing=1&sb_price_type=total&type=total&#room_913737301"
              aria-label="Check on Booking"
              icon={BookingIcon}
            />
            <SocialLink
              href="https://www.booking.com/hotel/br/pousada-cordel-de-itaunas.pt-br.html?aid=1263239&label=PShare-Pulse-x8mH6V%401684200375&sid=1d74949a0df697056207e39cf23bf05b&dist=0&keep_landing=1&sb_price_type=total&type=total&#room_913737301"
              aria-label="Check on Booking"
              icon={AirbnbIcon}
            />
          </div>

          <div className="mx-auto mt-8 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-8 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-4 sm:p-6 lg:flex-auto">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full flex-1 items-center justify-between">
                      <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                        Comodidades
                      </h3>
                      <ChevronRightIcon
                        className={clsx(
                          'h-6 w-6',
                          open ? 'rotate-90 transform' : '',
                        )}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-gray-500">
                      <div className="mt-10 flex items-center gap-x-4">
                        <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                          Banheiro Privativo
                        </h4>
                        <div className="h-px flex-auto bg-gray-100" />
                      </div>
                      <ul
                        role="list"
                        className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                      >
                        {['Chuveiro', 'Vaso sanitário', 'Papel higiênico'].map(
                          (feature) => (
                            <li key={feature} className="flex gap-x-3">
                              <CheckIcon
                                className="h-6 w-5 flex-none text-indigo-600"
                                aria-hidden="true"
                              />
                              {feature}
                            </li>
                          ),
                        )}
                      </ul>
                      <div className="mt-10 flex items-center gap-x-4">
                        <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                          Vista
                        </h4>
                        <div className="h-px flex-auto bg-gray-100" />
                      </div>
                      <ul
                        role="list"
                        className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                      >
                        {['Varanda'].map((feature) => (
                          <li key={feature} className="flex gap-x-3">
                            <CheckIcon
                              className="h-6 w-5 flex-none text-indigo-600"
                              aria-hidden="true"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-10 flex items-center gap-x-4">
                        <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                          Quarto
                        </h4>
                        <div className="h-px flex-auto bg-gray-100" />
                      </div>
                      <ul
                        role="list"
                        className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                      >
                        {[
                          'TV',
                          'Roupa de cama',
                          'Frigobar',
                          'TV de tela plana',
                          'Toalhas',
                          'Tomada perto da cama',
                          'Ar-condicionado',
                          'Andares superiores acessíveis somente por escada',
                        ].map((feature) => (
                          <li key={feature} className="flex gap-x-3">
                            <CheckIcon
                              className="h-6 w-5 flex-none text-indigo-600"
                              aria-hidden="true"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
      </Container>
      <Photos images={[image6, image7, image8, image9, image10]} />
      <Container className="mt-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Quarto Triplo
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Dispondo de jardim e Wi-Fi gratuito em todas as áreas, a Pousada
            Cordel de Itaúnas está localizada em Itaúnas. O hotel dispõe de
            quartos família. Os quartos do hotel possuem varanda. Na Pousada
            Cordel de Itaúnas, todos os quartos estão equipados com
            ar-condicionado e banheiro privativo. A propriedade serve café da
            manhã continental diariamente. O aeroporto mais próximo é o
            Aeroporto Teixeira De Freitas, a 170 km da Pousada Cordel de
            Itaúnas.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://www.instagram.com/pousadacordeldeitaunas?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA=="
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://www.booking.com/hotel/br/pousada-cordel-de-itaunas.pt-br.html?aid=1263239&label=PShare-Pulse-x8mH6V%401684200375&sid=1d74949a0df697056207e39cf23bf05b&dist=0&keep_landing=1&sb_price_type=total&type=total&#room_913737301"
              aria-label="Check on Booking"
              icon={BookingIcon}
            />
            <SocialLink
              href="https://www.booking.com/hotel/br/pousada-cordel-de-itaunas.pt-br.html?aid=1263239&label=PShare-Pulse-x8mH6V%401684200375&sid=1d74949a0df697056207e39cf23bf05b&dist=0&keep_landing=1&sb_price_type=total&type=total&#room_913737301"
              aria-label="Check on Booking"
              icon={AirbnbIcon}
            />
          </div>
          <div className="mx-auto mt-8 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-8 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-4 sm:p-6 lg:flex-auto">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full flex-1 items-center justify-between">
                      <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                        Comodidades
                      </h3>
                      <ChevronRightIcon
                        className={clsx(
                          'h-6 w-6',
                          open ? 'rotate-90 transform' : '',
                        )}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-gray-500">
                      <div className="mt-10 flex items-center gap-x-4">
                        <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                          Banheiro Privativo
                        </h4>
                        <div className="h-px flex-auto bg-gray-100" />
                      </div>
                      <ul
                        role="list"
                        className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                      >
                        {['Chuveiro', 'Vaso sanitário', 'Papel higiênico'].map(
                          (feature) => (
                            <li key={feature} className="flex gap-x-3">
                              <CheckIcon
                                className="h-6 w-5 flex-none text-indigo-600"
                                aria-hidden="true"
                              />
                              {feature}
                            </li>
                          ),
                        )}
                      </ul>
                      <div className="mt-10 flex items-center gap-x-4">
                        <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                          Vista
                        </h4>
                        <div className="h-px flex-auto bg-gray-100" />
                      </div>
                      <ul
                        role="list"
                        className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                      >
                        {['Varanda'].map((feature) => (
                          <li key={feature} className="flex gap-x-3">
                            <CheckIcon
                              className="h-6 w-5 flex-none text-indigo-600"
                              aria-hidden="true"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-10 flex items-center gap-x-4">
                        <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                          Quarto
                        </h4>
                        <div className="h-px flex-auto bg-gray-100" />
                      </div>
                      <ul
                        role="list"
                        className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                      >
                        {[
                          'TV',
                          'Roupa de cama',
                          'Frigobar',
                          'TV de tela plana',
                          'Toalhas',
                          'Tomada perto da cama',
                          'Ar-condicionado',
                          'Andares superiores acessíveis somente por escada',
                        ].map((feature) => (
                          <li key={feature} className="flex gap-x-3">
                            <CheckIcon
                              className="h-6 w-5 flex-none text-indigo-600"
                              aria-hidden="true"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
      </Container>
      <Photos images={[image11, image12, image13, image14, image15]} />
    </>
  )
}
