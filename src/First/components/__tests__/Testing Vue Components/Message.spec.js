import { mount } from '@vue/test-utils'
import Message from '@/First/components/Message'

// Ejercicio: Romper el componente sin romper los tests

const createCmp = propsData => mount(Message, { propsData })

describe('Message.test.js', () => {
  let cmp

  describe('Properties', () => {
    // Testing Vue functionality
    it('has a message property', () => {
      cmp = createCmp({ message: 'hey' })
      expect(cmp.props().message).toBe('hey')
    })
    // Testing Vue functionality
    it("has a cat property, since it's added as an attribute", () => {
      cmp = createCmp({ cat: 'hey', message: 'hey' })
      expect(cmp.props().cat).toBeUndefined()
    })
    // Testing Vue functionality
    it('Paco is the default author', () => {
      cmp = createCmp({ message: 'hey' })
      expect(cmp.props().author).toBe('Paco')
    })

    describe('Validation', () => {
      const message = createCmp({ message: 'hey' }).vm.$options.props.message
      // Testing Vue functionality
      it('message is of type string', () => {
        expect(message.type).toBe(String)
      })
      // Testing Vue functionality
      it('message is required', () => {
        expect(message.required).toBeTruthy()
      })
      // Testing implementations details
      it('message has at least length 2', () => {
        expect(message.validator && message.validator('a')).toBeFalsy()
        expect(message.validator && message.validator('aa')).toBeTruthy()
      })
    })
  })

  describe('Events', () => {
    beforeEach(() => {
      cmp = createCmp({ message: 'Cat' })
    })
    // Implementation details.
    // Is not maintainable. If we refactor the handleClick method, the test fails
    it('calls handleClick when click on message', () => {
      const handleClick = jest.fn()
      cmp.setMethods({ handleClick })
      const el = cmp.find(".message").trigger('click')

      expect(handleClick).toBeCalled()
    })
    // Implementation details
    // Instead of accessing to the instance to fire the method, it is much better to fire a click in the element.
    // cmp.find('.message').trigger('click')
    // If we rename the handleClick method, the test fails
    it('triggers a message-clicked event when a handleClick method is called', () => {
      const stub = jest.fn()
      cmp.vm.$on('message-clicked', stub)
      cmp.vm.handleClick()

      expect(stub).toBeCalledWith('Cat')
    })
  })
})
