import {
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  Calculator,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Handshake,
  Landmark,
  Layers3,
  LineChart,
  MessageCircle,
  PieChart,
  ReceiptText,
  ShieldCheck,
  Target,
  TrendingUp,
  UsersRound
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type IconName =
  | "BarChart3"
  | "BookOpen"
  | "BriefcaseBusiness"
  | "Building2"
  | "Calculator"
  | "CheckCircle2"
  | "ClipboardCheck"
  | "FileText"
  | "Handshake"
  | "Landmark"
  | "Layers3"
  | "LineChart"
  | "MessageCircle"
  | "PieChart"
  | "ReceiptText"
  | "ShieldCheck"
  | "Target"
  | "TrendingUp"
  | "UsersRound";

export const iconMap: Record<IconName, LucideIcon> = {
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  Calculator,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Handshake,
  Landmark,
  Layers3,
  LineChart,
  MessageCircle,
  PieChart,
  ReceiptText,
  ShieldCheck,
  Target,
  TrendingUp,
  UsersRound
};

export const site = {
  name: "广东省生财有道企业服务集团有限公司",
  shortName: "生财有道",
  tagline: "老板身边的财税合规与经营顾问团队",
  phone: "15710756868",
  wechat: "请替换为企业微信",
  email: "13332968941@163.com",
  qrImage: "/images/custom/wechat-qr.jpg",
  address: "公司总部位于深圳市龙华区建设东路18号青年创业园A栋307",
  description:
    "面向跨境电商老板、电商老板、企业老板与初创公司，提供税务合规、跨境电商财税合规、股权架构、共享财务总监等企业服务。"
};

export const navItems = [
  { label: "财税合规", href: "#solutions" },
  { label: "股权激励", href: "#services" },
  { label: "课程培训", href: "#resources" },
  { label: "发展历程", href: "#about" },
  { label: "应用中心", href: "#tools" },
  { label: "我的服务", href: "#contact" }
];

export const quickEntries = [
  {
    title: "服务咨询",
    desc: "说明企业现状，获取初步合规建议。",
    href: "#contact",
    icon: "MessageCircle" as IconName
  },
  {
    title: "资料下载",
    desc: "领取财税合规、股权架构、报表管理清单。",
    href: "#resources",
    icon: "FileText" as IconName
  },
  {
    title: "工具中心",
    desc: "用自测工具快速识别经营风险点。",
    href: "#tools",
    icon: "Calculator" as IconName
  }
];

export const painPoints = [
  {
    title: "平台流水与账务脱节",
    desc: "店铺回款、广告费、采购成本、物流费用分散，老板很难看清真实利润。",
    icon: "ReceiptText" as IconName
  },
  {
    title: "税务风险不确定",
    desc: "发票、成本、收入确认与申报口径不清晰，担心后续补税和稽查。",
    icon: "ShieldCheck" as IconName
  },
  {
    title: "公司架构越做越乱",
    desc: "多主体、多店铺、多团队并行后，权责、利润和风险边界不够清楚。",
    icon: "Layers3" as IconName
  },
  {
    title: "合伙人权益难分配",
    desc: "合伙创业、员工激励或项目分红缺少稳定机制，容易影响长期协作。",
    icon: "UsersRound" as IconName
  },
  {
    title: "财务只记账不经营",
    desc: "报表滞后，无法支持预算、现金流、利润分析和老板经营决策。",
    icon: "BarChart3" as IconName
  },
  {
    title: "业务扩张缺少预案",
    desc: "新增平台、店铺、主体或品类时，财税和管理制度没有同步升级。",
    icon: "TrendingUp" as IconName
  },
  {
    title: "内控流程不标准",
    desc: "付款、报销、合同、库存和对账缺少清晰流程，容易出现管理漏洞。",
    icon: "ClipboardCheck" as IconName
  },
  {
    title: "老板缺少可信参谋",
    desc: "关键节点需要有人把财税、合规和经营问题说清楚，并给出可执行方案。",
    icon: "Handshake" as IconName
  }
];

export const solutions = [
  {
    stage: "初创搭建期",
    title: "先把公司、账税和基础流程搭稳",
    desc: "适合刚起步的电商团队、创业公司和个体转公司客户。",
    points: ["工商注册与主体选择", "代理记账与纳税申报", "基础财税合规清单", "合同、票据、账户建议"]
  },
  {
    stage: "增长规范期",
    title: "让平台流水、成本和利润更清楚",
    desc: "适合已经有稳定收入，但财务数据和税务口径需要规范的企业。",
    points: ["收入与成本归集", "税务合规诊断", "利润核算与报表", "采购、库存、费用流程"]
  },
  {
    stage: "多主体扩张期",
    title: "用架构和制度支撑长期经营",
    desc: "适合多平台、多店铺、多团队或准备融资、合伙、股权激励的企业。",
    points: ["股权架构设计", "主体风险隔离", "组织与分红机制", "共享财务总监服务"]
  }
];

export const services = [
  {
    title: "企业税务合规服务",
    forWhom: "适合账税不清、发票管理薄弱、税负压力较大的企业。",
    solves: "帮助企业梳理收入、成本、票据、申报与内控流程，降低税务不确定性。",
    icon: "Landmark" as IconName
  },
  {
    title: "跨境电商财税合规",
    forWhom: "适合亚马逊、独立站、TikTok Shop、国内电商等经营主体。",
    solves: "围绕平台流水、收款账户、采购成本、库存、利润和申报口径建立清晰规则。",
    icon: "Building2" as IconName
  },
  {
    title: "股权架构",
    forWhom: "适合合伙创业、团队扩张、利润分配和员工激励场景。",
    solves: "设计更清晰的持股、分红、权责和风险隔离安排，为长期发展留出空间。",
    icon: "PieChart" as IconName
  },
  {
    title: "共享财务总监",
    forWhom: "适合需要财务管理能力，但暂不招聘全职 CFO 的成长型企业。",
    solves: "提供预算、报表、现金流、经营分析和管理建议，让财务真正支持决策。",
    icon: "BriefcaseBusiness" as IconName
  }
];

export const advantages = [
  { title: "专业团队", desc: "熟悉企业财税、跨境业务和老板经营场景。", icon: "UsersRound" as IconName },
  { title: "标准流程", desc: "从诊断、方案到落地交付，每一步都有清晰节点。", icon: "ClipboardCheck" as IconName },
  { title: "一站式服务", desc: "覆盖注册、记账、税务、架构、财务管理等需求。", icon: "Layers3" as IconName },
  { title: "案例经验", desc: "长期服务电商、跨境电商和成长型企业客户。", icon: "Target" as IconName },
  { title: "透明交付", desc: "服务内容、交付资料和推进节奏提前说明。", icon: "FileText" as IconName },
  { title: "持续跟进", desc: "不是一次性建议，而是陪伴企业持续优化。", icon: "CheckCircle2" as IconName }
];

export const processSteps = [
  "需求沟通",
  "诊断评估",
  "方案设计",
  "合同确认",
  "项目落地",
  "定期复盘"
];

export const cases = [
  {
    industry: "跨境电商卖家",
    title: "多店铺利润核算从模糊到清晰",
    background: "客户经营多个平台店铺，收入、广告费、采购和物流数据分散。",
    challenge: "老板难以判断单店利润，也无法评估税务申报口径是否稳定。",
    solution: "梳理平台流水、成本归集和报表模板，建立月度经营分析机制。",
    result: "管理层能够按店铺查看利润表现，并形成更稳定的合规资料链。"
  },
  {
    industry: "电商企业",
    title: "从基础记账升级为经营财务",
    background: "企业已有稳定销售额，但财务工作停留在记账和报税层面。",
    challenge: "费用审批、库存对账和利润分析滞后，经营决策缺少数据支持。",
    solution: "导入预算、费用分类、对账流程和管理报表，定期复盘经营指标。",
    result: "老板能更快看到现金流和利润变化，团队协作流程更加规范。"
  },
  {
    industry: "初创公司",
    title: "合伙股权与主体架构提前规划",
    background: "几位合伙人准备成立公司，并计划后续引入核心员工。",
    challenge: "合伙权益、分红方式、退出机制和主体风险边界尚未明确。",
    solution: "结合业务阶段设计股权和主体建议，明确权责、激励与风险隔离思路。",
    result: "公司设立前完成关键安排，减少后续沟通成本和合伙隐患。"
  }
];

export const clientLogos = [
  "跨境卖家 A",
  "电商企业 B",
  "初创公司 C",
  "供应链企业 D",
  "品牌出海 E",
  "本地企业 F"
];

export const resources = [
  {
    type: "文章",
    title: "跨境电商老板如何看懂真实利润",
    desc: "从收入、成本、广告费、物流和库存五个维度建立判断框架。",
    icon: "BookOpen" as IconName
  },
  {
    type: "课程",
    title: "企业税务合规基础课",
    desc: "适合老板和财务负责人快速建立合规意识和资料管理习惯。",
    icon: "LineChart" as IconName
  },
  {
    type: "下载",
    title: "财税合规自查清单",
    desc: "用于初步检查发票、合同、账户、申报和流程中的常见风险点。",
    icon: "FileText" as IconName
  }
];

export const tools = [
  "税负测算",
  "利润核算",
  "企业合规自测",
  "资料清单下载"
];

export const faqs = [
  {
    question: "我们已经有代账公司，还需要财税合规服务吗？",
    answer:
      "代账通常解决基础记账和申报，财税合规更关注业务数据、票据链、风险口径和经营管理。两者可以配合，但服务深度不同。"
  },
  {
    question: "跨境电商财税合规主要看哪些资料？",
    answer:
      "通常会结合平台流水、收款账户、采购资料、物流费用、库存记录、发票、合同和现有申报资料进行初步判断。"
  },
  {
    question: "共享财务总监适合多大规模的企业？",
    answer:
      "只要企业已经需要预算、报表、现金流和经营分析，但暂时不适合招聘全职 CFO，就可以考虑共享财务总监服务。"
  },
  {
    question: "首次咨询需要提前准备什么？",
    answer:
      "可以先准备公司基本情况、业务模式、当前财务痛点和希望解决的问题。资料不完整也可以先沟通，我们会给出准备清单。"
  }
];
