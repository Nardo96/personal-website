import {content_about} from '@/app/util/parse-file'
import PageParse from '@/app/components/page-parse'


export default function About() {
    console.log(content_about)
    return (
        <div>
            <h1>Example file data:</h1>
            <PageParse data={content_about} mapper="about"/>
        </div>
    )
}