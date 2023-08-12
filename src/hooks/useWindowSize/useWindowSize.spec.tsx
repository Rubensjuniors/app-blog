import { renderHook } from '@testing-library/react-hooks'

import useWindowSize from './useWindowSize'

describe('useWindowSize', () => {
  it('should return the window size', () => {
    const { result } = renderHook(() => useWindowSize())

    expect(result.current.width).toBe(window.innerWidth)
    expect(result.current.height).toBe(window.innerHeight)
  })
  it('should remove the resize event listener on unmount', () => {
    const { unmount } = renderHook(() => useWindowSize())

    const removeEventListenerMock = jest.spyOn(window, 'removeEventListener')

    unmount()

    expect(removeEventListenerMock).toHaveBeenCalledWith(
      'resize',
      expect.any(Function)
    )
  })
})
