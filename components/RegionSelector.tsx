'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Region, getEnabledRegions } from '@/lib/regions';

interface RegionSelectorProps {
  currentRegion?: Region;
  className?: string;
}

export default function RegionSelector({ currentRegion, className = '' }: RegionSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const regions = getEnabledRegions();

  const displayRegion = currentRegion || regions[0];

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#001845]/50 border border-[#002366] hover:border-[#FF8C00] transition-colors text-sm"
        aria-label="Select region"
      >
        <span className="text-lg">{displayRegion.flag}</span>
        <span className="text-[#B0C4DE]">{displayRegion.code.toUpperCase()}</span>
        <svg
          className={`w-4 h-4 text-[#6b8db4] transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown */}
          <div className="absolute top-full right-0 mt-2 w-56 bg-[#001845] border border-[#002366] rounded-xl shadow-xl z-50 overflow-hidden">
            <div className="py-2">
              {regions.map((region) => (
                <Link
                  key={region.code}
                  href={region.code === 'uk' ? '/' : `/regions/${region.code}`}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-2.5 hover:bg-[#002366]/50 transition-colors ${
                    region.code === displayRegion.code ? 'bg-[#002366]/30' : ''
                  }`}
                >
                  <span className="text-xl">{region.flag}</span>
                  <div className="flex-1">
                    <div className="text-white text-sm font-medium">{region.name}</div>
                    <div className="text-[#6b8db4] text-xs">
                      {region.language} • {region.currency}
                    </div>
                  </div>
                  {region.code === displayRegion.code && (
                    <svg
                      className="w-4 h-4 text-[#FF8C00]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
