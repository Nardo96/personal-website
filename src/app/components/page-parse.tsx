import Block from "@/app/components/block"

export default function PageParse({blocks, mapper}) {
    console.log(`Parsing ${mapper}`)
    if (mapper == "projects") {
        return (
            <>
            {blocks.map((block,index) => (
                <div key={index}>
                    <Block block={block} key={index} mapperString={mapper}></Block>
                </div>
            ))}
            </>
        )
    }
    else if (mapper == "translations") {
        return (
            <>
            {blocks.map((block,index) => (
                <div key={index}>
                    <Block block={block} key={index} mapperString={mapper}></Block>
                </div>
            ))}
            </>
        )
    }
    else {
        return (
            <>
            {blocks.map((block,index) => (
                <div key={index}>
                    <Block block={block} key={index} mapperString={mapper}></Block>
                </div>
                
            ))}
            </>
        )
    }
}