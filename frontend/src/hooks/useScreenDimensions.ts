import { useState, useEffect } from 'react'
import { Dimensions } from 'react-native'

/*
For iPhone X/XR/XS etc. (notch) handling, we have the library - react-native-iphone-x-helper
https://github.com/ptelad/react-native-iphone-x-helper#readme
for positioning safe/unsafe ios/android notch/non-notch

This is useful for when you need more granular layout control beyond what SafeAreaView does
*/

export const ScreenDimensions = {
  height: Math.round(Dimensions.get('window').height),
  width: Math.round(Dimensions.get('window').width),
};


export const useScreenDimensions = () => {
  const [size, setSize] = useState(Dimensions.get('window'))

  useEffect(() => {
    const onChange = (result: any) => {
      setSize(result.window)
    }
    Dimensions.addEventListener('change', onChange)
    return () => Dimensions.removeEventListener('change', onChange)
  })

  return {
    ...size,
    isLandscape: size.width > size.height
  }
}
