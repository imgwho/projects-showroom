// 自动生成的作品集数据层 (全新重构 7 大精细分类体系)

export type AIDepth = 'native' | 'accelerated' | 'assisted';
export type CategoryKey = 'all' | 'flagships' | 'ai-agents' | 'cross-border-ec' | 'data-bi' | 'saas-web' | 'office-automation' | 'ski-domain';

export interface ProjectItem {
  id: string;
  name: string;
  displayName: string;
  category: CategoryKey;
  description: string;
  aiDepth: AIDepth;
  githubStatus: 'published' | 'ready' | 'wip';
  githubUrl?: string | null;
  pypiStatus?: string | null;
  mcpReady: boolean;
  techStack: string[];
  stars: string;
  highlight: string;
  imageUrl?: string | null;
  fileCount: number;
  filesSample: string[];
}

export interface LooseFileItem {
  name: string;
  size: number;
  sizeKB: number;
}

export const CATEGORIES: { key: CategoryKey; label: string; count: number }[] = [
  { key: 'all', label: '作品集全景', count: 182 },
  { key: 'flagships', label: '核心开源项目', count: 11 },
  { key: 'ai-agents', label: 'AI Agent 与前沿探索', count: 19 },
  { key: 'cross-border-ec', label: '跨境电商与海外业务', count: 15 },
  { key: 'data-bi', label: 'BI 与数据智能', count: 30 },
  { key: 'saas-web', label: 'SaaS 与 Web 应用', count: 6 },
  { key: 'office-automation', label: '办公自动化与文档工程', count: 94 },
  { key: 'ski-domain', label: '滑雪与垂直业务', count: 7 },
];

export const STATS = {
  totalProjects: 182,
  githubRepos: 27,
  imageProjects: 79,
  looseFiles: 36,
  pypiPackages: 2,
  mcpModules: 8,
  aiNativePercentage: 35,
  aiAcceleratedPercentage: 48,
};

