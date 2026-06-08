"use client";

import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [user, setUser] =
    useState(null);

  useEffect(() => {
    const getUser = async () => {
      const userId =
        localStorage.getItem(
          "userId"
        );

      if (!userId) return;

      const response =
        await fetch(
          `/api/user/${userId}`
        );

      const data =
        await response.json();

      if (data.success) {
        setUser(data.user);
      }
    };

    getUser();
  }, []);

  if (!user) {
    return (
      <h1>Loading...</h1>
    );
  }

  return (
    <div>
      <h1 className="text-4xl font-bold">
        Welcome Back, {user.name} 👋
      </h1>

      <div className="grid md:grid-cols-3 gap-4 mt-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">
            Website
          </h3>

          <p>
            {user.websiteName}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">
            Industry
          </h3>

          <p>
            {user.industry}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">
            Country
          </h3>

          <p>
            {user.targetCountry}
          </p>
        </div>
      </div>
    </div>
  );
}