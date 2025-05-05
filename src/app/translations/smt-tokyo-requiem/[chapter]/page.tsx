import { chapter_list_smttr } from "@/app/util/parse-file"
export async function generateStaticParams() {
   
    return chapter_list_smttr.map(([key, value]) => ({
      slug: value,
    }))
}

export default async function Page({
    params,
  }: {
    params: [{ slug: string }]
  }) {
    const results = await params
    console.log(results)
    return <div>My Post: {results["chapter"]}</div>
  }