export const PROJECTS_DATA: ProjectItem[] = [
  {
    "id": "20250608 大客户数据处理",
    "name": "20250608 大客户数据处理",
    "displayName": "20250608 大客户数据处理",
    "category": "office-automation",
    "description": "针对 20250608 大客户数据处理 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 2 个配置文件。",
    "imageUrl": null,
    "fileCount": 2,
    "filesSample": [
      "kehu.html",
      "kehu2.html"
    ]
  },
  {
    "id": "20250618 重复订单",
    "name": "20250618 重复订单",
    "displayName": "跨境电商重复订单检测去重",
    "category": "cross-border-ec",
    "description": "多渠道跨国电商销售订单数据的重复项自动匹配、特征识别与去重处理工具。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "Python",
      "Pandas",
      "Order Processing"
    ],
    "stars": "4/5",
    "highlight": "基于多条件组合匹配判定重复订单，防止重复履约",
    "imageUrl": null,
    "fileCount": 3,
    "filesSample": [
      "1.py",
      "订单1.csv",
      "订单2.csv"
    ]
  },
  {
    "id": "20250619 TFL2JSON",
    "name": "20250619 TFL2JSON",
    "displayName": "20250619 TFL2JSON",
    "category": "office-automation",
    "description": "针对 20250619 TFL2JSON 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 9 个配置文件。",
    "imageUrl": null,
    "fileCount": 9,
    "filesSample": [
      "2.py",
      "dataflow 12.产品活动分析.tfl",
      "tfl.html",
      "tfl2json.html",
      "tfl_en.html",
      "TFL_Processor.exe",
      "TFL_Processor.spec",
      "TFL_Processor_GUI.py",
      "upx.exe"
    ]
  },
  {
    "id": "20250620 tabpic",
    "name": "20250620 tabpic",
    "displayName": "20250620 tabpic",
    "category": "office-automation",
    "description": "针对 20250620 tabpic 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 1 个配置文件。",
    "imageUrl": null,
    "fileCount": 1,
    "filesSample": [
      "tabpic.html"
    ]
  },
  {
    "id": "20250621 clash",
    "name": "20250621 clash",
    "displayName": "20250621 clash",
    "category": "office-automation",
    "description": "针对 20250621 clash 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 1 个配置文件。",
    "imageUrl": null,
    "fileCount": 1,
    "filesSample": [
      "config.yaml"
    ]
  },
  {
    "id": "20250623 小红书评论",
    "name": "20250623 小红书评论",
    "displayName": "20250623 小红书评论",
    "category": "office-automation",
    "description": "针对 20250623 小红书评论 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 1 个配置文件。",
    "imageUrl": null,
    "fileCount": 1,
    "filesSample": [
      "pl.html"
    ]
  },
  {
    "id": "20250624 加微",
    "name": "20250624 加微",
    "displayName": "20250624 加微",
    "category": "office-automation",
    "description": "针对 20250624 加微 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 1 个配置文件。",
    "imageUrl": null,
    "fileCount": 1,
    "filesSample": [
      "1.sql"
    ]
  },
  {
    "id": "20250630 word",
    "name": "20250630 word",
    "displayName": "多 Word 文档内容批量合并工具",
    "category": "office-automation",
    "description": "批量提取成百上千份 Word 文档文字内容并统一合并导出为汇总文件。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "Python",
      "python-docx"
    ],
    "stars": "4/5",
    "highlight": "极大节省人工复制整理成百上千 Word 文档的时间",
    "imageUrl": null,
    "fileCount": 8,
    "filesSample": [
      "1.py",
      "merged_document.txt",
      "关于代写.txt",
      "标准录音 105 涛哥 1_原文.docx",
      "标准录音 106 涛哥 2_原文.docx",
      "标准录音 108 涛哥 3_原文.docx",
      "标准录音 109 涛哥 4_原文.docx",
      "标准录音 110 涛哥 5_原文.docx"
    ]
  },
  {
    "id": "20250701 jiawei",
    "name": "20250701 jiawei",
    "displayName": "20250701 jiawei",
    "category": "office-automation",
    "description": "针对 20250701 jiawei 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 7 个配置文件。",
    "imageUrl": null,
    "fileCount": 7,
    "filesSample": [
      "1.py",
      "2.py",
      "backup",
      "jia.xlsx",
      "tableau_ready_data_final.csv",
      "tableau_ready_data_final.xlsx",
      "加微数据.csv"
    ]
  },
  {
    "id": "20250702 dakehu",
    "name": "20250702 dakehu",
    "displayName": "20250702 dakehu",
    "category": "office-automation",
    "description": "针对 20250702 dakehu 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 7 个配置文件。",
    "imageUrl": null,
    "fileCount": 7,
    "filesSample": [
      "1.py",
      "2.py",
      "3.py",
      "大客户报表_合并后_最终版.csv",
      "大客户报表统计4800以下（6月）.xlsx",
      "大客户报表（6.1~6.30)_transformed new.xlsx",
      "大客户报表（6.1~6.30)_transformed.xlsx"
    ]
  },
  {
    "id": "20250704 hbi",
    "name": "20250704 hbi",
    "displayName": "20250704 hbi",
    "category": "data-bi",
    "description": "针对 20250704 hbi 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 12 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20250704 hbi/claude 1/image-47-2048x1265-1.webp",
    "fileCount": 12,
    "filesSample": [
      "1.html",
      "2.html",
      "3.html",
      "4.html",
      "5.html",
      "6.html",
      "7.html",
      "8.html",
      "claude 1",
      "script.js"
    ]
  },
  {
    "id": "20250712 CFO",
    "name": "20250712 CFO",
    "displayName": "20250712 CFO",
    "category": "office-automation",
    "description": "针对 20250712 CFO 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 1 个配置文件。",
    "imageUrl": null,
    "fileCount": 1,
    "filesSample": [
      "1.md"
    ]
  },
  {
    "id": "20250715 kiro",
    "name": "20250715 kiro",
    "displayName": "20250715 kiro",
    "category": "office-automation",
    "description": "针对 20250715 kiro 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 2 个配置文件。",
    "imageUrl": null,
    "fileCount": 2,
    "filesSample": [
      "gold-price-website",
      "金价查询网站需求文档.md"
    ]
  },
  {
    "id": "20250719 tfl",
    "name": "20250719 tfl",
    "displayName": "20250719 tfl",
    "category": "office-automation",
    "description": "针对 20250719 tfl 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 6 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20250719 tfl/tableau_screenshots/09.转化分析 新/分公司微信转化 总 (2).png",
    "fileCount": 6,
    "filesSample": [
      "download_tableau_flows.py",
      "download_tableau_screenshots.py",
      "list_tableau_workbooks.py",
      "tableau_flows",
      "tableau_screenshots",
      "tb.md"
    ]
  },
  {
    "id": "20250725 slide",
    "name": "20250725 slide",
    "displayName": "20250725 slide",
    "category": "office-automation",
    "description": "针对 20250725 slide 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 1 个配置文件。",
    "imageUrl": null,
    "fileCount": 1,
    "filesSample": [
      "1.html"
    ]
  },
  {
    "id": "20250730 tableau2dingding",
    "name": "20250730 tableau2dingding",
    "displayName": "20250730 tableau2dingding",
    "category": "data-bi",
    "description": "Tableau Server 到钉钉通知转发服务  这是一个将Tableau Server的webhook通知转发到钉钉群的Python服务程序。  ## 功能特性  - 🔔 接收Tableau Server webhook通知 - 📱 将通知转发到钉钉群聊 - 🔐 支持钉钉机器人签名验证 - 📝 格式化通知消息，包含详细信息 - 🚀 简单易用的命令行界面 - 📊 支持健康检查和日志记录  ## 安装  1. 克隆或下载项目文件 2. 安装Python依赖：  ```bash pip install -r requirements.txt ```  ## 配置  ### 1. 创建配置文件  ```bash python main.py --create-config ```  ### 2. 编辑config.json  ```json {   \"dingtalk\": {     \"webhook_url\": \"https://oapi.dingtalk.com/robot/send?access_token=YOUR_ACCESS_TOKEN\",     \"secret\": \"Y",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 17 个配置文件。",
    "imageUrl": null,
    "fileCount": 17,
    "filesSample": [
      "api_monitor.py",
      "config.json",
      "dingtalk_sender.py",
      "email_to_dingtalk.py",
      "log_monitor.py",
      "main.py",
      "merger.py",
      "README.md",
      "requirements.txt",
      "tableau_dingtalk.log"
    ]
  },
  {
    "id": "20250731 pdf unlock",
    "name": "20250731 pdf unlock",
    "displayName": "PDF 复制/打印限制解除工具",
    "category": "office-automation",
    "description": "移除 PDF 文档保护密码，恢复打印、复制与文本选择功能的 Python 工具。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "Python",
      "PyPDF2"
    ],
    "stars": "4/5",
    "highlight": "快速解密受限 PDF，不损害原文档格式",
    "imageUrl": null,
    "fileCount": 4,
    "filesSample": [
      "Mandarin_-_SBINZ_Manual_2018-unlocked.pdf",
      "Mandarin_-_SBINZ_Manual_2018.pdf",
      "Mandarin_-_SBINZ_Manual_2018_unlocked.pdf",
      "unlock_pdf.py"
    ]
  },
  {
    "id": "20250801 whisper",
    "name": "20250801 whisper",
    "displayName": "20250801 whisper",
    "category": "office-automation",
    "description": "Whisper 音频转录服务  基于 Cloudflare Workers 和 Whisper AI 的音频转录服务，支持大文件自动切分处理。  ## 功能特性  - 🎵 支持多种音频格式 (WAV, MP3 等) - 📝 自动生成 SRT 字幕文件 - 🔄 大文件自动切分处理 (超过 25MB) - 🌐 多语言支持 - ⚡ 基于 Cloudflare Workers 的快速处理 - 📊 实时进度显示  ## 大文件处理  系统现在采用智能压缩和切分策略来处理大文件：  1. **音频压缩**: 自动将音频降采样到16kHz单声道，大幅减小文件大小 2. **文件切分**: 压缩后如仍超过 20MB，将按 20MB 大小切分成多个小块 3. **顺序处理**: 逐个处理每个音频片段，避免资源限制 4. **智能重试**: 遇到资源限制时自动重试 5. **处理延迟**: 片段间添加 2 秒延迟，确保稳定性 6. **时间校正**: 自动调整每个片段的时间戳 7. **结果合并**: 将所有转录结果按时间顺序合并 8. **生成字幕**: 输出完整的 SRT 字幕文件  ### 压缩",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 4 个配置文件。",
    "imageUrl": null,
    "fileCount": 4,
    "filesSample": [
      "index.html",
      "index.js",
      "README.md",
      "wrangler.toml"
    ]
  },
  {
    "id": "20250805 tableau project sale",
    "name": "20250805 tableau project sale",
    "displayName": "20250805 tableau project sale",
    "category": "cross-border-ec",
    "description": "针对 20250805 tableau project sale 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 12 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20250805 tableau project sale/微信图片_20250805173628.jpg",
    "fileCount": 12,
    "filesSample": [
      "deploy_backup",
      "index.html",
      "index_backup.html",
      "marketing_copy.md",
      "node_modules",
      "package-lock.json",
      "package.json",
      "xiaohongshu_note.md",
      "xiaohongshu_note_v2.md",
      "微信图片_20250805173628.jpg"
    ]
  },
  {
    "id": "20250807 ski contest",
    "name": "20250807 ski contest",
    "displayName": "20250807 ski contest",
    "category": "ski-domain",
    "description": "针对 20250807 ski contest 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 0 个配置文件。",
    "imageUrl": null,
    "fileCount": 0,
    "filesSample": []
  },
  {
    "id": "20250807 tableau",
    "name": "20250807 tableau",
    "displayName": "20250807 tableau",
    "category": "data-bi",
    "description": "针对 20250807 tableau 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 31 个配置文件。",
    "imageUrl": null,
    "fileCount": 31,
    "filesSample": [
      "add_level_column.py",
      "big_customer_visualizations.json",
      "clean_data.py",
      "clean_orders.xlsx",
      "clean_orders_time.xlsx",
      "customer_level_palette.xml",
      "customer_sales.xlsx",
      "customer_sales_analysis.py",
      "customer_sales_with_level.xlsx",
      "Dashboard_Delivery_Summary.md"
    ]
  },
  {
    "id": "20250807 tb sales",
    "name": "20250807 tb sales",
    "displayName": "20250807 tb sales",
    "category": "office-automation",
    "description": "针对 20250807 tb sales 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 27 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20250807 tb sales/微信1 (1).png",
    "fileCount": 27,
    "filesSample": [
      "assets",
      "extract_pdf.py",
      "extract_tableau_images.py",
      "fullpage-mobile-optimized.html",
      "fullpage-no-scroll.html",
      "fullpage-with-gallery.html",
      "fullpage.html",
      "gemini 1.html",
      "index - 副本.html",
      "index.html"
    ]
  },
  {
    "id": "20250809 data fake",
    "name": "20250809 data fake",
    "displayName": "Excel 商业数据哈希脱敏工具",
    "category": "office-automation",
    "description": "针对敏感客户数据（姓名、手机号、金额）的自动脱敏与哈希加密工具。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "Python",
      "Pandas",
      "hashlib"
    ],
    "stars": "4/5",
    "highlight": "支持保留格式脱敏，保障开发测试数据安全",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20250809 data fake/PixPin_2025-08-09_15-29-48.png",
    "fileCount": 7,
    "filesSample": [
      "datasource.xlsx",
      "datasource_backup_20250809_163504.xlsx",
      "datasource_masked.xlsx",
      "data_masking.py",
      "mapping_table.xlsx",
      "PixPin_2025-08-09_15-29-48.png",
      "process_data.py"
    ]
  },
  {
    "id": "20250816 黄金",
    "name": "20250816 黄金",
    "displayName": "20250816 黄金",
    "category": "office-automation",
    "description": "加微送酒数据分析系统  基于CSV字段分析生成的数据处理和分析代码，用于分析加微送酒业务的关键指标和趋势。  ## 功能特性  - **多数据源整合**: 支持加微送酒、外呼加粉、引流转化等多个数据源 - **时间维度分析**: 自动计算本周/上周/本月/上月的对比数据 - **转化率计算**: 自动计算送酒率、加微率等关键转化指标 - **部门维度汇总**: 按分公司进行数据聚合和排名 - **环比分析**: 计算各项指标的环比增长率 - **报表导出**: 支持导出Excel格式的分析报告  ## 核心指标  ### 加微送酒指标 - 本周/上周/本月/上月加微数量 - 本周/上周/本月/上月送酒数量   - 送酒率 = 送酒数量 / 加微数量  ### 外呼加粉指标 - 外呼加粉数量（按时间段） - 加粉数环比增长率  ### 引流转化指标 - 发货数量 - 发货加微数量 - 发货加微率 = 发货加微数量 / 发货数量  ## 使用方法  ### 1. 安装依赖 ```bash pip install pandas numpy openpyxl ```  ### 2. 准备数",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 17 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20250816 黄金/.codebuddy/.ignored_image/089a9ee5816128a39bee053d207ff7bf.png",
    "fileCount": 17,
    "filesSample": [
      "03.加微送酒分析.xml",
      "03.加微送酒分析_字段分析_2025-08-16.csv",
      "03.加微送酒分析_字段分析_2025-08-16.xlsx",
      "1.html",
      "config.py",
      "demo_analysis_result.xlsx",
      "field_analyzer.py",
      "generated_data_model.py",
      "gold-price-architecture.md",
      "README.md"
    ]
  },
  {
    "id": "20250822 qoder",
    "name": "20250822 qoder",
    "displayName": "20250822 qoder",
    "category": "office-automation",
    "description": "针对 20250822 qoder 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 7 个配置文件。",
    "imageUrl": null,
    "fileCount": 7,
    "filesSample": [
      "app.py",
      "gold_data.py",
      "gold_prices.db",
      "requirements.txt",
      "static",
      "templates",
      "__pycache__"
    ]
  },
  {
    "id": "20250825 sql",
    "name": "20250825 sql",
    "displayName": "20250825 sql",
    "category": "data-bi",
    "description": "针对 20250825 sql 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 6 个配置文件。",
    "imageUrl": null,
    "fileCount": 6,
    "filesSample": [
      "总体分析.ipynb",
      "查询.html",
      "查询.ipynb",
      "查询2.html",
      "查询2.ipynb",
      "查询3.ipynb"
    ]
  },
  {
    "id": "20250903 活动列表",
    "name": "20250903 活动列表",
    "displayName": "20250903 活动列表",
    "category": "office-automation",
    "description": "针对 20250903 活动列表 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 10 个配置文件。",
    "imageUrl": null,
    "fileCount": 10,
    "filesSample": [
      "产品活动文件.txt",
      "活动列表.csv",
      "活动列表_去重.csv",
      "活动列表_去重.xlsx",
      "活动列表_含产品名.csv",
      "活动列表_含产品名.xlsx",
      "活动列表_最终版.csv",
      "活动列表_最终版.xlsx",
      "活动列表_最终版_v2.csv",
      "活动列表_最终版_v2.xlsx"
    ]
  },
  {
    "id": "20250906 hyper sql",
    "name": "20250906 hyper sql",
    "displayName": "20250906 hyper sql",
    "category": "data-bi",
    "description": "针对 20250906 hyper sql 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 3 个配置文件。",
    "imageUrl": null,
    "fileCount": 3,
    "filesSample": [
      "hyperd.log",
      "query_hyper.py",
      "业务数据sql"
    ]
  },
  {
    "id": "20250911 excel export",
    "name": "20250911 excel export",
    "displayName": "20250911 excel export",
    "category": "office-automation",
    "description": "针对 20250911 excel export 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 18 个配置文件。",
    "imageUrl": null,
    "fileCount": 18,
    "filesSample": [
      "analyze_week4_data.py",
      "check_answer_sheet.py",
      "check_excel_structure.py",
      "get_full_week4_data.py",
      "insert_hypothesis_formulas.py",
      "prepare_hypothesis_tests.py",
      "split_excel_preserve_format.py",
      "split_excel_sheets.py",
      "Student Assignment File (3).xlsx",
      "verify_and_interpret_results.py"
    ]
  },
  {
    "id": "20250911 vdatachat",
    "name": "20250911 vdatachat",
    "displayName": "20250911 vdatachat",
    "category": "ai-agents",
    "description": "针对 20250911 vdatachat 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 45 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20250911 vdatachat/9月消费专项分析_20250918_093120.png",
    "fileCount": 45,
    "filesSample": [
      "9月消费专项分析_20250918_093120.png",
      "9月消费专项分析_20250918_100152.png",
      "9月消费专项分析_20250919_143846.png",
      "9月消费专项分析_20251103_163050.png",
      "customer_activity_analysis.png",
      "customer_activity_analysis.py",
      "customer_activity_analysis_duckdb.py",
      "customer_activity_analysis_duckdb_stable.png",
      "customer_activity_analysis_duckdb_stable.py",
      "customer_activity_only_20250917_161659.csv"
    ]
  },
  {
    "id": "20250913 sql analysis",
    "name": "20250913 sql analysis",
    "displayName": "电商私域销售漏斗 SQL 分析",
    "category": "cross-border-ec",
    "description": "针对高客单电商场景，从首次加微/触达到转化复购的完整漏斗 SQL 逻辑。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "SQL",
      "PostgreSQL",
      "Funnel BI"
    ],
    "stars": "4/5",
    "highlight": "精确计算每个转化环节的转化率与流失节点",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20250913 sql analysis/1757908395363_d.png",
    "fileCount": 14,
    "filesSample": [
      "1 8月转化.xlsx",
      "1.txt",
      "1757908395363_d.png",
      "1757908425799_d.png",
      "2 8月班组转化率.xlsx",
      "3 二次转化诊断.xlsx",
      "7月二次转化.sql",
      "Baijiu_Marketing_Diagnosis_SQL_Summary.md",
      "console_3 - 副本.sql",
      "console_3.sql"
    ]
  },
  {
    "id": "20250915 excel viz",
    "name": "20250915 excel viz",
    "displayName": "20250915 excel viz",
    "category": "office-automation",
    "description": "针对 20250915 excel viz 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 9 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20250915 excel viz/ranking_bump_chart.png",
    "fileCount": 9,
    "filesSample": [
      "create_bump_chart.py",
      "create_interactive_chart.py",
      "create_secondary_conversion_chart.py",
      "data.xlsx",
      "index.html",
      "ranking_bump_chart.png",
      "secondary_conversion_chart.html",
      "二次转化",
      "工作簿2.xlsx"
    ]
  },
  {
    "id": "20251017_twb2pbi",
    "name": "20251017_twb2pbi",
    "displayName": "20251017_twb2pbi",
    "category": "data-bi",
    "description": "针对 20251017_twb2pbi 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 1 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20251017_twb2pbi/pbi-sample/Fitcheck OVERVIEW.jpg",
    "fileCount": 1,
    "filesSample": [
      "pbi-sample"
    ]
  },
  {
    "id": "20251024 aotu",
    "name": "20251024 aotu",
    "displayName": "20251024 aotu",
    "category": "office-automation",
    "description": "针对 20251024 aotu 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 1 个配置文件。",
    "imageUrl": null,
    "fileCount": 1,
    "filesSample": [
      "1.html"
    ]
  },
  {
    "id": "20251026 tbexport",
    "name": "20251026 tbexport",
    "displayName": "20251026 tbexport",
    "category": "office-automation",
    "description": "针对 20251026 tbexport 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 14 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20251026 tbexport/marketing leads.png",
    "fileCount": 14,
    "filesSample": [
      "backup",
      "index.html",
      "Marketing Leads - Salesforce.twb",
      "Marketing Leads - Salesforce_documentation.md",
      "marketing leads.md",
      "marketing leads.png",
      "Part 1_ LinkedIn Performance Review Dashboard.twb",
      "Part 1_ LinkedIn Performance Review Dashboard.twb 个文件",
      "Part 1_ LinkedIn Performance Review Dashboard.twbx",
      "PixPin_2025-10-26_14-38-27.png"
    ]
  },
  {
    "id": "20251031 download excel img",
    "name": "20251031 download excel img",
    "displayName": "Excel 图片批量并发下载器",
    "category": "office-automation",
    "description": "读取 Excel 中的图片 URL 列表，并发自动下载保存至本地指定目录。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "Python",
      "requests",
      "ThreadPoolExecutor"
    ],
    "stars": "4/5",
    "highlight": "支持多线程并发下载与失败重试策略",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20251031 download excel img/images/11.png",
    "fileCount": 17,
    "filesSample": [
      "1.go",
      "1.html",
      "1.ps1",
      "1.py",
      "1.spec",
      "2.ps1",
      "build",
      "data.xlsx",
      "dist",
      "go.mod"
    ]
  },
  {
    "id": "20251031 音频压缩",
    "name": "20251031 音频压缩",
    "displayName": "MP3/音频高压缩客户端 (Wails)",
    "category": "office-automation",
    "description": "基于 Go + Wails + FFmpeg 打造的高保真 MP3/音频桌面压缩工具。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "Go",
      "Wails",
      "Vue 3",
      "FFmpeg"
    ],
    "stars": "4/5",
    "highlight": "极小内存占用，一键将音频压缩 70%",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20251031 音频压缩/mp3-compressor-wails/build/appicon.png",
    "fileCount": 11,
    "filesSample": [
      "compressed",
      "debug.html",
      "debug_app.go",
      "main.go",
      "mp3-compressor-wails",
      "mp3_compressor.exe",
      "mp3_compressor.log",
      "simple_test.html",
      "simple_test_app.go",
      "使用说明.md"
    ]
  },
  {
    "id": "20251104 emltodocx",
    "name": "20251104 emltodocx",
    "displayName": ".eml 邮件转 Word 文档归档工具",
    "category": "office-automation",
    "description": "解析 .eml 邮件正文、发件人与附件，自动排版输出为 Word (.docx) 文档。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "Python",
      "python-docx",
      "Email Parser"
    ],
    "stars": "4/5",
    "highlight": "批量转化邮件为可打印编辑的 Word 归档",
    "imageUrl": null,
    "fileCount": 3,
    "filesSample": [
      "eml_to_docx.py",
      "Re_ NNE TUG Returns December 4 with Andy Cotgreave!.docx",
      "Re_ NNE TUG Returns December 4 with Andy Cotgreave!.eml"
    ]
  },
  {
    "id": "20251105 data review",
    "name": "20251105 data review",
    "displayName": "20251105 data review",
    "category": "data-bi",
    "description": "针对 20251105 data review 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 11 个配置文件。",
    "imageUrl": null,
    "fileCount": 11,
    "filesSample": [
      "2020-2025年签收营业额查询.ipynb",
      "2020-2025年签收营业额查询_check_time.ipynb",
      "2020-2025年签收营业额查询_fixed.ipynb",
      "2020-2025年签收营业额查询_fixed_overflow.ipynb",
      "2020-2025年签收营业额查询_no_scientific.ipynb",
      "dataflow 03.周或月加粉统计 测试.json",
      "dataflow 09.加微转化情况 新员工.json",
      "dataflow 22.过程指标转化 (3).json",
      "分公司加微数查询.ipynb",
      "加微数对比分析.ipynb"
    ]
  },
  {
    "id": "20251105 tfls_download",
    "name": "20251105 tfls_download",
    "displayName": "20251105 tfls_download",
    "category": "office-automation",
    "description": "Tableau Server 数据流程批量下载工具  这个工具可以让你从 Tableau Server 一键下载所有的数据流程（.tfl/.tflx 文件）。  ## 功能特性  - ✅ 支持从 Tableau Server 批量下载所有数据流程 - ✅ 支持 .tfl 和 .tflx 格式 - ✅ 支持用户名密码认证和个人访问令牌认证 - ✅ 支持配置文件和交互式输入 - ✅ 支持名称过滤，只下载匹配的数据流程 - ✅ 自动处理文件名冲突 - ✅ 显示下载进度和文件大小 - ✅ 生成详细的下载报告（JSON 格式） - ✅ 交互式和命令行两种运行模式  ## 安装依赖  ```bash pip install -r requirements.txt ```  需要安装的包： - `tableauserverclient` - Tableau Server 的 Python 客户端库  ## 使用方法  ### 方式一：交互式模式（推荐新手）  直接运行脚本，根据提示输入认证信息：  ```bash python tableau_downloader.py ```  或者使用高级版",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 26 个配置文件。",
    "imageUrl": null,
    "fileCount": 26,
    "filesSample": [
      "analyze_results.py",
      "clean_and_rename.py",
      "config_template.ini",
      "downloaded_bypass",
      "downloaded_by_id",
      "downloaded_tfls_final",
      "download_bypass.py",
      "download_by_id.py",
      "download_final.py",
      "download_log.txt"
    ]
  },
  {
    "id": "20251106 pbip demo",
    "name": "20251106 pbip demo",
    "displayName": "Power BI 跨国电商 Superstore 复刻",
    "category": "cross-border-ec",
    "description": "使用微软最新 PBIP 格式复刻 Superstore 跨国电商 KPI 仪表板，包含完整 DAX 体系。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "Power BI PBIP",
      "DAX",
      "E-Commerce"
    ],
    "stars": "4/5",
    "highlight": "包含动态 KPI 卡片、利润预测与切片器联动",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20251106 pbip demo/Dashboard.png",
    "fileCount": 21,
    "filesSample": [
      "20251106 pbip demo 成功连接数据.zip",
      "convert_docx_to_md.py",
      "Dashboard.png",
      "District Monthly Sales.png",
      "docs",
      "FINAL_COMPLETION_REPORT.md",
      "FINAL_VALIDATION_REPORT.md",
      "gemini.txt",
      "Microsoft powerbi report rules",
      "New Stores.png"
    ]
  },
  {
    "id": "20251111 chat_value_sep",
    "name": "20251111 chat_value_sep",
    "displayName": "20251111 chat_value_sep",
    "category": "ai-agents",
    "description": "针对 20251111 chat_value_sep 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 1 个配置文件。",
    "imageUrl": null,
    "fileCount": 1,
    "filesSample": [
      "1.html"
    ]
  },
  {
    "id": "20251113 pics",
    "name": "20251113 pics",
    "displayName": "20251113 pics",
    "category": "office-automation",
    "description": "针对 20251113 pics 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 6 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20251113 pics/1763027500778_d.jpg",
    "fileCount": 6,
    "filesSample": [
      "1763027500778_d.jpg",
      "IMG_20250619_115205.jpg",
      "IMG_20250619_115209.jpg",
      "IMG_20250619_115435.jpg",
      "IMG_20250619_120057.jpg",
      "IMG_20250619_120106.jpg"
    ]
  },
  {
    "id": "20251114 coze",
    "name": "20251114 coze",
    "displayName": "20251114 coze",
    "category": "ai-agents",
    "description": "针对 20251114 coze 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 1 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20251114 coze/cozeworkflows/images/0d01550f-7275-42ba-8b16-0fa2345e56de.png",
    "fileCount": 1,
    "filesSample": [
      "cozeworkflows"
    ]
  },
  {
    "id": "20251115 3dmap",
    "name": "20251115 3dmap",
    "displayName": "20251115 3dmap",
    "category": "saas-web",
    "description": "ECharts 3D China Map Visualization",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 27 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20251115 3dmap/1763173649334_d.jpg",
    "fileCount": 27,
    "filesSample": [
      "1763173649334_d.jpg",
      "all_provinces_data.json",
      "china.json",
      "Echarts创建中国3D地图 - 于北往南 - 博客园.docx",
      "Echarts创建中国3D地图 - 于北往南 - 博客园_markitdown.md",
      "EXCEL_DATA_GUIDE.md",
      "final_final_optimized.html",
      "final_optimized.html",
      "index.html",
      "map_data.json"
    ]
  },
  {
    "id": "20251117 ppt",
    "name": "20251117 ppt",
    "displayName": "20251117 ppt",
    "category": "office-automation",
    "description": "针对 20251117 ppt 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 8 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20251117 ppt/ppt-slidev/Fitcheck OVERVIEW powerbi.jpg",
    "fileCount": 8,
    "filesSample": [
      "ACT_I_IMAGE_UPDATE.md",
      "EXPORT_FUNCTIONALITY_REPORT.md",
      "ppt-slidev",
      "ppt.html",
      "PROJECT_COMPLETION_REPORT.md",
      "slidev-presentation",
      "SLIDEV_EXPORT_GUIDE.md",
      "TEXT_SELECTION_GUIDE.md"
    ]
  },
  {
    "id": "20251119 wechat point",
    "name": "20251119 wechat point",
    "displayName": "20251119 wechat point",
    "category": "ai-agents",
    "description": "针对 20251119 wechat point 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 14 个配置文件。",
    "imageUrl": null,
    "fileCount": 14,
    "filesSample": [
      "analysis.py",
      "analysis_logic.sql",
      "app.py",
      "database_schema_export.md",
      "debug_data.py",
      "debug_progress.py",
      "export_schema.py",
      "e_vdata_ai_event_progress_20251119_171750.csv",
      "e_vdata_topics_ai_event_20251119_171539.csv",
      "e_vdata_topics_batch_20251119_171539.csv"
    ]
  },
  {
    "id": "20251122 excel split",
    "name": "20251122 excel split",
    "displayName": "Excel 分公司大表自动拆分器",
    "category": "office-automation",
    "description": "基于 Go + Excelize 开发的按部门/分公司一键拆分几十万行 Excel 大表工具。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "Go",
      "Excelize",
      "Excel 自动化"
    ],
    "stars": "4/5",
    "highlight": "毫秒级完成几十万行大表格的拆分导出",
    "imageUrl": null,
    "fileCount": 16,
    "filesSample": [
      "2.html",
      "create_test_excel.go",
      "excel_multi_split.exe",
      "excel_multi_split.go",
      "excel_split.exe",
      "excel_split.go",
      "go.mod",
      "go.sum",
      "index.html",
      "README.md"
    ]
  },
  {
    "id": "20251125 trae",
    "name": "20251125 trae",
    "displayName": "20251125 trae",
    "category": "office-automation",
    "description": "针对 20251125 trae 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 2 个配置文件。",
    "imageUrl": null,
    "fileCount": 2,
    "filesSample": [
      "tableau",
      "永封账号统计"
    ]
  },
  {
    "id": "20251127_ladataviz",
    "name": "20251127_ladataviz",
    "displayName": "20251127_ladataviz",
    "category": "data-bi",
    "description": "LaDataViz 源码分析笔记  > 记录时间：2026-03-17 > 来源：从 ladataviz.com 爬取的前端静态资源  ---  ## 目录结构  ``` 20251127_ladataviz/ ├── app.py                    # 网站爬虫脚本（用于下载前端资源） ├── fix_local_paths.py        # 修复本地路径引用的脚本 ├── local_server.py           # 本地 SPA 服务器（端口 8080） ├── simple_server.py          # 简版本地服务器 ├── local_config.py           # 本地运行配置 ├── ladataviz_download.zip    # 原始下载压缩包 └── ladataviz_download/       # 解压后的前端资源     ├── index.html            # SPA 入口（AdvViz 首页）     ├── server.py             # 内置 SP",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 8 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20251127_ladataviz/ladataviz_download/advviz/beeswarm.png",
    "fileCount": 8,
    "filesSample": [
      "app.py",
      "fix_local_paths.py",
      "ladataviz_download",
      "ladataviz_download.zip",
      "local_config.py",
      "local_server.py",
      "README.md",
      "simple_server.py"
    ]
  },
  {
    "id": "20251127_pptpic",
    "name": "20251127_pptpic",
    "displayName": "20251127_pptpic",
    "category": "office-automation",
    "description": "针对 20251127_pptpic 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 3 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20251127_pptpic/unnamed.jpg",
    "fileCount": 3,
    "filesSample": [
      "1.html",
      "unnamed.jpg",
      "卡通字.html"
    ]
  },
  {
    "id": "20251129_tableau_dashboard_list",
    "name": "20251129_tableau_dashboard_list",
    "displayName": "20251129_tableau_dashboard_list",
    "category": "data-bi",
    "description": "针对 20251129_tableau_dashboard_list 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 17 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20251129_tableau_dashboard_list/downloads/默认值/09.转化分析 新/分公司微信转化 总 (2).png",
    "fileCount": 17,
    "filesSample": [
      "dashboards_data.json",
      "downloads",
      "download_views.py",
      "fsdingding.env",
      "google.json",
      "interactive_dingtalk_push.py",
      "interactive_dingtalk_push_fs.py",
      "interactive_dingtalk_push_unified.py",
      "list_dashboards.py",
      "phgoogletotxt.json"
    ]
  },
  {
    "id": "20251203_yuming",
    "name": "20251203_yuming",
    "displayName": "20251203_yuming",
    "category": "office-automation",
    "description": "针对 20251203_yuming 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 5 个配置文件。",
    "imageUrl": null,
    "fileCount": 5,
    "filesSample": [
      "1.md",
      "check.bat",
      "domains.txt",
      "域名扫描结果.md",
      "新域名构思.md"
    ]
  },
  {
    "id": "20251205_joyplot_py",
    "name": "20251205_joyplot_py",
    "displayName": "20251205_joyplot_py",
    "category": "office-automation",
    "description": "针对 20251205_joyplot_py 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "Python",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 4 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20251205_joyplot_py/.venv/Lib/site-packages/scipy/ndimage/tests/dots.png",
    "fileCount": 4,
    "filesSample": [
      "1.py",
      "pyproject.toml",
      "README.md",
      "uv.lock"
    ]
  },
  {
    "id": "20251206_poster-design",
    "name": "20251206_poster-design",
    "displayName": "迅排设计 (开源海报设计工具)",
    "category": "flagships",
    "description": "基于 Vue 3 + Canvas 构建的开源在线海报设计与平面排版工具，支持多图层与文本样式渲染。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": "https://github.com/palxiao/poster-design",
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "Vue 3",
      "Vite 5",
      "Pinia",
      "Canvas"
    ],
    "stars": "4/5",
    "highlight": "功能完备的在线图片海报设计与导出工具",
    "imageUrl": "https://github.com/user-attachments/assets/e2b8c788-aded-4b1a-83ee-9bde124f5808",
    "fileCount": 16,
    "filesSample": [
      "babel.config.js",
      "docker",
      "index.html",
      "LICENSE",
      "LICENSE-ZH",
      "node_modules",
      "package-lock.json",
      "package.json",
      "packages",
      "postcss.config.js"
    ]
  },
  {
    "id": "20251212-m4a-compress",
    "name": "20251212-m4a-compress",
    "displayName": "20251212-m4a-compress",
    "category": "office-automation",
    "description": "针对 20251212-m4a-compress 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 2 个配置文件。",
    "imageUrl": null,
    "fileCount": 2,
    "filesSample": [
      "明确各层级数据查看权限.m4a",
      "明确各层级数据查看权限_48k.m4a"
    ]
  },
  {
    "id": "20251213-download-tfl",
    "name": "20251213-download-tfl",
    "displayName": "20251213-download-tfl",
    "category": "office-automation",
    "description": "针对 20251213-download-tfl 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": "https://github.com/imgwho/restapi-download-tfl",
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 2 个配置文件。",
    "imageUrl": null,
    "fileCount": 2,
    "filesSample": [
      "1.py",
      "tableau_flows"
    ]
  },
  {
    "id": "20251213-markitdown",
    "name": "20251213-markitdown",
    "displayName": "MarkItDown 多格式转 Markdown",
    "category": "office-automation",
    "description": "利用微软 MarkItDown 引擎，将 PDF、Word、Excel 极速转换为 Markdown 格式。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "Python",
      "markitdown",
      "CLI"
    ],
    "stars": "4/5",
    "highlight": "高质量保留原有表格结构，方便 AI 知识库读取",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20251213-markitdown/.venv/Lib/site-packages/sympy/plotting/tests/test_region_and.png",
    "fileCount": 6,
    "filesSample": [
      "main.py",
      "output.md",
      "pyproject.toml",
      "README.md",
      "uv.lock",
      "内容策略.pdf"
    ]
  },
  {
    "id": "20251215-chat-analysis",
    "name": "20251215-chat-analysis",
    "displayName": "20251215-chat-analysis",
    "category": "ai-agents",
    "description": "真实互动聊点发现系统  从历史聊天中发现真正引发过客户回复和持续交流的生活话题，并将真实互动证据整理为可检索、可解释的聊点库。  [在线 Dashboard](https://imgwho.github.io/20251215-chat-analysis/) · [旧版 Dashboard](https://imgwho.github.io/20251215-chat-analysis/archive/dashboard_v1/index.html) · [新版聊点报告](output_202511/v2/topics.md) · [v2 方法说明](docs/interaction-topics-v2.md)  ## 项目定位  当前主流程只使用一张聊天表：  ```text e_vdata_message_202511.csv ```  系统不预测成交，也不依赖订单、客户画像或 AI 主观效果分。它只回答一个问题：  > 哪些话题曾经引发客户真实回复，并推动了持续交流？  旧版 Hunting/Farming 多表分析仍作为兼容能力保留在 `src/chat_analysis/",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": "https://github.com/imgwho/20251215-chat-analysis",
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 29 个配置文件。",
    "imageUrl": null,
    "fileCount": 29,
    "filesSample": [
      "analyze_with_ai.py",
      "archive",
      "backup",
      "config.example.yaml",
      "config.local.yaml",
      "config.yaml",
      "dashboard",
      "docs",
      "extract_data.py",
      "e_vdata_message_202511.csv"
    ]
  },
  {
    "id": "20251217-html2pdf",
    "name": "20251217-html2pdf",
    "displayName": "HTML 演示文稿 Chrome 转 PDF",
    "category": "office-automation",
    "description": "使用无头 Chrome 精准将单页 HTML 演示文稿导出为高保真 PDF 矢量文件。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "PowerShell",
      "Chrome Headless"
    ],
    "stars": "4/5",
    "highlight": "保持像素级精度的矢量 PDF 导出",
    "imageUrl": null,
    "fileCount": 5,
    "filesSample": [
      "1.html",
      "1204 tug meeting by cooper.pdf",
      "1_no_scroll.pdf",
      "1_print.html",
      "README.md"
    ]
  },
  {
    "id": "20251217-n8n-html",
    "name": "20251217-n8n-html",
    "displayName": "n8n 自动化抓取 LinkedIn 动态",
    "category": "cross-border-ec",
    "description": "基于 n8n 工作流定时抓取 LinkedIn 跨境账号动态更新并保存为 HTML 页面快照。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "n8n",
      "HTML Snapshots",
      "LinkedIn"
    ],
    "stars": "4/5",
    "highlight": "零代码自动化抓取海外社媒动态",
    "imageUrl": null,
    "fileCount": 1,
    "filesSample": [
      "1.html"
    ]
  },
  {
    "id": "20251218-reddit-n8n",
    "name": "20251218-reddit-n8n",
    "displayName": "Reddit 到微信公众号 AI 自动化",
    "category": "cross-border-ec",
    "description": "n8n 工作流抓取 Reddit 跨境社区爆款内容，经 DeepSeek AI 翻译润色后自动排版导出。",
    "aiDepth": "native",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "n8n",
      "DeepSeek API",
      "Reddit API"
    ],
    "stars": "4/5",
    "highlight": "端到端实现跨国社区内容挖掘与 AI 翻译润色",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20251218-reddit-n8n/PixPin_2025-12-19_14-11-51.png",
    "fileCount": 26,
    "filesSample": [
      "1.js",
      "backup",
      "backup2",
      "create_reddit_sheet.py",
      "create_sheet_drive_method.py",
      "delete_file.py",
      "fixed_code_node.js",
      "generate_excel.py",
      "google sheet api-480907-ab28a0efe7f7.json",
      "list_files_cleanup.py"
    ]
  },
  {
    "id": "20251219-skixhsdata",
    "name": "20251219-skixhsdata",
    "displayName": "20251219-skixhsdata",
    "category": "ski-domain",
    "description": "针对 20251219-skixhsdata 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 0 个配置文件。",
    "imageUrl": null,
    "fileCount": 0,
    "filesSample": []
  },
  {
    "id": "20251221-pics-fenlei",
    "name": "20251221-pics-fenlei",
    "displayName": "20251221-pics-fenlei",
    "category": "office-automation",
    "description": "针对 20251221-pics-fenlei 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 4 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20251221-pics-fenlei/截图/mmexport1724121306640.jpg",
    "fileCount": 4,
    "filesSample": [
      "截图",
      "海报",
      "滑雪",
      "风景"
    ]
  },
  {
    "id": "20251222-imgwho",
    "name": "20251222-imgwho",
    "displayName": "20251222-imgwho",
    "category": "saas-web",
    "description": "# Run and deploy your AI Studio app  This contains everything you need to run your app locally.  View your app in AI Studio: https://ai.studio/apps/drive/1kkax-IRMYP0Qr4LJs_6-Z4iXNMOhupE_  ## Run Locally  **Prerequisites:**  Node.js   1. Install dependencies:    `npm install` 2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 22 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20251222-imgwho/public/apple-touch-icon.png",
    "fileCount": 22,
    "filesSample": [
      "App.tsx",
      "data",
      "dist",
      "i18n.ts",
      "index.css",
      "index.html",
      "index.tsx",
      "metadata.json",
      "node_modules",
      "package-lock.json"
    ]
  },
  {
    "id": "20251222-xhslink",
    "name": "20251222-xhslink",
    "displayName": "20251222-xhslink",
    "category": "office-automation",
    "description": "针对 20251222-xhslink 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 0 个配置文件。",
    "imageUrl": null,
    "fileCount": 0,
    "filesSample": []
  },
  {
    "id": "20260103-japan-ski",
    "name": "20260103-japan-ski",
    "displayName": "20260103-japan-ski",
    "category": "ski-domain",
    "description": "针对 20260103-japan-ski 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 0 个配置文件。",
    "imageUrl": null,
    "fileCount": 0,
    "filesSample": []
  },
  {
    "id": "20260105-xhs-domain",
    "name": "20260105-xhs-domain",
    "displayName": "品牌出海域名比价与分析",
    "category": "cross-border-ec",
    "description": "批量查询分析适合出海品牌宣传与跨境选址的未注册域名及其价格。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "Python",
      "WHOIS API",
      "出海域名"
    ],
    "stars": "4/5",
    "highlight": "自动评估高价值出海域名的注册状态",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20260105-xhs-domain/PixPin_2026-01-06_23-08-38.png",
    "fileCount": 10,
    "filesSample": [
      "1.html",
      "gold.html",
      "my-app",
      "non_chinese_domains.md",
      "non_chinese_domains_prices.md",
      "PixPin_2026-01-06_23-08-38.png",
      "tweakcn",
      "tweakcn.com_editor_theme (1).png",
      "tweakcn.com_editor_theme (2).png",
      "weather.html"
    ]
  },
  {
    "id": "20260109-tableauPushDing",
    "name": "20260109-tableauPushDing",
    "displayName": "20260109-tableauPushDing",
    "category": "data-bi",
    "description": "﻿# Tableau Push Ding  Tableau Push Ding 是一个面向运营报表分发场景的自动化推送系统。 它会按计划从 Tableau Server 拉取视图截图，进行拼接处理，并通过钉钉企业应用消息推送给指定用户。  ## 主要功能 - 定时任务调度：支持基于 Cron 的自动执行。 - Tableau 工作簿拉取：按任务配置获取工作簿视图图片。 - 图片处理：使用 `sharp` 进行多图拼接。 - 钉钉推送：自动获取 Token、上传图片并发送工作通知。 - 环境管理：支持多环境（例如测试/正式）配置隔离。 - 用户管理：支持按环境维护接收用户。 - 管理后台：提供任务、用户、环境的可视化管理界面。  ## 技术栈 - 后端：Bun、Elysia、SQLite - 前端：React、Vite、TypeScript - 外部集成：Tableau REST API、DingTalk OpenAPI  ## 项目结构 ```text . |- index.ts                      # 后端入口 |- src/ |  |- db/db.ts",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": "https://github.com/imgwho/tableauPushDing",
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 18 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20260109-tableauPushDing/frontend/public/vite.svg",
    "fileCount": 18,
    "filesSample": [
      "backend.log",
      "bun.lock",
      "CHANGELOG.md",
      "ecosystem.config.cjs",
      "frontend",
      "frontend.log",
      "index.ts",
      "LICENSE",
      "package.json",
      "README.MD"
    ]
  },
  {
    "id": "20260201-video",
    "name": "20260201-video",
    "displayName": "20260201-video",
    "category": "office-automation",
    "description": "针对 20260201-video 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 1 个配置文件。",
    "imageUrl": null,
    "fileCount": 1,
    "filesSample": [
      "bandicam 2026-02-01 22-06-44-547 cooper adam.mp4"
    ]
  },
  {
    "id": "20260203-tflgenerator",
    "name": "20260203-tflgenerator",
    "displayName": "cwprep (Tableau Prep 流程生成引擎)",
    "category": "flagships",
    "description": "Tableau Prep 流程自动化生成引擎，支持从自然语言/代码一键生成 .tfl/.tflx 流程文件，支持 MCP 协议，已发布 PyPI。",
    "aiDepth": "native",
    "githubStatus": "ready",
    "githubUrl": "https://github.com/aidatacooper/cwprep",
    "pypiStatus": "v0.1.8 已发布",
    "mcpReady": true,
    "techStack": [
      "Python",
      "MCP 协议",
      "Tableau Prep XML",
      "PyPI"
    ],
    "stars": "4/5",
    "highlight": "首个开源支持 MCP 协议的 Tableau Prep 代码级生成器",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20260203-tflgenerator/docs/assets/readme/hero.png",
    "fileCount": 21,
    "filesSample": [
      "backup",
      "build",
      "changelog.md",
      "config.example.yaml",
      "config.yaml",
      "demo_output",
      "demo_output.tfl",
      "dist",
      "docs",
      "examples"
    ]
  },
  {
    "id": "20260204-YouTubedownload",
    "name": "20260204-YouTubedownload",
    "displayName": "YouTube 跨境视频/音频提取器",
    "category": "cross-border-ec",
    "description": "自动化下载 YouTube 跨境音视频素材并提取字幕文本的 Python 工具。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "Python",
      "yt-dlp",
      "FFmpeg"
    ],
    "stars": "4/5",
    "highlight": "支持批量下载海外视频与多语种音频提取",
    "imageUrl": null,
    "fileCount": 7,
    "filesSample": [
      "batch_embed_subs.bat",
      "cookies.txt",
      "videoplayback.mp4",
      "videoplayback.srt",
      "videoplayback_sub.mp4",
      "yt-dlp.exe",
      "下载视频.bat"
    ]
  },
  {
    "id": "20260206-feishudoc",
    "name": "20260206-feishudoc",
    "displayName": "20260206-feishudoc",
    "category": "office-automation",
    "description": "针对 20260206-feishudoc 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 2 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20260206-feishudoc/用AI从0到1做仪表板/images/CcGlbxXyFoav97xyvdVcaDIanbf.png",
    "fileCount": 2,
    "filesSample": [
      "backup",
      "用AI从0到1做仪表板"
    ]
  },
  {
    "id": "20260209-pbi",
    "name": "20260209-pbi",
    "displayName": "20260209-pbi",
    "category": "data-bi",
    "description": "针对 20260209-pbi 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 4 个配置文件。",
    "imageUrl": null,
    "fileCount": 4,
    "filesSample": [
      "project_documentation.md",
      "vendor_performance.pbip",
      "vendor_performance.Report",
      "vendor_performance.SemanticModel"
    ]
  },
  {
    "id": "20260210-cwpreptest",
    "name": "20260210-cwpreptest",
    "displayName": "20260210-cwpreptest",
    "category": "office-automation",
    "description": "针对 20260210-cwpreptest 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 9 个配置文件。",
    "imageUrl": null,
    "fileCount": 9,
    "filesSample": [
      "1.py",
      "1.sql",
      "bandicam 2026-02-10 11-13-21-664.mp4",
      "cwprep_demo_with_subs.mp4",
      "db_superstore.md",
      "generate_flow.py",
      "generate_vip_flow.py",
      "superstore_prep.tfl",
      "vip_client_list.tfl"
    ]
  },
  {
    "id": "20260224-cwpreptest",
    "name": "20260224-cwpreptest",
    "displayName": "20260224-cwpreptest",
    "category": "office-automation",
    "description": "针对 20260224-cwpreptest 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 6 个配置文件。",
    "imageUrl": null,
    "fileCount": 6,
    "filesSample": [
      "1.sql",
      "config.yaml",
      "高价值",
      "高价值.tfl",
      "高价值_修订版",
      "高价值_修订版.tfl"
    ]
  },
  {
    "id": "20260226-cwpreptest",
    "name": "20260226-cwpreptest",
    "displayName": "20260226-cwpreptest",
    "category": "office-automation",
    "description": "针对 20260226-cwpreptest 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 21 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20260226-cwpreptest/backup/Orders_Returns_Join tfl/flowGraphThumbnail.svg",
    "fileCount": 21,
    "filesSample": [
      "111 Files",
      "111.tfl",
      "111.tflx",
      "backup",
      "db_superstore.txt",
      "demo_output.tfl",
      "demo_output_mysql_final.sql",
      "demo_output_translated.sql",
      "Online_Store",
      "Online_Store Dataset.zip"
    ]
  },
  {
    "id": "20260227-cwtwb",
    "name": "20260227-cwtwb",
    "displayName": "cwtwb (Tableau 工作簿代码构建引擎)",
    "category": "flagships",
    "description": "Tableau 工作簿工程构建库，通过纯代码完成图表绘制、校验、迁移与 .twb/.twbx 构建，已发布 PyPI。",
    "aiDepth": "native",
    "githubStatus": "ready",
    "githubUrl": "https://github.com/aidatacooper/cwtwb",
    "pypiStatus": "v0.2.1 已发布",
    "mcpReady": true,
    "techStack": [
      "Python",
      "lxml",
      "MCP 协议",
      "Tableau XSD"
    ],
    "stars": "4/5",
    "highlight": "彻底打破 Tableau 工作簿手动拖拽配置限制",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20260227-cwtwb/output/overview_screenshot.png",
    "fileCount": 19,
    "filesSample": [
      "backup",
      "CHANGELOG.md",
      "CONTRIBUTING.md",
      "dist",
      "docs",
      "examples",
      "hyperd.log",
      "LICENSE",
      "mcp.json",
      "output"
    ]
  },
  {
    "id": "20260309-cwtwbtest",
    "name": "20260309-cwtwbtest",
    "displayName": "20260309-cwtwbtest",
    "category": "office-automation",
    "description": "针对 20260309-cwtwbtest 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 13 个配置文件。",
    "imageUrl": null,
    "fileCount": 13,
    "filesSample": [
      "2024 2025自营公司签收营业额.xlsx",
      "all_supported_charts.twb",
      "all_supported_charts_recreated.twb",
      "check_hyper.py",
      "Complete Visualization Dashboard.twb",
      "convert_to_csv.py",
      "hyperd.log",
      "modify_twb.py",
      "sales_data.csv",
      "sales_data.hyper"
    ]
  },
  {
    "id": "20260309-cwtwbtest2",
    "name": "20260309-cwtwbtest2",
    "displayName": "20260309-cwtwbtest2",
    "category": "office-automation",
    "description": "针对 20260309-cwtwbtest2 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 2 个配置文件。",
    "imageUrl": null,
    "fileCount": 2,
    "filesSample": [
      "all_supported_charts cc correct.twb",
      "all_supported_charts cc.twb"
    ]
  },
  {
    "id": "20260309-openrouter",
    "name": "20260309-openrouter",
    "displayName": "20260309-openrouter",
    "category": "ai-agents",
    "description": "针对 20260309-openrouter 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 1 个配置文件。",
    "imageUrl": null,
    "fileCount": 1,
    "filesSample": [
      "test_openrouter.py"
    ]
  },
  {
    "id": "20260313-cwtwbtest",
    "name": "20260313-cwtwbtest",
    "displayName": "20260313-cwtwbtest",
    "category": "office-automation",
    "description": "针对 20260313-cwtwbtest 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 5 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20260313-cwtwbtest/tfl_extracted/原版/flowGraphImage.png",
    "fileCount": 5,
    "filesSample": [
      "dataflow 22.加微过程指标转化 新.tfl",
      "dataflow 22.加微过程指标转化 新_年月日优化版.tfl",
      "output",
      "Sales_Dashboard.twb",
      "tfl_extracted"
    ]
  },
  {
    "id": "20260316-hbi",
    "name": "20260316-hbi",
    "displayName": "20260316-hbi",
    "category": "data-bi",
    "description": "针对 20260316-hbi 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 6 个配置文件。",
    "imageUrl": null,
    "fileCount": 6,
    "filesSample": [
      "application.yml",
      "dump-portal-202603161703.sql",
      "import_fs.py",
      "jishuitan-1.0-SNAPSHOT",
      "jishuitan-1.0-SNAPSHOT.jar",
      "start.bat"
    ]
  },
  {
    "id": "20260318-jiawei",
    "name": "20260318-jiawei",
    "displayName": "20260318-jiawei",
    "category": "office-automation",
    "description": "针对 20260318-jiawei 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 5 个配置文件。",
    "imageUrl": null,
    "fileCount": 5,
    "filesSample": [
      "1 dataflow 22.加微过程指标转化 新_年月日优化版.tfl",
      "1 加微过程转化_年月日.twb",
      "2 dataflow 22.加微过程指标转化 (2025全量版).tfl",
      "2 加微送酒转化看板.twb",
      "funnel_202603_01_15.sql"
    ]
  },
  {
    "id": "20260323-datacooper",
    "name": "20260323-datacooper",
    "displayName": "20260323-datacooper",
    "category": "data-bi",
    "description": "针对 20260323-datacooper 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 5 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20260323-datacooper/file.svg",
    "fileCount": 5,
    "filesSample": [
      "DESIGN.md",
      "file.svg",
      "tableaumcp-bridge",
      "tableaumcp-bridge-static.html",
      "tableaumcp-bridge.zip"
    ]
  },
  {
    "id": "20260327",
    "name": "20260327",
    "displayName": "20260327",
    "category": "office-automation",
    "description": "针对 20260327 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 9 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20260327/backblue.gif",
    "fileCount": 9,
    "filesSample": [
      "backblue.gif",
      "download_fonts.py",
      "fade.gif",
      "index.html",
      "scraper.py",
      "twilize_site",
      "twilize_site.whtt",
      "twiz",
      "twiz.whtt"
    ]
  },
  {
    "id": "20260327-tfl-download",
    "name": "20260327-tfl-download",
    "displayName": "20260327-tfl-download",
    "category": "office-automation",
    "description": "针对 20260327-tfl-download 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 6 个配置文件。",
    "imageUrl": null,
    "fileCount": 6,
    "filesSample": [
      "download_flows_playwright copy.py",
      "download_flows_playwright.py",
      "download_flows_requests.py",
      "download_tableau_flows.py",
      "list_tableau_flows.py",
      "list_tableau_workbooks.py"
    ]
  },
  {
    "id": "20260401-jiawei",
    "name": "20260401-jiawei",
    "displayName": "20260401-jiawei",
    "category": "office-automation",
    "description": "针对 20260401-jiawei 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 9 个配置文件。",
    "imageUrl": null,
    "fileCount": 9,
    "filesSample": [
      "1.sql",
      "2025_jiawei_songjiu_detail.sql",
      "2025_jiawei_songjiu_detail_final.sql",
      "2025加微送酒统计流.tfl",
      "202603加微送酒.xlsx",
      "202603加微送酒统计1.xlsx",
      "202603加微送酒统计_已完成.xlsx",
      "backup",
      "加微送酒统计.xlsx"
    ]
  },
  {
    "id": "20260401-manulife",
    "name": "20260401-manulife",
    "displayName": "20260401-manulife",
    "category": "office-automation",
    "description": "针对 20260401-manulife 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 5 个配置文件。",
    "imageUrl": null,
    "fileCount": 5,
    "filesSample": [
      "02_STAR项目陈述模板.md",
      "03_硬技能(SQL与Python)高频考点.md",
      "interview_prep.md",
      "self_introduction.md",
      "technical_logic_deep_dive.md"
    ]
  },
  {
    "id": "20260401-video",
    "name": "20260401-video",
    "displayName": "20260401-video",
    "category": "office-automation",
    "description": "针对 20260401-video 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 4 个配置文件。",
    "imageUrl": null,
    "fileCount": 4,
    "filesSample": [
      "bandicam 2026-04-01 14-59-56-728.mp4",
      "bandicam_fixed_3254.mp3",
      "bandicam_fixed_3254.mp4",
      "bandicam_fixed_3254.srt"
    ]
  },
  {
    "id": "20260406-David",
    "name": "20260406-David",
    "displayName": "20260406-David",
    "category": "office-automation",
    "description": "针对 20260406-David 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 5 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20260406-David/image1.jpg",
    "fileCount": 5,
    "filesSample": [
      "cwtwb_cwprep_capabilities_positioning_en.md",
      "cwtwb_cwprep_功能定位说明.md",
      "demo-app",
      "image1.jpg",
      "image2.jpg"
    ]
  },
  {
    "id": "20260406-autoexcel",
    "name": "20260406-autoexcel",
    "displayName": "Excel 自动化宏与统计公式插入器",
    "category": "office-automation",
    "description": "基于 Go 开发的 Excel 自动化工具，批量插入统计公式与宏计算规则。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "Go",
      "VBA",
      "Excelize"
    ],
    "stars": "4/5",
    "highlight": "大幅提升财务/运营大表格处理效率",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20260406-autoexcel/tools-hub/public/favicon.svg",
    "fileCount": 12,
    "filesSample": [
      "create_xlsm.py",
      "go.mod",
      "go.sum",
      "inspect_excel.py",
      "main.go",
      "tools-hub",
      "UpdateMacro.bas",
      "update_excel.py",
      "引流工具.html",
      "引流转化分析（同期对比）.xlsx"
    ]
  },
  {
    "id": "20260413-openclaw",
    "name": "20260413-openclaw",
    "displayName": "20260413-openclaw",
    "category": "ai-agents",
    "description": "针对 20260413-openclaw 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 1 个配置文件。",
    "imageUrl": null,
    "fileCount": 1,
    "filesSample": [
      "1.py"
    ]
  },
  {
    "id": "20260417-videocut",
    "name": "20260417-videocut",
    "displayName": "FFmpeg 视频裁剪与变速工具",
    "category": "office-automation",
    "description": "快速对演示视频进行无损裁剪、画面旋转与变速处理的命令行工具。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "FFmpeg",
      "Shell"
    ],
    "stars": "4/5",
    "highlight": "免重编码快速导出高清视频片段",
    "imageUrl": null,
    "fileCount": 3,
    "filesSample": [
      "bandicam 2026-04-17 18-19-50-276.mp4",
      "bandicam_trimmed.mp4",
      "bandicam_trimmed_fixed.mp4"
    ]
  },
  {
    "id": "20260418-tableau-public-favorites-images",
    "name": "20260418-tableau-public-favorites-images",
    "displayName": "20260418-tableau-public-favorites-images",
    "category": "data-bi",
    "description": "项目架构说明  本项目已完成 **数据抓取层** 与 **内容呈现层** 的解耦重构。  ## 1. 数据抓取层 (Data Acquisition) **核心职责**：从外部源（Tableau Public）自动化获取原始素材。  - **入口脚本**：`app.py` - **主要产出**：     - `output/images/`：原始仪表盘截图库。     - `output/favorites.json`：所有收藏内容的元数据。 - **工作流**：运行 `python app.py` 获取最新素材。  ## 2. 内容呈现层 (Content Presentation) **核心职责**：将原始素材加工为具有营销价值的页面，专注于 UI/UX 和文案设计。  - **表现模板**：`promo_cards_v4_refined.html` (纯布局与样式)。 - **内容配置**：`data/marketing_content.js` (所有的文案、案例选择、图片指向)。 - **静态资源**：`assets/platform/` (功能演示图)。 - **工作流*",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 4 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20260418-tableau-public-favorites-images/2-marketing-promo/output/dashboards/008_nikkiviz_Superstore Performance Dashboard _ #VOTD.png",
    "fileCount": 4,
    "filesSample": [
      "1-image-downloader",
      "2-marketing-promo",
      "README.md",
      "__pycache__"
    ]
  },
  {
    "id": "20260420-jiaweiding",
    "name": "20260420-jiaweiding",
    "displayName": "20260420-jiaweiding",
    "category": "office-automation",
    "description": "20260420-jiaweiding MVP  最小目标：在钉钉应用机器人中发送一句查询语句，机器人返回 Tableau 指标数据。  ## 1) 当前已实现  - 查询语句解析（支持日期区间、公司、指标） - Tableau REST 登录（PAT）与 `Query View Data` 拉取 CSV - 本地过滤并返回结果 - FastAPI 接口：`/health`、`/query` - 钉钉应用机器人 Stream 模式入口（`app/bot_stream.py`）  ## 2) 你要补的唯一关键配置  编辑 `.env`（二选一）：  ```env TABLEAU_VIEW_ID= TABLEAU_VIEW_URL=https://你的tableau地址/#/views/xxx/yyy ```  > 你可以只填 `TABLEAU_VIEW_URL`，程序会自动解析真实 `view id`。  ## 3) 本地运行  ```powershell cd C:\\Users\\imgwho\\Desktop\\projects",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 9 个配置文件。",
    "imageUrl": null,
    "fileCount": 9,
    "filesSample": [
      "app",
      "bot.err.log",
      "bot.out.log",
      "README.md",
      "requirements.txt",
      "resolve_view_id.py",
      "run_query.py",
      "tableau-tsc-project",
      "__pycache__"
    ]
  },
  {
    "id": "20260421-test",
    "name": "20260421-test",
    "displayName": "20260421-test",
    "category": "office-automation",
    "description": "针对 20260421-test 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 10 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20260421-test/1776738755464_d.png",
    "fileCount": 10,
    "filesSample": [
      "1776738755464_d.png",
      "20260422-kimi2.5",
      "20260423-trae",
      "dashboard_run",
      "gemini cli",
      "gpt 5 mini",
      "Marketing_Campaign_Performance.twb",
      "marketing_dashboard_layout.json",
      "sample_-_superstore.xls",
      "superstore_run"
    ]
  },
  {
    "id": "20260423-claudevideo",
    "name": "20260423-claudevideo",
    "displayName": "20260423-claudevideo",
    "category": "office-automation",
    "description": "针对 20260423-claudevideo 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 3 个配置文件。",
    "imageUrl": null,
    "fileCount": 3,
    "filesSample": [
      "zip (1)",
      "zip (1).zip",
      "zip.zip"
    ]
  },
  {
    "id": "20260423-clipvideo",
    "name": "20260423-clipvideo",
    "displayName": "视频平滑转场片段生成器",
    "category": "office-automation",
    "description": "基于 MoviePy 自动为演示视频素材添加平滑淡入淡出与自定义文字过渡。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "Python",
      "MoviePy",
      "FFmpeg"
    ],
    "stars": "4/5",
    "highlight": "自动化视频后期处理",
    "imageUrl": null,
    "fileCount": 6,
    "filesSample": [
      "20260504-test",
      "archives",
      "assets",
      "exports",
      "project",
      "scripts"
    ]
  },
  {
    "id": "20260423-excel-split",
    "name": "20260423-excel-split",
    "displayName": "Excel 手机号提取去重与规范化",
    "category": "office-automation",
    "description": "快速从复杂 Excel 表格中识别并提取有效手机号，进行去重和规范化输出。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "Python",
      "Pandas"
    ],
    "stars": "4/5",
    "highlight": "准确过滤非标准号码，提高名单质量",
    "imageUrl": null,
    "fileCount": 5,
    "filesSample": [
      "extract_phones.py",
      "extract_phones_unique.py",
      "inspect_excel.py",
      "phones.txt",
      "广告投放屏蔽电话.xls"
    ]
  },
  {
    "id": "20260424-linkedin",
    "name": "20260424-linkedin",
    "displayName": "20260424-linkedin",
    "category": "cross-border-ec",
    "description": "针对 20260424-linkedin 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 1 个配置文件。",
    "imageUrl": null,
    "fileCount": 1,
    "filesSample": [
      "session.json"
    ]
  },
  {
    "id": "20260427-tableau-skills",
    "name": "20260427-tableau-skills",
    "displayName": "20260427-tableau-skills",
    "category": "ski-domain",
    "description": "Tableau AI Skill  **Prompt to Product** — Build production-ready Tableau workbooks through structured AI agents.  Give your AI coding assistant a plain-text prompt describing a dashboard. Get back a valid, openable `.twb` file — complete with charts, KPI cards, filters, and the correct data source connection — ready to open in Tableau Desktop.  > **Live example:** [Superstore Annual Financial Report](https://public.tableau.com/app/profile/tomermoskov/viz/SuperstoreFinancialReport-GeneratedbyTa",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 11 个配置文件。",
    "imageUrl": null,
    "fileCount": 11,
    "filesSample": [
      "20260427",
      "mockup.txt",
      "README.md",
      "Sample - Superstore.xls",
      "Sample _ Superstore.hyper",
      "superstore_dashboard_layout.json",
      "Superstore_销售分析仪表板 修正.twb",
      "Superstore_销售分析仪表板.twb",
      "tableau-ai-skill-main.zip",
      "tableau-dashboard-workflow.mdc"
    ]
  },
  {
    "id": "20260429-linkedin",
    "name": "20260429-linkedin",
    "displayName": "LinkedIn 跨境营销与出海策划",
    "category": "cross-border-ec",
    "description": "针对 LinkedIn 商业社交平台的海外品牌出海、社媒营销文案策划与思维导图。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "Markdown",
      "LinkedIn API",
      "海外营销"
    ],
    "stars": "4/5",
    "highlight": "规划个人开源项目与产品的海外出海获客方案",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20260429-linkedin/20260607-linkedin-ai-bi-mindmap/ai-bi-mindmap-en-simple.drawio.png",
    "fileCount": 5,
    "filesSample": [
      "20260607-linkedin-ai-bi-mindmap",
      "20260607-linkedin-cwtwb-commits",
      "20260607-linkedin-cwtwb-workflow",
      "20260607-linkedin-flowchart-test",
      "20260607-linkedin-logo-toolkit"
    ]
  },
  {
    "id": "20260430-dbs",
    "name": "20260430-dbs",
    "displayName": "20260430-dbs",
    "category": "office-automation",
    "description": "针对 20260430-dbs 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 0 个配置文件。",
    "imageUrl": null,
    "fileCount": 0,
    "filesSample": []
  },
  {
    "id": "20260509-imgwho-github",
    "name": "20260509-imgwho-github",
    "displayName": "20260509-imgwho-github",
    "category": "saas-web",
    "description": "针对 20260509-imgwho-github 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 2 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20260509-imgwho-github/imgwho-main/public/apple-touch-icon.png",
    "fileCount": 2,
    "filesSample": [
      "imgwho-main",
      "imgwho-main.zip"
    ]
  },
  {
    "id": "20260511-cwtwb",
    "name": "20260511-cwtwb",
    "displayName": "20260511-cwtwb",
    "category": "office-automation",
    "description": "针对 20260511-cwtwb 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 7 个配置文件。",
    "imageUrl": null,
    "fileCount": 7,
    "filesSample": [
      "Activity_Conversion_Dashboard.twb",
      "data_customer_conversion.csv",
      "data_funnel.csv",
      "data_user_detail.csv",
      "Sample - Superstore.xls",
      "Superstore_Sales_Dashboard.twb",
      "活动转化分析仪表板.twb"
    ]
  },
  {
    "id": "20260511-hbi",
    "name": "20260511-hbi",
    "displayName": "20260511-hbi",
    "category": "data-bi",
    "description": "针对 20260511-hbi 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 2 个配置文件。",
    "imageUrl": null,
    "fileCount": 2,
    "filesSample": [
      "sys_dept_202605111542HBI部门.csv",
      "sys_user_202605111551HBI用户.csv"
    ]
  },
  {
    "id": "20260513-datacooper-tug-share",
    "name": "20260513-datacooper-tug-share",
    "displayName": "20260513-datacooper-tug-share",
    "category": "data-bi",
    "description": "Datacooper Talks  Slidev presentations for Tableau User Group sharing sessions about `cwprep`, `cwtwb`, and `datacooper.com`.  ---  ## Project Structure  ``` talks/ ├── datacooper-tug-share/    # Tableau User Group sharing (2026-05-13) │   ├── slides.md            # 中文版幻灯片 │   ├── slides-en.md         # English slides │   ├── speech.md            # 演讲稿 │   └── speech-en.md         # Speech script ```  ## Live Preview (Online)  - **English Version**: [https://imgwho.github.io/datacooper-tug-sha",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": "https://github.com/imgwho/datacooper-tug-share",
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 10 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20260513-datacooper-tug-share/onepage-en-v2-build/assets/logo-BYkHSa_O.png",
    "fileCount": 10,
    "filesSample": [
      "debug.log",
      "dist",
      "frontend-slides-remake",
      "node_modules",
      "onepage-en",
      "onepage-en-v2-build",
      "package.json",
      "pnpm-lock.yaml",
      "README.md",
      "talks"
    ]
  },
  {
    "id": "20260514-chat",
    "name": "20260514-chat",
    "displayName": "20260514-chat",
    "category": "ai-agents",
    "description": "针对 20260514-chat 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 0 个配置文件。",
    "imageUrl": null,
    "fileCount": 0,
    "filesSample": []
  },
  {
    "id": "20260515-twilize",
    "name": "20260515-twilize",
    "displayName": "20260515-twilize",
    "category": "office-automation",
    "description": "针对 20260515-twilize 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 5 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20260515-twilize/backblue.gif",
    "fileCount": 5,
    "filesSample": [
      "backblue.gif",
      "fade.gif",
      "https___twilize.com_",
      "https___twilize.com_.whtt",
      "index.html"
    ]
  },
  {
    "id": "20260520-scys",
    "name": "20260520-scys",
    "displayName": "20260520-scys",
    "category": "office-automation",
    "description": "针对 20260520-scys 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 4 个配置文件。",
    "imageUrl": null,
    "fileCount": 4,
    "filesSample": [
      "1.html",
      "debug.js",
      "extract.js",
      "extracted_info.txt"
    ]
  },
  {
    "id": "20260529-autobrowser",
    "name": "20260529-autobrowser",
    "displayName": "20260529-autobrowser",
    "category": "office-automation",
    "description": "针对 20260529-autobrowser 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 14 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20260529-autobrowser/after-navigation.png",
    "fileCount": 14,
    "filesSample": [
      "after-navigation.png",
      "error-row-1.png",
      "error-row-2.png",
      "error-row-3.png",
      "error-row-4.png",
      "error-row-5.png",
      "fill-sheet.ts",
      "initial-state.png",
      "midscene_run",
      "node_modules"
    ]
  },
  {
    "id": "20260601-csv",
    "name": "20260601-csv",
    "displayName": "20260601-csv",
    "category": "office-automation",
    "description": "针对 20260601-csv 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 7 个配置文件。",
    "imageUrl": null,
    "fileCount": 7,
    "filesSample": [
      "build_dashboards.py",
      "iris.csv",
      "iris_dashboard.twbx",
      "restaurant_tips.csv",
      "restaurant_tips_dashboard true.twbx",
      "restaurant_tips_dashboard.twbx",
      "__pycache__"
    ]
  },
  {
    "id": "20260604-代理风控",
    "name": "20260604-代理风控",
    "displayName": "跨境支付与渠道代理风控",
    "category": "cross-border-ec",
    "description": "针对跨境电商渠道代理商交易数据的异常风控预警、刷单特征识别与风险等级模型。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "Python",
      "Pandas",
      "风控算法"
    ],
    "stars": "4/5",
    "highlight": "及时识别跨境交易与代理商刷单风险",
    "imageUrl": null,
    "fileCount": 6,
    "filesSample": [
      "ai和群发使用率.csv",
      "代理预警记录20260301-20260531.xlsx",
      "称呼完善.csv",
      "送酒数据.csv",
      "首单转化.html",
      "首单转化.xlsx"
    ]
  },
  {
    "id": "20260608-tbhomework",
    "name": "20260608-tbhomework",
    "displayName": "20260608-tbhomework",
    "category": "office-automation",
    "description": "The master dataset contains comprehensive information for all government schools in NSW. Data items include school locations, latitude and longitude coordinates, school type, student enrolment numbers, electorate information, contact details and more.  This dataset is publicly available through the Data NSW website, and is used to support the School Finder tool.  Data Notes:  Data relating to healthy canteen is no longer up to date as it is no longer updated by the Department, this data can be s",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 15 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20260608-tbhomework/Screenshot 2026-06-07 at 7.19.02 PM.png",
    "fileCount": 15,
    "filesSample": [
      "Assignment 2 instructions .pdf",
      "Busa8090_Aatish_Siwach_60830832_Final.pdf",
      "cleaned_nsw_schools_dataset.csv",
      "cleaned_nsw_schools_dataset_1.csv",
      "Marking Rubric BUSA 8090.pdf",
      "Master dataset NSW government school locations and student enrolment numbers.pdf",
      "NSW Aatish Siwach Final 8090.twb",
      "Readme.txt",
      "refollowuponyourtableauprojectnextsteps.zip",
      "Screenshot 2026-06-07 at 7.19.02 PM.png"
    ]
  },
  {
    "id": "20260608-wuhan-dataanaysis",
    "name": "20260608-wuhan-dataanaysis",
    "displayName": "20260608-wuhan-dataanaysis",
    "category": "data-bi",
    "description": "公司1214（武汉分公司）销售增长归因分析  ## 项目概述  针对**武汉分公司（公司ID: 1214）** 销售团队的增长归因分析。核心目标：找出**连续3个月营业额上涨**的员工，分析增长驱动因素及可持续性。  **数据范围**：2025年5月 ~ 2026年5月（13个月）   **分析引擎**：R语言 + Quarto（主报告）、Python + Jupyter（辅助分析）   **数据源**：阿里云RDS MySQL（`voxadmin` 库）  ---  ## 目录结构  ``` 项目根目录/ ├── README.md                                    ← 本文件 ├── .gitignore ├── KNOWLEDGE_EXTRACT.md                         ← archive 知识提取 ├── schema.sql                                   ← 表结构DDL ├── deploy.bat",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": "https://github.com/imgwho/wuhan-sales-growth-analysis",
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 15 个配置文件。",
    "imageUrl": null,
    "fileCount": 15,
    "filesSample": [
      "1214_growth_analysis.qmd",
      "1214_growth_analysis_2503_2603.html",
      "1214_growth_analysis_2503_2603.qmd",
      "1214_growth_analysis_2503_2603_bak.qmd",
      "deploy.bat",
      "dist",
      "export_data.R",
      "growth_analysis_dashboard.html",
      "index.html",
      "KNOWLEDGE_EXTRACT.md"
    ]
  },
  {
    "id": "20260609-tableau-votd-downloader",
    "name": "20260609-tableau-votd-downloader",
    "displayName": "Tableau VOTD 批量下载器",
    "category": "flagships",
    "description": "Tableau Public Viz of the Day 批量自动爬虫与 CDN 高清截图/工作簿提取工具。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "Python 3.13",
      "Playwright",
      "httpx"
    ],
    "stars": "4/5",
    "highlight": "突破 SPA 限制，批量提取 CDN 高清矢量 Viz 资源",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20260609-tableau-votd-downloader/OneDataset100Vizzes_1.png",
    "fileCount": 64,
    "filesSample": [
      "batch_download.py",
      "download.py",
      "downloads",
      "metadata.json",
      "OneDataset100Vizzes_1.png",
      "page_1",
      "page_10",
      "page_11",
      "page_12",
      "page_13"
    ]
  },
  {
    "id": "20260611-huazhilin",
    "name": "20260611-huazhilin",
    "displayName": "20260611-huazhilin",
    "category": "office-automation",
    "description": "华芝林生物科技 - 全国级销售与团队管理大盘 (Tableau 原型实现)  本项目旨在通过大宽表设计和 HTML 仪表盘实现华芝林销售与团队管理的大盘原型，为后续在 Tableau 或其他 BI 平台上的正式落地提供逻辑验证和视觉参考。  ## 项目目标 - **逻辑验证**：通过模拟 2025-2026 年销售、培训、签约数据，验证同环比、占比、趋势等业务指标的计算逻辑。 - **视觉原型**：基于 `9.html` 实现高保真的销售大盘视觉交互，模拟 BI 系统的最终产出效果。 - **数据规范**：确立“大宽表”设计模式，简化数据清洗流程，适配 Tableau 的数据导入要求。  ## 数据结构 (大宽表设计)  为了简化分析逻辑，项目采用了三张核心大宽表：  1. **大宽表_销售.xlsx**    - 记录 2025-2026 年每一笔销售流水。    - 包含：日期、省总、省份、是否签约医生、是否核心产品、件数、是否赠品。    - 支持：总销量、签约占比、主打占比、省区 YTD 排名、同环比分析。  2. **大宽表_培训.xlsx**    - 汇总商学院、进修",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": "https://github.com/imgwho/20260611-huazhilin",
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 4 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20260611-huazhilin/sales-dashboard/tremor-dashboard/src/assets/hero.png",
    "fileCount": 4,
    "filesSample": [
      "nul",
      "README.md",
      "sales-dashboard",
      "sales-return"
    ]
  },
  {
    "id": "20260612-qiwei",
    "name": "20260612-qiwei",
    "displayName": "20260612-qiwei",
    "category": "office-automation",
    "description": "针对 20260612-qiwei 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 2 个配置文件。",
    "imageUrl": null,
    "fileCount": 2,
    "filesSample": [
      "get_wecom_sheet.py",
      "test_create_doc.py"
    ]
  },
  {
    "id": "20260615-tableaumcp",
    "name": "20260615-tableaumcp",
    "displayName": "20260615-tableaumcp",
    "category": "ai-agents",
    "description": "针对 20260615-tableaumcp 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": true,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 1 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20260615-tableaumcp/tableau-mcp/icon.png",
    "fileCount": 1,
    "filesSample": [
      "tableau-mcp"
    ]
  },
  {
    "id": "20260622-actionskills",
    "name": "20260622-actionskills",
    "displayName": "20260622-actionskills",
    "category": "ski-domain",
    "description": "针对 20260622-actionskills 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 4 个配置文件。",
    "imageUrl": null,
    "fileCount": 4,
    "filesSample": [
      "nul",
      "query_datasource_sizes.py",
      "query_datasource_sizes_debug.py",
      "skills-lock.json"
    ]
  },
  {
    "id": "20260622-hyper",
    "name": "20260622-hyper",
    "displayName": "20260622-hyper",
    "category": "data-bi",
    "description": "Tableau Hyper Publisher  将 `.hyper` 文件上传发布到 Tableau Server 数据源。  ## 项目结构  ``` 202606622-hyper/ ├── scripts/                    # Python脚本 │   ├── publish/               # 发布功能 │   │   └── publish_localhost.py │   ├── export/                # 数据导出 │   │   └── export_message_cx.py │   ├── query/                 # 查询功能 │   │   ├── query_test_message.py │   │   └── query_vds.py │   └── utils/                 # 辅助工具 │       ├── list_projects.py │       ├── list_server_datasources.py │       └── tes",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 9 个配置文件。",
    "imageUrl": null,
    "fileCount": 9,
    "filesSample": [
      "config",
      "data",
      "hyperd.log",
      "logs",
      "pyproject.toml",
      "README.md",
      "requirements.txt",
      "scripts",
      "tests"
    ]
  },
  {
    "id": "20260623-cwtwbtest",
    "name": "20260623-cwtwbtest",
    "displayName": "跨境物流与供应链履约 Dashboard",
    "category": "cross-border-ec",
    "description": "使用 cwtwb 生成跨国物流时效、发货覆盖率与海外仓异常监控仪表板。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "Python",
      "cwtwb",
      "Logistics BI"
    ],
    "stars": "4/5",
    "highlight": "代码自动化搭建跨境物流与供应链履约 Dashboard",
    "imageUrl": null,
    "fileCount": 13,
    "filesSample": [
      "analysis.py",
      "backup",
      "basic_analysis.py",
      "cross_analysis.py",
      "dashboard_layout.json",
      "deep_analysis.py",
      "full_analysis.py",
      "monthly_analysis.py",
      "simple_analysis.py",
      "step_analysis.py"
    ]
  },
  {
    "id": "20260625-pbi",
    "name": "20260625-pbi",
    "displayName": "20260625-pbi",
    "category": "data-bi",
    "description": "针对 20260625-pbi 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 2 个配置文件。",
    "imageUrl": null,
    "fileCount": 2,
    "filesSample": [
      "Sample - Superstore.xls",
      "仪表板草图.md"
    ]
  },
  {
    "id": "20260625-tableauserver",
    "name": "20260625-tableauserver",
    "displayName": "20260625-tableauserver",
    "category": "data-bi",
    "description": "针对 20260625-tableauserver 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 9 个配置文件。",
    "imageUrl": null,
    "fileCount": 9,
    "filesSample": [
      "check_all_flows.py",
      "check_failed_flows.py",
      "CUsersimgwhoDesktopprojectstableau-monitor-tmp",
      "flow_runs_20260627_092409.csv",
      "flow_runs_20260627_093903.csv",
      "flow_runs_20260627_094128.csv",
      "flow_runs_20260627_095032.csv",
      "flow_runs_failed_20260627_093839.csv",
      "monitor_long_flows.py"
    ]
  },
  {
    "id": "20260627-jiaweireport",
    "name": "20260627-jiaweireport",
    "displayName": "20260627-jiaweireport",
    "category": "office-automation",
    "description": "针对 20260627-jiaweireport 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 5 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20260627-jiaweireport/_tmp_extract/flowGraphImage.png",
    "fileCount": 5,
    "filesSample": [
      "dataflow 06.订单表大屏-增加企微加微数.tfl",
      "dataflow 06.订单表大屏.tfl",
      "hs_err_pid5764.log",
      "replay_pid5764.log",
      "_tmp_extract"
    ]
  },
  {
    "id": "20260701-pbi",
    "name": "20260701-pbi",
    "displayName": "20260701-pbi",
    "category": "data-bi",
    "description": "toolName: run_command              status: success            command: cd \"c:\\Users\\imgwho\\Desktop\\projects\\20260701-pbi\" && tree /f undefined                                   toolName: view_files              status: success                         filePath: c:\\Users\\imgwho\\Desktop\\projects\\20260701-pbi\\superstore.pbip                                   toolName: view_files              status: success                         filePath: c:\\Users\\imgwho\\Desktop\\projects\\20260701-pbi\\superstore.Re",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 12 个配置文件。",
    "imageUrl": null,
    "fileCount": 12,
    "filesSample": [
      "backup",
      "convert.ps1",
      "dashboard-design.txt",
      "Orders.csv",
      "People.csv",
      "README.md",
      "read_data.py",
      "Returns.csv",
      "Sample - Superstore.xls",
      "superstore.pbip"
    ]
  },
  {
    "id": "20260702-test",
    "name": "20260702-test",
    "displayName": "20260702-test",
    "category": "office-automation",
    "description": "针对 20260702-test 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 1 个配置文件。",
    "imageUrl": null,
    "fileCount": 1,
    "filesSample": [
      "销售仪表板.html"
    ]
  },
  {
    "id": "20260704-test",
    "name": "20260704-test",
    "displayName": "20260704-test",
    "category": "office-automation",
    "description": "针对 20260704-test 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 5 个配置文件。",
    "imageUrl": null,
    "fileCount": 5,
    "filesSample": [
      "backup",
      "dashboard_layout.json",
      "sales2.twb",
      "Sample _ Superstore (Simple).xls",
      "superstore_orders_dashboard_prototype copy.txt"
    ]
  },
  {
    "id": "20260707-pbitest",
    "name": "20260707-pbitest",
    "displayName": "20260707-pbitest",
    "category": "data-bi",
    "description": "Superstore 销售与利润 Power BI 项目 (PBIP)  这是一个基于微软最新的 **Power BI Project (PBIP)** 格式与 **Tabular Model Definition Language (TMDL)** 语义模型格式构建的端到端商务智能分析项目。项目以经典的零售数据集为核心，设计并实现了一个现代化、响应式的销售与利润分析仪表板。  ---  ## 1. 项目简介与数据源  ### 1.1 数据源 项目数据源基于本地 Excel 文件：`Sample - Superstore.xls`。 核心数据表为 **Orders**（订单表），包含以下关键业务维度与事实字段： *   **时间维度**：`Order Date`（订单日期）、`Ship Date`（发货日期） *   **地理维度**：`Region`（区域）、`Country/Region`（国家/地区）、`State/Province`（省/州）、`City`（城市） *   **产品维度**：`Category`（商品类别）、`Sub-Category`（子类别）、`Prod",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 5 个配置文件。",
    "imageUrl": null,
    "fileCount": 5,
    "filesSample": [
      "README.md",
      "sales.pbip",
      "sales.Report",
      "sales.SemanticModel",
      "Sample - Superstore.xls"
    ]
  },
  {
    "id": "20260707_superstore_dashboard",
    "name": "20260707_superstore_dashboard",
    "displayName": "Superstore 跨国电商 Dashboard",
    "category": "cross-border-ec",
    "description": "Superstore 全球跨国零售电商销售与利润 Tableau 工作簿原型与排版方案。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "Tableau Desktop",
      "Superstore",
      "E-Commerce BI"
    ],
    "stars": "4/5",
    "highlight": "经典跨国电商销售与利润分析 Dashboard",
    "imageUrl": null,
    "fileCount": 5,
    "filesSample": [
      "analyze.py",
      "dashboard_layout.json",
      "dashboard_sketch.txt",
      "Sample _ Superstore (Simple).xls",
      "Superstore_Dashboard.twb"
    ]
  },
  {
    "id": "20260708-datacooper-tug-share-frontend-slides",
    "name": "20260708-datacooper-tug-share-frontend-slides",
    "displayName": "20260708-datacooper-tug-share-frontend-slides",
    "category": "data-bi",
    "description": "datacooper-tug-share frontend-slides remake  Single-file HTML presentation remake of the Datacooper TUG Share talk, built in the spirit of `zarazhangrui/frontend-slides`.  ## Preview  Open `index.html` directly in a browser, or run a local static server:  ```powershell python -m http.server 3045 ```  Then visit `http://localhost:3045/`.",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 4 个配置文件。",
    "imageUrl": null,
    "fileCount": 4,
    "filesSample": [
      "index.html",
      "README.md",
      "server.err.log",
      "server.log"
    ]
  },
  {
    "id": "20260710-ai-bi-slides",
    "name": "20260710-ai-bi-slides",
    "displayName": "20260710-ai-bi-slides",
    "category": "ai-agents",
    "description": "AI + BI 幻灯片四方案  主题：**资深 BI 工程师：AI+BI 的最佳实践**  这是一套关于 AI + BI 的演讲稿与网页幻灯片项目，用同一套内容分别实现四种演示方案：  - `slidev/`：Slidev 方案，保留 `slides.md` 源稿，并提供可直接访问的 `index.html`。 - `marp/`：Marp 方案，保留 `ai-bi.md` 源稿，并提供可直接访问的 `index.html`。 - `remarkjs/`：remark.js 方案，提供可直接访问的 `index.html`。 - `revealjs/`：reveal.js 方案，提供可直接访问的 `index.html`。  👉 **[点击直接在线体验统一入口网页](https://imgwho.github.io/20260710-ai-bi-slides/)**  ## 内容结构  1. 为什么很多 BI 最终变成“一堆图” 2. BI 开发：如何从图表走向产品    - 包含一个“明细表到数据产品”的仪表盘优化案例 3. Html、多维表、传统 BI 对比 4. 重构 BI：",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": "https://github.com/imgwho/20260710-ai-bi-slides",
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 11 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20260710-ai-bi-slides/Images/不好的仪表板.png",
    "fileCount": 11,
    "filesSample": [
      "assets",
      "Images",
      "index.html",
      "marp",
      "package.json",
      "README.md",
      "remarkjs",
      "revealjs",
      "slidev",
      "Videos"
    ]
  },
  {
    "id": "20260711-tableau-manufacturing-cases",
    "name": "20260711-tableau-manufacturing-cases",
    "displayName": "跨境供应链与制造业案例库",
    "category": "cross-border-ec",
    "description": "涵盖设备 OEE 监控、生产良品率与跨境供应链库存的 Tableau 实战案例集。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "Tableau Desktop",
      "Python",
      "Supply Chain"
    ],
    "stars": "4/5",
    "highlight": "深入跨境供应链核心 KPI 场景的 BI 实践",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20260711-tableau-manufacturing-cases/output/images/01-日产通过-tableau-建立企业数据文化-在每个经销点实现分析普及/image-00-page.png",
    "fileCount": 3,
    "filesSample": [
      "data",
      "output",
      "scripts"
    ]
  },
  {
    "id": "20260712-苹果录音",
    "name": "20260712-苹果录音",
    "displayName": "20260712-苹果录音",
    "category": "office-automation",
    "description": "针对 20260712-苹果录音 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 0 个配置文件。",
    "imageUrl": null,
    "fileCount": 0,
    "filesSample": []
  },
  {
    "id": "20260714-goose-tableau-agent-mvp",
    "name": "20260714-goose-tableau-agent-mvp",
    "displayName": "Tableau Agent Studio MVP",
    "category": "flagships",
    "description": "基于 Block Goose 架构设计的 Tableau 垂直领域 AI Agent 独立桌面客户端 MVP 原型。",
    "aiDepth": "native",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": true,
    "techStack": [
      "Rust",
      "TypeScript",
      "Goose 框架",
      "MCP"
    ],
    "stars": "4/5",
    "highlight": "支持自然语言建表、自愈校验与上下文自适应的深度 Agent",
    "imageUrl": null,
    "fileCount": 11,
    "filesSample": [
      "dist",
      "docs",
      "goose",
      "index.html",
      "mcp-servers",
      "node_modules",
      "package-lock.json",
      "package.json",
      "README.md",
      "samples"
    ]
  },
  {
    "id": "20260714-tableau-agent-studio-goose",
    "name": "20260714-tableau-agent-studio-goose",
    "displayName": "20260714-tableau-agent-studio-goose",
    "category": "ai-agents",
    "description": "针对 20260714-tableau-agent-studio-goose 业务场景定制开发的专有自动化与数据处理工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": "https://github.com/aaif-goose/goose",
    "pypiStatus": null,
    "mcpReady": true,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 41 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20260714-tableau-agent-studio-goose/ui/desktop/src/assets/clock-icon.png",
    "fileCount": 41,
    "filesSample": [
      "AGENTS.md",
      "bin",
      "BUILDING_DOCKER.md",
      "BUILDING_LINUX.md",
      "Cargo.lock",
      "Cargo.toml",
      "CLAUDE.md",
      "clippy.toml",
      "CONTRIBUTING.md",
      "CONTRIBUTING_RECIPES.md"
    ]
  },
  {
    "id": "20260714-tableaudesign",
    "name": "20260714-tableaudesign",
    "displayName": "20260714-tableaudesign",
    "category": "data-bi",
    "description": "Tableau Sales & Profit Dashboard — Design Blueprint & Interactive Mockup  This repository contains the complete design specification and an interactive high-fidelity wireframe mockup for a Tableau Sales & Profit Performance Dashboard. It is built using the classic sample_-_superstore.xls dataset (covering 2023 - 2026) and strictly conforms to the Tableau Dashboard Blueprint (v1.1) design guidelines.  Link: [Live Demo — Open the Interactive Prototype](https://aidatacooper.github.io/20260714-tab",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": "https://github.com/aidatacooper/20260714-tableaudesign",
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 9 个配置文件。",
    "imageUrl": null,
    "fileCount": 9,
    "filesSample": [
      "index.html",
      "README.md",
      "sample_-_superstore.xls",
      "SKILL (1).md",
      "SKILL_CN.md",
      "superstore_dashboard_blueprint_en.html",
      "superstore_dashboard_wireframe.html",
      "superstore_orders_dashboard_layout.json",
      "tableau_sales_dashboard_blueprint.md"
    ]
  },
  {
    "id": "20260716-mps",
    "name": "20260716-mps",
    "displayName": "20260716-mps",
    "category": "office-automation",
    "description": "针对 20260716-mps 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 4 个配置文件。",
    "imageUrl": null,
    "fileCount": 4,
    "filesSample": [
      "mps 芯源面试.mp3",
      "mps 芯源面试_compressed.m4a",
      "mps 芯源面试_compressed.mp3",
      "mps 芯源面试_enhanced.m4a"
    ]
  },
  {
    "id": "20260717-cwtwbtest",
    "name": "20260717-cwtwbtest",
    "displayName": "20260717-cwtwbtest",
    "category": "office-automation",
    "description": "Tableau-Claude Experiments with Tableau +Claude",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": "https://github.com/Ryan-M002/Tableau-Claude",
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 7 个配置文件。",
    "imageUrl": null,
    "fileCount": 7,
    "filesSample": [
      "build_v4_scratch.py",
      "CLAUDE.md",
      "DASHBOARD_RECREATION_GUIDE.md",
      "output",
      "README.md",
      "robot_task_detail_all_20260101_20260510_1778527584209.xlsx",
      "setup.sh"
    ]
  },
  {
    "id": "20260721-donnacoles-crawler",
    "name": "20260721-donnacoles-crawler",
    "displayName": "20260721-donnacoles-crawler",
    "category": "office-automation",
    "description": "针对 20260721-donnacoles-crawler 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 0 个配置文件。",
    "imageUrl": null,
    "fileCount": 0,
    "filesSample": []
  },
  {
    "id": "20260722-ai-bi-presales-slides",
    "name": "20260722-ai-bi-presales-slides",
    "displayName": "20260722-ai-bi-presales-slides",
    "category": "ai-agents",
    "description": "20260722-ai-bi-presales-slides  郭文华 ｜ 业务型售前顾问 · BI / 数据智能方向 ｜ 个人能力与项目案例展示幻灯片  ---  ## 🔗 在线预览链接 (GitHub Pages)  - 📄 **Markdown 驱动版**（全量由单文件 `slides.md` 驱动，100% 复用 Reveal.js 经典视觉与 CSS 样式系统）：     👉 [https://imgwho.github.io/20260722-ai-bi-presales-slides/reveal-markdown/](https://imgwho.github.io/20260722-ai-bi-presales-slides/reveal-markdown/)  - 🔴 **Bold Poster 视觉强化版**（红黑高对比波普海报设计）：     👉 [https://imgwho.github.io/20260722-ai-bi-presales-slides/bold-poster/](https://imgwho.github.io/20260722-ai",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": "https://github.com/imgwho/20260722-ai-bi-presales-slides",
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 11 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20260722-ai-bi-presales-slides/Images/evidence/cwprep-hero.png",
    "fileCount": 11,
    "filesSample": [
      "assets",
      "bold-poster",
      "Images",
      "index.html",
      "node_modules",
      "package-lock.json",
      "package.json",
      "README.md",
      "reveal-markdown",
      "revealjs"
    ]
  },
  {
    "id": "20260725-liuxiaopai",
    "name": "20260725-liuxiaopai",
    "displayName": "20260725-liuxiaopai",
    "category": "ai-agents",
    "description": "针对 20260725-liuxiaopai 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 1 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20260725-liuxiaopai/ask-liuxiaopai/avatars/expert.png",
    "fileCount": 1,
    "filesSample": [
      "ask-liuxiaopai"
    ]
  },
  {
    "id": "20260728-loom-hermes-evaluation",
    "name": "20260728-loom-hermes-evaluation",
    "displayName": "20260728-loom-hermes-evaluation",
    "category": "ai-agents",
    "description": "An AI agent with advanced tool-calling capabilities, featuring a flexible toolsets system for organizing and managing tools.",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": "https://github.com/NousResearch/hermes-agent",
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 73 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20260728-loom-hermes-evaluation/sqlite_leak_fix.png",
    "fileCount": 73,
    "filesSample": [
      "acp_adapter",
      "agent",
      "AGENTS.md",
      "apps",
      "assets",
      "batch_runner.py",
      "cli-config.yaml.example",
      "cli.py",
      "constraints-termux.txt",
      "CONTRIBUTING.es.md"
    ]
  },
  {
    "id": "20260728-loom-native-frameworks",
    "name": "20260728-loom-native-frameworks",
    "displayName": "20260728-loom-native-frameworks",
    "category": "ai-agents",
    "description": "针对 20260728-loom-native-frameworks 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 3 个配置文件。",
    "imageUrl": null,
    "fileCount": 3,
    "filesSample": [
      "dist",
      "loom-eino",
      "loom-rig"
    ]
  },
  {
    "id": "20260729-know",
    "name": "20260729-know",
    "displayName": "美妆零售 AI 知识库问答助手",
    "category": "flagships",
    "description": "结合 RAG (检索增强生成) + 规则引擎 + 自动化评测集的美妆零售知识库问答系统。",
    "aiDepth": "native",
    "githubStatus": "ready",
    "githubUrl": "https://github.com/imgwho/20260729-know",
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "Python",
      "RAG 检索",
      "LangChain",
      "向量数据库"
    ],
    "stars": "4/5",
    "highlight": "包含完整 Golden Benchmark 自动化评估与多轮检索重排",
    "imageUrl": null,
    "fileCount": 13,
    "filesSample": [
      "AGENTS.md",
      "beauty_knowledge_test_dataset_50.xlsx",
      "deck-reveal.css",
      "docs",
      "fde-beauty-knowledge-data",
      "fde-beauty-knowledge-data.zip",
      "index.html",
      "knowledge_base.json",
      "main.py",
      "ppt.html"
    ]
  },
  {
    "id": "20260730-cv",
    "name": "20260730-cv",
    "displayName": "个人履历与简历代码化生成器",
    "category": "office-automation",
    "description": "输入履历数据，自动渲染生成高清 Word (.docx) 简历与响应式 HTML 网页。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "Python",
      "python-docx",
      "HTML5"
    ],
    "stars": "4/5",
    "highlight": "支持代码化维护个人履历并多格式导出",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20260730-cv/avatar.png",
    "fileCount": 5,
    "filesSample": [
      "avatar.png",
      "generate_docx.py",
      "index.html",
      "PixPin_2026-07-30_23-31-09.png",
      "xx-产品经理-简历.docx"
    ]
  },
  {
    "id": "20260730-loom-craft-evaluation",
    "name": "20260730-loom-craft-evaluation",
    "displayName": "20260730-loom-craft-evaluation",
    "category": "ai-agents",
    "description": "Claude Code-like agent for Craft documents",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": "https://github.com/craft-ai-agents/craft-agents-oss",
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 18 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20260730-loom-craft-evaluation/packages/shared/src/agent/__tests__/__tmp_build_call_llm__/image.png",
    "fileCount": 18,
    "filesSample": [
      "apps",
      "bun.lock",
      "bunfig.toml",
      "CODE_OF_CONDUCT.md",
      "CONTRIBUTING.md",
      "Dockerfile.server",
      "docs",
      "LICENSE",
      "mcp-seed-test-profile",
      "node_modules"
    ]
  },
  {
    "id": "20260803-vps-debug",
    "name": "20260803-vps-debug",
    "displayName": "20260803-vps-debug",
    "category": "office-automation",
    "description": "针对 20260803-vps-debug 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 0 个配置文件。",
    "imageUrl": null,
    "fileCount": 0,
    "filesSample": []
  },
  {
    "id": "20260804-xmind",
    "name": "20260804-xmind",
    "displayName": "DukPay 跨境结账 XMind 导图",
    "category": "cross-border-ec",
    "description": "自动读取需求大纲，使用 Python 生成 DukPay 跨境支付与智能结账功能 XMind 导图。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "Python",
      "XMind API",
      "DukPay"
    ],
    "stars": "4/5",
    "highlight": "快速将跨境支付结账需求转化为清晰的思维导图",
    "imageUrl": null,
    "fileCount": 6,
    "filesSample": [
      "DukPay_Smart_Checkout_功能清单.md",
      "DukPay_Smart_Checkout_功能清单.opml",
      "DukPay_Smart_Checkout_功能清单.xmind",
      "DukPay_Smart_Checkout_功能清单_Tab大纲.txt",
      "generate_xmind.py",
      "新建 文本文档.txt"
    ]
  },
  {
    "id": "20260805-tianfu-subway-swimlane",
    "name": "20260805-tianfu-subway-swimlane",
    "displayName": "天府地铁 BPMN 泳道图 Skill",
    "category": "flagships",
    "description": "天府地铁网格 BPMN 业务流程图与网格泳道图自动渲染 Agent Skill。",
    "aiDepth": "native",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": true,
    "techStack": [
      "Python",
      "PlantUML",
      "SVG",
      "HTML Canvas"
    ],
    "stars": "4/5",
    "highlight": "准确计算复杂节点像素对齐，生成无失真 SVG 矢量泳道图",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20260805-tianfu-subway-swimlane/tianfu-subway-swimlane.png",
    "fileCount": 2,
    "filesSample": [
      "tianfu-subway-swimlane.png",
      "tianfu-subway-swimlane.svg"
    ]
  },
  {
    "id": "20266805-xmind",
    "name": "20266805-xmind",
    "displayName": "20266805-xmind",
    "category": "office-automation",
    "description": "针对 20266805-xmind 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 8 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/20266805-xmind/tianfu_subway_bpmn_skill.png",
    "fileCount": 8,
    "filesSample": [
      "render_bpmn_version.py",
      "render_exact_grid_swimlane.py",
      "tianfu_subway_bpmn.puml",
      "tianfu_subway_bpmn_skill.html",
      "tianfu_subway_bpmn_skill.png",
      "tianfu_subway_grid_swimlane_perfect.html",
      "tianfu_subway_grid_swimlane_perfect.png",
      "新建 文本文档.txt"
    ]
  },
  {
    "id": "__pycache__",
    "name": "__pycache__",
    "displayName": "__pycache__",
    "category": "office-automation",
    "description": "针对 __pycache__ 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "Python",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 1 个配置文件。",
    "imageUrl": null,
    "fileCount": 1,
    "filesSample": [
      "count_rows_fast.cpython-313.pyc"
    ]
  },
  {
    "id": "ausnz-ski-coach",
    "name": "ausnz-ski-coach",
    "displayName": "ausnz-ski-coach",
    "category": "ski-domain",
    "description": "针对 ausnz-ski-coach 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 0 个配置文件。",
    "imageUrl": null,
    "fileCount": 0,
    "filesSample": []
  },
  {
    "id": "chengdu-weather-app",
    "name": "chengdu-weather-app",
    "displayName": "chengdu-weather-app",
    "category": "office-automation",
    "description": "针对 chengdu-weather-app 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 3 个配置文件。",
    "imageUrl": null,
    "fileCount": 3,
    "filesSample": [
      "index.html",
      "script.js",
      "style.css"
    ]
  },
  {
    "id": "china-map-generator",
    "name": "china-map-generator",
    "displayName": "中国省份数据地图生成器",
    "category": "flagships",
    "description": "中国省份数据地图生成工具（支持 6 种主题配色、Excel 解析导出）。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "React 19",
      "ECharts 6",
      "Vite 7",
      "Tailwind CSS"
    ],
    "stars": "4/5",
    "highlight": "前端即时解析 Excel/CSV 并高清导出 SVG/PNG 地图",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/china-map-generator/public/vite.svg",
    "fileCount": 11,
    "filesSample": [
      "dist",
      "eslint.config.js",
      "index.html",
      "node_modules",
      "package-lock.json",
      "package.json",
      "public",
      "README.md",
      "src",
      "vite.config.js"
    ]
  },
  {
    "id": "china-map-viz",
    "name": "china-map-viz",
    "displayName": "china-map-viz",
    "category": "saas-web",
    "description": "中国地图数据可视化生成工具  一个基于React + ECharts的中国地图数据可视化工具，支持上传省级数据文件，并导出PNG和SVG格式的图片。  ## 功能特性  - 📊 **数据可视化**: 使用ECharts展示中国地图，支持省份轮廓显示 - 📁 **文件上传**: 支持JSON和CSV格式的数据文件上传 - 🖼️ **图片导出**: 支持导出PNG和SVG格式的可视化图片 - 🎨 **交互式地图**: 支持地图缩放、平移和省份高亮 - 📋 **示例数据**: 内置示例数据，方便快速体验  ## 快速开始  ### 安装依赖  ```bash npm install ```  ### 启动开发服务器  ```bash npm run dev ```  访问 http://localhost:5173 查看应用  ### 构建生产版本  ```bash npm run build ```  ## 数据格式  ### JSON格式  ```json {   \"北京\": 123,   \"上海\": 456,   \"广东\": 789 } ```  ### CSV格式  ```csv",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 9 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/china-map-viz/public/vite.svg",
    "fileCount": 9,
    "filesSample": [
      "eslint.config.js",
      "index.html",
      "node_modules",
      "package-lock.json",
      "package.json",
      "public",
      "README.md",
      "src",
      "vite.config.js"
    ]
  },
  {
    "id": "claudecode1",
    "name": "claudecode1",
    "displayName": "claudecode1",
    "category": "ai-agents",
    "description": "针对 claudecode1 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 3 个配置文件。",
    "imageUrl": null,
    "fileCount": 3,
    "filesSample": [
      "index.html",
      "script.js",
      "style.css"
    ]
  },
  {
    "id": "code",
    "name": "code",
    "displayName": "code",
    "category": "office-automation",
    "description": "针对 code 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 10 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/code/tableau viz extension/extensions-api-main/assets/about_extension_dialog.png",
    "fileCount": 10,
    "filesSample": [
      "1",
      "figma",
      "figma2tb",
      "Gantt",
      "import",
      "maoyan_scraper",
      "oppo watch",
      "skifei",
      "tableau viz extension",
      "tableau viz extension.7z"
    ]
  },
  {
    "id": "dingding_push",
    "name": "dingding_push",
    "displayName": "dingding_push",
    "category": "office-automation",
    "description": "针对 dingding_push 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 8 个配置文件。",
    "imageUrl": null,
    "fileCount": 8,
    "filesSample": [
      "bun.lock",
      "data.db",
      "node_modules",
      "package.json",
      "public",
      "setup.sh",
      "src",
      "userlist.env"
    ]
  },
  {
    "id": "figma2tbpy",
    "name": "figma2tbpy",
    "displayName": "figma2tbpy",
    "category": "office-automation",
    "description": "Tableau Hyper 文件处理工具  这个项目提供了一套工具，用于读取 Tableau Hyper 文件并将其转换为 Tableau 工作簿 (.twbx) 文件。该工具使用 Tableau Hyper API 读取数据，并使用 Jinja2 模板引擎生成符合 Tableau 标准的工作簿文件。  ## 功能特点  - 读取 Hyper 文件中的所有表格数据 - 自动检测和映射数据类型 - 使用模板生成标准的 Tableau 工作簿文件 - 将 Hyper 文件和工作簿打包为 .twbx 文件  ## 安装要求  在使用此工具之前，请确保安装以下依赖项：  ```bash pip install -r requirements.txt ```  ## 文件结构  - `process_hyper.py`: 主程序文件，包含读取 Hyper 文件和创建 Tableau 工作簿的功能 - `workbook_template.jinja2`: Tableau 工作簿的 Jinja2 模板文件 - `federated.hyper`: 示例 Hyper 数据文件 - `figma2",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": "https://github.com/imgwho/figma2tbpy",
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "Python",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 20 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/figma2tbpy/截图.png",
    "fileCount": 20,
    "filesSample": [
      "123partcontent.twbx",
      "backup",
      "dashboards.xml",
      "federated.hyper",
      "figma-export.json",
      "figma-plugin",
      "figma2tb_ Template.twb",
      "figma2tb_ Template.twb Files",
      "figma2tb_ Template.twbx",
      "figma_to_tableau.py"
    ]
  },
  {
    "id": "flows_download",
    "name": "flows_download",
    "displayName": "flows_download",
    "category": "office-automation",
    "description": "针对 flows_download 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 48 个配置文件。",
    "imageUrl": null,
    "fileCount": 48,
    "filesSample": [
      "00.抽数据库.tfl",
      "00.数据库预处理.tfl",
      "dataflow 01.order_data.tfl",
      "dataflow 01.order_data.tfl.tfl",
      "dataflow 02.面试入职离职.tfl",
      "dataflow 03.周或月加粉统计 测试.tfl",
      "dataflow 03.周或月加粉统计.tfl",
      "dataflow 04.人事数据.tfl",
      "dataflow 05.年度总结.tfl",
      "dataflow 06.订单表大屏.tfl"
    ]
  },
  {
    "id": "frontend-slides",
    "name": "frontend-slides",
    "displayName": "Frontend Slides 演示文稿 Skill",
    "category": "flagships",
    "description": "Coding Agent 专属的高颜值单文件 HTML 演示文稿生成 Skill 框架与组件库。",
    "aiDepth": "native",
    "githubStatus": "ready",
    "githubUrl": "https://github.com/zarazhangrui/frontend-slides",
    "pypiStatus": null,
    "mcpReady": true,
    "techStack": [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Claude Skill"
    ],
    "stars": "4/5",
    "highlight": "将 Markdown 极速转化为 Vercel 风格的高质量无依赖演示幻灯片",
    "imageUrl": null,
    "fileCount": 10,
    "filesSample": [
      "animation-patterns.md",
      "bold-template-pack",
      "html-template.md",
      "LICENSE",
      "plugins",
      "README.md",
      "scripts",
      "SKILL.md",
      "STYLE_PRESETS.md",
      "viewport-base.css"
    ]
  },
  {
    "id": "hbi mobile",
    "name": "hbi mobile",
    "displayName": "hbi mobile",
    "category": "data-bi",
    "description": "针对 hbi mobile 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 5 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/hbi mobile/tableau_thumbnails_20250324_083718/Business_2078f793-1588-450e-83e8-053889f46d63.png",
    "fileCount": 5,
    "filesSample": [
      "1.html",
      "123.py",
      "hbi.py",
      "tableau_dashboards.json",
      "tableau_thumbnails_20250324_083718"
    ]
  },
  {
    "id": "japan-ski-season-2025-infographic-generator",
    "name": "japan-ski-season-2025-infographic-generator",
    "displayName": "japan-ski-season-2025-infographic-generator",
    "category": "ski-domain",
    "description": "# Run and deploy your AI Studio app  This contains everything you need to run your app locally.  View your app in AI Studio: https://ai.studio/apps/drive/1FK8zDpDGg5E8vQjsTwIvJQiIEZwY0xG6  ## Run Locally  **Prerequisites:**  Node.js   1. Install dependencies:    `npm install` 2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 13 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/japan-ski-season-2025-infographic-generator/components/PixPin_2025-11-19_15-33-00.png",
    "fileCount": 13,
    "filesSample": [
      "App.tsx",
      "components",
      "constants.ts",
      "index.html",
      "index.tsx",
      "metadata.json",
      "node_modules",
      "package-lock.json",
      "package.json",
      "README.md"
    ]
  },
  {
    "id": "mksaas-template",
    "name": "mksaas-template",
    "displayName": "mksaas-template",
    "category": "saas-web",
    "description": "MkSaaS  Make AI SaaS in a weekend.  The complete Next.js boilerplate for building profitable SaaS, with auth, payments, i18n, newsletter, dashboard, blog, docs, blocks, themes, SEO and more.  ## Branches  - [main](https://github.com/MkSaaSHQ/mksaas-template): The `main` branch can be deployed on Vercel or with Docker, and uses Postgres as database by default, you can check out this [deployment guide](https://mksaas.com/zh/docs/deployment/vercel) for more details. - [cloudflare](https://github.",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": "https://github.com/template-code-team/mksaas-template",
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 25 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/mksaas-template/public/android-chrome-192x192.png",
    "fileCount": 25,
    "filesSample": [
      "AGENTS.md",
      "biome.json",
      "CLAUDE.md",
      "components.json",
      "content",
      "Dockerfile",
      "docs",
      "drizzle.config.ts",
      "env.example",
      "global.d.ts"
    ]
  },
  {
    "id": "organized_chats",
    "name": "organized_chats",
    "displayName": "organized_chats",
    "category": "ai-agents",
    "description": "📂 Gemini CLI 整理后聊天记录与脚本索引大盘  此目录由 AI 自动生成，收录了您所有 Gemini CLI 历史会话的结构化整理成果。每一份会话都区分了**对话记录**与**提取出的脚本文件**。  ## 🚀 整理项目列表  | 序号 | 项目分类 | 原始会话名 | 会话大小 | 提取脚本数量 | 整理后对话链接 | 脚本存放目录 | | --- | --- | --- | --- | --- | --- | --- | | 1 | **20260227-cwtwb** | `session-2026-06-07T09-41-df602ef3.jsonl` | 77308.4 KB | **572 个** | [查看对话对话](./20260227-cwtwb_2026-06-07_09-41/session_2026-06-07T09-41-df602ef3_chat.md) | [浏览脚本](./20260227-cwtwb_2026-06-07_09-41/scripts/) | | 2 | **4325da370bf9766800e04978811757bbf",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 364 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/organized_chats/20260406-autoexcel_2026-04-08_03-34/scripts/tool_write_21.svg",
    "fileCount": 364,
    "filesSample": [
      "0406976f5e387a2453946b8f408e213035832e88d6bc7992a563bf5acfb036ce_2026-02-02_04-09",
      "0a1bf70e8f0b9032e706f15c2c54742c1a5de3bcff18bed639a493e0e1318f27_2025-09-17_10-08",
      "0c9751bf0f97a0eb2b408b785537b3ca5cd70c94ba6feb783cc7a429629ad94a_2025-12-02_03-22",
      "0d1410f0aab805926cf8798d450c2fc953a3778e6cfa6451fd0f1c0134f80e14_2026-01-07_00-57",
      "14e90f54d7ecd1749451e4cf65ce846c2e503d2b4c378fabbe881bcb07c43971_2026-02-10_01-38",
      "14e90f54d7ecd1749451e4cf65ce846c2e503d2b4c378fabbe881bcb07c43971_2026-02-10_01-50",
      "14e90f54d7ecd1749451e4cf65ce846c2e503d2b4c378fabbe881bcb07c43971_2026-02-10_02-09",
      "14e90f54d7ecd1749451e4cf65ce846c2e503d2b4c378fabbe881bcb07c43971_2026-02-10_02-12",
      "14e90f54d7ecd1749451e4cf65ce846c2e503d2b4c378fabbe881bcb07c43971_2026-02-10_02-20",
      "14e90f54d7ecd1749451e4cf65ce846c2e503d2b4c378fabbe881bcb07c43971_2026-02-10_02-25"
    ]
  },
  {
    "id": "podtohtml",
    "name": "podtohtml",
    "displayName": "podtohtml",
    "category": "saas-web",
    "description": "AI 网站生成器  ## 1. 项目愿景  AI 网站生成器是一个强大的Web应用程序，它能将纯文本内容转换为视觉惊艳、功能齐全的单页网站。借助谷歌的Gemini Pro模型，它扮演着您专属的AI内容策略师和网页设计师的角色，在几秒钟内将您的笔记、文章或谈话稿转化为交互式的Web体验。  ## 2. 核心功能  - **即时网站创建**: 只需上传一个简单的文本文件 (`.txt`)，AI就会基于一个成熟的设计模板，为您构建一个结构完整、内容丰富的HTML网站。 - **智能内容结构化**: AI不仅仅是展示文本，它会分析内容，创建出逻辑清晰的区块、标题和引人注目的可视化图表。 - **成熟的设计哲学**: 生成的网站深受苹果和特斯拉官网极简主义和功能优先的美学启发，确保了现代化和专业的外观。 - **一键导出**: 生成的网站内置了导出控件，可以即时将整个页面或其组件导出为三种实用格式：     - **PDF**: 便于分享和归档。     - **JPG图片**: 每个内容区块都会被保存为一张独立的高质量图片。     - **PowerPoint (PPT)**: 每个内容",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": "https://github.com/imgwho/podtohtml",
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 12 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/podtohtml/views/1753581806103_d.png",
    "fileCount": 12,
    "filesSample": [
      "exports",
      "node_modules",
      "package-lock.json",
      "package.json",
      "prompts.md",
      "public",
      "README.md",
      "REQUIREMENTS.md",
      "sample.html",
      "server.js"
    ]
  },
  {
    "id": "ppt-slidev-link",
    "name": "ppt-slidev-link",
    "displayName": "ppt-slidev-link",
    "category": "office-automation",
    "description": "Tableau to Power BI Conversion - Slidev Presentation  这是一个使用Slidev框架完全复刻的PPT项目，展示了从Tableau (TWB)到Power BI (PBIP)的AI辅助转换工作流程。  ## 🚀 快速开始  ### 1. 安装依赖 ```bash npm install ```  ### 2. 启动开发服务器 ```bash npm run dev ```  ### 3. 访问应用 打开浏览器访问：http://localhost:3030  ## 📁 项目结构  ``` ppt-slidev/ ├── slides.md              # 主要的幻灯片内容 ├── components/            # 自定义Vue组件 ├── snippets/             # 代码片段 ├── pages/                # 额外页面 └── package.json          # 项目配置 ```  ## 🎨 设计特点  ### 一致的字体系统 - **字体**: M",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 22 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/ppt-slidev-link/Fitcheck OVERVIEW powerbi.jpg",
    "fileCount": 22,
    "filesSample": [
      "components",
      "export.bat",
      "export.sh",
      "Fitcheck OVERVIEW powerbi.jpg",
      "Fitcheck OVERVIEW streamlit.jpg",
      "Fitcheck OVERVIEW tableau.jpg",
      "netlify.toml",
      "node_modules",
      "package-lock.json",
      "package.json"
    ]
  },
  {
    "id": "tableau-dingtalk-bun",
    "name": "tableau-dingtalk-bun",
    "displayName": "tableau-dingtalk-bun",
    "category": "data-bi",
    "description": "针对 tableau-dingtalk-bun 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 4 个配置文件。",
    "imageUrl": null,
    "fileCount": 4,
    "filesSample": [
      "package.json",
      "public",
      "setup.sh",
      "src"
    ]
  },
  {
    "id": "tableau-monitor-tmp",
    "name": "tableau-monitor-tmp",
    "displayName": "tableau-monitor-tmp",
    "category": "data-bi",
    "description": "Tableau Flow Monitor  [中文文档](README.zh-CN.md)  Auto-monitor Tableau Server flow runs and automatically cancel tasks that exceed a time threshold.  ## Features  - Checks flow run status every 10 minutes - Auto-cancels tasks running longer than 1 hour (configurable) - `--dry-run` mode for safe testing - Logs to systemd journal with flow names and job IDs - Auto-start on boot, auto-restart on failure  ## Quick Start  ### 1. Install Dependencies  ```bash pip install tableauserverclient python-dote",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": "https://github.com/aidatacooper/tableau-monitor",
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 3 个配置文件。",
    "imageUrl": null,
    "fileCount": 3,
    "filesSample": [
      "monitor_long_flows.py",
      "README.md",
      "README.zh-CN.md"
    ]
  },
  {
    "id": "tableau-viz-generate",
    "name": "tableau-viz-generate",
    "displayName": "tableau-viz-generate",
    "category": "data-bi",
    "description": "针对 tableau-viz-generate 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 29 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/tableau-viz-generate/arc-chart-1810.png",
    "fileCount": 29,
    "filesSample": [
      "arc-chart-1810.png",
      "arc-chart.png",
      "arc-sample.png",
      "arc_chart_final.twb",
      "backup",
      "data.hyper",
      "donut_arc_chart.twb",
      "dount-chart.png",
      "other_charts.twb",
      "pie_chart.twb"
    ]
  },
  {
    "id": "tableauPushDing",
    "name": "tableauPushDing",
    "displayName": "tableauPushDing",
    "category": "data-bi",
    "description": "﻿# Tableau Push Ding  Tableau Push Ding 是一个面向运营报表分发场景的自动化推送系统。 它会按计划从 Tableau Server 拉取视图截图，进行拼接处理，并通过钉钉企业应用消息推送给指定用户。  ## 主要功能 - 定时任务调度：支持基于 Cron 的自动执行。 - Tableau 工作簿拉取：按任务配置获取工作簿视图图片。 - 图片处理：使用 `sharp` 进行多图拼接。 - 钉钉推送：自动获取 Token、上传图片并发送工作通知。 - 环境管理：支持多环境（例如测试/正式）配置隔离。 - 用户管理：支持按环境维护接收用户。 - 管理后台：提供任务、用户、环境的可视化管理界面。  ## 技术栈 - 后端：Bun、Elysia、SQLite - 前端：React、Vite、TypeScript - 外部集成：Tableau REST API、DingTalk OpenAPI  ## 项目结构 ```text . |- index.ts                      # 后端入口 |- src/ |  |- db/db.ts",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": "https://github.com/imgwho/tableauPushDing",
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 16 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/tableauPushDing/frontend/public/vite.svg",
    "fileCount": 16,
    "filesSample": [
      "bun.lock",
      "CHANGELOG.md",
      "ecosystem.config.cjs",
      "frontend",
      "index.ts",
      "LICENSE",
      "node_modules",
      "package.json",
      "README.MD",
      "src"
    ]
  },
  {
    "id": "tableautools",
    "name": "tableautools",
    "displayName": "Tableau Tools 浏览器端分析套件",
    "category": "flagships",
    "description": "零后端依赖的浏览器端 Tableau 文件格式分析套件、依赖图可视化与 Markdown/Mermaid 导出器。",
    "aiDepth": "native",
    "githubStatus": "ready",
    "githubUrl": "https://github.com/imgwho/tableautools",
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "Vanilla JS",
      "Cytoscape.js",
      "Mermaid.js",
      "JSZip"
    ],
    "stars": "4/5",
    "highlight": "纯前端解析 .twb 与 .tfl 文件，秒级导出依赖节点图",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/tableautools/tableau_icon.svg",
    "fileCount": 16,
    "filesSample": [
      "backup",
      "build.js",
      "css",
      "dist",
      "index.html",
      "js",
      "node_modules",
      "package.json",
      "pnpm-lock.yaml",
      "pricing.html"
    ]
  },
  {
    "id": "tbonwechat",
    "name": "tbonwechat",
    "displayName": "tbonwechat",
    "category": "ai-agents",
    "description": "Tableau看板微信小程序  ## 项目介绍  这是一个简单而实用的微信小程序，它可以在微信环境中展示Tableau数据可视化看板。通过这个小程序，用户可以随时随地在微信中查看Tableau制作的数据分析报表，无需打开浏览器或安装Tableau应用。   ## 功能特点  - **无缝集成**: 在微信小程序中直接展示Tableau看板 - **简洁界面**: 隐藏了Tableau原生界面的多余元素，专注于数据展示 - **快速加载**: 优化了加载过程，提供良好的用户体验 - **安全可靠**: 支持JWT认证方式访问需要授权的Tableau看板（已集成相关工具）  ## 技术实现要点  ### 微信小程序基础知识  对于小白用户，首先了解微信小程序的基本组成部分：  1. **项目结构**：一个微信小程序项目通常包含以下文件和目录：    - `app.js`: 小程序的全局逻辑文件    - `app.json`: 小程序的全局配置文件    - `app.wxss`: 小程序的全局样式文件（本项目中未使用）    - `pages/`: 存放小程序页面的目录    - `",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": "https://github.com/imgwho/tbonwechat",
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 12 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/tbonwechat/assets/tableau-logo.png",
    "fileCount": 12,
    "filesSample": [
      "app.js",
      "app.json",
      "assets",
      "miniprogram_npm",
      "node_modules",
      "package-lock.json",
      "package.json",
      "pages",
      "project.config.json",
      "project.private.config.json"
    ]
  },
  {
    "id": "testtan",
    "name": "testtan",
    "displayName": "testtan",
    "category": "office-automation",
    "description": "针对 testtan 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 4 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/testtan/shipany-tanstack/public/imgs/icons/creem.png",
    "fileCount": 4,
    "filesSample": [
      "mkfast-template",
      "mkfast_check.html",
      "shipany-tanstack",
      "shipany_check.html"
    ]
  },
  {
    "id": "tinyship",
    "name": "tinyship",
    "displayName": "TinyShip SaaS 全栈启动模板",
    "category": "flagships",
    "description": "多框架现代 SaaS 启动模板（支持 Next.js / Nuxt.js / TanStack Start），集成 Stripe 多支付通道。",
    "aiDepth": "assisted",
    "githubStatus": "ready",
    "githubUrl": "https://github.com/imgwho/guagua_xhs",
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "Turborepo",
      "Drizzle ORM",
      "Stripe"
    ],
    "stars": "4/5",
    "highlight": "集成多支付通道、多云存储与 RBAC 权限系统",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/tinyship/.tmp_pages/android-chrome-192x192.png",
    "fileCount": 34,
    "filesSample": [
      "AGENTS.md",
      "apps",
      "config",
      "config.ts",
      "data",
      "docker-compose.yml",
      "Docker-README.md",
      "docs",
      "drizzle.config.sqlite.ts",
      "drizzle.config.ts"
    ]
  },
  {
    "id": "whisper",
    "name": "whisper",
    "displayName": "whisper",
    "category": "office-automation",
    "description": "Whisper  [[Blog]](https://openai.com/blog/whisper) [[Paper]](https://arxiv.org/abs/2212.04356) [[Model card]](https://github.com/openai/whisper/blob/main/model-card.md) [[Colab example]](https://colab.research.google.com/github/openai/whisper/blob/master/notebooks/LibriSpeech.ipynb)  Whisper is a general-purpose speech recognition model. It is trained on a large dataset of diverse audio and is also a multitasking model that can perform multilingual speech recognition, speech translation, and l",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": "https://github.com/openai/whisper",
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 13 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/whisper/approach.png",
    "fileCount": 13,
    "filesSample": [
      "approach.png",
      "CHANGELOG.md",
      "data",
      "language-breakdown.svg",
      "LICENSE",
      "MANIFEST.in",
      "model-card.md",
      "notebooks",
      "pyproject.toml",
      "README.md"
    ]
  },
  {
    "id": "work-portfolio",
    "name": "work-portfolio",
    "displayName": "work-portfolio",
    "category": "office-automation",
    "description": "针对 work-portfolio 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 5 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/work-portfolio/proof1.png",
    "fileCount": 5,
    "filesSample": [
      "index_v1.html",
      "metaso.html",
      "proof1.png",
      "proof2.png",
      "郭文华 8年经验 数据分析 17313162175 12月26.pdf"
    ]
  },
  {
    "id": "其他",
    "name": "其他",
    "displayName": "其他",
    "category": "office-automation",
    "description": "针对 其他 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 3 个配置文件。",
    "imageUrl": null,
    "fileCount": 3,
    "filesSample": [
      "html",
      "看板",
      "看板.rar"
    ]
  },
  {
    "id": "看板设计",
    "name": "看板设计",
    "displayName": "看板设计",
    "category": "office-automation",
    "description": "针对 看板设计 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 31 个配置文件。",
    "imageUrl": "file:///C:/Users/imgwho/Desktop/projects/看板设计/PixPin_2025-11-26_15-58-22.png",
    "fileCount": 31,
    "filesSample": [
      "1.html",
      "1.txt",
      "2.html",
      "3.html",
      "4.html",
      "9H.mp4",
      "@Superstore Performance Overview #V.txt",
      "bbc",
      "hotel",
      "index.html"
    ]
  },
  {
    "id": "韩国tableau作业",
    "name": "韩国tableau作业",
    "displayName": "韩国tableau作业",
    "category": "data-bi",
    "description": "针对 韩国tableau作业 自动化流程与数据处理场景定制开发的工程案例。",
    "aiDepth": "accelerated",
    "githubStatus": "ready",
    "githubUrl": null,
    "pypiStatus": null,
    "mcpReady": false,
    "techStack": [
      "TypeScript",
      "自动化"
    ],
    "stars": "4/5",
    "highlight": "包含完整的工程源码与 3 个配置文件。",
    "imageUrl": null,
    "fileCount": 3,
    "filesSample": [
      "1인가구분석_공유.twbx",
      "서울서베이 전처리_1124 11.30",
      "서울서베이 전처리_1124 11.30.zip"
    ]
  }
];

