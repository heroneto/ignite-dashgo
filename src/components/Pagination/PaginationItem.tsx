import { Button } from '@chakra-ui/react'
import React from 'react'

interface PaginationItemProps {
  number: number
  isCurrent?: boolean
}

const PaginationItem: React.FC<PaginationItemProps> = ({
  number,
  isCurrent = false,
}) => {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bg: 'pink.500',
          cursor: 'default',
        }}
      >
        {number}
      </Button>
    )
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="gray.700"
      disabled
      _hover={{
        bg: 'gray.500',
      }}
    >
      {number}
    </Button>
  )
}

export default PaginationItem
