import { HStack, Icon } from '@chakra-ui/react'
import React from 'react'
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri'

const NotificationsNav: React.FC = () => {
  return (
    <HStack
      spacing="8"
      mx="8"
      pr="8"
      py="8"
      color="gray.300"
      borderRightWidth={1}
      borderColor="gray.700"
    >
      <Icon as={RiNotificationLine} fontSize="20" />
      <Icon as={RiUserAddLine} fontSize="20" />
    </HStack>
  )
}

export default NotificationsNav
