import {blocks_about_jobs, blocks_about_education, blocks_about_skills} from '@/app/util/parse-file'
import BlocksList from '@/app/components/blocks-list'


export default function AboutPage() {
    return (
        <div className="items-center justify-items-center min-h-screen pb-20 gap-16 p-16 font-[family-name:var(--font-geist-sans)] flex flex-col dark:bg-gray-800 dark:text-white">
            <h1 className="font-bold text-2xl text-center mb-8">Bernardo Rodriguez</h1>
            <h1 className="max-w-7/10">I transitioned careers into working as a software engineer and have a history of working as a business analyst. Please click on the links in the upper right of the page to see examples of coding projects and Japanese to English translations I've made. Please feel free to reach out to me through email or on LinkedIn, and browse through my github for additional coding projects and exercises.</h1>
            <h1 className="font-bold text-xl w-7/10 -mb-12">Skills</h1>
            <div className="w-7/10 flex flex-row flex-wrap lg:flex-nowrap gap-8">
                <BlocksList blocks={blocks_about_skills} mapper="about-skills"/>
            </div>
            <h1 className="font-bold text-xl w-7/10 -mb-12">Professional History</h1>
            <div className="w-7/10 flex flex-col gap-8">
                <BlocksList blocks={blocks_about_jobs} mapper="about-jobs"/>
            </div>
            <h1 className="font-bold text-xl w-7/10 -mb-12">Education</h1>
            <div className="w-7/10 flex flex-col gap-8">
                <BlocksList blocks={blocks_about_education} mapper="about-education"/>
            </div>
        </div>
    )
}
