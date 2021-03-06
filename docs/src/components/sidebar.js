import React from 'react'
import { Link } from 'gatsby'
import { Box, Text } from '@64labs/ui'

const Sidebar = () => {
  return (
    <Box
      ess={{
        pt: 2,
        pb: 5,
        minHeight: '100vh',
        bg: ['white', 'white', 'palette.grey.50'],
        ul: {
          listStyle: 'none',
        },
        '& > ul > li': {
          mt: 4,
        },
        '.ess_Text': {
          color: 'palette.pink.700',
          px: 4,
          pb: 3,
          borderBottom: '1px solid',
          borderColor: 'palette.grey.200',
        },
        a: {
          display: 'block',
          fontSize: 1,
          lineHeight: '16px',
          color: 'palette.grey.700',
          borderBottom: '1px solid',
          borderColor: 'palette.grey.200',
          px: 4,
          py: 3,
        },
      }}
    >
      <ul>
        <li>
          <Text variant="h6">Documentation</Text>
          <ul>
            <li>
              <Link to="/docs/introduction">Introduction</Link>
            </li>
            <li>
              <Link to="/docs/getting-started">Getting Started</Link>
            </li>
            <li>
              <Link to="/docs/how-it-works">How It Works</Link>
            </li>
          </ul>
        </li>

        <li>
          <Text variant="h6">Guides</Text>
          <ul>
            <li>
              <Link to="/docs/introduction">UI Primitives</Link>
            </li>
            <li>
              <Link to="/docs/creating-components">Creating Components</Link>
            </li>
            <li>
              <Link to="/docs/how-it-works">Theme System</Link>
            </li>
            <li>
              <Link to="/docs/how-it-works">Tokens & Variants</Link>
            </li>
          </ul>
        </li>

        <li>
          <Text variant="h6">Components</Text>
          <ul>
            <li>
              <Link to="/docs/box-flex-grid">Box, Flex, & Grid</Link>
            </li>
            <li>
              <Link to="/docs/text">Text</Link>
            </li>
            <li>
              <Link to="/docs/button">Button</Link>
            </li>
            <li>
              <Link to="/docs/image">Image</Link>
            </li>
          </ul>
        </li>
      </ul>
    </Box>
  )
}

export default Sidebar
