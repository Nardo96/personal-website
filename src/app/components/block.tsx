import { AboutMap, TranslationsMap, ProjectsMap } from "@/app/util/map-delimiters"

export default function Block({block, mapperString}) {
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
        <div className="Block">
        {block.map((line,index) => (
                <BlockLineHelper line={line} key={index} mapper={mapper}/>
            ))}
        </div>
    )
}

export function BlockLineHelper({line, mapper}) {
    if (mapper.get(line[0])== "Bullet Point") {
        return <li className="list-disc list-inside">{line[1]}</li>
    }
    else if (mapper.get((line[0])) == "Image") {
        return <img src={line[1]} alt="Image"/>
    }
    else {
        return <div className={mapper.get(line[0])}>{line[1]}</div>
    }
}