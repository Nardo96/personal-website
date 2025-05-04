import {blocks_about} from '@/app/util/parse-file'
import PageParse from '@/app/components/page-parse'


export default function About() {
    console.log(blocks_about)
    return (
        <>
            <h1 className="max-w-175">I am currently working as an Associate Software Engineer for Capital One Finanicial. This is a career transition for me, having initially worked as a business analyst for a couple of companies. Please click on the links in upper right of the page to see examples of coding projects and Japanese to English translations I've made. Please feel free to reach out to me through email or on LinkedIn, and browse through my github for additional coding projects and exercises.</h1>
            <PageParse blocks={blocks_about} mapper="about"/>
        </>
    )
}
