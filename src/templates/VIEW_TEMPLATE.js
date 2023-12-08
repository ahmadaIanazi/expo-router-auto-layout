const VIEW_TEMPLATE = `
import {BOARD_NAME_GO_HERE} from '{IMPORT_FROM_PATH}'

export default function {VIEW_NAME_GO_HERE}() {
  return <{BOARD_NAME_GO_HERE} />
}
`
module.exports = { VIEW_TEMPLATE };