import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}
const Index: FC<Iprops> = () => {
  return <div>Index</div>
}
export default memo(Index)
