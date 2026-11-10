/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useAnimationControls } from "motion/react";
import { CheckCircle2, ChevronRight, MessageSquare, Users, Clock, Award, Layout, Cpu, Code, ShieldCheck, Zap, Globe, MonitorPlay } from "lucide-react";
import { useState, useEffect } from "react";

const EXIFACE_RED = "#FF0045";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-rose-100 selection:text-rose-900 overflow-x-hidden">
      <Hero />
      <LogoCloud />
      <ProblemSection />
      <FeaturesSection />
      <ProcessSection />
      <CTASection />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative bg-[#0F0F0F] text-white py-24 px-6 overflow-hidden min-h-[700px] flex items-center">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-rose-600 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-zinc-800 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-8 backdrop-blur-sm"
        >
          <span className="text-rose-400 font-bold uppercase tracking-wider">BIG TECH 중심</span>
          <span className="w-px h-3 bg-white/30 mx-2" />
          <span>AI 교육 수행</span>
          <span className="w-px h-3 bg-white/30 mx-2" />
          <span className="text-rose-400 font-bold">75개+</span>
          <span>고객사</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]"
        >
          국내 주요 기업이 <span className="text-rose-500">선택한</span>
          <br />
          AI 교육 파트너 <span className="text-white/40 font-black italic">EXIFACE</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          생성형 AI, 빅테크 워크플로우, AI Agent 등
          <br />
          기업 맞춤형 AI 교육을 설계하고 최적의 강사진을 매칭합니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <Stat value="12,000+" label="누적 교육 시간" />
          <Stat value="75+" label="고객사" />
          <Stat value="4.8/5.0" label="수강 만족도" />
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
      <div className="text-4xl font-bold mb-2 tracking-tight">{value}</div>
      <div className="text-zinc-500 font-medium">{label}</div>
    </div>
  );
}

