'use client';

import Alert from './Alert';
import { useOnlineStatus } from '@/lib/useOnlineStatus';
import { useState, useEffect } from 'react';

export default function OfflineAlert() {
  const isOnline = useOnlineStatus();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <div>{!isOnline && <Alert type="caution">オフラインです</Alert>}</div>;
}
