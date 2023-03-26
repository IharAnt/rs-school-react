import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import RegistrationSelect from '.';

describe('Registration select test', () => {
  it('select option', async () => {
    const testRef = React.createRef<HTMLSelectElement>();
    render(
      <RegistrationSelect
        label="Country:"
        id="country"
        selectref={testRef}
        error="Error select message"
        values={[
          { value: 'usa', content: 'USA' },
          { value: 'canada', content: 'Canada' },
        ]}
      ></RegistrationSelect>
    );
    const select = screen.getByTestId<HTMLSelectElement>('reg-select-element');
    expect(select).toBeInTheDocument();
    expect(screen.getAllByRole('option').length).toBe(2);

    const option = screen.getByRole<HTMLOptionElement>('option', {
      name: /USA/i,
    });
    expect(option).toBeInTheDocument();

    const user = userEvent.setup();

    await user.selectOptions(select, option);
    expect(option.selected).toBe(true);
  });
});
