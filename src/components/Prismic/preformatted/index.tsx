'use client'
import { CopyButton } from '@/components/basic'
import { Highlight, themes } from 'prism-react-renderer'

import './style.scss'

const Preformatted = ({ code }: { code: string }) => {

  return (
    <div className="my-4 ">
      <Highlight
        theme={themes.dracula}
        code={code}
        language="tsx"
      >
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <>
            <pre className="flex flex-col gap-2 p-4 overflow-x-auto overflow-y-auto max-h-[450px] scroll" style={style}>
              <CopyButton classes="self-end" text={code}/>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  <span className="mr-4">{i + 1}</span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          </>
        )}
      </Highlight>

    </div>
  )
}

export default Preformatted
