export const blocks_about = ParseFile('src/resources/about/example.txt')
export const blocks_translations = ParseFile('src/resources/translations/example.txt')
export const blocks_projects = ParseFile('src/resources/projects/example.txt')

console.log(blocks_about)
console.log(blocks_translations)
console.log(blocks_projects)


function ParseFile(filepath: string) {
    console.log("pre file system call")
    try {
        const fs = require('fs')
        const data = fs.readFileSync(filepath, 'utf8')
        const lines = data.split("\n")
        let blocks = []
        let block = []
        console.log("file opened")

        for (const line of lines) {
            var index = 0
            // The case of a blank, separator new line between blocks
            if (line.length == 0) {
                continue
            }
            if (line[index] == "{" || line[index] == "}") {
                if (block.length != 0) {
                    blocks.push(block)
                    block = []
                }
                continue
            }
            while (line[index] != " ") {
                index += 1
            }
            const delim = line.slice(0, index)
            const remain = line.slice(index+1)
            console.log(line)
            block.push([delim, remain])
        }

        console.log(blocks)
        return blocks
    } catch (err) {
        console.error(err)
    }
}