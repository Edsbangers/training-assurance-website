'use client';

import { useState } from 'react';

type PreviewTab = 'dashboard' | 'documents' | 'audits' | 'capa';

export default function DashboardPreview() {
  const [activeTab, setActiveTab] = useState<PreviewTab>('dashboard');

  const tabs = [
    { id: 'dashboard' as const, label: 'Compliance Dashboard', icon: '📊' },
    { id: 'documents' as const, label: 'Document Control', icon: '📄' },
    { id: 'audits' as const, label: 'Audit Scheduler', icon: '📋' },
    { id: 'capa' as const, label: 'CAPA Management', icon: '✅' },
  ];

  return (
    <div className="bg-[#001845]/50 border border-[#002366] rounded-2xl overflow-hidden">
      {/* Tab Navigation */}
      <div className="flex border-b border-[#002366] overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-colors whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-[#002366]/50 text-[#FF8C00] border-b-2 border-[#FF8C00]'
                : 'text-[#8ba3c7] hover:text-white'
            }`}
          >
            <span>{tab.icon}</span>
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Preview Content */}
      <div className="p-6">
        {activeTab === 'dashboard' && <DashboardView />}
        {activeTab === 'documents' && <DocumentsView />}
        {activeTab === 'audits' && <AuditsView />}
        {activeTab === 'capa' && <CAPAView />}
      </div>
    </div>
  );
}

function DashboardView() {
  return (
    <div className="space-y-6">
      {/* Compliance Score */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-[#001233] rounded-xl p-4 border border-[#002366]">
          <div className="text-[#8ba3c7] text-sm mb-1">Overall Compliance</div>
          <div className="text-3xl font-bold text-[#FF8C00]">94%</div>
        </div>
        <div className="bg-[#001233] rounded-xl p-4 border border-[#002366]">
          <div className="text-[#8ba3c7] text-sm mb-1">Open Actions</div>
          <div className="text-3xl font-bold text-white">12</div>
        </div>
        <div className="bg-[#001233] rounded-xl p-4 border border-[#002366]">
          <div className="text-[#8ba3c7] text-sm mb-1">Upcoming Audits</div>
          <div className="text-3xl font-bold text-[#B0C4DE]">3</div>
        </div>
        <div className="bg-[#001233] rounded-xl p-4 border border-[#002366]">
          <div className="text-[#8ba3c7] text-sm mb-1">Documents Due</div>
          <div className="text-3xl font-bold text-white">7</div>
        </div>
      </div>

      {/* Standards Progress */}
      <div className="bg-[#001233] rounded-xl p-6 border border-[#002366]">
        <h4 className="text-lg font-semibold mb-4">Standards Compliance</h4>
        <div className="space-y-4">
          {[
            { standard: 'ISO 9001:2015', progress: 96 },
            { standard: 'ISO 14001:2015', progress: 91 },
            { standard: 'ISO 45001:2018', progress: 88 },
            { standard: 'ISO 27001:2022', progress: 82 },
          ].map((item) => (
            <div key={item.standard}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-[#B0C4DE]">{item.standard}</span>
                <span className="text-[#8ba3c7]">{item.progress}%</span>
              </div>
              <div className="h-2 bg-[#001845] rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${
                    item.progress >= 90
                      ? 'bg-gradient-to-r from-[#FF8C00] to-[#e67e00]'
                      : 'bg-[#4a6fa5]'
                  }`}
                  style={{ width: `${item.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DocumentsView() {
  const documents = [
    { name: 'Quality Manual v5.2', status: 'Current', updated: '2 days ago' },
    { name: 'H&S Policy 2025', status: 'Review Due', updated: '14 days ago' },
    { name: 'Environmental Aspects Register', status: 'Current', updated: '5 days ago' },
    { name: 'Risk Assessment Template', status: 'Current', updated: '1 week ago' },
    { name: 'ISMS Statement of Applicability', status: 'Draft', updated: 'Today' },
  ];

  return (
    <div className="space-y-4">
      {/* Search & Filter */}
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search documents..."
          className="flex-1 bg-[#001233] border border-[#002366] rounded-lg px-4 py-2 text-white placeholder-[#6b8db4] focus:outline-none focus:border-[#FF8C00]"
        />
        <button className="px-4 py-2 bg-[#002366] rounded-lg text-[#B0C4DE] hover:bg-[#FF8C00]/20 transition-colors">
          + Upload
        </button>
      </div>

      {/* Document List */}
      <div className="bg-[#001233] rounded-xl border border-[#002366] overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#001845]">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-[#B0C4DE]">Document</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-[#B0C4DE] hidden sm:table-cell">Status</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-[#B0C4DE] hidden md:table-cell">Updated</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#002366]">
            {documents.map((doc, i) => (
              <tr key={i} className="hover:bg-[#001845]/50 transition-colors">
                <td className="px-4 py-3 text-white">{doc.name}</td>
                <td className="px-4 py-3 hidden sm:table-cell">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      doc.status === 'Current'
                        ? 'bg-[#FF8C00]/20 text-[#FF8C00]'
                        : doc.status === 'Review Due'
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : 'bg-[#4a6fa5]/20 text-[#B0C4DE]'
                    }`}
                  >
                    {doc.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-[#8ba3c7] hidden md:table-cell">{doc.updated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AuditsView() {
  const audits = [
    { name: 'ISO 9001 Surveillance Audit', date: '15 Feb 2025', status: 'Scheduled', type: 'External' },
    { name: 'Q1 Internal Audit - Production', date: '28 Jan 2025', status: 'In Progress', type: 'Internal' },
    { name: 'Supplier Audit - Acme Ltd', date: '10 Jan 2025', status: 'Completed', type: 'Supplier' },
    { name: 'ISO 45001 Stage 2 Audit', date: '20 Mar 2025', status: 'Scheduled', type: 'External' },
  ];

  return (
    <div className="space-y-6">
      {/* Calendar Preview */}
      <div className="bg-[#001233] rounded-xl p-6 border border-[#002366]">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-lg font-semibold">January 2025</h4>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-[#002366] rounded transition-colors">&lt;</button>
            <button className="p-2 hover:bg-[#002366] rounded transition-colors">&gt;</button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-sm">
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
            <div key={i} className="text-[#6b8db4] py-2">{day}</div>
          ))}
          {Array.from({ length: 31 }, (_, i) => (
            <div
              key={i}
              className={`py-2 rounded ${
                i + 1 === 10 || i + 1 === 28
                  ? 'bg-[#FF8C00] text-white'
                  : 'hover:bg-[#002366]/50 text-[#B0C4DE]'
              }`}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Audits List */}
      <div className="space-y-3">
        {audits.map((audit, i) => (
          <div
            key={i}
            className="bg-[#001233] rounded-xl p-4 border border-[#002366] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
          >
            <div>
              <div className="font-medium text-white">{audit.name}</div>
              <div className="text-[#8ba3c7] text-sm">{audit.date} • {audit.type}</div>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium w-fit ${
                audit.status === 'Completed'
                  ? 'bg-[#FF8C00]/20 text-[#FF8C00]'
                  : audit.status === 'In Progress'
                  ? 'bg-[#4a6fa5]/20 text-[#B0C4DE]'
                  : 'bg-[#002366] text-white'
              }`}
            >
              {audit.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CAPAView() {
  const capas = [
    { id: 'CAPA-2025-001', title: 'Documentation gap in procedure', priority: 'Medium', status: 'Open', dueDate: '20 Jan 2025' },
    { id: 'CAPA-2025-002', title: 'Training records incomplete', priority: 'High', status: 'In Progress', dueDate: '15 Jan 2025' },
    { id: 'CAPA-2024-089', title: 'Supplier audit finding', priority: 'Low', status: 'Verification', dueDate: '30 Jan 2025' },
    { id: 'CAPA-2024-088', title: 'Risk assessment update required', priority: 'Medium', status: 'Closed', dueDate: '05 Jan 2025' },
  ];

  return (
    <div className="space-y-4">
      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-[#001233] rounded-xl p-4 border border-[#002366] text-center">
          <div className="text-2xl font-bold text-white">4</div>
          <div className="text-[#8ba3c7] text-xs">Open</div>
        </div>
        <div className="bg-[#001233] rounded-xl p-4 border border-[#002366] text-center">
          <div className="text-2xl font-bold text-[#FF8C00]">2</div>
          <div className="text-[#8ba3c7] text-xs">Overdue</div>
        </div>
        <div className="bg-[#001233] rounded-xl p-4 border border-[#002366] text-center">
          <div className="text-2xl font-bold text-[#B0C4DE]">3</div>
          <div className="text-[#8ba3c7] text-xs">In Progress</div>
        </div>
        <div className="bg-[#001233] rounded-xl p-4 border border-[#002366] text-center">
          <div className="text-2xl font-bold text-[#4a6fa5]">15</div>
          <div className="text-[#8ba3c7] text-xs">Closed YTD</div>
        </div>
      </div>

      {/* CAPA List */}
      <div className="bg-[#001233] rounded-xl border border-[#002366] overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#001845]">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-[#B0C4DE]">ID</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-[#B0C4DE] hidden sm:table-cell">Title</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-[#B0C4DE]">Status</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-[#B0C4DE] hidden md:table-cell">Due</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#002366]">
            {capas.map((capa) => (
              <tr key={capa.id} className="hover:bg-[#001845]/50 transition-colors">
                <td className="px-4 py-3 text-[#FF8C00] font-mono text-sm">{capa.id}</td>
                <td className="px-4 py-3 text-white hidden sm:table-cell">{capa.title}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      capa.status === 'Closed'
                        ? 'bg-[#4a6fa5]/20 text-[#B0C4DE]'
                        : capa.status === 'Open'
                        ? 'bg-[#FF8C00]/20 text-[#FF8C00]'
                        : 'bg-[#002366] text-white'
                    }`}
                  >
                    {capa.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-[#8ba3c7] hidden md:table-cell">{capa.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
