import { AboutMap, TranslationsMap, ProjectsMap } from "@/app/util/map-delimiters"

export default function Block({content, mapperString}) {
    let mapper
    if (mapperString == 'about') {
        mapper = AboutMap
    }
    else if (mapperString == "translations") {
        mapper = TranslationsMap
    }
    else {
        mapper = ProjectsMap
    }
    return (
        <>
        {content.map((item,index) => (
                <div className={mapper.get(item[0])} key={index}>{item[1]}</div>
            ))}
        </>
    )
}