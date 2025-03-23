import {blocks_translations} from '@/app/util/parse-file'
import PageParse from '@/app/components/page-parse'


export default function About() {
    console.log(blocks_translations)
    return (
        <div>
            <h1>Example file data:</h1>
            <PageParse blocks={blocks_translations} mapper="translations"/>
        </div>
    )
}