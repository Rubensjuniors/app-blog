import { Icon } from '..'

import copy from 'clipboard-copy'

const CopyButton = ({ text, classes }: { text: string, classes?: string }) => {
  return (
    <button className={classes} onClick={() => copy(text)}>
      <Icon id="copy-phosphor" iconSize={22} />
    </button>
  )
}

export default CopyButton
