global.requestAnimationFrame = fn => setTimeout(fn)

// 把 console.error 转换成 error，方便断言
; (() => {
  const spy = jest.spyOn(console, 'error')
  beforeAll(() => {
    spy.mockImplementation((message) => {
      // eslint-disable-next-line
        console.log(message)
      throw new Error(message)
    })
  })

  afterAll(() => {
    spy.mockRestore()
  })
})()
