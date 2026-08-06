import React from 'react';
import { Search, Cpu, ShieldCheck, Sparkles, GitBranch } from 'lucide-react';
import { CATEGORIES, type CategoryKey } from '../data/projectsData';

interface FilterBarProps {
  activeCategory: CategoryKey;
  onSelectCategory: (cat: CategoryKey) => void;
  activeAIDepth: string;
  onSelectAIDepth: (depth: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  showOnlyPyPI: boolean;
  onTogglePyPI: () => void;
  showOnlyMCP: boolean;
  onToggleMCP: () => void;
  showOnlyGitHub: boolean;
  onToggleGitHub: () => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  activeCategory,
  onSelectCategory,
  activeAIDepth,
  onSelectAIDepth,
  searchQuery,
  onSearchChange,
  showOnlyPyPI,
  onTogglePyPI,
  showOnlyMCP,
  onToggleMCP,
  showOnlyGitHub,
  onToggleGitHub,
}) => {
  const depthOptions = [
    { key: 'all', label: '所有 AI 深度级别' },
    { key: 'native', label: 'AI 原生架构 (AI-Native)' },
    { key: 'accelerated', label: 'AI 极速构建 (AI-Accelerated)' },
    { key: 'assisted', label: 'AI 辅助开发 (AI-Assisted)' },
  ];

  return (
    <div className="sticky top-14 z-30 border-b border-neutral-200 bg-white/90 backdrop-blur-md py-3 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl space-y-3">
        
        {/* 分类 Tabs */}
        <div className="flex items-center justify-between gap-4 overflow-x-auto no-scrollbar pb-1">
          <div className="flex items-center space-x-1 shrink-0">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => onSelectCategory(cat.key)}
                  className={`flex items-center space-x-1.5 rounded-md px-3 py-1.5 text-xs font-mono transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-black text-white font-semibold shadow-xs'
                      : 'text-neutral-600 hover:bg-neutral-100 hover:text-black border border-transparent'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                      isActive ? 'bg-white/20 text-white' : 'bg-neutral-100 text-neutral-500'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 搜索与高级过滤行 */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1 border-t border-neutral-100">
          
          {/* 搜索框 */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="按项目名称、技术栈（如 Python, MCP, React, RAG）过滤..."
              className="w-full rounded-md border border-neutral-200 bg-neutral-50 pl-9 pr-3 py-1.5 text-xs text-neutral-900 placeholder-neutral-400 focus:border-neutral-400 focus:bg-white focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-black"
              >
                清除
              </button>
            )}
          </div>

          {/* 下拉与 Badge 过滤按钮 */}
          <div className="flex items-center flex-wrap gap-2 text-xs">
            
            {/* AI 深度下拉 */}
            <div className="flex items-center space-x-1 bg-neutral-50 border border-neutral-200 rounded-md px-2 py-1">
              <Cpu className="h-3.5 w-3.5 text-sky-600" />
              <select
                value={activeAIDepth}
                onChange={(e) => onSelectAIDepth(e.target.value)}
                className="bg-transparent text-xs text-neutral-800 focus:outline-none font-mono cursor-pointer"
              >
                {depthOptions.map((opt) => (
                  <option key={opt.key} value={opt.key} className="bg-white text-neutral-900">
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* GitHub 直达仓库过滤 */}
            <button
              onClick={onToggleGitHub}
              className={`flex items-center space-x-1.5 rounded-md px-2.5 py-1 font-mono transition-colors border ${
                showOnlyGitHub
                  ? 'bg-neutral-900 border-neutral-900 text-white font-semibold'
                  : 'bg-neutral-50 border-neutral-200 text-neutral-600 hover:border-neutral-300'
              }`}
            >
              <GitBranch className="h-3.5 w-3.5" />
              <span>仅看 GitHub 已上传</span>
            </button>

            {/* PyPI 已发布过滤 */}
            <button
              onClick={onTogglePyPI}
              className={`flex items-center space-x-1.5 rounded-md px-2.5 py-1 font-mono transition-colors border ${
                showOnlyPyPI
                  ? 'bg-emerald-100 border-emerald-300 text-emerald-800 font-semibold'
                  : 'bg-neutral-50 border-neutral-200 text-neutral-600 hover:border-neutral-300'
              }`}
            >
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
              <span>PyPI 已验证</span>
            </button>

            {/* MCP 协议过滤 */}
            <button
              onClick={onToggleMCP}
              className={`flex items-center space-x-1.5 rounded-md px-2.5 py-1 font-mono transition-colors border ${
                showOnlyMCP
                  ? 'bg-purple-100 border-purple-300 text-purple-800 font-semibold'
                  : 'bg-neutral-50 border-neutral-200 text-neutral-600 hover:border-neutral-300'
              }`}
            >
              <Sparkles className="h-3.5 w-3.5 text-purple-600" />
              <span>MCP 协议</span>
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};
