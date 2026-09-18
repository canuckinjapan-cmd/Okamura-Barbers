/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

import okamuraLogoImg from '../assets/images/Okamura-logo02.svg';

interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function Logo({ className = '', light = true }: LogoProps) {
  return (
    <div className={`flex items-center select-none shrink-0 ${className}`} id="okamura-logo">
      <img
        src={okamuraLogoImg}
        alt="Okamura Barbers"
        className="h-8 sm:h-9 md:h-10 w-auto max-w-[208px] sm:max-w-[240px] md:max-w-none object-contain"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
