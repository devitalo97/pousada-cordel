import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({
  title,
  description,
  event,
  href,
}: {
  title: string
  description: string
  event: string
  // cta: string
  href: string
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      {/* <Card.Cta>{cta}</Card.Cta> */}
    </Card>
  )
}

export const metadata: Metadata = {
  title: 'Eventos',
  description: 'Fique por dentro dos eventos que irão acontecer em Itaúnas.',
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="Eventos do buraco do tatu"
      intro="Fique por dentro do eventos que irão acontecer em Itaúnas nesse final de ano. O buraco do tatu apresenta uma line-up incrível e com muita musica boa. Do reggae ao forró."
    >
      <div className="space-y-20">
        <SpeakingSection title="Discotecagem">
          <Appearance
            href="#"
            title="Forró pé de serra no disco."
            description="DJ Flávio Bruno, DJ Marcio, DJ Vhinny, DJ Nalla, DJ Ivan, DJ Dani Castor, Baile dos Ratos, DJ Chu Selecta."
            event="Dezembro, 2023"
          />
        </SpeakingSection>
        <SpeakingSection title="Shows">
          <Appearance
            href="#"
            title="Os melhores shows da vila."
            description="Mestrinho, Mariana Aydar, Os Cangaceiros, D2 in Trio, Quininho de Valente, Coisa de Zé,
            Trio Potiguá, Marimelo, Trio Alvorada, Thais Nogueira, Mestre Marrom."
            event="Dezembro, 2023"
          />
        </SpeakingSection>
        <SpeakingSection title="Oficinas de dança">
          <Appearance
            href="#"
            title="Aprenda a dançar o forró pé de serra."
            description="Forró do Proibido (Aline e Ricardo), Pé Descalço (Babi e Raso), Ícaro e Giovanna, Pia e PC, Brenda Antunes, Kaleb Maximuns."
            event="Dezembro, 2023"
          />
        </SpeakingSection>
      </div>
    </SimpleLayout>
  )
}
