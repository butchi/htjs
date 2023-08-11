import fs from "fs"

import matraHtmlParser from "./lib/matra-html-parser.js"

const matraHtml = fs.readFileSync("./doc/com-example-matra.txt", "utf8")

const ret = matraHtmlParser.parse(matraHtml)

const json = JSON.stringify(ret, null, 4)

console.log(json)
