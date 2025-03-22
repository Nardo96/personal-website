import {content_translations} from '@/app/util/parse-file'
import PageParse from '@/app/components/page-parse'


export default function About() {
    console.log(content_translations)
    return (
        <div>
            <h1>Example file data:</h1>
            <PageParse data={content_translations} mapper="translations"/>
        </div>
    )
}