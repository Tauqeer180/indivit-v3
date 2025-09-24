'use client'
// pages/code-editor.js
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import AceEditor from 'react-ace'

// Dynamically import AceEditor to avoid SSR issues
// const AceEditor = dynamic(() => import('react-ace'), { ssr: false })

import 'ace-builds/src-noconflict/mode-html'
import 'ace-builds/src-noconflict/mode-css'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-monokai'
import { MarkdownDisplay } from '@/components/common/MarkdownDisplay'
import { cn } from '@/lib/utils'
import { CollapseLeftIcon, CollapseRightIcon } from '@/assets/svgIcons'

export default function CodeEditorPage() {
  const [html, setHtml] = useState('<h1>Hello, world!</h1>')
  const [css, setCss] = useState('h1 { color: blue; }')
  const [js, setJs] = useState('console.log("Hello from JS")')
  const [srcDoc, setSrcDoc] = useState('')
  const [isCollapsed, setCollapsed] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`

            ${html}
      `)
    }, 500)

    return () => clearTimeout(timeout)
  }, [html, css, js])

  return (
    <>
      <Head>
        <title>Next.js Code Editor</title>
      </Head>

      <div className="tw-flex tw-flex-col md:tw-flex-row tw-h-screen relative">
        <span
          className={cn(
            'tw-absolute tw-bg-white tw-z-10 tw-rounded tw-px-1 tw-cursor-pointer tw-border tw-border-solid',
            isCollapsed ? 'tw-left-0' : 'tw-left-[calc(50%-15px)]'
          )}
          onClick={() => setCollapsed(!isCollapsed)}
        >
          {isCollapsed ? <CollapseRightIcon /> : <CollapseLeftIcon />}
        </span>
        {!isCollapsed && (
          <div className="tw-w-full md:tw-w-1/2 tw-p-2 tw-space-y-4 tw-bg-gray-900 tw-text-white tw-overflow-auto">
            <AceEditor
              mode="html"
              theme="monokai"
              onChange={setHtml}
              value={html}
              width="100%"
              height="97vh"
              className="tw-h-full"
              setOptions={{ useWorker: false }}
            />
          </div>
        )}

        <div
          className={cn(
            'tw-w-full tw-p-2 tw-bg-white tw-h-full tw-overflow-auto  ',
            !isCollapsed && 'md:tw-w-1/2'
          )}
        >
          <MarkdownDisplay enableTailwind={true}>{srcDoc}</MarkdownDisplay>
        </div>
      </div>
    </>
  )
}
