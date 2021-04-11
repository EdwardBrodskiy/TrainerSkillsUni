import React from 'react'
import {
  Text,
  Flex,
  ButtonGroup,
  Editable,
  EditableInput,
  EditablePreview,
  IconButton,
  useEditableControls,
} from '@chakra-ui/react'
import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons'

type Props = {
  description: string | undefined
  isEditing: boolean
}

export const Description = ({ description, isEditing }: Props) => {
  const EditableControls = () => {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls()

    return isEditing ? (
      <ButtonGroup justifyContent='center' size='sm'>
        <IconButton aria-label='Accept' icon={<CheckIcon />} {...getSubmitButtonProps()} />
        <IconButton aria-label='Close' icon={<CloseIcon />} {...getCancelButtonProps()} />
      </ButtonGroup>
    ) : (
      <IconButton
        aria-label='Edit'
        size='sm'
        ml='2'
        icon={<EditIcon />}
        {...getEditButtonProps()}
      />
    )
  }
  
  if (isEditing) {
    return (
      <Flex direction='row' mb='2'>
      <Text fontWeight='bold' mr='1'>
        Description:
      </Text>
      <Editable defaultValue={description} isPreviewFocusable={false}>
        <EditablePreview />
        <EditableInput />
        <EditableControls />
      </Editable>
    </Flex>
    )
  }
  return (
    <Flex direction='row' mb='2'>
      <Text fontWeight='bold' mr='1'>
        Description:
      </Text>
      <Text>{description}</Text>
    </Flex>
  )
}
