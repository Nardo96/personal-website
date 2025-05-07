import {blocks_projects, blocks_projects_small} from '@/app/util/parse-file'
import BlocksList from '@/app/components/blocks-list'


export default function ProjectsPage() {
    console.log(blocks_projects)
    return (
        <>
            <h1 className="font-bold text-2xl text-center mb-4">Main Projects</h1>
            <div className="w-7/10 flex flex-col gap-36">
                <BlocksList blocks={blocks_projects} mapper="projects"/>
            </div>
            <h1 className="font-bold text-1.5xl text-center mt-4">Visit my github profile for other small projects!</h1>
            <h1 className="text-center -mt-16">https://github.com/Nardo96/</h1>
            <div className="w-1/2 flex flex-row gap-4 justify-center">
                <BlocksList blocks={blocks_projects_small} mapper="projects-small"/>
            </div>
        </>
    )
}