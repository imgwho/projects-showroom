import React from 'react';
import type { ProjectItem } from '../data/projectsData';
import { ShieldCheck, Sparkles, Folder, ArrowUpRight, GitBranch, ExternalLink, Image as ImageIcon } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
  onClick: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  // 渲染 AI 深度标签
  const getAIDepthBadge = (depth: string) => {
    switch (depth) {
      case 'native':
        return (
          <span className="inline-flex items-center gap-1 rounded border border-sky-200 bg-sky-50 px-2 py-0.5 font-mono text-[10px] font-semibold text-sky-700">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-500"></span>
            AI 原生架构
          </span>
        );
      case 'accelerated':
        return (
          <span className="inline-flex items-center gap-1 rounded border border-neutral-200 bg-neutral-100 px-2 py-0.5 font-mono text-[10px] font-medium text-neutral-800">
            <span className="h-1.5 w-1.5 rounded-full bg-neutral-600"></span>
            AI 极速构建
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 rounded border border-neutral-200 bg-neutral-50 px-2 py-0.5 font-mono text-[10px] text-neutral-600">
            <span className="h-1.5 w-1.5 rounded-full bg-neutral-400"></span>
            AI 辅助开发
          </span>
        );
    }
  };

  return (
    <div
      onClick={() => onClick(project)}
      className="group relative flex flex-col justify-between overflow-hidden rounded-lg border border-neutral-200 bg-white transition-all hover:border-neutral-400 hover:shadow-md cursor-pointer"
    >
      {/* 若包含展示图片则渲染图片预览区 */}
      {project.imageUrl && (
        <div className="relative h-44 w-full overflow-hidden border-b border-neutral-100 bg-neutral-900 flex items-center justify-center">
          <img
            src={project.imageUrl}
            alt={project.displayName}
            className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              // Hide image container on load error gracefully
              (e.target as HTMLElement).parentElement?.classList.add('hidden');
            }}
          />
          <div className="absolute top-2 right-2 rounded bg-black/70 px-2 py-0.5 font-mono text-[10px] text-white backdrop-blur-xs flex items-center gap-1">
            <ImageIcon className="h-3 w-3 text-sky-400" />
            <span>效果图展位</span>
          </div>
        </div>
      )}

      {/* 卡片主体内容 */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-2 mb-3">
            <div className="flex items-center space-x-2 min-w-0">
              <Folder className="h-4 w-4 shrink-0 text-neutral-400 group-hover:text-neutral-900 transition-colors" />
              <h3 className="font-mono text-sm font-bold text-neutral-900 tracking-tight truncate group-hover:text-black">
                {project.displayName}
              </h3>
            </div>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-neutral-400 group-hover:text-black transition-colors" />
          </div>

          {/* 状态徽章条 */}
          <div className="flex flex-wrap items-center gap-1.5 mb-3">
            {getAIDepthBadge(project.aiDepth)}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 rounded border border-neutral-300 bg-neutral-900 px-2 py-0.5 font-mono text-[10px] font-semibold text-white hover:bg-neutral-800 transition-colors"
                title="打开 GitHub 仓库"
              >
                <GitBranch className="h-3 w-3 text-white" />
                GitHub
                <ExternalLink className="h-2.5 w-2.5 opacity-70" />
              </a>
            )}

            {project.pypiStatus && (
              <span className="inline-flex items-center gap-1 rounded border border-emerald-200 bg-emerald-50 px-2 py-0.5 font-mono text-[10px] font-semibold text-emerald-700">
                <ShieldCheck className="h-3 w-3 text-emerald-600" />
                PyPI
              </span>
            )}

            {project.mcpReady && (
              <span className="inline-flex items-center gap-1 rounded border border-purple-200 bg-purple-50 px-2 py-0.5 font-mono text-[10px] font-semibold text-purple-700">
                <Sparkles className="h-3 w-3 text-purple-600" />
                MCP 协议
              </span>
            )}
          </div>

          {/* 描述 */}
          <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed mb-3">
            {project.description}
          </p>

          {/* 工程亮点 */}
          {project.highlight && (
            <div className="rounded border border-neutral-100 bg-neutral-50 px-2.5 py-1.5 mb-4 text-[11px] font-mono text-neutral-700">
              <span className="text-neutral-400 mr-1.5 font-bold">亮点:</span>
              {project.highlight}
            </div>
          )}
        </div>

        {/* 底部技术栈与文件数 */}
        <div className="pt-3 border-t border-neutral-100 flex items-center justify-between gap-2 mt-auto">
          <div className="flex flex-wrap gap-1 max-w-[75%]">
            {project.techStack.slice(0, 3).map((tech, idx) => (
              <span
                key={idx}
                className="rounded bg-neutral-100 border border-neutral-200 px-1.5 py-0.5 text-[10px] font-mono text-neutral-700"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="text-[10px] font-mono text-neutral-400 self-center">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>

          <div className="text-[10px] font-mono text-neutral-400 shrink-0">
            {project.fileCount} 个文件
          </div>
        </div>
      </div>
    </div>
  );
};
