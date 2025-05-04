import Block from "@/app/components/block"

export default function PageParse({blocks, mapper}) {
    console.log(`Parsing ${mapper}`)
    return (
        <div className="w-full flex flex-col gap-8">
        {blocks.map((block,index) => (
            <Block block={block} key={index} mapperString={mapper}></Block>
        ))}
        </div>
    )
}