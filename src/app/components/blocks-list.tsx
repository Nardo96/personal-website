import Block from "@/app/components/block"

export default function BlocksList({blocks, mapper}) {
    let styling = "";
    if (mapper == "about-skills") {
        styling = "border rounded-md dark:border-white border-black justify-between flex flex-col p-3 w-1/3 min-w-60 center-content"
    }
    else if (mapper == "projects-small") {
        styling = "w-1/2"
    }
    else if (mapper == "translations") {
        styling = "max-w-[700px] mx-auto text-justify w-full"
    }
    return (
        <>
        {blocks.map((block,index) => (
            <div key={index} className={styling}>
                <Block block={block} key={index} mapperString={mapper}></Block>
            </div>
            
        ))}
        </>
    )
}