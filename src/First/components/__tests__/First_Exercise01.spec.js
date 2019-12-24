import { mount } from '@vue/test-utils'
import MessageList from '@/First/components/MessageList'

// Exercise 01:
// Break the component without breaking the test

describe('Exercise01.spec.js', () => {
  let cmp

  beforeEach(() => {
    cmp = mount(MessageList, {
      propsData: {
        messages: ['Cat']
      }
    })
  })

  it('Testing implementation details', () => {
    const spy = jest.spyOn(cmp.vm, 'handleMessageClick')

    expect(cmp.vm.isMessageClicked).toBe(false)

    cmp.vm.handleMessageClick('message!')
    
    expect(spy).toHaveBeenCalled()
    expect(spy).toBeCalledWith('message!')
    expect(cmp.vm.isMessageClicked).toBe(true)
  })
})
