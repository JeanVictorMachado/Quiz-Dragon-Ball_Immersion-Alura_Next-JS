import React, { useState } from 'react'
import { useRouter } from 'next/router'

import * as S from './styles'

import InputWidget from 'components/InputWidget'
import HeaderWidget from 'components/HeaderWidget'
import ButtonWidget from 'components/ButtonWidget'
import ButtonLink from 'components/ButtonLink'

import { WidgetProps } from 'types/types'

const Widget = ({ header, input, trueOrFalse, buttonLink }: WidgetProps) => {
  const [stateForm, setStateForm] = useState('')
  const router = useRouter()

  const handleSubmit = (eventReload: React.FormEvent<HTMLFormElement>) => {
    eventReload.preventDefault()

    router.push(`/quiz?name=${stateForm}`)
  }

  return (
    <S.Container>
      <HeaderWidget header={header} />
      <S.Content>
        {header ? (
          <p>
            Teste os seus conhecimentos sobre o universo Dragon Ball e
            divirta-se criando o seu AluraQuiz!
          </p>
        ) : (
          <>
            <h2>Quizes da galera</h2>
            <p>
              Dá uma olhada nesses quises incriveis que o pessoal da Imersão
              AluraNextJS fez:
            </p>
          </>
        )}
        <S.Form
          onSubmit={(event) => {
            handleSubmit(event)
          }}
        >
          <InputWidget display={input} onChange={setStateForm} />
          <ButtonWidget
            value={
              stateForm === ''
                ? 'JOGAR'
                : `Vamos lá ${stateForm}!`.toUpperCase()
            }
            trueOrFalse={trueOrFalse}
            disabled={stateForm}
          />
        </S.Form>
        <ButtonLink
          buttonLink={buttonLink}
          value="pedrinhodasilva/aluraquizjavascript"
        />
        <ButtonLink
          buttonLink={buttonLink}
          value="joaozinhofilisbino/aluraquizpokemon"
        />
        <ButtonLink
          buttonLink={buttonLink}
          value="luquinhasroberto/aluraquiznextjs"
        />
      </S.Content>
    </S.Container>
  )
}

export default Widget
