import {blocks_about} from '@/app/util/parse-file'
import PageParse from '@/app/components/page-parse'


export default function About() {
    console.log(blocks_about)
    return (
        <>
            <h1>Example file data:</h1>
            <ContentContainer>
                <PageParse blocks={blocks_about} mapper="about"/>
            </ContentContainer>
        </>
    )
}

function ContentContainer({children}) {
    return (
        <div className='ContentContainer'>
            {children}
        </div>
    )
}