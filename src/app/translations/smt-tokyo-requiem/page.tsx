import Image from "next/image"
import { chapter_filename_list_smttr} from "@/app/util/parse-file"
import Link from "next/link"

export default function BookPage() {
    return (
        <div className="items-center justify-items-center min-h-screen pb-20 gap-16 p-16 font-[family-name:var(--font-geist-sans)] flex flex-col dark:bg-gray-800 dark:text-white">
            <div className="w-7/10 flex flex-col gap-8" >
                <h1 className="text-center font-bold text-2xl mb-4">Shin Megami Tensei: Tokyo Requiem</h1>
                <Image src="/TokyoRequiem_title.webp" alt="Tokyo Requiem Title Screen (source: https://megamitensei.fandom.com/wiki/Shin_Megami_Tensei:_Tokyo_Requiem?file=TokyoRequiem_Title.jpg)" width={500} height={500} className="mx-auto mb-4"/>
                <p className="text-justify">A fan translation of the game Shin Megami Tensei: Tokyo Requiem, a fairly old, obscure, and inaccessible phone game from Japan. This is the first text I've ever translated, and looking back, it's in heavy need of editing.  A lot of it doesn't read like good English, due to odd sentence word orders or other artifacts from direct translation from Japanese. I had an insistence on maintaining parity with the original source phrase instead of creating a wholly new english sentence with a similar informational and emotional impact - something to work on for my next translation.</p>
                <p className="text-justify">Additionally, I will note that I kept the format of the source material, which relied heavily on newlines and including only a short phrase or two per line. I assume this was a conscious decision due to limited screen size on a phone.</p>
                <div className="flex flex-col gap-4 items-center justify-items-center mt-20">
                    <h1 className="text-center mb-4 text-xl font-bold">Table of Contents</h1>
                    <>
                        {
                        chapter_filename_list_smttr.map((filename) => (
                            <Link href={"smt-tokyo-requiem/" + filename.split(".")[0]} key={filename}>{cleanFilename(filename)}</Link>
                            ))
                        }
                    </>
                </div>
            </div>
        </div>
    )
}

function cleanFilename(filename: string) {
    // Eliminate underscores and replace dashes with spaces
    filename = filename.replaceAll("_", "").replaceAll("-", " ")
    let words = filename.split(" ")
    for (let word in words){
        // Capitalize the first letter of each word
        words[word] = words[word].charAt(0).toUpperCase() + words[word].slice(1)
    }
    // Join the words back together
    filename = words.join(" ")
    // Remove the file extension
    filename = filename.split(".")[0]

    return filename
}