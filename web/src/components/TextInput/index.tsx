import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx'
import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputRootProps {
    children: ReactNode
    className?: string;
}

function TextInputRoot({ children, className }: TextInputRootProps) {
    return(
        <div className={clsx("rounded flex py-4 px-3 w-full bg-gray-800 items-center gap-3 focus-within:ring-2 ring-cyan-300", className)}>
            {children}
        </div>
    )
}

TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIconProps {
    children: ReactNode
}

function TextInputIcon(props: TextInputIconProps) {
    return(
        <Slot className="w-6 h-6 text-gray-400">
            {props.children}
        </Slot>
    )
}

TextInputIcon.displayName = 'TextInput.Icon'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
    return (
        <input className="bg-transparent flex-1 text-gray-100 text-xs outline-none placeholder:text-gray-400"
            {...props}
        />
    )
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon
}