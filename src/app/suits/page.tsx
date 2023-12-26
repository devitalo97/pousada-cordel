import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import {
  AirbnbIcon,
  BookingIcon,
  InstagramIcon,
} from '@/components/SocialIcons'
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
import { Metadata } from 'next'
import { SuitDisclosure } from '@/components/SuitDisclosute'
import { ImageCarousel } from '@/components/ImageCarousel'

export const metadata: Metadata = {
  title: 'Suítes',
  description: 'Confira em detalhes as opções para sua acomodação.',
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

export default async function Home() {
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
              href="https://www.airbnb.com"
              aria-label="Check on Booking"
              icon={AirbnbIcon}
            />
            <SocialLink
              href="https://www.booking.com/hotel/br/pousada-cordel-de-itaunas.pt-br.html?aid=1263239&label=PShare-Pulse-x8mH6V%401684200375&sid=1d74949a0df697056207e39cf23bf05b&dist=0&keep_landing=1&sb_price_type=total&type=total&#room_913737301"
              aria-label="Check on Booking"
              icon={BookingIcon}
            />
          </div>

          <div className="mx-auto mt-8 max-w-2xl rounded-3xl ring-1 ring-gray-200 dark:ring-zinc-800 sm:mt-8 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-4 sm:p-6 lg:flex-auto">
              <SuitDisclosure />
            </div>
          </div>
        </div>
      </Container>
      <ImageCarousel medias={[image6, image7, image8, image9, image10]} />
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
              href="https://www.airbnb.com"
              aria-label="Check on Booking"
              icon={AirbnbIcon}
            />
            <SocialLink
              href="https://www.booking.com/hotel/br/pousada-cordel-de-itaunas.pt-br.html?aid=1263239&label=PShare-Pulse-x8mH6V%401684200375&sid=1d74949a0df697056207e39cf23bf05b&dist=0&keep_landing=1&sb_price_type=total&type=total&#room_913737301"
              aria-label="Check on Booking"
              icon={BookingIcon}
            />
          </div>
          <div className="mx-auto mt-8 max-w-2xl rounded-3xl ring-1 ring-gray-200 dark:ring-zinc-800 sm:mt-8 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-4 sm:p-6 lg:flex-auto">
              <SuitDisclosure />
            </div>
          </div>
        </div>
      </Container>
      <ImageCarousel medias={[image11, image12, image13, image14, image15]} />
    </>
  )
}
