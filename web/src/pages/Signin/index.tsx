import '../../styles/main.css'

import { Heading } from '../../components/Heading'
import { Text } from '../../components/Text'
import { TextInput } from '../../components/TextInput'
import { User, Lock } from 'phosphor-react'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

export function Signin() {
    return (
        <div className="w-screen h-screen bg-gray-900 flex items-center flex-col justify-center text-gray-100">
            <header className="flex flex-col items-center">
                <Heading size="lg" className='flex items-center gap-3'>NG Cash <span className='h-1 rounded-full border-l-4 border-gray-100'></span> Login</Heading>
                <Text size="lg" className="text-gray-400 mt-1">Faça seu login</Text>
            </header>

            <form className="flex flex-col gap-4 mt-10 w-full max-w-sm items-stretch">
                <label className="flex flex-col gap-3" htmlFor="username">
                    <Text className="font-semibold">Nome de usuário</Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <User />
                        </TextInput.Icon>
                        <TextInput.Input type="text" id="username" required placeholder="Digite seu nome de usuário">

                        </TextInput.Input>
                    </TextInput.Root>
                </label>

                <label className="flex flex-col gap-3" htmlFor="password">
                <Text className="font-semibold">Sua senha</Text>
                <TextInput.Root>
                    <TextInput.Icon>
                        <Lock />
                    </TextInput.Icon>
                    <TextInput.Input type="password" id="password" placeholder="******">

                    </TextInput.Input>
                </TextInput.Root>
                </label>

                <Button type="submit" className="mt-4">Entrar</Button>
            </form>

            <footer className='flex flex-col items-center mt-8'>
                <Text asChild size='sm'>
                <Link to="/SignUp" className="text-gray-400 underline hover:text-gray-200">Não possui conta? Crie uma agora!</Link>
                </Text>
            </footer>
        </div>
    )
}