import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-neutral-200 bg-white py-12 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs text-neutral-500">
        
        {/* 左侧信息 */}
        <div className="flex items-center space-x-3">
          <div className="flex h-5 w-5 items-center justify-center rounded bg-black text-white font-bold text-[10px]">
            ▲
          </div>
          <span className="font-semibold text-neutral-800">Vercel 亮色设计风格</span>
          <span className="text-neutral-300">|</span>
          <span className="text-neutral-700 font-medium">imgwho AI 作品集</span>
        </div>

        {/* 中间实时运行状态 */}
        <div className="flex items-center space-x-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-neutral-700">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>包含 182 个项目案例并实时同步</span>
        </div>

        {/* 右侧导航 */}
        <div className="flex items-center space-x-4">
          <a
            href="file:///C:/Users/imgwho/Desktop/projects/PROJECTS_INDEX.md"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black transition-colors flex items-center gap-1 font-semibold text-neutral-700"
          >
            <span>PROJECTS_INDEX.md 文档</span>
            <ArrowUpRight className="h-3 w-3" />
          </a>
          <span>© 2026 Antigravity AI</span>
        </div>

      </div>
    </footer>
  );
};
