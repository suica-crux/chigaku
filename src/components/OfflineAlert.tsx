'use client';

import Alert from './Alert';
import { useOnlineStatus } from '@/lib/useOnlineStatus';

export default function OfflineAlert() {
  const isOnline = useOnlineStatus();

  return <div>{!isOnline && <Alert type="caution">オフラインです</Alert>}</div>;
}