function LogoCloud() {
  const bigTechLogos = [
    { name: "Google", color: "#4285F4" },
    { name: "Amazon", color: "#FF9900" },
    { name: "Microsoft", color: "#00A4EF" },
    { name: "Meta", color: "#0668E1" },
    { name: "OpenAI", color: "#000000" },
    { name: "NVIDIA", color: "#76B900" },
  ];
  
  // Double the logos for seamless scroll
  const scrollingLogos = [...bigTechLogos, ...bigTechLogos];

  return (
    <section className="py-20 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="inline-block px-6 py-2 border-2 border-slate-900 font-bold text-sm mb-12 uppercase tracking-widest">
          함께하는 AI 교육 파트너 강사
        </div>
        
        <div className="relative">
          <div className="flex gap-16 overflow-hidden">
            <motion.div 
               animate={{ x: "-50%" }}
               transition={{ ease: "linear", duration: 20, repeat: Infinity }}
               className="flex gap-16 items-center whitespace-nowrap min-w-max"
            >
              {scrollingLogos.map((logo, index) => (
                <div key={index} className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all cursor-default">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white text-xl" style={{ backgroundColor: logo.color }}>
                    {logo.name[0]}
                  </div>
                  <span className="text-2xl font-black text-slate-800 tracking-tighter uppercase">{logo.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
          {/* Fading gradients on sides */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  const problems = [
    {
      id: 1,
      title: "강사의 비전문성",
      content: "강사풀 내에서 가장 적합한 사람을 AI로 선별하고 그 강사를 선정하여 강의를 진행하도록 합니다.",
      icon: Users,
    },
    {
      id: 2,
      title: "실무 적용의 어려움",
      content: "대부분의 강의가 이론적인 강의에 불과합니다. 회사 내에서 필요한 것을 찾아내고 그걸 최대한 AI로 효율성을 높이게 할 수 있는 강의를 제공합니다.",
      icon: Zap,
    },
    {
      id: 3,
      title: "깊이가 없는 강의",
      content: "AI에 대해 겉만 알고 계시는 분들이 아닌, 빅테크 출신들 위주로 진행이 되며 내부적으로 기본적인 AI 지식과 검증을 거친 확실한 강사 위주로 선별합니다.",
      icon: ShieldCheck,
    },
    {
      id: 4,
      title: "일방향 인터넷 강의의 한계",
      content: "단순히 1회성 강의가 아닌 강의의 효율을 높이기 위해 필요한 강의 시스템을 온라인으로 병행하여 제공합니다.",
      icon: MonitorPlay,
    }
  ];

  return (
    <section className="py-24 bg-[#0A0A0A] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            대부분의 AI 교육에서<br />겪게 되는 문제
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto">
            엑시페이스는 기존 교육 시장의 문제점을 혁신적으로 해결합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {problems.map((p, i) => (
            <motion.div 
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl hover:border-rose-500/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-rose-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-rose-500/20 transition-colors">
                <p.icon className="w-6 h-6 text-rose-500" />
              </div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <span className="text-rose-500 text-sm font-mono opacity-50">0{p.id}</span>
                {p.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                {p.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const [activeTab, setActiveTab] = useState("basic");

  const tabs = [
    { id: "basic", label: "AI 기본교육", icon: Layout },
    { id: "tech", label: "빅테크 AI교육", icon: Cpu },
    { id: "dev", label: "AI 자동화 개발", icon: Code },
  ];

  const content = {
    basic: {
      title: "기초부터 탄탄하게, 전직원 AI 리터러시 강화",
      desc: "비전공자도 이해하는 생성형 AI의 원리와 활용 사례부터 업무 효율을 200% 높이는 실전 프롬프트 엔지니어링까지 학습합니다.",
      features: ["기업 내부 보안 가이드 수립", "업직종별 맞춤 사례 연구", "실전 프롬프트 실습 패키지"]
    },
    tech: {
      title: "글로벌 빅테크의 AI 워크플로우 이식",
      desc: "OpenAI, Google, Anthropic 등 최신 AI 모델의 기술 트렌드를 분석하고 기업의 비즈니스 모델에 최적화된 엔진 도입 전략을 구축합니다.",
      features: ["LLM 오케스트레이션", "RAG 시스템 구축 전략", "API 기반 서비스 매쉬업"]
    },
    dev: {
      title: "AI 에이전트 및 자동화 시스템 구축",
      desc: "단순 활용을 넘어, 코드 한 줄 몰라도 상상하는 AI 자동화 시스템을 직접 구축하고 실질적인 업무 자동화 에이전트를 배포하는 경험을 제공합니다.",
      features: ["노코드 AI 에이전트 개발", "워크플로우 자동화 도구", "1인 1프로덕트 완성"]
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-rose-500 font-bold mb-2">EXIFACE AI 교육이 특별한 이유</p>
          <h2 className="text-3xl md:text-4xl font-bold flex flex-wrap items-center justify-center gap-4">
            <span>타사는 따라할 수 없는 교육</span>
            <span className="hidden md:block w-px h-8 bg-zinc-200"></span>
            <span className="text-zinc-400">시스템</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold transition-all border-2 ${
                  activeTab === tab.id 
                    ? "bg-slate-900 text-white border-slate-900 shadow-xl scale-[1.02]" 
                    : "bg-white text-zinc-500 border-zinc-100 hover:border-zinc-300"
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-zinc-50 rounded-3xl p-8 md:p-16 border border-zinc-100"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
                  {content[activeTab as keyof typeof content].title}
                </h3>
                <p className="text-zinc-600 mb-8 leading-relaxed text-lg">
                  {content[activeTab as keyof typeof content].desc}
                </p>
                <ul className="space-y-4">
                  {content[activeTab as keyof typeof content].features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 font-medium text-slate-800">
                      <CheckCircle2 className="w-5 h-5 text-rose-500" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-video bg-white rounded-2xl shadow-inner border border-zinc-200 flex items-center justify-center overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-indigo-50 opacity-50" />
                   <div className="relative text-zinc-400 font-mono text-sm leading-loose text-center px-6">
                      <p className="font-bold text-slate-800 mb-2">실습 환경 및 교육 시스템</p>
                      <p>AI Instructor Matching System<br />Interactive Learning Platform</p>
                   </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    {
      title: "교육 문의하기",
      desc: "교육 대상, 교육 목표, 선호 교육 주제 등 기본적인 정보를 확인합니다.",
    },
    {
      title: "교육 담당자의 고민 해결 미팅",
      desc: "담당자님의 실제 고민과 회사 상황에 맞는 최적의 AI 교육 방향을 함께 모색합니다.",
    },
    {
      title: "맞춤형 AI 강사 & 프로그램 제안",
      desc: "현업 빅테크 전문가로 구성된 강사풀에서 가장 적합한 교육자를 매칭하고 커리큘럼을 제안합니다.",
    },
    {
      title: "최종 최적화 및 교육 확정",
      desc: "담당자님의 피드백을 최종 반영해 우리 회사에 가장 적합한 교육 계획으로 확정합니다.",
    },
  ];

  return (
    <section className="py-24 bg-[#0F0F0F] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              최고의 AI 교육을 위한<br />컨설팅 프로세스
            </h2>
            <p className="text-zinc-400 text-lg mb-10 max-w-md leading-relaxed">
              엑시페이스는 교육 기획부터 결과 보고까지,<br />
              기업이 실질적인 AI 도입 성과를 경험할 수 있도록<br />
              모든 고도화 과정을 책임집니다.
            </p>
            <button className="px-8 py-4 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-rose-600/20 active:scale-95">
              문의하기
            </button>
          </div>

          <div className="space-y-12 relative">
            <div className="absolute left-6 top-8 bottom-8 w-px bg-zinc-800" />
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-16 py-2"
              >
                <div className="absolute left-0 top-0 w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center text-rose-500 font-bold z-10 shadow-lg">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-zinc-500 leading-relaxed max-w-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with Red Geometric Pattern */}
      <div className="absolute inset-0 bg-[#FF0045]" />
      <div className="absolute inset-0 opacity-20" 
           style={{ 
             backgroundImage: "linear-gradient(45deg, rgba(255,255,255,0.4) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.4) 75%, transparent 75%, transparent)",
             backgroundSize: "60px 60px"
           }} 
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
          AI 기업교육의 정점, <span className="underline decoration-white/30 underline-offset-8">EXIFACE</span>입니다.
        </h2>
        <p className="text-white/80 text-xl font-medium mb-12">
          빅테크 전문가 매칭 시스템으로 기업의 AI 혁신을 가속화하겠습니다.
        </p>
        
        <button className="px-12 py-5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl transition-all shadow-2xl flex items-center gap-3 mx-auto group">
          문의하기
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 bg-[#0F0F0F] text-zinc-500 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="font-black text-2xl text-white tracking-tighter">
          EXIFACE
        </div>
        <div className="text-sm">
          © 2026 EXIFACE Corporate Edutech. All rights reserved.
        </div>
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white transition-colors">이용약관</a>
          <a href="#" className="hover:text-white transition-colors font-bold">개인정보처리방침</a>
          <a href="#" className="hover:text-white transition-colors">기업교육 문의</a>
        </div>
      </div>
    </footer>
  );
}
