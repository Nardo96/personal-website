import Block from "@/app/components/block"

export default function PageParse({blocks, mapper}) {
    console.log(`Parsing ${mapper}`)
    if (mapper == "projects") {
        return (
            <>
            {blocks.map((block,index) => (
                <Block block={block} key={index} mapperString={mapper}></Block>
            ))}
            </>
        )
    }
    else if (mapper == "translations") {
        return (
            <>
            {blocks.map((block,index) => (
                <Block block={block} key={index} mapperString={mapper}></Block>
            ))}
            </>
        )
    }
    else {
        return (
            <>
            {blocks.map((block,index) => (
                <Block block={block} key={index} mapperString={mapper}></Block>
            ))}
            </>
        )
    }
}