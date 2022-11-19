import * as Dialog from "@radix-ui/react-dialog"
import { Button } from "../../../../components/Button"
import { X } from "phosphor-react"
import { TextInput } from "../../../../components/TextInput"
import { Text } from "../../../../components/Text"

export function NewTransactionModal() {
    return (
        <Dialog.Portal>
            <Dialog.Overlay className="fixed w-screen h-screen inset-0 bg-[#00000075]" />

            <Dialog.Content className="min-w-[32rem] rounded-md py-10 px-12 bg-gray-800 fixed top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]">
                <Dialog.Title className="text-lg text-gray-100 font-extrabold">Nova transação</Dialog.Title>

                <Dialog.Close className="absolute bg-transparent border-0 top-6 right-6 cursor-pointer text-gray-400">
                    <X size={24} />
                </Dialog.Close>

            <form className="mt-8 flex flex-col text-gray-100 gap-1">
                <label htmlFor="username" className="flex flex-col gap-2" >
                    <Text>Informe o nome do usuário</Text>
                    <TextInput.Input
                        type="text"
                        id="username"
                        placeholder="Ex: Fulano"
                        required
                        className="rounded-md border-0 p-3 bg-gray-600"
                    />
                </label>

                <label htmlFor="transaction" className="flex flex-col mt-3 gap-2">
                    <Text>Informe um valor</Text>
                    <TextInput.Input
                        type="number"
                        placeholder="Ex: 100"
                        id="transaction"
                        required
                        className="rounded-md border-0 p-3 bg-gray-600"
                        min={0}
                    />
                </label>

                <Button type="submit" disabled className="mt-4 text-gray-200 disabled:bg-transparent disabled:border-cyan-500 disabled:border-2 disabled:opacity-60 cursor-not-allowed">
                    Transferir
                </Button>
            </form>
        </Dialog.Content>
    </Dialog.Portal>
    )
}