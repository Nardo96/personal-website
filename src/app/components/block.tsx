import BlockLineHelper from "@/app/components/BlockLineHelper"
import { BlockProps } from "../util/types"
import { MapperRegistry } from "@/app/util/Mappers";


export default function Block({block, mapperString}: BlockProps) {
    const mapper = MapperRegistry[mapperString] ?? MapperRegistry["projects"];

    return (
        <>
        {block.map((line,index) => (
                <BlockLineHelper line={line} key={index} mapper={mapper}/>
            ))}
        </>
    )
}
