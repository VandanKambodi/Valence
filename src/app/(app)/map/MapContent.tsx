'use client';

import { useEffect, useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import AssetSidebar from '@/components/AssetSidebar';
import dynamic from 'next/dynamic';
import { IAsset } from '@/models/Asset';

interface ApiResponse {
  success: boolean;
  data: IAsset[];
}

interface OptimalSite {
  name: string;
  location: { lat: number; lng: number };
  score: number;
  reasons: string[];
}

const ALL_ASSET_TYPES = ['Renewable', 'Hydrogen', 'Demand'];

export default function MapContent() {
  const [allAssets, setAllAssets] = useState<IAsset[]>([]);
  const [selectedAsset, setSelectedAsset] = useState<IAsset | null>(null);
  const [status, setStatus] = useState<'loading' | 'success' | 'error' | 'no-data'>('loading');
  const [filters, setFilters] = useState<string[]>(ALL_ASSET_TYPES);
  const [optimalSites, setOptimalSites] = useState<OptimalSite[]>([]);
  const [isAnalysisLoading, setIsAnalysisLoading] = useState(false);

  const searchParams = useSearchParams();

  const MapLoader = useMemo(
    () =>
      dynamic(() => import('@/components/MapLoader'), {
        ssr: false,
        loading: () => (
          <div className="h-full w-full flex items-center justify-center bg-gray-200">
            <p>Loading Map...</p>
          </div>
        ),
      }),
    []
  );

  useEffect(() => {
    const fetchAssets = async () => {
      setStatus('loading');
      try {
        const response = await fetch('/api/assets');
        const result: ApiResponse = await response.json();
        if (result.success) {
          const assets: IAsset[] = result.data;
          setAllAssets(assets);
          setStatus(assets.length > 0 ? 'success' : 'no-data');

          const assetIdFromUrl = searchParams.get('assetId');
          if (assetIdFromUrl) {
            const assetToSelect = assets.find(a => String(a._id) === assetIdFromUrl);
            if (assetToSelect) setSelectedAsset(assetToSelect);
          }
        } else {
          setStatus('error');
        }
      } catch {
        setStatus('error');
      }
    };

    fetchAssets();
  }, [searchParams]);

  const handleFilterChange = (assetType: string) => {
    setFilters(prev =>
      prev.includes(assetType) ? prev.filter(f => f !== assetType) : [...prev, assetType]
    );
  };

  const filteredAssets = useMemo(
    () => allAssets.filter(asset => filters.includes(asset.assetType)),
    [allAssets, filters]
  );

  const handleAssetClick = (asset: IAsset) => setSelectedAsset(asset);

  const handleRunOptimization = async () => {
    setIsAnalysisLoading(true);
    setOptimalSites([]);
    try {
      const response = await fetch('/api/optimize');
      const result = await response.json();
      if (result.success) setOptimalSites(result.data);
    } catch (err) {
      console.error('Failed to run optimization:', err);
    } finally {
      setIsAnalysisLoading(false);
    }
  };

  return (
    <div className="flex h-full w-full">
      {(status === 'success' || status === 'no-data' || status === 'loading') && (
        <AssetSidebar
          assets={filteredAssets}
          filters={filters}
          isAnalysisLoading={isAnalysisLoading}
          onAssetClick={handleAssetClick}
          onFilterChange={handleFilterChange}
          onRunOptimization={handleRunOptimization}
        />
      )}
      <div className="flex-grow h-full z-0">
        <MapLoader
          assets={filteredAssets}
          status={status}
          selectedAsset={selectedAsset}
          optimalSites={optimalSites}
        />
      </div>
    </div>
  );
}
