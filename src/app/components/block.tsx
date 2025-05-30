import { AboutJobsMap, AboutSkillsMap, AboutEducationMap, TranslationsMap, ProjectsMap, ProjectsSmallMap } from "@/app/util/mappers"

export default function Block({block, mapperString}) {
    let mapper
    if (mapperString == 'about-jobs') {
        mapper = AboutJobsMap
    }
    else if (mapperString == "about-skills") {
        mapper = AboutSkillsMap
    }
    else if (mapperString == "about-education") {
        mapper = AboutEducationMap
    }
    else if (mapperString == "translations") {
        mapper = TranslationsMap
    }
    else if (mapperString == "projects-small") {
        mapper = ProjectsSmallMap
    }
    else {
        mapper = ProjectsMap
    }

    return (
        <>
        {block.map((line,index) => (
                <BlockLineHelper line={line} key={index} mapper={mapper}/>
            ))}
        </>
    )
}

export function BlockLineHelper({line, mapper}) {
    let pageStyling = ""
    if (mapper === ProjectsMap) {
        pageStyling = "text-center"
    }
    else if (mapper === TranslationsMap) {
        pageStyling = "text-center mb-12 text-xl"
    }
    let type = mapper.get(line[0])
    if (type == "Bullet Point") {
        return <li className={"list-disc list-inside"}>{line[1]}</li>
    }
    else if (type == "Image") {
        return <img src={line[1]} alt="Image" className={pageStyling + " mb-4 mt-4"}/>
    }
    else if (type == "Title") {
        return <h1 className={pageStyling + " font-bold"}>{line[1]}</h1>
    }
    else if (type == "Subtitle") {
        return <h2 className={pageStyling + ""}>{line[1]}</h2>
    }
    else if (type == "Git Repo") {
        return <div className={pageStyling + " mb-4"}>{line[1]}</div>
    }
    else if (type == "Date Range") {
        return <div className="mb-2">{line[1]}</div>
    }
    else {
        return <div className="min-h-6">{line[1]}</div>
    }
}