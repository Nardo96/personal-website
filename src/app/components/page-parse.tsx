import Block from "@/app/components/block"

export default function PageParse({blocks, mapper}) {
    console.log(`Parsing ${mapper}`)
    if (mapper == "projects") {
        return (
            <div className="w-7/10 flex flex-col gap-36">
            {blocks.map((block,index) => (
                <Block block={block} key={index} mapperString={mapper}></Block>
            ))}
            </div>
        )
    }
    else if (mapper == "translations") {
        return (
            <div className="w-7/10 flex justify-center">
            {blocks.map((block,index) => (
                <Block block={block} key={index} mapperString={mapper}></Block>
            ))}
            </div>
        )
    }
    else {
        return (
        <div className="w-7/10 flex flex-col gap-8">
        {blocks.map((block,index) => (
            <Block block={block} key={index} mapperString={mapper}></Block>
        ))}
        </div>
        )
    }
}