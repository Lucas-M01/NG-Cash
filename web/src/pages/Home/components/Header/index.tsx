import { Link } from 'react-router-dom'
import { Heading } from '../../../../components/Heading'
import { Text } from '../../../../components/Text'

export function Header() {
    return (
        <div className="h-16 flex items-center">
            <header className="text-white mt-4 flex items-center ">
                <Heading>NG Cash</Heading>
                <Link to="/">
                    <Text>Logout</Text>
                </Link>
            </header>
        </div>
    )
}