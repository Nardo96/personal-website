import {content_about, content_projects, content_translations} from '@/app/util/parse-content'
import {AboutMap} from '@/app/util/map-delimiters'


function ParseAbout({data}) {
    console.log("Hit parseAbout)")
    return (
        <>
        {data.map((item, index) => (
            <div className={AboutMap.get(item[0])} key={index}>{item[1]}</div>
        ))}
        </>
    )
}



export default function About() {
    return (
        <div>
            <h1>Example file data:</h1>
            <ParseAbout data={content_about}/>
        </div>
    )
}