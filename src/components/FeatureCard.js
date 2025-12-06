// src/components/FeatureCard.jsx
export default function FeatureCard({ title, desc, icon }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 text-xl">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <p className="mt-2 text-sm text-slate-600">{desc}</p>
        </div>
      </div>
    </div>
  );
}
