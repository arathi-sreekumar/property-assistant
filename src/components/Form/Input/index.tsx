
import { InputUI } from './Input.css'

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export const Input = (props: InputProps) => {

  return (
    <InputUI {...props}/>
  )
}