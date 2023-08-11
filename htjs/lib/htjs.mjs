export const getHastElement = (tagName, attrArr) => {
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

export const tagNameArr = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "command",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
]
