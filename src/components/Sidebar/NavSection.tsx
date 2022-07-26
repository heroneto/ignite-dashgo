import { Box, Stack, Text } from '@chakra-ui/react'
import React from 'react'

interface NavSectionProps {
  title: string
  children: React.ReactNode
}

const NavSection: React.FC<NavSectionProps> = ({ title, children }) => {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">
        {title}
      </Text>
      <Stack spacing="4" mt="8" align="stretch">
        {children}
      </Stack>
    </Box>
  )
}

export default NavSection
