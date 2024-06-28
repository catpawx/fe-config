import type { FC } from 'react'
import React, { useEffect, useState } from 'react'

import Aa from './components/a'
import Bb from './components/b'
import { SomeEnum } from './enum'

const App: FC = _ => {
  const [value] = useState(0)

  useEffect(() => {
    console.log(value)
  }, [])

  return (
    <>
      <Aa e={SomeEnum.H} />
      <Bb />
    </>
  )
}

export default App
