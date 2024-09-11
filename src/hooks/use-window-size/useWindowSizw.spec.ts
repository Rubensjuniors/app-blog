import { act, renderHook } from '@/configs/tests/custom-render'

import useWindowSize from '.'

const mockWindowSize = (width: number, height: number) => {
  global.innerWidth = width
  global.innerHeight = height
  global.dispatchEvent(new Event('resize'))
}

const setupHook = () => renderHook(() => useWindowSize())

describe('useWindowSize', () => {
  it('Should return the window size correctly', () => {
    mockWindowSize(1024, 768)

    const { result } = setupHook()

    expect(result.current.width).toBe(1024)
    expect(result.current.height).toBe(768)
  })

  it('Should update window size when resizing', () => {
    const { result } = setupHook()

    act(() => {
      mockWindowSize(800, 600)
    })

    expect(result.current.width).toBe(800)
    expect(result.current.height).toBe(600)

    act(() => {
      mockWindowSize(1280, 720)
    })

    expect(result.current.width).toBe(1280)
    expect(result.current.height).toBe(720)
  })

  it('Should remove the resize listener when dismantling the hook', () => {
    const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener')
    const { unmount } = setupHook()

    unmount()

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'resize',
      expect.any(Function)
    )
    removeEventListenerSpy.mockRestore()
  })
})
