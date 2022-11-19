import { TextInput } from "../../../../components/TextInput";
import { PlusCircle, MagnifyingGlass } from "phosphor-react"
import * as Dialog from "@radix-ui/react-dialog"
import { Button } from "../../../../components/Button";
import { NewTransactionModal } from "../NewTransactionModal";

export function SearchForm() {
    return (
        <form className="flex items-center gap-2">
            <TextInput.Root className="h-13 border-2 border-gray-600 rounded-md ">
                <TextInput.Icon>
                    <MagnifyingGlass />
                </TextInput.Icon>
                <TextInput.Input type="text" placeholder="Busque por transações">
                </TextInput.Input>
            </TextInput.Root>
            <Dialog.Root>
                <Dialog.Trigger asChild>
                    <Button className="flex items-center px-3 py-4 text-xs w-48 gap-1 text-gray-100 rounded-lg border-0 cursor-pointer bg-green-500 hover:bg-green-700 hover:transition-colors">Nova transação
                        <PlusCircle size={24} />
                    </Button>
                </Dialog.Trigger>
  
            <NewTransactionModal />
          </Dialog.Root>
        </form>
    )
}