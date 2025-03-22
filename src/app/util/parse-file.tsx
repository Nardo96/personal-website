export const content_about = ParseFile('src/resources/about/example.txt')
export const content_translations = ParseFile('src/resources/translations/example.txt')
export const content_projects = ParseFile('src/resources/projects/example.txt')

console.log(content_about)
console.log(content_translations)
console.log(content_projects)


function ParseFile(filepath: string) {
    console.log("pre file system call")
    try {
        const fs = require('fs')
        const data = fs.readFileSync(filepath, 'utf8')
        const lines = data.split("\n")
        let results = []
        let post = []
        console.log("file opened")

        for (const line of lines) {
            var index = 0
            // The case of a blank, separator new line between posts
            if (line.length == 0) {
                continue
            }
            if (line[index] == "{" || line[index] == "}") {
                if (post.length != 0) {
                    results.push(post)
                    post = []
                }
                continue
            }
            while (line[index] != " ") {
                index += 1
            }
            const delim = line.slice(0, index)
            const remain = line.slice(index)
            console.log(line)
            post.push([delim, remain])
        }

        console.log(results)
        return results
    } catch (err) {
        console.error(err)
    }
}