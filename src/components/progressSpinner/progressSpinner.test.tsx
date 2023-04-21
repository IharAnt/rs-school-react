import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProgressSpinner from '.';

describe('ProgressSpinner test', () => {
  it('spinner is shown', async () => {
    render(<ProgressSpinner isShow={true} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('spinner is not shown', async () => {
    const { container } = render(<ProgressSpinner isShow={false} />);
    expect(container).toBeEmptyDOMElement();
  });
});
