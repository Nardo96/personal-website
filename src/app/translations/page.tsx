import {blocks_translations} from '@/app/util/parse-file'
import PageParse from '@/app/components/page-parse'


export default function About() {
    console.log(blocks_translations)
    return (
        <>
            <h1 className="max-w-250">Example file data:</h1>
            <PageParse blocks={blocks_translations} mapper="translations"/>
        </>
    )
}