export const blocks_about_jobs = ParseFile('src/resources/about/jobs.txt')
export const blocks_about_education = ParseFile('src/resources/about/education.txt')
export const blocks_about_skills = ParseFile('src/resources/about/skills.txt') 
export const blocks_translations = ParseFile('src/resources/translations/example.txt')
export const blocks_projects = ParseFile('src/resources/projects/example.txt')
export const chapter_filename_list_smttr = GetFileNames('src/resources/translations/smt-tokyo-requiem')
export const  chapter_fileparse_list_smttr = parseFiles('src/resources/translations/smt-tokyo-requiem/', chapter_filename_list_smttr)

// Returns a list of blocks, each block is a list of lines, each line is a list of [delimiter, text]
export function ParseFile(filepath: string) {
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
            while (line[index] != " " && index < line.length) {
                index += 1
            }
            const delim = line.slice(0, index)
            const remain = line.slice(index+1)
            console.log(line)
            block.push([delim, remain])
        }
        return blocks
    } catch (err) {
        console.error(err)
    }
}

export function GetFileNames(filepath: string) {
    const fs = require('fs')
    const data = fs.readdirSync(filepath)
    let files = []
    let index = 0
    for (const file of data) {
        if (file.endsWith(".txt")) {
            files.push(file)
            index += 1
        }
    }
    console.log(files)
    return files
}

export function getSubfolders(filepath: string) {
    const fs = require('fs')
    return fs.readdirSync(filepath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);
  }

export function parseFiles(filepath:string, fileNames: string[]) {
    let filesParses = []
    for (const file of fileNames) {
        const data = ParseFile(filepath + file)
        filesParses.push(data)
    }
    return filesParses
}