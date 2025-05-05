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
    let pageStyling = ""
    if (mapper === ProjectsMap) {
        pageStyling = "text-center"
    }
    let type = mapper.get(line[0])
    if (type == "Bullet Point") {
        return <li className={"list-disc list-inside"}>{line[1]}</li>
    }
    else if (type == "Image") {
        return <img src={line[1]} alt="Image" className={pageStyling + " " + "mb-4 mt-4"}/>
    }
    else if (type == "Title") {
        return <h1 className={pageStyling + " " + "font-bold"}>{line[1]}</h1>

    }
    else if (type == "Git Repo") {
        return <div className = {pageStyling + " " + "mb-4"}>{line[1]}</div>
    }
    else {
        return <div>{line[1]}</div>
    }
}