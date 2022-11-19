import { Header } from "./components/Header";
import { SearchForm } from "./components/SearchForm";
import { Summary } from "./components/Summary";

export function Home(){
    return (
        <div className="w-screen h-screen bg-gray-900 flex flex-col text-gray-100">
            <Header />
            <div className="w-[1344px] h-full m-auto">
                <Summary />
                <main className="w-full max-w-[1120px] m-[4rem_auto_0] px-6">
                    <SearchForm />
                    <table className="w-full mt-6 border-separate  border-spacing-y-2">
                        <tbody>
                            <tr className="border-b-8 border-gray-900">
                                <td width="50%" className="py-5 first:rounded-tl-[6px] first:rounded-bl-[6px] last:rounded-tr-[6px] last:rounded-br-[6px] px-8 bg-gray-800">@Fulano</td>
                                <td className="py-5 px-8 first:rounded-tl-[6px] first:rounded-bl-[6px] last:rounded-tr-[6px] last:rounded-br-[6px] bg-gray-800"><span className="text-red-400">R$5000</span></td>
                                <td className="py-5 first:rounded-tl-[6px] first:rounded-bl-[6px] last:rounded-tr-[6px] last:rounded-br-[6px] px-8 text-gray-400 bg-gray-800">12/11/2022</td>
                            </tr>

                            <tr>
                                <td className="py-5 first:rounded-tl-[6px] first:rounded-bl-[6px] last:rounded-tr-[6px] last:rounded-br-[6px] px-8 bg-gray-800">f</td>
                                <td className="py-5 first:rounded-tl-[6px] first:rounded-bl-[6px] last:rounded-tr-[6px] last:rounded-br-[6px] px-8 bg-gray-800"></td>
                                <td className="py-5 first:rounded-tl-[6px] first:rounded-bl-[6px] last:rounded-tr-[6px] last:rounded-br-[6px] px-8 bg-gray-800"></td>
                            </tr>
                        </tbody>
                    </table>
                </main>
            </div>
        </div>
    )
}