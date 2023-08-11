import { unified } from "unified"
import rehypeStringify from "rehype-stringify"

import htjsParse from "./lib/htjs-parse.mjs"

import fs from "fs"

// const jsHtml = fs.readFileSync("./doc/com-example-htjs.js", "utf8")
const jsHtml = fs.readFileSync("./doc/com-example-jsexpr-htjs.js", "utf8")

main()

async function main() {
    const file = await unified()
        .use(htjsParse)
        .use(rehypeStringify)
        .process(jsHtml)

    console.log(String(file))
}