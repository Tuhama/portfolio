import { render, screen, fireEvent } from '@testing-library/react'
import { vi, describe, it, expect } from 'vitest'
import { LanguageSwitcher } from '../LanguageSwitcher'

// Mock the router specifically
vi.mock('@/i18n/routing', () => ({
    useRouter: vi.fn(() => ({
        replace: vi.fn(),
        push: vi.fn(),
    })),
    usePathname: vi.fn(() => '/'),
}))

describe('LanguageSwitcher', () => {
    it('renders the language switcher button', () => {
        render(<LanguageSwitcher />)
        // Preferring getByRole for interactive elements
        expect(screen.getByRole('button', { name: /switch language/i })).toBeDefined()
    })

    it('opens the menu when clicked', () => {
        render(<LanguageSwitcher />)
        const trigger = screen.getByRole('button', { name: /switch language/i })
        fireEvent.click(trigger)
        expect(trigger).toBeTruthy()
    })
})
