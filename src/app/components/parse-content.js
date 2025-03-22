export function ParseContent() {
    console.log("pre file system call")
    try {
        const fs = require('fs')
        const data = fs.readFileSync('src/resources/about/example.txt', 'utf8')
        console.log(data)
        return (
            <div>{data}</div>
        )
    } catch (err) {
        console.error(err)
    }
}