import { AboutJobsMap, AboutSkillsMap, AboutEducationMap, TranslationsMap, ProjectsMap, ProjectsSmallMap } from "@/app/util/Mappers"
import BlockLineHelper from "@/app/components/BlockLineHelper"

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
