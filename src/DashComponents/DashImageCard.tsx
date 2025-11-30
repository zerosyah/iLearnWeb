import { Box } from '@mui/material'
//import React from 'react'

type Props = {
    width?: string,
    height?: string
    borderRadius?: string
    border?: string
    src?: string
    alt?: string
    objectF?: string
}

function DashImageCard({width, height, borderRadius, border, src, alt, objectF}: Props) {
  return (
    <Box>
        <img src={src} alt={alt} style={{width: width, height: height, border: border, borderRadius: borderRadius,}} className={`${objectF} p-0`} />
    </Box>
  )
}

export default DashImageCard