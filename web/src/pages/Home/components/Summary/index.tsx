import { Text } from "../../../../components/Text";
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react"

export function Summary() {
    return (
        <section className="w-full px-16 grid mt-[-5rem] mb-12 grid-cols-[repeat(3,_1fr)] gap-8 ">
            <div className="rounded-md p-8 bg-green-600">
                <header className="flex items-center justify-between text-gray-200">
                    <Text size="lg">Entradas</Text>
                    <ArrowCircleUp size={32} color="#00b37e" />
                </header>
                <strong className="block mt-4 text-[2rem]">100</strong>
            </div>

            <div className="rounded-md p-8 bg-red-500">
                <header className="flex items-center justify-between text-gray-200">
                    <Text size="lg">Saídas</Text>
                    <ArrowCircleDown size={32} color="#f75a68" />
                </header>
                <strong className="block mt-4 text-[2rem]">0</strong>
            </div>

            <div className="rounded-md p-8 bg-yellow ">
                <header className="flex items-center justify-between text-gray-200">
                    <Text size="lg">Total</Text>
                    <CurrencyDollar size={32} color="#fff" />
                </header>
                <strong className="block mt-4 text-[2rem]">100</strong>
            </div>
        </section>
    )
}