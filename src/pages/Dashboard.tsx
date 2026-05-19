import { Link } from 'react-router-dom'
import { useState } from 'react'
import {
  LayoutGrid, FileText, FolderOpen, Users, Settings, LogOut,
  Search, Plus, Filter, Download, Upload, MoreHorizontal, TrendingUp, DollarSign, Clock, CheckCircle2, FileSpreadsheet, Paperclip, Eye, Shield
} from 'lucide-react'

type View = 'owner' | 'employee'

const employees = [
  { id: 'fritz', name: 'Fritz Buehler', role: 'Owner', initial: 'F' },
  { id: 'sarah', name: 'Sarah Chen', role: 'Loan Officer', initial: 'S' },
  { id: 'marcus', name: 'Marcus Webb', role: 'Loan Officer', initial: 'M' },
]

const deals = [
  { id: 'BCF-1042', borrower: 'Daniel Reyes', address: '14823 NE 92nd St, Redmond, WA', type: 'Fix & Flip', amount: 425000, ltv: '72%', stage: 'Funded', officer: 'Fritz', updated: '2h ago' },
  { id: 'BCF-1041', borrower: 'Madison Holdings LLC', address: '811 Pacific Ave, Tacoma, WA', type: 'DSCR', amount: 680000, ltv: '75%', stage: 'Underwriting', officer: 'Sarah', updated: '5h ago' },
  { id: 'BCF-1040', borrower: 'Karen Whitfield', address: '208 4th St SE, Snohomish, WA', type: 'Bridge', amount: 290000, ltv: '68%', stage: 'Term Sheet', officer: 'Sarah', updated: 'Yesterday' },
  { id: 'BCF-1039', borrower: 'Pinewood Capital', address: '5102 Roosevelt Way, Seattle, WA', type: 'Cash-Out', amount: 1100000, ltv: '65%', stage: 'Funded', officer: 'Marcus', updated: '2 days ago' },
  { id: 'BCF-1038', borrower: 'Thomas Ng', address: '6041 California Ave SW, Seattle, WA', type: 'Fix & Flip', amount: 510000, ltv: '78%', stage: 'Closing', officer: 'Sarah', updated: '2 days ago' },
  { id: 'BCF-1037', borrower: 'Helen Park', address: '942 N 105th St, Seattle, WA', type: 'DSCR', amount: 385000, ltv: '70%', stage: 'Prequalified', officer: 'Marcus', updated: '3 days ago' },
  { id: 'BCF-1036', borrower: 'Riverside Builders', address: '316 SE Everett Mall Way, Everett, WA', type: 'Construction', amount: 1450000, ltv: '70%', stage: 'Underwriting', officer: 'Fritz', updated: '3 days ago' },
  { id: 'BCF-1035', borrower: 'Sofia Martinez', address: '4421 36th Ave NE, Lake Stevens, WA', type: 'Fix & Flip', amount: 320000, ltv: '75%', stage: 'New Lead', officer: 'Unassigned', updated: '4 days ago' },
  { id: 'BCF-1034', borrower: 'Aaron Bell', address: '1217 Broadway, Everett, WA', type: 'Bridge', amount: 245000, ltv: '70%', stage: 'Funded', officer: 'Sarah', updated: '5 days ago' },
  { id: 'BCF-1033', borrower: 'Coastline Group', address: '8800 19th Ave NW, Seattle, WA', type: 'DSCR', amount: 920000, ltv: '72%', stage: 'Underwriting', officer: 'Marcus', updated: '6 days ago' },
]

