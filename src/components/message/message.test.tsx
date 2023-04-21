import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Message from '.';

describe('Message test', () => {
  it('Message is shown', async () => {
    render(<Message>Error message</Message>);
    expect(screen.getByText('Error message')).toBeInTheDocument();
  });
});
