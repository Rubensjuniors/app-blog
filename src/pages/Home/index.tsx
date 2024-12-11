import { Flex, Text, Avatar, Heading } from '@radix-ui/themes'

export default function Home() {
  return (
    <>
      <Flex direction="column" gap="3" width="100%">
        <Avatar
          src="https://avatars.githubusercontent.com/u/104171589?v=4"
          radius="full"
          size="5"
          fallback="A"
        />
        <Heading size="8">Software Engenieer</Heading>
        <Text size="4">
          Bem vindo ao meu blog! Eu sou Rubens junio, apaixonado por tecnologia,
          sempre buscando aprender algo novo todos os dias.
        </Text>
      </Flex>
    </>
  )
}
