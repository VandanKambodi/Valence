import { Suspense } from 'react';
import MapContent from './MapContent';

export default function MapPage() {
  return (
    <Suspense fallback={<div>Loading Map Page...</div>}>
      <MapContent />
    </Suspense>
  );
}
