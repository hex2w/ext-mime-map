# Extension to MIME type & MIME type to extension

This module provides a map of MIME types to file extensions.

## Usage

```js
// ES6

import mimeExtMap from "ext-mime-map"

mime2ExtMap(".js")  // text/javascript
mime2ExtMap("application/octet-stream")  // [ ".a", ".bin", ".bpk", ".deploy", ".dist", ".distz", ".dmg", ".dms",  ".dump", ".elc", ".iso", ".lha", ".lrf", ".lzh", ".o", ".obj", ".pkg", ".so" ]
mime2ExtMap("application/json")  // .json
mime2ExtMap("application/zip")  // .zip
mime2ExtMap("application/x-zip-compressed")  // application/octet-stream

```

**Note**: When searching for MIME type by file extension, the extension must start with a dot. For example, `.js` and not `js`.

For more complicated use cases you can use `map.json` - a JSON map of MIME types to file extensions.
