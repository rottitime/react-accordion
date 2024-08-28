import { render, screen, fireEvent } from '@testing-library/react'
import Accordion from './Accordion'

const list = [
  { title: 'Title 1', content: 'Content 1' },
  { title: 'Title 2', content: 'Content 2' },
  { title: 'Title 3', content: 'Content 3' }
]

describe('Accordion', () => {
  it('renders the accordion with default open item', () => {
    render(<Accordion list={list} defaultOpen={1} />)

    expect(screen.getByText('Content 1')).not.toBeVisible()

    // Assert that the second item is open by default
    expect(screen.getByText('Content 2')).toBeVisible()
  })

  it('toggles the accordion item when clicked', () => {
    render(<Accordion list={list} />)

    // Click on the first accordion item
    fireEvent.click(screen.getByText('Title 1'))

    // Assert that the first item is now open
    expect(screen.getByText('Content 1')).toBeVisible()

    // Click on the second accordion item
    fireEvent.click(screen.getByText('Title 2'))

    // Assert that the first item is closed and the second item is open
    expect(screen.queryByText('Content 1')).not.toBeVisible()
    expect(screen.getByText('Content 2')).toBeVisible()
  })
})
