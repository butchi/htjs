const getHastElement = (tagName, attrArr) => {
    const children = []
    const properties = {
    }

    const type = "element"

    if (attrArr == null) {
    } else if (attrArr.length === 0) {
    } else {
        attrArr.map(attr => {
            if (typeof attr === "string") {
                const value = attr

                children.push({
                    type: "text",
                    value,
                })
            } else if (attr instanceof Array) {
                const childArr = attr
                children.push(...childArr)
            } else if (typeof attr === "object") {
                const obj = attr
                Object.assign(properties, obj)
            }
        })
    }

    const ret = Object.assign({},
        type ? { type } : {},
        tagName ? { tagName } : {},
        Object.entries(properties).length > 0 ? { properties } : {},
        children.length > 0 ? { children } : {},
    )

    return ret
}

const jsHTMLElement = {
    html: (_txtArr, ...attrArr) => getHastElement("html", attrArr),
    head: (_txtArr, ...attrArr) => getHastElement("head", attrArr),
    meta: (_txtArr, ...attrArr) => getHastElement("meta", attrArr),
    style: (_txtArr, ...attrArr) => getHastElement("style", attrArr),
    title: (_txtArr, ...attrArr) => getHastElement("title", attrArr),
    body: (_txtArr, ...attrArr) => getHastElement("body", attrArr),
    div: (_txtArr, ...attrArr) => getHastElement("div", attrArr),
    h1: (_txtArr, ...attrArr) => getHastElement("h1", attrArr),
    p: (_txtArr, ...attrArr) => getHastElement("p", attrArr),
    a: (_txtArr, ...attrArr) => getHastElement("a", attrArr),
}

const { html, head, meta, style, title, body, div, h1, p, a } = jsHTMLElement

export default function htjsParse(options) {
    const parser = (doc) => {
        return eval(doc)
    }

    Object.assign(this, { Parser: parser })
}
