import React from 'react'
import { types } from 'react-bricks/frontend'

const Thumbnail: types.Brick = () => {
  return <div className="p-6 text-center">Thumbnail</div>
}

Thumbnail.schema = {
  name: 'thumbnail',
  label: 'Thumbnail',
  sideEditProps: [],
}

export default Thumbnail