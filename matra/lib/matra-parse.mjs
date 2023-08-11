import matraHtmlParser from "./matra-html-parser.js"

export default function htjsParse(options) {
    const parser = (doc) => {
        return eval(matraHtmlParser.parse(doc))
    }

    Object.assign(this, { Parser: parser })
}
