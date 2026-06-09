"use client";

import {
  useEffect,
  useState,
} from "react";

export default function HistoryPage() {
  const [assets, setAssets] =
    useState([]);

  useEffect(() => {
    const fetchAssets =
      async () => {
        const userId =
          localStorage.getItem(
            "userId"
          );

        const response =
          await fetch(
            `/api/assets/${userId}`
          );

        const data =
          await response.json();

        if (data.success) {
          setAssets(
            data.assets
          );
        }
      };

    fetchAssets();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        History
      </h1>

      <div className="space-y-4">
        {assets.map(
          (asset) => (
            <div
              key={asset._id}
              className="bg-white p-4 rounded-xl shadow"
            >
              <h2 className="font-bold">
                {asset.type}
              </h2>

              <p className="mt-2">
                {asset.input}
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
}