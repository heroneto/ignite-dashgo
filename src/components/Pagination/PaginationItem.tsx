import { Button } from '@chakra-ui/react'
import React from 'react'

interface PaginationItemProps {
  number: number
  isCurrent?: boolean
  onPageChange: (page: number) => void

}

const PaginationItem: React.FC<PaginationItemProps> = ({
  number,
  isCurrent = false,
  onPageChange
}) => {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        _disabled={{
          bg: 'pink.500',
          cursor: 'default',
        }}
        disabled
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
      _hover={{
        bg: 'gray.500',
      }}
      onClick={() => onPageChange(number)}
    >
      {number}
    </Button>
  )
}

export default PaginationItem
