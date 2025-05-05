export async function generateStaticParams() {
    const posts = {
        'prologue-site-version': 'prologue-site-version',
        'prologue-game-version': 'prologue-game-version',
    }
   
    return Object.entries(posts).map(([key, value]) => ({
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