import React from 'react';
import Button from '@mui/material/Button';

export default function CustomButton({ children, onClick }) {
  return (
    <Button onClick={onClick} variant="outlined">{children}</Button>
  );
}
