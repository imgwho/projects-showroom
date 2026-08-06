import React, { useState, useEffect } from 'react';
import type { ProjectItem } from '../data/projectsData';
import { PROJECTS_DATA } from '../data/projectsData';
import { Search, X, Folder, CornerDownLeft } from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose, onSelectProject }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery('');
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = PROJECTS_DATA.filter((p) => {
    const q = query.toLowerCase();
    return (
      p.displayName.toLowerCase().includes(q) ||
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.techStack.some((t) => t.toLowerCase().includes(q))
    );
  }).slice(0, 10);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/30 backdrop-blur-xs">
      <div
        className="w-full max-w-xl rounded-xl border border-neutral-300 bg-white shadow-2xl overflow-hidden animate-fade-in text-neutral-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 搜索行 */}
        <div className="flex items-center px-4 border-b border-neutral-200 bg-neutral-50">
          <Search className="h-4 w-4 text-neutral-400 mr-3 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="快捷搜索项目名称、技术栈或指令..."
            className="w-full bg-transparent py-3.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none font-mono"
          />
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-black p-1 ml-2"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* 搜索结果列表 */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-neutral-100">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-xs font-mono text-neutral-400">
              未找到与 "{query}" 匹配的项目
            </div>
          ) : (
            filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  onSelectProject(item);
                  onClose();
                }}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-neutral-50 cursor-pointer transition-colors group"
              >
                <div className="flex items-center space-x-3 min-w-0">
                  <Folder className="h-4 w-4 text-neutral-400 group-hover:text-black shrink-0" />
                  <div className="truncate">
                    <div className="font-mono text-xs font-bold text-neutral-900 group-hover:text-black flex items-center gap-1.5">
                      <span>{item.displayName}</span>
                      {item.githubUrl && (
                        <span className="rounded bg-black px-1.5 py-0.2 text-[9px] text-white">GitHub</span>
                      )}
                    </div>
                    <div className="text-[11px] text-neutral-500 truncate">
                      {item.description}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 shrink-0">
                  <span className="rounded bg-neutral-100 border border-neutral-200 px-1.5 py-0.5 text-[10px] font-mono text-neutral-600">
                    {item.category}
                  </span>
                  <CornerDownLeft className="h-3.5 w-3.5 text-neutral-400 group-hover:text-black" />
                </div>
              </div>
            ))
          )}
        </div>

        {/* 页脚说明 */}
        <div className="flex items-center justify-between border-t border-neutral-200 px-4 py-2 text-[11px] font-mono text-neutral-500 bg-neutral-50">
          <span>展示前 10 条匹配结果</span>
          <div className="flex items-center space-x-2">
            <span>按 ESC 退出</span>
          </div>
        </div>
      </div>
    </div>
  );
};
