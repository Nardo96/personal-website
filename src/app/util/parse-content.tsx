export function ParseContent() {
    console.log("pre file system call")
    try {
        const fs = require('fs')
        const data_about = fs.readFileSync('src/resources/about/example.txt', 'utf8')
        const data_translations = fs.readFileSync('src/resources/translations/example.txt', 'utf8')
        const data_projects = fs.readFileSync('src/resources/projects/example.txt', 'utf8')
        const data = [data_about, data_translations, data_projects]
        console.log(data)
        return data
    } catch (err) {
        console.error(err)
    }
}