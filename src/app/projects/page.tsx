import {blocks_projects} from '@/app/util/parse-file'
import PageParse from '@/app/components/page-parse'


export default function About() {
    console.log(blocks_projects)
    return (
        <>
            <h1 className="font-bold text-2xl text-center mb-8">Main Projects</h1>
            <PageParse blocks={blocks_projects} mapper="projects"/>
        </>
    )
}