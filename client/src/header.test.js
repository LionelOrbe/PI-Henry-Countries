import { render, screen } from '@testing-library/react'
import Header from './components/Header/Header'

describe('Header', () => {
 it('Renders appropriately', () => {
   render(<Header />)
   expect(screen.getByText(/countries/i)).toBeInTheDocument()
 })
})