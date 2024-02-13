import React from 'react'
import { Button, ThemeProviderWrapper } from '@vidhyasagar-r/sb-library';

function ButtonComponent() {
  return (
    <ThemeProviderWrapper projectThemeIdentifier="theme1">
      <Button className="madhu-btn">Download</Button>
    </ThemeProviderWrapper>
  )
}

export default ButtonComponent