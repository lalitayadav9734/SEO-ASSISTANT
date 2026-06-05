export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold">
        Welcome Back 👋
      </h1>

      <p className="text-gray-500 mt-2">
        Manage your website SEO assets from one place.
      </p>

      <div className="grid md:grid-cols-4 gap-4 mt-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">
            Website
          </h3>

          <p className="mt-2 text-gray-600">
            NogaTech
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">
            Industry
          </h3>

          <p className="mt-2 text-gray-600">
            Web Development
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">
            Country
          </h3>

          <p className="mt-2 text-gray-600">
            USA
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">
            SEO Assets
          </h3>

          <p className="mt-2 text-gray-600">
            0 Generated
          </p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">
          Quick Actions
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-xl shadow">
            Generate Keywords
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            Generate Meta Tags
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            Generate Robots.txt
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            Generate Sitemap
          </div>
        </div>
      </div>
    </div>
  );
}