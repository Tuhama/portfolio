import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Header } from '../Header'

describe('Header', () => {
    it('renders the site name link', () => {
        render(<Header />)
        // Linking to branding is a key architectural choice
        expect(screen.getByRole('link', { name: /tuhama\.dev/i })).toBeDefined()
    })

    it('renders navigation links via translations using accessible roles', () => {
        render(<Header />)

        // We expect these to be links. In our mocks, t('key') returns the 'key' itself.
        // Using /key/i regex makes it resilient to small casing changes.
        expect(screen.getAllByRole('link', { name: /about/i }).length).toBeGreaterThan(0)
        expect(screen.getAllByRole('link', { name: /projects/i }).length).toBeGreaterThan(0)
        expect(screen.getAllByRole('link', { name: /security/i }).length).toBeGreaterThan(0)
        expect(screen.getAllByRole('link', { name: /contact/i }).length).toBeGreaterThan(0)
    })
})
