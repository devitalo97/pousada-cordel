import Image, { StaticImageData, type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import { BookingIcon } from '@/components/SocialIcons'
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

interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume: Array<Role> = [
    {
      company: 'Planetaria',
      title: 'CEO',
      logo: logoPlanetaria,
      start: '2019',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Airbnb',
      title: 'Product Designer',
      logo: logoAirbnb,
      start: '2014',
      end: '2019',
    },
    {
      company: 'Facebook',
      title: 'iOS Software Engineer',
      logo: logoFacebook,
      start: '2011',
      end: '2014',
    },
    {
      company: 'Starbucks',
      title: 'Shift Supervisor',
      logo: logoStarbucks,
      start: '2008',
      end: '2011',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      {/* <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button> */}
    </div>
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
      'A Pousada cordel é muito bonito e recebe os hóspede muito bem.',
    source:
      'https://artfact-bucket.s3.us-east-2.amazonaws.com/public/WhatsApp+Image+2023-12-25+at+20.15.54.jpeg',
  },
  {
    date: '2023-12-15',
    title: 'Ítalo de souza',
    description:
      'A Pousada cordel é muito bonito e recebe os hóspede muito bem.',
    source:
      'https://artfact-bucket.s3.us-east-2.amazonaws.com/public/WhatsApp+Image+2023-12-25+at+20.14.23.jpeg',
  },
]
export default async function Home() {
  return (
    <>
      <Container className="mt-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Quarto Duplo
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            No banheiro privativo, você encontrará um chuveiro, vaso sanitário e
            papel higiênico. A comodidade e praticidade desses elementos
            proporcionam uma estadia confortável e conveniente. A vista do local
            é complementada por uma varanda, oferecendo um espaço adicional para
            relaxar e apreciar o ambiente ao redor. Além disso, a presença de
            uma vista panorâmica contribui para uma experiência única durante
            sua estadia. Os quartos são equipados com diversas comodidades, como
            TV, roupa de cama, frigobar e TV de tela plana. A acessibilidade é
            garantida, com andares superiores disponíveis apenas por escada.
            Toalhas, tomada perto da cama e ar-condicionado são algumas das
            facilidades adicionais, proporcionando um ambiente aconchegante e
            adaptado às suas necessidades.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://www.booking.com/hotel/br/pousada-cordel-de-itaunas.pt-br.html?aid=1263239&label=PShare-Pulse-x8mH6V%401684200375&sid=1d74949a0df697056207e39cf23bf05b&dist=0&keep_landing=1&sb_price_type=total&type=total&#room_913737301"
              aria-label="Follow on Booking"
              icon={BookingIcon}
            />
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
            No banheiro privativo, você encontrará um chuveiro, vaso sanitário e
            papel higiênico. A comodidade e praticidade desses elementos
            proporcionam uma estadia confortável e conveniente. A vista do local
            é complementada por uma varanda, oferecendo um espaço adicional para
            relaxar e apreciar o ambiente ao redor. Além disso, a presença de
            uma vista panorâmica contribui para uma experiência única durante
            sua estadia. Os quartos são equipados com diversas comodidades, como
            TV, roupa de cama, frigobar e TV de tela plana. A acessibilidade é
            garantida, com andares superiores disponíveis apenas por escada.
            Toalhas, tomada perto da cama e ar-condicionado são algumas das
            facilidades adicionais, proporcionando um ambiente aconchegante e
            adaptado às suas necessidades.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://www.booking.com/hotel/br/pousada-cordel-de-itaunas.pt-br.html?aid=1263239&label=PShare-Pulse-x8mH6V%401684200375&sid=1d74949a0df697056207e39cf23bf05b&dist=0&keep_landing=1&sb_price_type=total&type=total&#room_913737302"
              aria-label="Follow on Booking"
              icon={BookingIcon}
            />
          </div>
        </div>
      </Container>
      <Photos images={[image11, image12, image13, image14, image15]} />
    </>
  )
}
