import React, { useState } from 'react';

interface CleanImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

export const CleanImage: React.FC<CleanImageProps> = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  priority = false,
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      decoding="async"
      loading={priority ? 'eager' : loading}
      fetchPriority={priority ? 'high' : 'auto'}
      onLoad={() => setLoaded(true)}
      onError={() => {
        setError(true);
        setLoaded(true);
      }}
      className={`${className} ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200 ${error ? 'grayscale' : ''}`}
      style={{
        contentVisibility: 'auto',
      }}
    />
  );
};

