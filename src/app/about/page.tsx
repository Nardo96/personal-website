import {blocks_about} from '@/app/util/parse-file'
import PageParse from '@/app/components/page-parse'


export default function About() {
    console.log(blocks_about)
    return (
        <>
            <h1 className="font-bold text-2xl text-center mb-8">Bernardo Rodriguez</h1>
            <h1 className="max-w-250">I transitioned careers into working as a software engineer and have a history of working as a business analyst. Please click on the links in upper right of the page to see examples of coding projects and Japanese to English translations I've made. Please feel free to reach out to me through email or on LinkedIn, and browse through my github for additional coding projects and exercises.</h1>
            <PageParse blocks={blocks_about} mapper="about"/>
        </>
    )
}
