import React, {useState} from 'react'
import { types } from 'react-bricks/frontend'

type Emoji = 'clap' | 'heart' | 'star'

interface CustomButtonProps {
  hasShadow: boolean
  hasRadius: number
  hasEmoji: Emoji
}

const CustomButton: types.Brick<CustomButtonProps> = ({hasRadius, hasShadow, hasEmoji}) => {
  const [ccolor, setCcolor] = useState<string>("");
  
  function changeColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    setCcolor(randomColor);
  }
  
  return (
  <div className='flex justify-center items-center w-full'>
    <button onClick={changeColor} className= {`text-5xl w-60 h-60 text-center ${hasShadow ? 'shadow-xl' : ''}`} style={{"borderRadius": `${hasRadius}px`, "backgroundColor": `#${ccolor}`}}> 
    <span>{hasEmoji === 'clap' ? '👏' : (hasEmoji === 'heart' ? '💔' : '🌟')}</span>
    </button>
  </div>
  )
}

CustomButton.schema = {
  name: 'custombutton',
  label: 'CustomButtton',
  getDefaultProps: () => ({
    hasEmoji: 'clap',
    hasShadow: true,
    hasRadius: true
  }),
  sideEditProps: [
    {
      name: 'hasShadow',
      label: 'Shadow',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'hasRadius',
      label: 'Radius',
      type: types.SideEditPropType.Number,
    },
    {
      name: 'hasEmoji',
      label: 'Emoji',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Radio,
        options: [
          { value: 'clap', label: 'Clap' },
          { value: 'heart', label: 'Heart' },
          { value: 'star', label: 'Star' },
        ],
      },
    },

  ],
}

export default CustomButton