import { mount } from '@vue/test-utils'
import MessageList from '@/First/components/MessageList'
import Message from '@/First/components/Message'

describe('MessageList.test.js', () => {
  let cmp

  beforeEach(() => {
    cmp = mount(MessageList, {
      // Be aware that props is overridden using `propsData`
      propsData: {
        messages: ['Cat']
      }
    })
  })

  it('has received ["Cat"] as the message property', () => {
    expect(cmp.vm.messages).toEqual(['Cat'])
    // Un mejor enfoque es comprobar que el mensaje aparece en la pantalla,
    // No que el dato se ha seteado correctamente en las props (implementation details)
  })

  it('has the expected html structure', () => {
    expect(cmp.element).toMatchSnapshot()
  })

  it('is a MessageList component', () => {
    // The user doesn't bother about this
    expect(cmp.is(MessageList)).toBe(true)

    // Neither this
    expect(cmp.is('ul')).toBe(true)
  })

  it('contains a Message component', () => {
    expect(cmp.contains(Message)).toBe(true)

    // Or with CSS selector
    expect(cmp.contains('.message')).toBe(true)
  })

  // Vue instance
  it('Both MessageList and Message are vue instances', () => {
    expect(cmp.isVueInstance()).toBe(true)
    expect(cmp.find(Message).isVueInstance()).toBe(true)
  })

  it('Message has a "message" property equals to "Cat"', () => {
    expect(cmp.find(Message).props().message).toBe('Cat')
  })

  // Structure
  it('Message element exists', () => {
    expect(cmp.find('.message').exists()).toBe(true)
  })

  it('Message is not empty', () => {
    expect(cmp.find(Message).isEmpty()).toBe(false)
  })

  it('Message has a class attribute set to "message"', () => {
    expect(cmp.find(Message).attributes().class).toBe('message')
  })

  // Style
  it('Message component has the .message class', () => {
    expect(cmp.find(Message).classes()).toContain('message')
  })

  it('Message component has style padding-top: 10', () => {
    expect(cmp.find(Message).attributes().style).toBe('padding-top: 10px;')
  })

  it('Calls handleMessageClick when @message-click happens', () => {
    const stub = jest.fn()
    cmp.setMethods({ handleMessageClick: stub })
    const el = cmp.find('.message').vm.$emit('message-clicked', 'Cat')

    expect(stub).toBeCalledWith('Cat')
  })
})

describe('Custom tests', () => {
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
