/* eslint-disable max-len */

import { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode
}
const Button = ({ children, ...props }: ButtonProps) => (
  <button
    className="border border-red-400 rounded px-4 py-2 mt-4 hover:(bg-teal-400 border-teal-400) bg-red-400 font-mono"
    {...props}
  >
    {children}
  </button>
)

export default Button