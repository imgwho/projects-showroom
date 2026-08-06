import React, { useState } from 'react';
import { LOOSE_FILES_DATA } from '../data/projectsData';
import { FileText, Database, ChevronDown, ChevronUp, HardDrive, FileCode, Archive } from 'lucide-react';

export const LooseFilesSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const getFileIcon = (name: string) => {
    if (name.endsWith('.py') || name.endsWith('.js') || name.endsWith('.ps1')) {
      return <FileCode className="h-3.5 w-3.5 text-sky-600" />;
    }
    if (name.endsWith('.7z') || name.endsWith('.zip') || name.endsWith('.rar')) {
      return <Archive className="h-3.5 w-3.5 text-purple-600" />;
    }
    if (name.endsWith('.csv') || name.endsWith('.xlsx') || name.endsWith('.json')) {
      return <Database className="h-3.5 w-3.5 text-emerald-600" />;
    }
    return <FileText className="h-3.5 w-3.5 text-neutral-400" />;
  };

  return (
    <div className="rounded-lg border border-neutral-200 bg-white overflow-hidden my-8 shadow-xs">
      {/* 头部按钮 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 hover:bg-neutral-50 transition-colors text-left"
      >
        <div className="flex items-center space-x-3">
          <HardDrive className="h-4 w-4 text-neutral-700" />
          <div>
            <h3 className="font-mono text-sm font-bold text-neutral-900">
              根目录散落文件与独立脚本归档
            </h3>
            <p className="text-xs text-neutral-500 font-mono">
              包含 36 个独立脚本、分析数据集、备份压缩包与辅助文档
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2 text-xs font-mono text-neutral-600">
          <span>{isOpen ? '收起列表' : '展开查看'}</span>
          {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </div>
      </button>

      {/* 展开列表 */}
      {isOpen && (
        <div className="p-4 border-t border-neutral-200 bg-neutral-50/50">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
            {LOOSE_FILES_DATA.map((file, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-2.5 rounded border border-neutral-200 bg-white hover:border-neutral-400 transition-colors font-mono text-xs shadow-2xs"
              >
                <div className="flex items-center space-x-2 min-w-0 mr-2">
                  {getFileIcon(file.name)}
                  <span className="text-neutral-800 truncate font-medium">{file.name}</span>
                </div>
                <span className="text-[10px] text-neutral-400 shrink-0">
                  {file.sizeKB > 1024 ? `${(file.sizeKB / 1024).toFixed(1)} MB` : `${file.sizeKB} KB`}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
