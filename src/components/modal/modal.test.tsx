import { describe, it, vi, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Modal from '.';
import userEvent from '@testing-library/user-event';

describe('Modal test', () => {
  it('should render then close by overlay', async () => {
    const testcontent = Math.random();
    const closeModal = vi.fn();

    render(
      <Modal isOpen={true} onRequestClose={closeModal}>
        {testcontent}
      </Modal>
    );

    expect(screen.getByText(testcontent.toString())).toBeInTheDocument();
    const overlay = screen.getByTestId<HTMLDivElement>('modal-overlay');
    expect(overlay).toBeInTheDocument();

    const user = userEvent.setup();
    await user.click(overlay);

    expect(closeModal).toBeCalledTimes(1);
  });

  it('should render then close by close button', async () => {
    const testcontent = Math.random();
    const closeModal = vi.fn();

    render(
      <Modal isOpen={true} onRequestClose={closeModal}>
        {testcontent}
      </Modal>
    );

    expect(screen.getByText(testcontent.toString())).toBeInTheDocument();
    const overlay = screen.getByTestId<HTMLDivElement>('modal-close');
    expect(overlay).toBeInTheDocument();

    const user = userEvent.setup();
    await user.click(overlay);

    expect(closeModal).toBeCalledTimes(1);
  });

  it('should not render modal', async () => {
    const testcontent = Math.random();
    const closeModal = vi.fn();

    const { container } = render(
      <Modal isOpen={false} onRequestClose={closeModal}>
        {testcontent}
      </Modal>
    );
    expect(container).toBeEmptyDOMElement();
  });
});
