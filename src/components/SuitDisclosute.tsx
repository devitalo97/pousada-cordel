'use client'
import clsx from 'clsx'
import { CheckIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { Disclosure } from '@headlessui/react'

export function SuitDisclosure() {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full flex-1 items-center justify-between">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Comodidades
            </h3>
            <ChevronRightIcon
              className={clsx('h-6 w-6', open ? 'rotate-90 transform' : '')}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-500">
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-cordel">
                Banheiro Privativo
              </h4>
              <div className="h-px flex-auto bg-gray-100 dark:bg-zinc-800" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400 sm:grid-cols-2 sm:gap-6"
            >
              {['Chuveiro', 'Vaso sanitário', 'Papel higiênico'].map(
                (feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-cordel"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ),
              )}
            </ul>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-cordel">
                Vista
              </h4>
              <div className="h-px flex-auto bg-gray-100 dark:bg-zinc-800" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400 sm:grid-cols-2 sm:gap-6"
            >
              {['Varanda'].map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-cordel"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-cordel">
                Quarto
              </h4>
              <div className="h-px flex-auto bg-gray-100 dark:bg-zinc-800" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400 sm:grid-cols-2 sm:gap-6"
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
                    className="h-6 w-5 flex-none text-cordel"
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
  )
}
