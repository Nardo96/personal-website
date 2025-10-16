import {TranslationsMap, ProjectsMap} from "@/app/util/Mappers"
import { BlockLineHelperProps } from "@/app/util/types"


export default function BlockLineHelper({line, mapper}: BlockLineHelperProps) {
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