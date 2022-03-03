import { Button, Flex, Stack } from "@chakra-ui/react";
import { Input } from '../components/Form/Input'

export default function Home() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      justify="center"
      align="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing={4}>
          <Input label="E-Mail" type="email" name="email" />
          <Input label="Senha" type="password" name="password" />
        </Stack>
        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
