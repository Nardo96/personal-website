import {blocks_projects} from '@/app/util/parse-file'
import PageParse from '@/app/components/page-parse'


export default function About() {
    console.log(blocks_projects)
    return (
        <div>
            <h1>Example file data:</h1>
            <PageParse blocks={blocks_projects} mapper="projects"/>
        </div>
    )
}