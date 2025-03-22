export const content_about = ParseFile('src/resources/about/example.txt')
export const content_translations = ParseFile('src/resources/translations/example.txt')
export const content_projects = ParseFile('src/resources/projects/example.txt')


function ParseFile(filepath: string) {
    console.log("pre file system call")
    try {
        const fs = require('fs')
        const data = fs.readFileSync(filepath, 'utf8')
        const lines = data.split("\n")
        var res = []
        for (const line of lines) {
            var index = 0
            while (line[index] != " ") {
                index += 1
            }
            const delim = line.slice(0, index)
            const remain = line.slice(index)
            console.log(line)
            res.push([delim, remain])
        }

        console.log(res)
        return res
    } catch (err) {
        console.error(err)
    }
    
}

