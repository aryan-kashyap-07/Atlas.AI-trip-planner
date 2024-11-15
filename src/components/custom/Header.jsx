import React from 'react';
import { Button } from '../ui/button';

function Header() {
  return (
    <div className="w-full p-3 shadow-sm flex justify-between px-5">
      <img src="/logo.svg" alt="Logo" />
      <div>
        <Button>Sign In</Button>
      </div>
    </div>
  );
}

export default Header;

