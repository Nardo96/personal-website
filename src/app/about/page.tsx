import {content_about, content_projects, content_translations} from '@/app/util/parse-file'
import {AboutMap} from '@/app/util/map-delimiters'


function ParseAbout({data}) {
    console.log("Hit parseAbout)")
    return (
        <>
        {data.map((post, index) => (
            <div className='Post' key={index}>{index}
            <ParsePost post={post}></ParsePost>
            </div>
        ))}
        </>
    )
}

function ParsePost({post}) {
    return (
        <>
        {post.map((item,index) => (
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