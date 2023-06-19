# Extension to MIME type & MIME type to extension

This module provides a map of MIME types to file extensions.

## Usage

```js
// ES6

import mimeExtMap from "ext-mime-map"

mimeExtMap(".js")  // text/javascript
mimeExtMap("application/octet-stream")  // [ ".a", ".bin", ".bpk", ".deploy", ".dist", ".distz", ".dmg", ".dms",  ".dump", ".elc", ".iso", ".lha", ".lrf", ".lzh", ".o", ".obj", ".pkg", ".so" ]
mimeExtMap("application/json")  // .json
mimeExtMap("application/zip")  // .zip
mimeExtMap("application/x-zip-compressed")  // ""

```

**Note**: When searching for MIME type by file extension, the extension must start with a dot. For example, `.js` and not `js`.

For more complicated use cases you can use `map.json` - a JSON map of MIME types to file extensions.
