import React, { memo } from 'react';

interface CleanImageProps {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  width?: number | string;
  height?: number | string;
}

export const CleanImage: React.FC<CleanImageProps> = memo(({
  src,
  fallbackSrc,
  alt,
  className = '',
  loading = 'lazy',
  priority = false,
  width = 300,
  height = 300,
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      referrerPolicy="no-referrer"
      decoding="async"
      loading={priority ? 'eager' : loading}
      fetchPriority={priority ? 'high' : 'low'}
      className={className}
      onError={(e) => {
        e.currentTarget.onerror = null;
        if (fallbackSrc && e.currentTarget.src !== fallbackSrc) {
          e.currentTarget.src = fallbackSrc;
        }
      }}
    />
  );
});
CleanImage.displayName = 'CleanImage';


