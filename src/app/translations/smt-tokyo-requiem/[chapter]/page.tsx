import { GetFileNames } from "@/app/util/parse-file"
import {ParseFile} from "@/app/util/parse-file"
import Block from "@/app/components/block"

export async function generateStaticParams() {
    const chapter_list_smttr = GetFileNames('src/resources/translations/smt-tokyo-requiem')
    return chapter_list_smttr.map((chapter) => ({chapter: chapter}))
}

export default async function Page({
    params,
  }: {
    params: [{ chapter: string }]
  }) {
    const results = await params
    let slug = results["chapter"]
    const blocks = ParseFile(`src/resources/translations/smt-tokyo-requiem/` + `${slug}`+'.txt')
    return (
        <div>
            {blocks.map((block, index) => (
                <Block block={block} key={index} mapperString={"translations"}/>
            ))}
        </div>
    )
  }