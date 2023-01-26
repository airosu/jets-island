import { getFileExtension } from 'utils/string/get-file-extension/getFileExtension'
import { getFilename } from 'utils/string/get-filename/getFilename'

export const doesPathContainFilename = (path: string) => getFilename(path) && getFileExtension(path)