export const LOOSE_FILES_DATA: LooseFileItem[] = [
  {
    "name": "1.md",
    "size": 0,
    "sizeKB": 0.0
  },
  {
    "name": "1.srt",
    "size": 355,
    "sizeKB": 0.3
  },
  {
    "name": "20260324-lichunlindata.7z",
    "size": 5479266883,
    "sizeKB": 5350846.6
  },
  {
    "name": "20260713_PROJECTS_INDEX.md",
    "size": 38588,
    "sizeKB": 37.7
  },
  {
    "name": "All_LGA_Crime_Data_2019_2024.csv",
    "size": 334871373,
    "sizeKB": 327022.8
  },
  {
    "name": "CUsersimgwho.claudesettings.json",
    "size": 215,
    "sizeKB": 0.2
  },
  {
    "name": "PROJECTS_INDEX.md",
    "size": 23434,
    "sizeKB": 22.9
  },
  {
    "name": "YouTube下载工具.html",
    "size": 7521,
    "sizeKB": 7.3
  },
  {
    "name": "_stitch_get_project_home.json",
    "size": 135,
    "sizeKB": 0.1
  },
  {
    "name": "_stitch_get_project_home_req.json",
    "size": 135,
    "sizeKB": 0.1
  },
  {
    "name": "_stitch_get_project_home_resp.json",
    "size": 49904,
    "sizeKB": 48.7
  },
  {
    "name": "_stitch_get_screen_amber_fluid.json",
    "size": 175,
    "sizeKB": 0.2
  },
  {
    "name": "_stitch_init.json",
    "size": 155,
    "sizeKB": 0.2
  },
  {
    "name": "_stitch_list_projects.json",
    "size": 98,
    "sizeKB": 0.1
  },
  {
    "name": "_stitch_list_projects_latest.json",
    "size": 99,
    "sizeKB": 0.1
  },
  {
    "name": "_stitch_list_screens_home.json",
    "size": 132,
    "sizeKB": 0.1
  },
  {
    "name": "_stitch_list_screens_home_req2.json",
    "size": 132,
    "sizeKB": 0.1
  },
  {
    "name": "_stitch_list_screens_home_resp.json",
    "size": 48128,
    "sizeKB": 47.0
  },
  {
    "name": "_stitch_project_summary_home.ps1",
    "size": 2305,
    "sizeKB": 2.3
  },
  {
    "name": "_stitch_tools_list.json",
    "size": 61,
    "sizeKB": 0.1
  },
  {
    "name": "backup1.7z",
    "size": 92661869,
    "sizeKB": 90490.1
  },
  {
    "name": "checkclaude.ps1",
    "size": 2129,
    "sizeKB": 2.1
  },
  {
    "name": "cwtwb-cwprep-home-preview.html",
    "size": 11449,
    "sizeKB": 11.2
  },
  {
    "name": "generated.html",
    "size": 58582,
    "sizeKB": 57.2
  },
  {
    "name": "nul",
    "size": 0,
    "sizeKB": 0.0
  },
  {
    "name": "podtohtml1.html",
    "size": 59752,
    "sizeKB": 58.4
  },
  {
    "name": "podtohtml2.html",
    "size": 59752,
    "sizeKB": 58.4
  },
  {
    "name": "podtohtml3.html",
    "size": 54845,
    "sizeKB": 53.6
  },
  {
    "name": "serveredit.js",
    "size": 8163,
    "sizeKB": 8.0
  },
  {
    "name": "tourist_summary_cleaned.md",
    "size": 4105,
    "sizeKB": 4.0
  },
  {
    "name": "下载YouTube视频说明.txt",
    "size": 1292,
    "sizeKB": 1.3
  },
  {
    "name": "小红书评论导出.json",
    "size": 2842,
    "sizeKB": 2.8
  },
  {
    "name": "小红书评论导出.xlsx",
    "size": 1948,
    "sizeKB": 1.9
  },
  {
    "name": "小红书评论导出_full.json",
    "size": 4894,
    "sizeKB": 4.8
  },
  {
    "name": "郭文华 8年经验 BI数据 (1).pdf",
    "size": 350666,
    "sizeKB": 342.4
  },
  {
    "name": "飞书20260403-162150.mp4",
    "size": 17923785,
    "sizeKB": 17503.7
  }
];
