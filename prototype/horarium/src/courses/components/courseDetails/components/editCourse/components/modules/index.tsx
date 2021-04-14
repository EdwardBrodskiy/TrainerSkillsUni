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
  modules: string | undefined
  isEditing: boolean
  setNewModule: any
}

export const Modules = ({ modules, isEditing, setNewModule }: Props) => {
  const [tempModule, setTempModule] = useState(modules)

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
        onSubmit={() => setNewModule(tempModule)}
        onChange={(value) => setTempModule(value)}
        defaultValue={modules} 
        isPreviewFocusable={false}
      >
        <EditablePreview />
        <EditableInput />
        <EditableControls />
      </Editable>
    )
  }
  return <Text>{modules}</Text>
}
