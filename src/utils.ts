import { builtinModules } from 'node:module'
import { multilineCommentsRE, singlelineCommentsRE } from 'vite-plugin-utils/constant'

export const builtins = [
  ...builtinModules.map(m => !m.startsWith('_')),
  ...builtinModules.map(m => !m.startsWith('_')).map(m => `node:${m}`)
]

export function isCommonjs(code: string) {
  // Avoid matching the content of the comment
  code = code
    .replace(multilineCommentsRE, '')
    .replace(singlelineCommentsRE, '')
  return /\b(?:require|module|exports)\b/.test(code)
}
