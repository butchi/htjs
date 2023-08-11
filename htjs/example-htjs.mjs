import fs from "fs"

import { getHastElement, tagNameArr } from "./lib/htjs.mjs"

const jsHtml = fs.readFileSync("./doc/com-example-htjs.txt", "utf8")

const htmlElement = []

tagNameArr.forEach((tagName) => {
    htmlElement[tagName] = (_txtArr, ...attrArr) => getHastElement(tagName, attrArr)
});

const { html, head, meta, style, title, body, div, h1, p, a } = htmlElement

const ret = eval(jsHtml)

const json = JSON.stringify(ret, null, 4)

console.log(json)