import React, { useState } from 'react'
import {
  Text,
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
  setNewDescription: any
}

export const Description = ({ description, isEditing, setNewDescription }: Props) => {
  const [tempDescription, setTempDescription] = useState(description)

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
      <Editable
        onSubmit={() => setNewDescription(tempDescription)}
        onChange={(value) => setTempDescription(value)}
        defaultValue={description}
        isPreviewFocusable={false}
      >
        {/* Find a way to resize Editable Input */}
        <EditablePreview />
        <EditableInput />
        <EditableControls />
      </Editable>
    )
  }
  return <Text>{description}</Text>
}
