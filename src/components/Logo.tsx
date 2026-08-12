/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function Logo({ className = '', light = true }: LogoProps) {
  return (
    <div className={`flex items-center select-none ${className}`} id="okamura-logo">
      <img
        src="/src/assets/images/Okamura-logo02.svg"
        alt="Okamura Barbers"
        className="h-10 w-auto object-contain"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
