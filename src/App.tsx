import { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FilterBar } from './components/FilterBar';
import { ProjectCard } from './components/ProjectCard';
import { ProjectModal } from './components/ProjectModal';
import { CommandPalette } from './components/CommandPalette';
import { LooseFilesSection } from './components/LooseFilesSection';
import { Footer } from './components/Footer';
import { PROJECTS_DATA, type ProjectItem, type CategoryKey } from './data/projectsData';
import { FilterX, SlidersHorizontal } from 'lucide-react';

export function App() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('all');
  const [activeAIDepth, setActiveAIDepth] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showOnlyPyPI, setShowOnlyPyPI] = useState<boolean>(false);
  const [showOnlyMCP, setShowOnlyMCP] = useState<boolean>(false);
  const [showOnlyGitHub, setShowOnlyGitHub] = useState<boolean>(false);
  
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState<boolean>(false);

  // 过滤逻辑
  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((p) => {
      // 分类过滤
      if (activeCategory !== 'all' && p.category !== activeCategory) {
        return false;
      }
      // AI 深度过滤
      if (activeAIDepth !== 'all' && p.aiDepth !== activeAIDepth) {
        return false;
      }
      // PyPI 过滤
      if (showOnlyPyPI && !p.pypiStatus) {
        return false;
      }
      // MCP 过滤
      if (showOnlyMCP && !p.mcpReady) {
        return false;
      }
      // GitHub 直达链接过滤
      if (showOnlyGitHub && !p.githubUrl) {
        return false;
      }
      // 搜索框模糊检索
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = p.name.toLowerCase().includes(q) || p.displayName.toLowerCase().includes(q);
        const matchDesc = p.description.toLowerCase().includes(q);
        const matchHighlight = p.highlight.toLowerCase().includes(q);
        const matchTech = p.techStack.some((t) => t.toLowerCase().includes(q));
        if (!matchName && !matchDesc && !matchHighlight && !matchTech) {
          return false;
        }
      }
      return true;
    });
  }, [activeCategory, activeAIDepth, searchQuery, showOnlyPyPI, showOnlyMCP, showOnlyGitHub]);

  const handleResetFilters = () => {
    setActiveCategory('all');
    setActiveAIDepth('all');
    setSearchQuery('');
    setShowOnlyPyPI(false);
    setShowOnlyMCP(false);
    setShowOnlyGitHub(false);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-neutral-900 flex flex-col font-sans antialiased selection:bg-black selection:text-white">
      
      {/* 顶部导航 */}
      <Navbar
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        totalProjects={PROJECTS_DATA.length}
      />

      {/* 核心 Hero 横幅 */}
      <HeroSection />

      {/* 吸顶过滤控制栏 */}
      <FilterBar
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        activeAIDepth={activeAIDepth}
        onSelectAIDepth={setActiveAIDepth}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        showOnlyPyPI={showOnlyPyPI}
        onTogglePyPI={() => setShowOnlyPyPI(!showOnlyPyPI)}
        showOnlyMCP={showOnlyMCP}
        onToggleMCP={() => setShowOnlyMCP(!showOnlyMCP)}
        showOnlyGitHub={showOnlyGitHub}
        onToggleGitHub={() => setShowOnlyGitHub(!showOnlyGitHub)}
      />

      {/* 主项目卡片网格 */}
      <main id="projects-grid" className="flex-1 mx-auto max-w-7xl w-full px-4 sm:px-6 py-8">
        
        {/* 匹配结果计数 */}
        <div className="flex items-center justify-between mb-6 pb-3 border-b border-neutral-200 font-mono text-xs text-neutral-600">
          <div className="flex items-center space-x-2">
            <SlidersHorizontal className="h-3.5 w-3.5 text-neutral-400" />
            <span>
              正在展示 <strong className="text-black font-bold">{filteredProjects.length}</strong> / {PROJECTS_DATA.length} 个项目
            </span>
          </div>

          {(activeCategory !== 'all' || activeAIDepth !== 'all' || searchQuery || showOnlyPyPI || showOnlyMCP || showOnlyGitHub) && (
            <button
              onClick={handleResetFilters}
              className="flex items-center space-x-1 text-neutral-500 hover:text-black transition-colors"
            >
              <FilterX className="h-3.5 w-3.5" />
              <span>重置筛选条件</span>
            </button>
          )}
        </div>

        {/* 卡片网格 */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={setSelectedProject}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-neutral-200 bg-white p-12 text-center my-12 space-y-4 shadow-xs">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 border border-neutral-200 text-neutral-500 font-mono">
              0
            </div>
            <h3 className="text-sm font-mono font-bold text-neutral-900">未找到符合条件的工程项目</h3>
            <p className="text-xs text-neutral-500 max-w-md mx-auto">
              当前组合筛选条件下没有匹配的项目，请尝试清空搜索关键词或放宽筛选条件。
            </p>
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center space-x-2 rounded-md bg-black px-4 py-2 text-xs font-mono font-semibold text-white hover:bg-neutral-800 transition-colors shadow-xs"
            >
              <span>重置所有筛选条件</span>
            </button>
          </div>
        )}

        {/* 散落文件组件 */}
        <LooseFilesSection />

      </main>

      {/* 页脚 */}
      <Footer />

      {/* 项目详情模态框 */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* 全局命令搜索抽屉 */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onSelectProject={setSelectedProject}
      />

    </div>
  );
}

export default App;
