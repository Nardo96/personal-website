import {blocks_translations} from '@/app/util/parse-file'


export default function TranslationsPage() {
    return (
        <div className="items-center justify-items-center min-h-screen pb-20 gap-16 p-16 font-[family-name:var(--font-geist-sans)] flex flex-col dark:bg-gray-800 dark:text-white">
            <h1 className="font-bold text-2xl text-center mb-4">Japanese to English Translations</h1>
            <div className="flex flex-col gap-8">
                <a href="/translations/smt-tokyo-requiem/" className="text-center hover:underline">Shin Megami Tensei: Tokyo Requiem</a>
                <a href="/translations/smt-tokyo-requiem/" className="text-center hover:underline">Akuma no Iru Tengoku by Shinichi Hoshi</a>
            </div>
        </div>
    )
}