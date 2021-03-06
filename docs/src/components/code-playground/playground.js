import React from 'react'
import { createPortal } from 'react-dom'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { Box, Flex, Grid, Text, Button, Image } from '@64labs/ui'
import * as hooks from '@64labs/hooks'
import prismTheme from './prism-theme'

const scope = {
  Box,
  Flex,
  Grid,
  Text,
  Button,
  Image,
  createPortal,
  ...hooks,
}

export default ({ children, ...props }) => {
  const language = props.className.replace('language-', '')

  return (
    <Box css={prismTheme} mb={4} mx={-3}>
      {language !== 'jsx' ? (
        <Highlight
          {...defaultProps}
          code={children}
          language={language === 'js' ? 'jsx' : language}
          theme={undefined}
        >
          {({ className, tokens, getLineProps, getTokenProps }) => (
            <Box>
              <pre className={className}>
                {tokens.map((line, i) => (
                  <div {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </pre>
            </Box>
          )}
        </Highlight>
      ) : (
        <Box
          ess={{
            position: 'relative',
          }}
        >
          <LiveProvider
            code={children}
            scope={scope}
            mountStylesheet={false}
            noInline={props.noInline}
          >
            <Box
              ess={{
                position: 'absolute',
                left: 0,
                right: 0,
                width: '100%',
                opacity: 0.9,
                bg: 'code.borders',
              }}
            >
              <LiveError />
            </Box>

            <Box
              p={3}
              mb="2px"
              ess={{ border: '1px solid', borderColor: 'palette.grey.200' }}
            >
              <LivePreview />
            </Box>

            <Box ess={{ overflow: 'auto' }}>
              <LiveEditor className={props.className} />
            </Box>
          </LiveProvider>
        </Box>
      )}
    </Box>
  )
}
