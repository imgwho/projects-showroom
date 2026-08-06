import React, { useState } from 'react';
import type { ProjectItem } from '../data/projectsData';
import { X, Folder, Copy, Check, FileCode, GitBranch, ExternalLink, Image as ImageIcon } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [copiedPath, setCopiedPath] = useState(false);

  if (!project) return null;

  const fullPath = `C:\\Users\\imgwho\\Desktop\\projects\\${project.name}`;

  const handleCopyPath = () => {
    navigator.clipboard.writeText(fullPath);
    setCopiedPath(true);
    setTimeout(() => setCopiedPath(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/40 backdrop-blur-xs animate-fade-in">
      <div
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-xl border border-neutral-300 bg-white p-4 sm:p-6 text-neutral-900 shadow-2xl space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 头部标题 */}
        <div className="flex items-start justify-between border-b border-neutral-200 pb-3 sm:pb-4">
          <div className="space-y-1 min-w-0 pr-2">
            <div className="flex items-center space-x-2">
              <Folder className="h-4 sm:h-5 w-4 sm:w-5 text-neutral-900 shrink-0" />
              <h2 className="font-mono text-base sm:text-lg font-bold tracking-tight text-neutral-900 truncate">
                {project.displayName}
              </h2>
            </div>
            <p className="font-mono text-xs text-neutral-500 truncate">{project.name}</p>
          </div>

          <button
            onClick={onClose}
            className="rounded-md border border-neutral-200 p-1.5 text-neutral-500 hover:bg-neutral-100 hover:text-black transition-colors shrink-0"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* 效果截图展位（若包含图片） */}
        {project.imageUrl && (
          <div className="rounded-lg border border-neutral-200 bg-neutral-900 overflow-hidden shadow-inner max-h-56 sm:max-h-72 flex items-center justify-center relative">
            <img
              src={project.imageUrl}
              alt={project.displayName}
              className="w-full object-contain max-h-56 sm:max-h-72"
            />
            <div className="absolute top-2 right-2 rounded bg-black/70 px-2 py-0.5 font-mono text-[10px] text-white backdrop-blur-xs flex items-center gap-1">
              <ImageIcon className="h-3 w-3 text-sky-400" />
              <span>效果展示图</span>
            </div>
          </div>
        )}

        {/* 路径条与 GitHub 链接 */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs font-mono text-neutral-700">
          <span className="truncate text-neutral-600 font-mono text-[11px] sm:text-xs">{fullPath}</span>
          <div className="flex items-center space-x-2 shrink-0">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-initial flex items-center justify-center space-x-1 rounded bg-black px-2.5 py-1 text-white hover:bg-neutral-800 transition-colors"
              >
                <GitBranch className="h-3 w-3" />
                <span>GitHub 仓库</span>
                <ExternalLink className="h-2.5 w-2.5 opacity-80" />
              </a>
            )}
            <button
              onClick={handleCopyPath}
              className="flex-1 sm:flex-initial flex items-center justify-center space-x-1 border border-neutral-200 bg-white px-2.5 py-1 rounded text-neutral-700 hover:bg-neutral-100 transition-colors"
            >
              {copiedPath ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copiedPath ? '已复制' : '复制路径'}</span>
            </button>
          </div>
        </div>

        {/* 方案说明 */}
        <div className="space-y-2.5">
          <h4 className="text-xs font-mono font-bold text-neutral-800 uppercase tracking-wider">
            方案说明
          </h4>
          <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
            {project.description}
          </p>

          {project.highlight && (
            <div className="rounded-md border border-neutral-200 bg-neutral-50 p-2.5 sm:p-3 text-xs font-mono text-neutral-800">
              <span className="text-neutral-500 font-bold block mb-1">工程亮点</span>
              {project.highlight}
            </div>
          )}
        </div>

        {/* 关键度量属性 Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs font-mono">
          <div className="rounded border border-neutral-200 bg-neutral-50 p-2.5">
            <span className="text-neutral-500 text-[10px] block">AI 深度级别</span>
            <span className="font-semibold text-neutral-900 uppercase">{project.aiDepth}</span>
          </div>

          <div className="rounded border border-neutral-200 bg-neutral-50 p-2.5">
            <span className="text-neutral-500 text-[10px] block">发布状态</span>
            <span className="font-semibold text-emerald-700 uppercase truncate block">
              {project.pypiStatus || (project.githubUrl ? 'GitHub 已同步' : '就绪待发布')}
            </span>
          </div>

          <div className="rounded border border-neutral-200 bg-neutral-50 p-2.5 col-span-2 sm:col-span-1">
            <span className="text-neutral-500 text-[10px] block">MCP 协议支持</span>
            <span className="font-semibold text-purple-700 uppercase">
              {project.mcpReady ? '已集成 MCP' : '未集成'}
            </span>
          </div>
        </div>

        {/* 技术栈 */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono font-bold text-neutral-800 uppercase tracking-wider">
            使用技术栈
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="rounded border border-neutral-200 bg-neutral-100 px-2 py-0.5 text-[11px] font-mono text-neutral-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* 匹配文件示例 */}
        {project.filesSample && project.filesSample.length > 0 && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="font-bold text-neutral-800 uppercase tracking-wider">
                源码及配置文件（共 {project.fileCount} 个文件）
              </span>
            </div>

            <div className="rounded-md border border-neutral-200 bg-neutral-50 p-2.5 sm:p-3 space-y-1.5 max-h-36 overflow-y-auto">
              {project.filesSample.map((file, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-xs font-mono text-neutral-600">
                  <FileCode className="h-3.5 w-3.5 text-neutral-400 shrink-0" />
                  <span className="truncate">{file}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 底部关闭按钮 */}
        <div className="flex items-center justify-end space-x-3 pt-3 border-t border-neutral-200">
          <button
            onClick={onClose}
            className="w-full sm:w-auto rounded-md border border-neutral-300 bg-white px-4 py-2 text-xs font-mono text-neutral-700 hover:bg-neutral-100 hover:text-black transition-colors"
          >
            关闭窗口
          </button>
        </div>

      </div>
    </div>
  );
};
