import { useTranslations } from 'next-intl'

import { Button } from '@/shared/components/Atoms/Button'
import { Heading } from '@/shared/components/Atoms/Heading'
import { Text } from '@/shared/components/Atoms/Text'

export default function Home() {
  const t = useTranslations('common')
  return (
    <div className="p-8 space-y-2">
      <Button>{t('button')}</Button>

      {/* Heading Component Variations */}
      <section className="space-y-1">
        <Heading level="h1" color="primary">
          Heading Component - Todas as Variações
        </Heading>

        {/* Heading Levels */}
        <div className="space-y-1">
          <Heading level="h1" color="primary">
            H1 - Título Principal
          </Heading>
          <Heading level="h2" color="primary">
            H2 - Subtítulo
          </Heading>
          <Heading level="h3" color="primary">
            H3 - Seção
          </Heading>
          <Heading level="h4" color="primary">
            H4 - Subseção
          </Heading>
          <Heading level="h5" color="primary">
            H5 - Item
          </Heading>
          <Heading level="h6" color="primary">
            H6 - Subitem
          </Heading>
        </div>

        {/* Heading Weights */}
        <div className="space-y-1">
          <Heading level="h2" color="primary">
            Pesos (Weights)
          </Heading>
          <Heading level="h3" weight="light" color="primary">
            Light - Peso Leve
          </Heading>
          <Heading level="h3" weight="normal" color="primary">
            Normal - Peso Normal
          </Heading>
          <Heading level="h3" weight="medium" color="primary">
            Medium - Peso Médio
          </Heading>
          <Heading level="h3" weight="semibold" color="primary">
            Semibold - Semi Negrito
          </Heading>
          <Heading level="h3" weight="bold" color="primary">
            Bold - Negrito
          </Heading>
          <Heading level="h3" weight="extrabold" color="primary">
            Extrabold - Extra Negrito
          </Heading>
        </div>

        {/* Heading Colors */}
        <div className="space-y-1">
          <Heading level="h2" color="primary">
            Cores (Colors)
          </Heading>
          <Heading level="h3" color="primary">
            Default - Cor Padrão
          </Heading>
          <Heading level="h3" color="primary">
            Muted - Cor Suave
          </Heading>
          <Heading level="h3" color="primary">
            Primary - Cor Primária
          </Heading>
          <Heading level="h3" color="primary">
            Secondary - Cor Secundária
          </Heading>
          <Heading level="h3" color="primary">
            Destructive - Cor de Erro
          </Heading>
          <Heading level="h3" color="primary">
            Accent - Cor de Destaque
          </Heading>
        </div>

        {/* Heading Alignment */}
        <div className="space-y-1">
          <Heading level="h2" color="primary">
            Alinhamento (Alignment)
          </Heading>
          <Heading level="h3" align="left" color="primary">
            Left - Alinhado à Esquerda
          </Heading>
          <Heading level="h3" align="center" color="primary">
            Center - Centralizado
          </Heading>
          <Heading level="h3" align="right" color="primary">
            Right - Alinhado à Direita
          </Heading>
        </div>
      </section>

      {/* Text Component Variations */}
      <section className="space-y-1">
        <Heading level="h1" color="primary">
          Text Component - Todas as Variações
        </Heading>

        {/* Text Sizes */}
        <div className="space-y-1">
          <Heading level="h2" color="primary">
            Tamanhos (Sizes)
          </Heading>
          <Text size="xs" color="primary">
            XS - Texto Extra Pequeno
          </Text>
          <Text size="sm" color="primary">
            SM - Texto Pequeno
          </Text>
          <Text size="base" color="primary">
            Base - Texto Base
          </Text>
          <Text size="lg" color="primary">
            LG - Texto Grande
          </Text>
          <Text size="xl" color="primary">
            XL - Texto Extra Grande
          </Text>
        </div>

        {/* Text Weights */}
        <div className="space-y-1">
          <Heading level="h2" color="primary">
            Pesos (Weights)
          </Heading>
          <Text weight="light" color="primary">
            Light - Peso Leve
          </Text>
          <Text weight="normal" color="primary">
            Normal - Peso Normal
          </Text>
          <Text weight="medium" color="primary">
            Medium - Peso Médio
          </Text>
          <Text weight="semibold" color="primary">
            Semibold - Semi Negrito
          </Text>
          <Text weight="bold" color="primary">
            Bold - Negrito
          </Text>
        </div>

        {/* Text Colors */}
        <div className="space-y-1">
          <Heading level="h2" color="primary">
            Cores (Colors)
          </Heading>
          <Text color="primary">Default - Cor Padrão</Text>
          <Text color="primary">Muted - Cor Suave</Text>
          <Text color="primary">Primary - Cor Primária</Text>
          <Text color="primary">Secondary - Cor Secundária</Text>
          <Text color="primary">Destructive - Cor de Erro</Text>
          <Text color="primary">Accent - Cor de Destaque</Text>
        </div>

        {/* Text Alignment */}
        <div className="space-y-1">
          <Heading level="h2" color="primary">
            Alinhamento (Alignment)
          </Heading>
          <Text align="left" color="primary">
            Left - Alinhado à Esquerda
          </Text>
          <Text align="center" color="primary">
            Center - Centralizado
          </Text>
          <Text align="right" color="primary">
            Right - Alinhado à Direita
          </Text>
          <Text align="justify" color="primary">
            Justify - Justificado. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris.
          </Text>
        </div>

        {/* Text Elements */}
        <div className="space-y-1">
          <Heading level="h2" color="primary">
            Elementos (Elements)
          </Heading>
          <Text as="p" color="primary">
            Parágrafo (p) - Este é um parágrafo
          </Text>
          <Text as="span" color="primary">
            Span - Este é um span inline
          </Text>
          <Text as="div" color="primary">
            Div - Este é um div em bloco
          </Text>
        </div>

        {/* Combined Examples */}
        <div className="space-y-1">
          <Heading level="h2" color="primary">
            Exemplos Combinados
          </Heading>
          <Text size="lg" weight="bold" color="primary">
            Texto Grande, Negrito e Primário
          </Text>
          <Text size="sm" color="primary" align="center">
            Texto Pequeno, Suave e Centralizado
          </Text>
          <Text as="span" size="base" weight="semibold" color="primary">
            Span com peso semi-negrito e cor de destaque
          </Text>
        </div>
      </section>
    </div>
  )
}
