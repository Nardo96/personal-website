import {blocks_projects} from '@/app/util/parse-file'
import PageParse from '@/app/components/page-parse'


export default function ProjectsPage() {
    console.log(blocks_projects)
    return (
        <>
            <h1 className="font-bold text-2xl text-center mb-4">Main Projects</h1>
            <div className="w-7/10 flex flex-col gap-36">
                <PageParse blocks={blocks_projects} mapper="projects"/>
            </div>
            <h1 className="font-bold text-1.5xl text-center mt-4">Visit my github profile for other small projects!</h1>
            <h1 className="text-center -mt-16">https://github.com/Nardo96/</h1>
        </>
    )
}