import Image from "next/image"
export default function BookPage() {
    return (
        <>
            <h1 className="text-center font-bold text-2xl mb-4">Shin Megami Tensei: Tokyo Requiem</h1>
            <Image src="/TokyoRequiem_title.webp" alt="Tokyo Requiem Title Screen (source: https://megamitensei.fandom.com/wiki/Shin_Megami_Tensei:_Tokyo_Requiem?file=TokyoRequiem_Title.jpg)" width={500} height={500} className="mx-auto mb-4"/>
            <div className="flex flex-col gap-4">
                <a href="/translations/smt-tokyo-requiem/prologue-site-version">Prologue: Site Version</a>
                <a href="/translations/smt-tokyo-requiem/prologue-game-version">Prologue: Game Version</a>
                <a href="/translations/smt-tokyo-requiem/opening">Opening</a>
                <a href="/translations/smt-tokyo-requiem/chapter-1">Chapter 1</a>
                <a href="/translations/smt-tokyo-requiem/chapter-2">Chapter 2</a>
                <a href="/translations/smt-tokyo-requiem/chapter-3">Chapter 3</a>
                <a href="/translations/smt-tokyo-requiem/chapter-4">Chapter 4</a>
                <a href="/translations/smt-tokyo-requiem/chapter-5">Chapter 5</a>
                <a href="/translations/smt-tokyo-requiem/chapter-6">Chapter 6</a>
            </div>	
        </>
    )
}