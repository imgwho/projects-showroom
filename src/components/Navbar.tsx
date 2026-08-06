import React from 'react';
import { Search as SearchIcon, Layers, GitBranch } from 'lucide-react';
import { STATS } from '../data/projectsData';

interface NavbarProps {
  onOpenCommandPalette: () => void;
  totalProjects: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette, totalProjects }) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* 品牌标识 */}
        <div className="flex items-center space-x-3">
          <div className="flex h-7 w-7 items-center justify-center rounded bg-black text-white font-mono font-bold text-xs shadow-sm">
            ▲
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-mono text-sm font-bold tracking-tight text-neutral-900">imgwho</span>
            <span className="text-neutral-400">/</span>
            <span className="text-xs font-mono text-neutral-700 bg-neutral-100 border border-neutral-200 px-2 py-0.5 rounded-full flex items-center gap-1.5 font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              AI 作品集
            </span>
          </div>
        </div>

        {/* 搜索框 */}
        <button
          onClick={onOpenCommandPalette}
          className="hidden md:flex items-center space-x-3 rounded-md border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs text-neutral-500 hover:border-neutral-400 hover:text-neutral-900 transition-all w-72 justify-between"
        >
          <div className="flex items-center space-x-2">
            <SearchIcon className="h-3.5 w-3.5 text-neutral-400" />
            <span>搜索 180+ 项目案例...</span>
          </div>
          <div className="flex items-center space-x-1 font-mono text-[10px] text-neutral-400">
            <kbd className="rounded border border-neutral-200 bg-white px-1.5 py-0.5">⌘</kbd>
            <kbd className="rounded border border-neutral-200 bg-white px-1 py-0.5">K</kbd>
          </div>
        </button>

        {/* 右侧数据状态 */}
        <div className="flex items-center space-x-3">
          <button
            onClick={onOpenCommandPalette}
            className="md:hidden flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 bg-neutral-50 text-neutral-600"
          >
            <SearchIcon className="h-4 w-4" />
          </button>
          
          <div className="hidden sm:flex items-center space-x-1.5 text-xs text-neutral-600 font-mono border-l border-neutral-200 pl-3">
            <GitBranch className="h-3.5 w-3.5 text-neutral-700" />
            <span>GitHub 连通: <strong className="text-black font-bold">{STATS.githubRepos}</strong></span>
          </div>

          <a
            href="#projects-grid"
            className="inline-flex items-center space-x-1.5 rounded-md bg-black px-3 py-1.5 text-xs font-medium text-white hover:bg-neutral-800 transition-colors shadow-sm"
          >
            <Layers className="h-3.5 w-3.5" />
            <span>浏览 {totalProjects} 个项目案例</span>
          </a>
        </div>
      </div>
    </header>
  );
};
