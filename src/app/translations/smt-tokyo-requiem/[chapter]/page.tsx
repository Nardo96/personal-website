import {chapter_filename_list_smttr, chapter_fileparse_list_smttr} from "@/app/util/parse-file"
import BlocksList from "@/app/components/blocks-list"
import Link from "next/link"

export async function generateStaticParams() {
    return chapter_filename_list_smttr.map(() => ({}))
}

export default async function Page({
    params,
  }: {
    params: [{ chapter: string }]
  }) {
    const results = await params
    let slug = results["chapter"]
    // Find the index of the current page
    const index = chapter_filename_list_smttr.findIndex((chapter) => chapter === slug + '.txt')
    const blocks = chapter_fileparse_list_smttr[index]
    // Items this list return in the form of [chapter].txt
    let prevFilePath = chapter_filename_list_smttr[index-1]
    let nextFilePath = chapter_filename_list_smttr[index+1]
    return (
        <>
            <div className="w-7/10 flex justify-center">
                <BlocksList blocks={blocks} mapper="translations"/>
            </div>
            <div className="flex flex-row justify-center">
                <Link href={index > 0 ? prevFilePath.split(".")[0] : "."}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> 
                    </button>
                </Link>
                <Link href={index < chapter_filename_list_smttr.length - 1 ? nextFilePath.split(".")[0] : "."}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> 
                    </button>
                </Link>
            </div>
        </>
    )
  }