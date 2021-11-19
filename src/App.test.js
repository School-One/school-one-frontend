import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App component', () => {
  it('should render the description of Sophiano College', () => {
    render(<App />);
    const descriptionElement = screen.getByText(
      /Sophiano College liderada por un equipo humano de profesionales calificados, idóneos y comprometidos que propician la formación integral de los educandos/
    );
    expect(descriptionElement).toBeInTheDocument();
  });
});
