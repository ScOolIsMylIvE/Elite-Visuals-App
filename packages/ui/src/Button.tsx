import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
};

export const Button: React.FC<Props> = ({ label, ...props }) => (
  <button {...props}>{label}</button>
);
