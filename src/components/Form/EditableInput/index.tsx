import { useState } from "react"
import { EditableInputUI, EditableText, EditableTextIconWrapper } from "./EditableInput.css"
import { Input } from "../Input"
import { OctagonCheck, PenCircle } from "../../icons"
import { IconButton } from "../IconButton"

type InputProps = React.InputHTMLAttributes<HTMLInputElement>
type OwnProps = {
  onSave: (value: number) => void
  value: number | string
}
type Props = InputProps & OwnProps

export const EditableInput = ({
  onSave,
  value,
  ...rest
}: Props) => {
  const [isEditing, setIsEditing] = useState(false)
  const [inputValue, setInputValue] = useState(value)

  const keyDownHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      save()
    }
  }

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.valueAsNumber)
  }

  const save = () => {
    onSave(inputValue as number)
    setIsEditing(false)
  }

  const startEditing = () => {
    setIsEditing(true)
  }

  return (
    <EditableInputUI>
      {
        isEditing
          ? (<>
            <Input
              value={inputValue}
              onChange={onInputChange}
              onBlur={onInputChange}
              onKeyDown={keyDownHandler}
              {...rest}
            />
            <IconButton onClick={save}>
              <OctagonCheck />
            </IconButton>
          </>)
          : (
            <EditableTextIconWrapper>
              <EditableText>
                {inputValue}
              </EditableText>
              <IconButton onClick={startEditing}>
                <PenCircle />
              </IconButton>
            </EditableTextIconWrapper>
          )
      }
    </EditableInputUI>
  )
}