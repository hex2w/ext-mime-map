import map from "./map.js"


export default function mime2ExtMap (str) {
    if (str.startsWith(".")) {
        for (const [key, val] of Object.entries(map)) {
            if (Array.isArray(val) && val.includes(str))
                return key
            else if (val === str)
                return key
        }

        return "application/octet-stream"
    } else {
        str = str.toLowerCase().split(";")[0].trim()
        return map[str] || "application/octet-stream"
    }
}
