import { act, renderHook } from '@/configs/tests/custom-render'

import useHeader from '.'

const setupHook = () => renderHook(() => useHeader())

describe('useHeader', () => {
  it('should return default values correctly', () => {
    const { result } = setupHook()

    const { isOpenSidemenu, handleToggleSideMenu } = result.current

    expect(isOpenSidemenu).toBe(false)
    expect(typeof handleToggleSideMenu).toBe('function')
  })

  it('should change isOpenMenu when handleToggleMenu is called', () => {
    const { result } = setupHook()

    act(() => {
      result.current.handleToggleSideMenu()
    })

    expect(result.current.isOpenSidemenu).toBe(true)

    act(() => {
      result.current.handleToggleSideMenu()
    })

    expect(result.current.isOpenSidemenu).toBe(false)
  })
})
