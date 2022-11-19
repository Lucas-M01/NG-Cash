import { Link } from 'react-router-dom'
import { Heading } from '../../../../components/Heading'
import { SignOut } from 'phosphor-react'

export function Header() {
    return (
        <div className="p-[2.5rem_0_7.5rem] text-gray-200 bg-gray-800 "> 
            <div className="flex items-center w-[1344px] px-6 m-auto justify-between">
                <Heading className="cursor-default">NG Cash</Heading>
                <Link to="/" className='flex items-center text-red-500 hover:text-red-400 transition-colors gap-2'>
                    <SignOut size={24} />
                    Sair
                </Link>        
            </div>
        </div>
    )
}