import { Header } from "./components/Header";

export function Home(){
    return (
        <div className="w-screen h-screen bg-gray-900 flex flex-col text-gray-100">
            <div className="w-[1344px] h-full m-auto bg-gray-800">
                <Header />
            </div>
        </div>
    )
}