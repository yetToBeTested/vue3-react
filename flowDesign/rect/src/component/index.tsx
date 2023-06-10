import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}
const demo: FC<Iprops> = () => {
  return <div>demo</div>
}
export default memo(demo)
