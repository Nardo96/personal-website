import Block from "@/app/components/block"

export default function PageParse({blocks, mapper}) {
    console.log(`Parsing ${mapper}`)
    return (
        <>
        {blocks.map((block,index) => (
            <div className='Block' key={index}> {index}
            <Block block={block} mapperString={mapper}></Block>
            </div>
        ))}
        </>
    )
}