import React from 'react';
import { CATEGORIES, type CategoryKey } from '../data/projectsData';
import { Search, X, ShieldCheck, Sparkles, GitBranch } from 'lucide-react';

interface FilterBarProps {
  activeCategory: CategoryKey;
  onSelectCategory: (key: CategoryKey) => void;
  activeAIDepth: string;
  onSelectAIDepth: (depth: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
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
  return (
    <div className="space-y-4 mb-8">
      {/* 搜索框与筛选按钮 */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* 搜索框 */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="搜索 182 个项目名称、技术栈、功能描述..."
            className="w-full rounded-lg border border-neutral-200 bg-white py-2.5 pl-9 pr-10 text-xs font-mono text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-hidden transition-all shadow-xs"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-black"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        {/* 快捷按钮在移动端支持横向滑动 */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 sm:pb-0 shrink-0">
          <button
            onClick={onToggleGitHub}
            className={`inline-flex items-center space-x-1 rounded-lg border px-2.5 py-2 text-xs font-mono transition-all shrink-0 ${
              showOnlyGitHub
                ? 'border-black bg-black text-white font-semibold'
                : 'border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50'
            }`}
          >
            <GitBranch className="h-3 w-3" />
            <span>GitHub</span>
          </button>

          <button
            onClick={onToggleMCP}
            className={`inline-flex items-center space-x-1 rounded-lg border px-2.5 py-2 text-xs font-mono transition-all shrink-0 ${
              showOnlyMCP
                ? 'border-purple-600 bg-purple-50 text-purple-700 font-semibold'
                : 'border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50'
            }`}
          >
            <Sparkles className="h-3 w-3 text-purple-600" />
            <span>MCP 协议</span>
          </button>

          <button
            onClick={onTogglePyPI}
            className={`inline-flex items-center space-x-1 rounded-lg border px-2.5 py-2 text-xs font-mono transition-all shrink-0 ${
              showOnlyPyPI
                ? 'border-emerald-600 bg-emerald-50 text-emerald-700 font-semibold'
                : 'border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50'
            }`}
          >
            <ShieldCheck className="h-3 w-3 text-emerald-600" />
            <span>PyPI 发布</span>
          </button>

          {/* AI 深度级联下拉 */}
          <div className="relative shrink-0">
            <select
              value={activeAIDepth}
              onChange={(e) => onSelectAIDepth(e.target.value)}
              className="rounded-lg border border-neutral-200 bg-white px-2.5 py-2 text-xs font-mono text-neutral-700 focus:border-neutral-900 focus:outline-hidden transition-all shadow-xs"
            >
              <option value="all">全部 AI 级别</option>
              <option value="native">AI 原生架构</option>
              <option value="accelerated">AI 极速构建</option>
              <option value="assisted">AI 辅助开发</option>
            </select>
          </div>
        </div>
      </div>

      {/* 分类 Tab 栏: 移动端横向无缝滑动 */}
      <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar py-1 border-b border-neutral-200">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => onSelectCategory(cat.key)}
              className={`inline-flex items-center space-x-1.5 whitespace-nowrap rounded-md px-3 py-1.5 font-mono text-xs font-medium transition-all shrink-0 ${
                isActive
                  ? 'bg-black text-white shadow-xs'
                  : 'bg-neutral-100/80 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                  isActive ? 'bg-neutral-800 text-white' : 'bg-neutral-200 text-neutral-600'
                }`}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
