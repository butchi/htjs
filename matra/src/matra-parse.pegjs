// MatraMagica flavored MatraScript Grammar
// ==========================
//
// Accepts expressions like `(p) { "Hello, world!" }` and computes their value.

{
    const build = block => {
        if (block == null) {
            return null
        } else if (typeof block === "string") {
            const type = "text"
            const value = block
            return {
                type,
                value,
            }
        } else if (block instanceof Array) {
            const arr = block
            
            return arr.map(item => build(item))
        } else if (typeof block === "object") {
            const obj = block
            const type = "element"
            const { tag, prop, body } = obj
            return Object.assign({ type, tagName: tag.join(":") },
                prop ? { properties: Object.fromEntries(prop.map(item => [item.key, item.val])) } : {},
                body ? { children: build(body) } : {},
            )
        }
    }
}

Package
  = _ block:Block _ {
      return build(block)
  }


Block
  = _ tag:Tag _ prop:Prop? _ body:Body? {
    return {
        tag,
        prop,
        body,
    }
  }
  / _ prop:Prop _ body:Body? {
    return { tag: null, prop, body }
  }
  / _ prop:Prop? _ body:Body {
    return { tag: null, prop, body }
  }
  / MapRule
  / SetRule
  / PipeRule
  / String


Tag
  = "(" _ expr:Expression _ ")" {
    return expr
  }
  / "(" _ ")"

Prop
  = "[" _ expr:Expression _ "]" {
    return expr
  }
  / "[" _ "]"

Body
  = "{" _ expr:Expression _ "}" {
    return expr
  }
  / "{" _ "}" { return null }


Expression
  = arr:Array? {
    return arr
  }
  / Block

Array
  = arr:(Block _ ","? _)+ {
    return arr.map(item => item[0])
  }

MapRule
  = _ key:String _ ":" _ val:Block {
    return ({ rule: "map", key, val })
  }

SetRule
  = _ key:String _ "=" _ val:Block {
    return ({ rule: "set", key, val })
  }

PipeRule
  = _ key:String _ "|" _ val:Block {
    return ({ rule: "pipe", key, val })
  }

String
  = '"' _ str:[^"]+ _ '"' {
    return str.join("")
  }
  / "`" _ str:[^`]+ _ "`" {
    return str.join("")
  }
  / str:[0-9a-zA-Z\-]+ {
    return str.join("")
  }

_ "whitespace"
  = [ \t\n\r]*