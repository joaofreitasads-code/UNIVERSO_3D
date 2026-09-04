import React, { memo } from 'react';

interface CleanImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  width?: number | string;
  height?: number | string;
}

export const CleanImage: React.FC<CleanImageProps> = memo(({
  src,
  alt,
  className = '',
  loading = 'lazy',
  priority = false,
  width,
  height,
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
      style={{
        contentVisibility: 'auto',
      }}
    />
  );
});
CleanImage.displayName = 'CleanImage';


