import Block from "@/app/components/block"

export default function PageParse({data, mapper}) {
    console.log(`Parsing ${mapper}`)
    return (
        <>
        {data.map((block,index) => (
            <div className='Block' key={index}> {index}
            <Block content={block} mapperString={mapper}></Block>
            </div>
        ))}
        </>
    )
}