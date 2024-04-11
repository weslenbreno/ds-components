import { render } from '@testing-library/react'
import { Avatar } from './Avatar'

test('renders Avatar.Root without crashing', () => {
    const { getByText } = render(<Avatar.Root>Test</Avatar.Root>)
    const element = getByText(/Test/i)
    expect(element).toBeInTheDocument()
})

// test('renders Avatar.Image without crashing', () => {
//     const { getByAltText } = render(<Avatar.Root><Avatar.Image src="test.jpg" alt="Test" /></Avatar.Root>)
//     const image = getByAltText(/Test/i)
//     expect(image).toBeInTheDocument()
//     expect(image).toHaveAttribute('src', 'test.jpg')
// })

// test('renders Avatar.Fallback without crashing', async () => {
//     const { getByText } = render(<Avatar.Root><Avatar.Fallback delayMs={1000}>Test</Avatar.Fallback></Avatar.Root>)
    
//     act(() => {
//         vi.advanceTimersByTime(1000)
//         const element = getByText(/Test/i)
//         expect(element).toBeInTheDocument()
//     })
// })