import Image from "next/image"
export default function BookPage() {
    return (
        <>
            <div className="w-7/10 flex flex-col gap-8" >
                <h1 className="text-center font-bold text-2xl mb-4">Shin Megami Tensei: Tokyo Requiem</h1>
                <Image src="/TokyoRequiem_title.webp" alt="Tokyo Requiem Title Screen (source: https://megamitensei.fandom.com/wiki/Shin_Megami_Tensei:_Tokyo_Requiem?file=TokyoRequiem_Title.jpg)" width={500} height={500} className="mx-auto mb-4"/>
                <p className="text-justify">A fan translation of the game Shin Megami Tensei: Tokyo Requiem, a fairly old, obscure, and inaccessible phone game from Japan. This is the first text I've ever translated, and looking back, it's in heavy need of editing.  A lot of it doesn't read like good English, due to odd sentence word orders or other artifacts from direct translation from Japanese. I had an insistence on maintaining parity with the original source phrase instead of creating a wholly new english sentence with a similar informational and emotional impact - something to work on for my next translation.</p>
                <p className="text-justify">Additionally, I will note that I kept the format of the source material, which relied heavily on newlines and including only a short phrase or two per line. I assume this was a conscious decision due to limited screen size on a phone.</p>
                <div className="flex flex-col gap-4 items-center justify-items-center mt-20">
                    <h1 className="text-center mb-4 text-xl font-bold">Table of Contents</h1>
                    <a href="/translations/smt-tokyo-requiem/__prologue-site-version">Prologue - Site Version</a>
                    <a href="/translations/smt-tokyo-requiem/__prologue-game-version">Prologue - Game Version</a>
                    <a href="/translations/smt-tokyo-requiem/_opening">Opening</a>
                    <a href="/translations/smt-tokyo-requiem/chapter-1">Chapter 1</a>
                    <a href="/translations/smt-tokyo-requiem/chapter-2">Chapter 2</a>
                    <a href="/translations/smt-tokyo-requiem/chapter-3">Chapter 3</a>
                    <a href="/translations/smt-tokyo-requiem/chapter-4">Chapter 4</a>
                    <a href="/translations/smt-tokyo-requiem/chapter-5">Chapter 5</a>
                    <a href="/translations/smt-tokyo-requiem/chapter-6">Chapter 6</a>
                </div>
            </div>
        </>
    )
}