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
    <div className="rounded-xl border border-neutral-200 bg-neutral-50/70 p-4 sm:p-6 shadow-xs mb-8 space-y-4 sm:space-y-5">
      {/* 搜索框与功能筛选按钮组 */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 sm:gap-4">
        
        {/* 搜索框控制 */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="搜索 182 个项目名称、技术栈、功能描述..."
            className="w-full rounded-lg border border-neutral-300 bg-white py-2.5 pl-10 pr-10 text-xs font-mono text-neutral-900 placeholder:text-neutral-400 focus:border-black focus:ring-1 focus:ring-black focus:outline-hidden transition-all shadow-2xs"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-black p-1"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        {/* 右侧筛选开关键组: 增加 Padding 与交互感 */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 lg:pb-0 shrink-0">
          <button
            onClick={onToggleGitHub}
            className={`inline-flex items-center space-x-1.5 rounded-lg border px-3 py-2 text-xs font-mono transition-all shrink-0 ${
              showOnlyGitHub
                ? 'border-black bg-black text-white font-semibold shadow-xs'
                : 'border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-100 hover:border-neutral-300'
            }`}
          >
            <GitBranch className="h-3.5 w-3.5" />
            <span>GitHub 仓库</span>
          </button>

          <button
            onClick={onToggleMCP}
            className={`inline-flex items-center space-x-1.5 rounded-lg border px-3 py-2 text-xs font-mono transition-all shrink-0 ${
              showOnlyMCP
                ? 'border-purple-600 bg-purple-50 text-purple-700 font-semibold border-purple-300 shadow-xs'
                : 'border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-100 hover:border-neutral-300'
            }`}
          >
            <Sparkles className="h-3.5 w-3.5 text-purple-600" />
            <span>MCP 协议</span>
          </button>

          <button
            onClick={onTogglePyPI}
            className={`inline-flex items-center space-x-1.5 rounded-lg border px-3 py-2 text-xs font-mono transition-all shrink-0 ${
              showOnlyPyPI
                ? 'border-emerald-600 bg-emerald-50 text-emerald-700 font-semibold border-emerald-300 shadow-xs'
                : 'border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-100 hover:border-neutral-300'
            }`}
          >
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
            <span>PyPI 包</span>
          </button>

          {/* AI 深度级联下拉 */}
          <div className="relative shrink-0">
            <select
              value={activeAIDepth}
              onChange={(e) => onSelectAIDepth(e.target.value)}
              className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-xs font-mono text-neutral-800 focus:border-black focus:outline-hidden transition-all shadow-2xs"
            >
              <option value="all">全部 AI 级别</option>
              <option value="native">AI 原生架构</option>
              <option value="accelerated">AI 极速构建</option>
              <option value="assisted">AI 辅助开发</option>
            </select>
          </div>
        </div>
      </div>

      {/* 分类 Tab 栏: 带有上内边距与上切割线，在移动端无缝横向滑动 */}
      <div className="pt-3 sm:pt-4 border-t border-neutral-200/80 flex items-center space-x-2 overflow-x-auto no-scrollbar">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => onSelectCategory(cat.key)}
              className={`inline-flex items-center space-x-1.5 whitespace-nowrap rounded-lg px-3.5 py-2 font-mono text-xs font-medium transition-all shrink-0 ${
                isActive
                  ? 'bg-black text-white shadow-xs'
                  : 'bg-white border border-neutral-200 text-neutral-600 hover:border-neutral-400 hover:text-neutral-900'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                  isActive ? 'bg-neutral-800 text-white' : 'bg-neutral-100 text-neutral-600 border border-neutral-200'
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