const stageColors: Record<string, string> = {
  'Funded': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Closing': 'bg-blue-50 text-blue-700 border-blue-200',
  'Underwriting': 'bg-amber-50 text-amber-700 border-amber-200',
  'Term Sheet': 'bg-violet-50 text-violet-700 border-violet-200',
  'Prequalified': 'bg-sky-50 text-sky-700 border-sky-200',
  'New Lead': 'bg-gray-100 text-gray-700 border-gray-200',
}

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<'deals' | 'files'>('deals')
  const [viewAs, setViewAs] = useState<View>('owner')
  const [currentEmployee] = useState(employees[1]) // Sarah for employee view demo

  const isOwner = viewAs === 'owner'
  const visibleDeals = isOwner ? deals : deals.filter(d => d.officer === currentEmployee.name.split(' ')[0])

  const totalPipeline = visibleDeals.filter(d => !['Funded'].includes(d.stage)).reduce((s, d) => s + d.amount, 0)
  const fundedThisMonth = visibleDeals.filter(d => d.stage === 'Funded').reduce((s, d) => s + d.amount, 0)
  const activeCount = visibleDeals.filter(d => !['Funded'].includes(d.stage)).length

  return (
    <div className="min-h-screen bg-[#fafaf8] flex">
      {/* Sidebar */}
      <aside className="w-60 bg-[var(--color-ink)] text-[var(--color-cream)] hidden lg:flex flex-col">
        <div className="px-6 py-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[var(--color-bronze)] flex items-center justify-center text-[var(--color-ink)] serif text-base font-semibold">B</div>
            <div>
              <div className="serif text-sm font-medium">Buehler Capital</div>
              <div className="text-[10px] tracking-[0.15em] uppercase text-[var(--color-cream-soft)] opacity-60">Portal</div>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-3 py-5 space-y-1">
          {[
            { icon: LayoutGrid, label: 'Dashboard', active: true },
            { icon: FileText, label: isOwner ? 'All Deals' : 'My Deals', count: visibleDeals.length },
            { icon: FolderOpen, label: 'Files' },
            ...(isOwner ? [{ icon: Users, label: 'Team' }] : []),
            { icon: Settings, label: 'Settings' },
          ].map(item => (
            <a key={item.label} href="#" className={`flex items-center gap-3 px-3 py-2 text-sm rounded-sm transition-colors ${item.active ? 'bg-white/10 text-white' : 'text-[var(--color-cream-soft)] opacity-70 hover:opacity-100 hover:bg-white/5'}`}>
              <item.icon size={16} strokeWidth={1.5} />
              <span className="flex-1">{item.label}</span>
              {'count' in item && item.count && <span className="text-xs opacity-60">{item.count}</span>}
            </a>
          ))}
        </nav>

        <div className="px-3 py-4 border-t border-white/10">
          <div className="px-3 py-2 mb-2">
            <div className="text-xs text-[var(--color-cream-soft)] opacity-60">Signed in as</div>
            <div className="text-sm font-medium">{isOwner ? 'Fritz Buehler' : currentEmployee.name}</div>
            <div className="text-xs text-[var(--color-bronze)] opacity-80 mt-0.5 flex items-center gap-1">
              {isOwner ? <><Shield size={11}/> Owner</> : <>{currentEmployee.role}</>}
            </div>
          </div>
          <Link to="/" className="flex items-center gap-3 px-3 py-2 text-sm text-[var(--color-cream-soft)] opacity-70 hover:opacity-100">
            <LogOut size={16} strokeWidth={1.5} /> Sign out
          </Link>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 min-w-0">
        {/* Top bar */}
        <div className="border-b border-gray-200 bg-white">
          <div className="px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-1 max-w-md">
              <Search size={16} className="text-gray-400" />
              <input placeholder={isOwner ? "Search all deals, borrowers, addresses..." : "Search my deals..."} className="bg-transparent border-none outline-none text-sm flex-1 placeholder-gray-400" />
            </div>
            <div className="flex items-center gap-3">
              {/* View Toggle */}
              <div className="hidden md:flex items-center bg-gray-100 p-0.5 text-xs">
                <button
                  onClick={() => setViewAs('owner')}
                  className={`px-3 py-1.5 flex items-center gap-1.5 transition-all ${isOwner ? 'bg-[var(--color-ink)] text-white' : 'text-gray-600 hover:text-[var(--color-ink)]'}`}
                >
                  <Shield size={12} strokeWidth={1.8}/> Owner View
                </button>
                <button
                  onClick={() => setViewAs('employee')}
                  className={`px-3 py-1.5 flex items-center gap-1.5 transition-all ${!isOwner ? 'bg-[var(--color-ink)] text-white' : 'text-gray-600 hover:text-[var(--color-ink)]'}`}
                >
                  <Eye size={12} strokeWidth={1.8}/> Employee View
                </button>
              </div>
              <button className="text-sm text-gray-600 hover:text-[var(--color-ink)] flex items-center gap-2 px-3 py-2 border border-gray-200 hover:border-[var(--color-ink)] transition-colors">
                <Plus size={14} /> New Deal
              </button>
              <div className="w-9 h-9 bg-[var(--color-bronze)] text-[var(--color-ink)] serif text-sm font-semibold flex items-center justify-center">
                {isOwner ? 'F' : currentEmployee.initial}
              </div>
            </div>
          </div>

          {/* View context strip */}
          <div className={`px-6 lg:px-8 py-2 text-xs flex items-center gap-2 ${isOwner ? 'bg-[var(--color-ink)] text-[var(--color-cream-soft)]' : 'bg-[var(--color-cream-soft)] text-[var(--color-stone)]'}`}>
            {isOwner ? (
              <><Shield size={12} className="text-[var(--color-bronze)]" /> <span><span className="text-[var(--color-bronze)] font-medium">Owner View</span> &mdash; you see all deals across all officers, plus team performance and audit history.</span></>
            ) : (
              <><Eye size={12} /> <span><span className="text-[var(--color-ink)] font-medium">Employee View ({currentEmployee.name})</span> &mdash; you only see deals assigned to you. Owner-only sections are hidden.</span></>
            )}
          </div>
        </div>

        <div className="px-6 lg:px-8 py-8">
          <div className="mb-8">
            <div className="eyebrow text-[var(--color-bronze)] mb-2">Overview</div>
            <h1 className="heading-display text-3xl text-[var(--color-ink)]">
              Welcome back, {isOwner ? 'Fritz' : currentEmployee.name.split(' ')[0]}.
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              {isOwner ? "Here’s where your pipeline stands today." : "Here’s what’s on your plate right now."}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            <StatCard icon={DollarSign} label={isOwner ? "Active Pipeline" : "My Pipeline"} value={`$${(totalPipeline / 1_000_000).toFixed(2)}M`} delta={isOwner ? "+12% MoM" : `${visibleDeals.filter(d => !['Funded'].includes(d.stage)).length} deals`} />
            <StatCard icon={CheckCircle2} label={isOwner ? "Funded This Month" : "My Funded MTD"} value={`$${(fundedThisMonth / 1_000_000).toFixed(2)}M`} delta={`${visibleDeals.filter(d => d.stage === 'Funded').length} deals`} />
            <StatCard icon={TrendingUp} label="Active Deals" value={activeCount.toString()} delta={isOwner ? "+4 this week" : "+1 this week"} />
            <StatCard icon={Clock} label="Avg. Days to Close" value={isOwner ? "11.3" : "10.7"} delta={isOwner ? "-2 days vs Q1" : "Below team avg"} />
          </div>

          {/* Owner-only: Team Performance */}
          {isOwner && (
            <div className="mb-10">
              <div className="flex items-end justify-between mb-4">
                <div>
                  <div className="eyebrow text-[var(--color-bronze)] mb-2">Owner Only</div>
                  <h2 className="serif text-xl font-medium text-[var(--color-ink)]">Team Performance</h2>
                </div>
                <button className="text-sm text-gray-600 hover:text-[var(--color-ink)] flex items-center gap-1.5">
                  <Download size={14} /> Export Report
                </button>
              </div>

              <div className="bg-white border border-gray-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50 text-xs uppercase tracking-wider text-gray-500">
                      <th className="text-left font-medium px-5 py-3">Officer</th>
                      <th className="text-right font-medium px-5 py-3">Active Deals</th>
                      <th className="text-right font-medium px-5 py-3">$ Pipeline</th>
                      <th className="text-right font-medium px-5 py-3">Funded MTD</th>
                      <th className="text-right font-medium px-5 py-3">Conversion</th>
                      <th className="text-right font-medium px-5 py-3">Avg Close</th>
                      <th className="text-right font-medium px-5 py-3">Last Active</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: 'Fritz Buehler', role: 'Owner', active: 2, pipeline: 1450000, funded: 425000, conv: '68%', close: '11d', last: 'Online now' },
                      { name: 'Sarah Chen', role: 'Loan Officer', active: 3, pipeline: 1480000, funded: 755000, conv: '71%', close: '10d', last: '14 min ago' },
                      { name: 'Marcus Webb', role: 'Loan Officer', active: 2, pipeline: 1305000, funded: 1100000, conv: '64%', close: '13d', last: '2h ago' },
                    ].map(e => (
                      <tr key={e.name} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-[var(--color-cream-soft)] text-[var(--color-ink)] serif text-sm font-medium flex items-center justify-center">{e.name[0]}</div>
                            <div>
                              <div className="font-medium text-[var(--color-ink)]">{e.name}</div>
                              <div className="text-xs text-gray-500">{e.role}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-4 text-right text-[var(--color-ink)]">{e.active}</td>
                        <td className="px-5 py-4 text-right font-medium text-[var(--color-ink)]">${e.pipeline.toLocaleString()}</td>
                        <td className="px-5 py-4 text-right text-[var(--color-ink)]">${e.funded.toLocaleString()}</td>
                        <td className="px-5 py-4 text-right text-emerald-700 font-medium">{e.conv}</td>
                        <td className="px-5 py-4 text-right text-gray-600">{e.close}</td>
                        <td className="px-5 py-4 text-right text-xs text-gray-500">{e.last}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Tabs */}
          <div className="flex items-center gap-6 border-b border-gray-200 mb-6">
            <button onClick={() => setActiveTab('deals')} className={`pb-3 text-sm font-medium transition-colors border-b-2 -mb-px ${activeTab === 'deals' ? 'border-[var(--color-ink)] text-[var(--color-ink)]' : 'border-transparent text-gray-500 hover:text-[var(--color-ink)]'}`}>
              <FileSpreadsheet size={14} className="inline mr-2 -mt-0.5" />{isOwner ? 'All Deals' : 'My Deals'}
            </button>
            <button onClick={() => setActiveTab('files')} className={`pb-3 text-sm font-medium transition-colors border-b-2 -mb-px ${activeTab === 'files' ? 'border-[var(--color-ink)] text-[var(--color-ink)]' : 'border-transparent text-gray-500 hover:text-[var(--color-ink)]'}`}>
              <FolderOpen size={14} className="inline mr-2 -mt-0.5" />Loan Files
            </button>
          </div>

          {activeTab === 'deals' ? (
            <div className="bg-white border border-gray-200">
              {/* Table toolbar */}
              <div className="px-5 py-3 flex items-center justify-between border-b border-gray-200">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <button className="flex items-center gap-1.5 hover:text-[var(--color-ink)]"><Filter size={14}/> Filter</button>
                  <span className="text-gray-300">|</span>
                  <span>{visibleDeals.length} {isOwner ? 'deals' : 'of yours'}</span>
                </div>
                {isOwner && (
                  <button className="text-sm text-gray-600 hover:text-[var(--color-ink)] flex items-center gap-1.5">
                    <Download size={14} /> Export to Excel
                  </button>
                )}
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50 text-xs uppercase tracking-wider text-gray-500">
                      <th className="text-left font-medium px-5 py-3">Deal ID</th>
                      <th className="text-left font-medium px-5 py-3">Borrower / Property</th>
                      <th className="text-left font-medium px-5 py-3">Type</th>
                      <th className="text-right font-medium px-5 py-3">Amount</th>
                      <th className="text-center font-medium px-5 py-3">LTV</th>
                      <th className="text-left font-medium px-5 py-3">Stage</th>
                      {isOwner && <th className="text-left font-medium px-5 py-3">Officer</th>}
                      <th className="text-left font-medium px-5 py-3">Updated</th>
                      <th className="px-5 py-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {visibleDeals.map(d => (
                      <tr key={d.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="px-5 py-4 font-mono text-xs text-gray-500">{d.id}</td>
                        <td className="px-5 py-4">
                          <div className="font-medium text-[var(--color-ink)]">{d.borrower}</div>
                          <div className="text-xs text-gray-500 mt-0.5">{d.address}</div>
                        </td>
                        <td className="px-5 py-4 text-gray-600">{d.type}</td>
                        <td className="px-5 py-4 text-right font-medium text-[var(--color-ink)]">${d.amount.toLocaleString()}</td>
                        <td className="px-5 py-4 text-center text-gray-600">{d.ltv}</td>
                        <td className="px-5 py-4">
                          <span className={`inline-block text-xs px-2 py-0.5 border ${stageColors[d.stage]}`}>{d.stage}</span>
                        </td>
                        {isOwner && <td className="px-5 py-4 text-gray-600">{d.officer}</td>}
                        <td className="px-5 py-4 text-gray-500 text-xs">{d.updated}</td>
                        <td className="px-5 py-4 text-right">
                          <button className="text-gray-400 hover:text-[var(--color-ink)]"><MoreHorizontal size={16} /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="px-5 py-3 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500">
                <span>Showing {visibleDeals.length} of {isOwner ? deals.length : visibleDeals.length} deals</span>
                <span>Last synced just now</span>
              </div>
            </div>
          ) : (
            <FilesView isOwner={isOwner} currentEmployee={currentEmployee} />
          )}

          {/* Owner-only Audit Log */}
          {isOwner && activeTab === 'deals' && (
            <div className="mt-10">
              <div className="flex items-end justify-between mb-4">
                <div>
                  <div className="eyebrow text-[var(--color-bronze)] mb-2">Owner Only</div>
                  <h2 className="serif text-xl font-medium text-[var(--color-ink)]">Audit Log</h2>
                </div>
              </div>
              <div className="bg-white border border-gray-200">
                {[
                  { who: 'Sarah Chen', what: 'moved BCF-1041 from Term Sheet to Underwriting', when: '14 min ago' },
                  { who: 'Marcus Webb', what: 'uploaded BCF-1037_Park_Appraisal.pdf', when: '2h ago' },
                  { who: 'Fritz Buehler', what: 'created new deal BCF-1042', when: '2h ago' },
                  { who: 'Sarah Chen', what: 'changed loan amount on BCF-1040 from $275K to $290K', when: 'Yesterday' },
                  { who: 'System', what: 'new application received from Sofia Martinez (BCF-1035)', when: '4 days ago' },
                ].map((a, i) => (
                  <div key={i} className="px-5 py-3 border-b border-gray-100 last:border-0 flex items-center gap-3 text-sm">
                    <div className="w-7 h-7 bg-[var(--color-cream-soft)] text-[var(--color-ink)] serif text-xs font-medium flex items-center justify-center shrink-0">{a.who[0]}</div>
                    <div className="flex-1 min-w-0">
                      <span className="font-medium text-[var(--color-ink)]">{a.who}</span>
                      <span className="text-gray-600"> {a.what}</span>
                    </div>
                    <div className="text-xs text-gray-500 shrink-0">{a.when}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

function StatCard({ icon: Icon, label, value, delta }: { icon: any, label: string, value: string, delta: string }) {
  return (
    <div className="bg-white border border-gray-200 p-5">
      <div className="flex items-start justify-between mb-3">
        <div className="text-xs uppercase tracking-wider text-gray-500">{label}</div>
        <Icon size={16} className="text-[var(--color-bronze)]" strokeWidth={1.5} />
      </div>
      <div className="serif text-3xl text-[var(--color-ink)] font-medium">{value}</div>
      <div className="text-xs text-gray-500 mt-1">{delta}</div>
    </div>
  )
}

function FilesView({ isOwner, currentEmployee }: { isOwner: boolean, currentEmployee: typeof employees[0] }) {
  const allFiles = [
    { name: 'BCF-1042_Reyes_Appraisal.pdf', deal: 'BCF-1042', size: '2.4 MB', uploaded: 'Today, 11:14 AM', by: 'Fritz' },
    { name: 'BCF-1041_Madison_Operating_Agreement.pdf', deal: 'BCF-1041', size: '880 KB', uploaded: 'Today, 9:02 AM', by: 'Sarah' },
    { name: 'BCF-1041_Madison_Rent_Roll.xlsx', deal: 'BCF-1041', size: '64 KB', uploaded: 'Yesterday', by: 'Sarah' },
    { name: 'BCF-1038_Ng_Title_Commitment.pdf', deal: 'BCF-1038', size: '1.1 MB', uploaded: '2 days ago', by: 'Sarah' },
    { name: 'BCF-1038_Ng_Insurance_Binder.pdf', deal: 'BCF-1038', size: '320 KB', uploaded: '2 days ago', by: 'Sarah' },
    { name: 'BCF-1036_Riverside_Construction_Budget.xlsx', deal: 'BCF-1036', size: '128 KB', uploaded: '3 days ago', by: 'Fritz' },
    { name: 'BCF-1037_Park_Appraisal.pdf', deal: 'BCF-1037', size: '1.8 MB', uploaded: '3 days ago', by: 'Marcus' },
  ]
  const files = isOwner ? allFiles : allFiles.filter(f => f.by === currentEmployee.name.split(' ')[0])

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 bg-white border border-gray-200">
        <div className="px-5 py-3 border-b border-gray-200 flex items-center justify-between">
          <div className="text-sm text-gray-600">{files.length} files {!isOwner && '(yours)'}</div>
          <button className="text-sm text-[var(--color-ink)] flex items-center gap-1.5 font-medium">
            <Upload size={14} /> Upload File
          </button>
        </div>
        <div>
          {files.map(f => (
            <div key={f.name} className="px-5 py-3 border-b border-gray-100 hover:bg-gray-50 flex items-center gap-4">
              <Paperclip size={16} className="text-[var(--color-bronze)] shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-[var(--color-ink)] truncate">{f.name}</div>
                <div className="text-xs text-gray-500">{f.deal} &middot; {f.size} &middot; uploaded by {f.by}, {f.uploaded}</div>
              </div>
              <button className="text-gray-400 hover:text-[var(--color-ink)]"><Download size={16} /></button>
            </div>
          ))}
          {files.length === 0 && (
            <div className="px-5 py-10 text-center text-sm text-gray-500">No files yet. Upload your first document to get started.</div>
          )}
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-white border border-gray-200 p-5">
          <div className="eyebrow text-[var(--color-bronze)] mb-3">Drag & Drop</div>
          <div className="border-2 border-dashed border-gray-200 p-8 text-center">
            <Upload size={20} className="text-gray-400 mx-auto mb-2" strokeWidth={1.5} />
            <p className="text-xs text-gray-500">Drop loan documents here, or click to select.</p>
          </div>
        </div>
        <div className="bg-[var(--color-ink)] text-[var(--color-cream)] p-5">
          <div className="eyebrow text-[var(--color-bronze)] mb-3">Recent Activity</div>
          <ul className="space-y-3 text-xs">
            <li><span className="opacity-60">{isOwner ? 'Fritz' : 'You'} uploaded</span><br />BCF-1042_Reyes_Appraisal.pdf</li>
            {isOwner && <li><span className="opacity-60">Sarah moved</span><br />BCF-1041 &rarr; Underwriting</li>}
            <li><span className="opacity-60">New lead</span><br />Sofia Martinez submitted application</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
