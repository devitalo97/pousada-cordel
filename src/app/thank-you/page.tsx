import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'
import Link from 'next/link'
import {
  AirbnbIcon,
  BookingIcon,
  InstagramIcon,
} from '@/components/SocialIcons'

export const metadata: Metadata = {
  title: 'Mensagem',
  description: 'Obrigado pela sua mensagem.',
}

export default function ThankYou() {
  return (
    <SimpleLayout
      title="Obrigado pela sua menasgem."
      intro="Entraremos em contato o mais rápido possivel para te retornar. Fique avontade para conferir nossas redes sociais."
    >
      <div className="mt-6 flex gap-6">
        <SocialLink
          href="https://www.instagram.com/pousadacordeldeitaunas?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA=="
          aria-label="Follow on Instagram"
          icon={InstagramIcon}
        />
        <SocialLink
          href="https://www.booking.com/Pulse-x8mH6V"
          aria-label="Check on Booking"
          icon={BookingIcon}
        />
        <SocialLink
          href="https://www.airbnb.com"
          aria-label="Check on Airbnb"
          icon={AirbnbIcon}
        />
      </div>
    </SimpleLayout>
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
