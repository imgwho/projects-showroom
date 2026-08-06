import React, { useState } from 'react';
import { Copy, Check, ArrowRight, ShieldCheck, Layers, GitBranch, Image as ImageIcon } from 'lucide-react';
import { STATS } from '../data/projectsData';

export const HeroSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const commandSnippet = "pip install cwprep cwtwb # AI 原生 Tableau 引擎";

  const handleCopy = () => {
    navigator.clipboard.writeText(commandSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative overflow-hidden border-b border-neutral-200 bg-white pt-8 sm:pt-12 pb-12 sm:pb-16">
      {/* 背景微暗网格 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* 左侧说明 */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center space-x-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-mono text-neutral-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-neutral-900 font-bold">作品集 | 包含 {STATS.totalProjects} 个项目案例</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-tight">
              AI 原生开发者 <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-500">
                个人作品集展厅
              </span>
            </h1>

            <p className="text-sm sm:text-lg text-neutral-600 max-w-2xl leading-relaxed">
              深度融合大语言模型、Custom Agents、MCP 协议与自动化工作流。在 BI 报表、SaaS 模板、数据分析及自动化工具领域极速孵化了 <strong className="text-neutral-900 font-bold">{STATS.totalProjects} 个实战项目案例</strong>。
            </p>

            {/* 代码复制行 */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1 sm:pt-2">
              <div className="flex-1 flex items-center justify-between font-mono text-xs bg-neutral-50 border border-neutral-200 rounded-md px-3.5 py-2.5 text-neutral-800 shadow-inner">
                <div className="flex items-center space-x-2 truncate min-w-0">
                  <span className="text-neutral-400">$</span>
                  <span className="text-neutral-900 font-bold truncate">{commandSnippet}</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="ml-2 p-1 text-neutral-500 hover:text-black transition-colors shrink-0"
                  title="复制安装命令"
                >
                  {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>

              <a
                href="#projects-grid"
                className="inline-flex items-center justify-center space-x-2 rounded-md bg-black px-5 py-2.5 text-xs font-semibold text-white hover:bg-neutral-800 transition-all shrink-0 shadow-sm"
              >
                <span>探索全部项目</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* 技术栈 */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1 text-xs text-neutral-500 font-mono">
              <span className="text-neutral-700 font-bold mr-1">核心技术:</span>
              <span className="rounded border border-neutral-200 bg-neutral-100 px-2 py-0.5 text-neutral-800 font-medium">Python</span>
              <span className="rounded border border-neutral-200 bg-neutral-100 px-2 py-0.5 text-neutral-800 font-medium">TypeScript</span>
              <span className="rounded border border-neutral-200 bg-neutral-100 px-2 py-0.5 text-neutral-800 font-medium">MCP 协议</span>
              <span className="rounded border border-neutral-200 bg-neutral-100 px-2 py-0.5 text-neutral-800 font-medium">Tableau XML</span>
              <span className="rounded border border-neutral-200 bg-neutral-100 px-2 py-0.5 text-neutral-800 font-medium">Power BI PBIP</span>
            </div>
          </div>

          {/* 右侧数据统计 */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
            
            <div className="rounded-lg border border-neutral-200 bg-neutral-50/80 p-3.5 sm:p-5 hover:border-neutral-400 transition-all shadow-xs">
              <div className="flex items-center justify-between text-neutral-500 text-[11px] sm:text-xs font-mono mb-1.5">
                <span>项目案例总数</span>
                <Layers className="h-3.5 w-3.5 text-neutral-700" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-neutral-900">{STATS.totalProjects}</div>
              <p className="mt-0.5 text-[10px] sm:text-[11px] text-neutral-500">包含完整子项目与模块</p>
            </div>

            <div className="rounded-lg border border-neutral-200 bg-neutral-50/80 p-3.5 sm:p-5 hover:border-neutral-400 transition-all shadow-xs">
              <div className="flex items-center justify-between text-neutral-500 text-[11px] sm:text-xs font-mono mb-1.5">
                <span>带效果图展示</span>
                <ImageIcon className="h-3.5 w-3.5 text-sky-600" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-sky-700">{STATS.imageProjects}</div>
              <p className="mt-0.5 text-[10px] sm:text-[11px] text-neutral-500">配有高保真效果截图</p>
            </div>

            <div className="rounded-lg border border-neutral-200 bg-neutral-50/80 p-3.5 sm:p-5 hover:border-neutral-400 transition-all shadow-xs">
              <div className="flex items-center justify-between text-neutral-500 text-[11px] sm:text-xs font-mono mb-1.5">
                <span>GITHUB 已同步</span>
                <GitBranch className="h-3.5 w-3.5 text-neutral-900" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-neutral-900">{STATS.githubRepos}</div>
              <p className="mt-0.5 text-[10px] sm:text-[11px] text-neutral-500">附带官方 GitHub 仓库</p>
            </div>

            <div className="rounded-lg border border-neutral-200 bg-neutral-50/80 p-3.5 sm:p-5 hover:border-neutral-400 transition-all shadow-xs">
              <div className="flex items-center justify-between text-neutral-500 text-[11px] sm:text-xs font-mono mb-1.5">
                <span>PYPI 已发布包</span>
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-700">2</div>
              <p className="mt-0.5 text-[10px] sm:text-[11px] text-neutral-500">cwprep & cwtwb</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
