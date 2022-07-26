import React from 'react'
import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

interface ProfileProps {
  showProfiledata?: boolean
}

const Profile: React.FC<ProfileProps> = ({ showProfiledata = true }) => {
  return (
    <Flex align="center">
      {showProfiledata && (
        <Box mr="4" textAlign="right">
          <Text>Heron Eto</Text>
          <Text color="gray.300" fontSize="small">
            hhqe@hotmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Heron Eto"
        src="https://github.com/heroneto.png"
      />
    </Flex>
  )
}

export default Profile
