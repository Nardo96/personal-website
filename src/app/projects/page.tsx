import {blocks_projects, blocks_projects_small} from '@/app/util/ParseFile'
import BlockList from '@/app/components/BlockList'


export default function ProjectsPage() {
    return (
        <div className="items-center justify-items-center min-h-screen pb-20 gap-16 p-16 font-[family-name:var(--font-geist-sans)] flex flex-col dark:bg-gray-800 dark:text-white">
            <h1 className="font-bold text-2xl text-center mb-4">Main Projects</h1>
            <div className="w-7/10 flex flex-col gap-36">
                <BlockList blocks={blocks_projects} mapper="projects"/>
            </div>
            <h1 className="font-bold text-1.5xl text-center mt-4">Visit my github profile for other small projects!</h1>
            <h1 className="text-center -mt-16">https://github.com/Nardo96/</h1>
            <div className="w-1/2 flex flex-row gap-4 justify-center -mt-16">
                <BlockList blocks={blocks_projects_small} mapper="projects-small"/>
            </div>
        </div>
    )
}