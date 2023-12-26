import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  AirbnbIcon,
  BookingIcon,
  InstagramIcon,
} from '@/components/SocialIcons'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.webp'
import image5 from '@/images/photos/image-5.webp'
import { type ArticleWithSlug } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { ImageCarousel } from '@/components/ImageCarousel'

function PhoneIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="h-6 w-6"
      {...props}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
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

function Comment({
  article,
  source,
}: {
  article: ArticleWithSlug
  source: string
}) {
  return (
    <Card as="article">
      <div className="flex items-center gap-2">
        <Avatar
          className="z-50 block h-fit w-fit origin-left"
          source={source}
        />
        <Card.Title href={`#`}>{article.title}</Card.Title>
      </div>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
    </Card>
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

function Newsletter() {
  return (
    <form
      action="https://wa.me/27999697185"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <PhoneIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Entre em contato</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Mande um mensagem para nós a qualquer momento.
      </p>
      <div className="mt-6 flex">
        <input
          type="text"
          placeholder="Insira sua mensagem"
          aria-label="message to wtp"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Enviar
        </Button>
      </div>
    </form>
  )
}

function Avatar({
  large = false,
  className,
  source,
  ...props
}: Omit<React.ComponentPropsWithoutRef<typeof Link>, 'href'> & {
  large?: boolean
  source?: string
}) {
  return (
    <Link
      href="/"
      aria-label="Home"
      className={clsx(className, 'pointer-events-auto')}
      {...props}
    >
      <img
        src={source}
        alt=""
        sizes={large ? '4rem' : '2.25rem'}
        className={clsx(
          'rounded-full bg-zinc-100 object-cover dark:bg-zinc-800',
          large ? 'h-16 w-16' : 'h-9 w-9',
        )}
        // priority
      />
    </Link>
  )
}
const comments = [
  {
    date: '2023-12-15',
    title: 'Bruna Almeida',
    description:
      'A Pousada cordel é muito bonita e bem localizada. Conta com um atendimento solicito.',
    source:
      'https://artfact-bucket.s3.us-east-2.amazonaws.com/public/WhatsApp+Image+2023-12-25+at+20.15.54.jpeg',
  },
  {
    date: '2023-12-15',
    title: 'Ítalo de souza',
    description:
      'A Pousada cordel é muito bonita e bem localizada. Conta com um atendimento solicito.',
    source:
      'https://artfact-bucket.s3.us-east-2.amazonaws.com/public/WhatsApp+Image+2023-12-25+at+20.14.23.jpeg',
  },
]
export default async function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Pousada Cordel Itaúnas.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            A Pousada Cordel, em Itaúnas, oferece uma experiência encantadora,
            com aconchego e decoração inspirada na cultura local. Localizada em
            meio às belezas naturais da região, convida os hóspedes a explorarem
            a vila e suas praias.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://www.instagram.com/pousadacordeldeitaunas?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA=="
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://www.airbnb.com"
              aria-label="Check on Airbnb"
              icon={AirbnbIcon}
            />
            <SocialLink
              href="https://www.booking.com/Pulse-x8mH6V"
              aria-label="Check on Booking"
              icon={BookingIcon}
            />
          </div>
        </div>
      </Container>
      <ImageCarousel medias={[image1, image2, image3, image4, image5]} />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {comments.map((article: any) => (
              <Comment
                key={article.title}
                article={article}
                source={article.source}
              />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            {/* <Resume /> */}
          </div>
        </div>
      </Container>
    </>
  )
}
