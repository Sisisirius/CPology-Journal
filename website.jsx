import React, { useState, useEffect } from 'react';
import { Search, Menu, Globe, ExternalLink, Mail, BookOpen, Send, TrendingUp, BarChart3, Star, X, ChevronDown, ChevronLeft, ChevronRight, FileText, Share2, Printer } from 'lucide-react';

const App = () => {
  const [lang, setLang] = useState('zh');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readingArticle, setReadingArticle] = useState(null);

  const slides = [
    {
      id: 1,
      category: { zh: "本周推荐", en: "Featured Article" },
      tag: { zh: "实证研究", en: "Empirical Study" },
      title: { 
        zh: "论‘宿敌向’关系中的张力传递：从《国产动画》到《日产游戏》的跨文化实证研究", 
        en: "Tension Transmission in 'Arch-Nemesis' Relationships: A Cross-Cultural Study" 
      },
      desc: { 
        zh: "本文探讨了‘相爱相杀’模式在不同文化背景下的受众心理反馈机制。", 
        en: "Exploring the psychological feedback mechanisms of 'love-hate' patterns across cultures." 
      },
      author: "Dr. Shipper Wang",
      image: "https://images.unsplash.com/photo-1511447333015-45b65e60f6d1?auto=format&fit=crop&q=80&w=1200",
      content: {
        zh: `
          <h3>摘要 (Abstract)</h3>
          <p>本研究聚焦于二次元文化中最为长盛不衰的叙事动力学之一——“宿敌关系”。通过对过去十年间代表性作品的语义分析，我们发现张力的核心并非来源于冲突本身，而是来源于冲突过程中的情感位移...</p>
          
          <h3>一、引言</h3>
          <p>在当代流行文化中，"相爱相杀"（Love-Hate relationship）已成为一种极具生产力的浪漫修辞。这种关系的张力往往建立在对立的价值观与无法回避的宿命感之上。</p>
          
          <blockquote class="border-l-4 border-red-500 pl-4 py-2 italic my-6 bg-gray-50">
            “宿敌的存在，本质上是对自我完整性的一种破坏性重塑。” —— 摘自本文核心论点
          </blockquote>

          <h3>二、跨文化样本对比</h3>
          <p>在国产动画样本中，这种张力多体现为“正邪对峙”中的灰色地带；而在日产游戏中，张力则更多转向“双生/竞争”带来的自我认同危机...</p>
          
          <div class="my-8 aspect-video bg-gray-100 rounded flex items-center justify-center text-gray-400 italic text-sm border">
            [研究数据图表：不同地区受众对张力感知的强度分布图]
          </div>

          <h3>三、参考文献</h3>
          <ul class="text-xs space-y-1 text-gray-500 uppercase">
            <li>[1] Fan, C. (2022). The Dynamics of Rivalry. CPology Press.</li>
            <li>[2] Sato, M. (2023). Mirror and Sword: Anime Archetypes.</li>
          </ul>
        `
      }
    },
    {
      id: 2,
      category: { zh: "深度专题", en: "Deep Dive" },
      tag: { zh: "心理学研究", en: "Psychological Report" },
      title: { 
        zh: "‘镜像双子’设定的代入感调查：为何我们对‘另一个自我’如此着迷？", 
        en: "Immersion in 'Mirror Twin' Tropes: Why Are We Obsessed with the Alter-Ego?" 
      },
      desc: { 
        zh: "分析双生子设定中的自恋投射与情感边界模糊现象。", 
        en: "Analyzing narcissistic projection and blurred emotional boundaries in twin tropes." 
      },
      author: "Prof. Gemini Muse",
      image: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&q=80&w=1200",
      content: { zh: "<p>这里是关于镜像双子的深度研究内容。探讨了自恋心理在双生设定中的体现...</p>" }
    },
    {
      id: 3,
      category: { zh: "二次元观测", en: "Anime Watch" },
      tag: { zh: "叙事分析", en: "Narrative Analysis" },
      title: { 
        zh: "从《新世纪福音战士》谈起：意识流动画中的‘补完’关系与灵魂共鸣", 
        en: "From Evangelion: 'Complementary' Relationships and Soul Resonance in Anime" 
      },
      desc: { 
        zh: "探讨在极端环境下，个体如何通过他者实现自我价值的确认。", 
        en: "How individuals confirm self-worth through others in extreme environments." 
      },
      author: "Eva Enthusiast",
      image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=1200",
      content: { zh: "<p>灵魂补完计划在当代嗑学中的隐喻意义分析...</p>" }
    }
  ];

  useEffect(() => {
    if (readingArticle) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [readingArticle]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!readingArticle) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length, readingArticle]);

  const t = {
    zh: {
      title: "嗑学",
      subtitle: "国际关系性动力学与浪漫修辞研究期刊",
      nav: ["当前期刊", "往期回顾", "投稿须知", "关于我们"],
      sections: { mostRead: "高频引用", collections: "研究专题", metrics: "期刊指标", editors: "编辑精选" },
      tags: ["国产小说", "国产动画", "国产漫画", "国产游戏", "欧美圈", "日产游戏", "体育圈", "主播"],
      footer: "© 2024 嗑学出版集团。保留所有权利。仅供学术交流使用。"
    },
    en: {
      title: "CPology",
      subtitle: "Journal of Fan Affiliation & Relational Dynamics",
      nav: ["Current Issue", "Archive", "Submission", "About"],
      sections: { mostRead: "Most Cited", collections: "Collections", metrics: "Journal Metrics", editors: "Editors' Choice" },
      tags: ["CN Novels", "CN Animation", "CN Comics", "CN Games", "Western Fandom", "JP Games", "Sports", "Streamers"],
      footer: "© 2024 CPology Publishing Group. All rights reserved. For academic purposes only."
    }
  };

  const current = t[lang];
  const activeSlide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-red-100">
      
      {/* Enhanced Sidebar/Menu Overlay */}
      <div className={`fixed inset-0 z-[100] transition-all duration-500 ${isMenuOpen ? 'visible' : 'invisible'}`}>
        <div 
          className={`absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} 
          onClick={() => setIsMenuOpen(false)} 
        />
        <div className={`absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-out p-8 flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-3xl font-black text-red-700 italic">CPology.</h1>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={28} />
            </button>
          </div>
          
          <nav className="flex flex-col gap-4">
            {current.nav.map((item, i) => (
              <a 
                key={item} 
                href="#" 
                style={{ transitionDelay: `${i * 100}ms` }}
                className={`text-2xl font-bold uppercase tracking-tight hover:text-red-700 transition-all ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="mt-auto border-t pt-8">
            <p className="text-xs font-bold text-gray-400 uppercase mb-4 tracking-widest">Connect with us</p>
            <div className="flex gap-4">
              <Mail className="text-slate-400 hover:text-red-700 cursor-pointer" size={20} />
              <Share2 className="text-slate-400 hover:text-red-700 cursor-pointer" size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Reading Modal (Article Content View) */}
      {readingArticle && (
        <div className="fixed inset-0 z-[150] bg-white overflow-y-auto animate-in fade-in zoom-in-95 duration-300">
          <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b z-10 px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <FileText className="text-red-700" size={20} />
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Academic Viewport</span>
            </div>
            <div className="flex items-center gap-6">
              <button className="hidden sm:flex items-center gap-2 text-xs font-bold hover:text-red-700"><Printer size={16}/> PRINT</button>
              <button className="hidden sm:flex items-center gap-2 text-xs font-bold hover:text-red-700"><Share2 size={16}/> CITE</button>
              <button onClick={() => setReadingArticle(null)} className="p-2 hover:bg-gray-100 rounded-full transition-colors"><X size={24}/></button>
            </div>
          </header>

          <article className="max-w-3xl mx-auto px-6 py-16">
            <div className="mb-12">
              <span className="text-red-700 font-bold uppercase tracking-widest text-xs mb-4 block underline decoration-2 underline-offset-4">{readingArticle.tag[lang]}</span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-6">{readingArticle.title[lang]}</h1>
              <div className="flex items-center gap-4 text-sm font-medium text-slate-500 italic">
                <span>By {readingArticle.author}</span>
                <span>•</span>
                <span>Published Dec 2024</span>
                <span>•</span>
                <span className="flex items-center gap-1"><BookOpen size={14}/> 12 min read</span>
              </div>
            </div>

            <div 
              className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-lg font-serif"
              dangerouslySetInnerHTML={{ __html: readingArticle.content?.[lang] || "内容加载中..." }}
            />
            
            <div className="mt-20 pt-10 border-t border-gray-100 flex justify-between items-center">
               <div className="flex gap-2">
                 <button className="px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded uppercase">Download PDF</button>
                 <button className="px-4 py-2 border border-slate-200 text-xs font-bold rounded uppercase hover:bg-gray-50">Support Author</button>
               </div>
               <button onClick={() => setReadingArticle(null)} className="text-sm font-bold text-red-700">BACK TO JOURNAL</button>
            </div>
          </article>
        </div>
      )}

      {/* Top Utility Bar */}
      <div className="border-b border-gray-200 py-2 bg-gray-50 text-[10px] md:text-xs font-medium tracking-wider">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-4 font-bold">
            <span className="hover:text-red-700 cursor-pointer uppercase tracking-tighter">Librarians</span>
            <span className="hover:text-red-700 cursor-pointer uppercase tracking-tighter">Authors</span>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
              className="flex items-center gap-1 hover:text-red-700 transition-colors font-bold"
            >
              <Globe size={12} />
              {lang === 'zh' ? 'ENGLISH' : '中文版'}
            </button>
            <span className="cursor-pointer font-bold uppercase">Sign In</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 md:h-20 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <h1 className="text-3xl md:text-4xl font-black tracking-tighter text-red-700 italic">
              {current.title}<span className="text-slate-400 not-italic font-light">.</span>
            </h1>
            <nav className="hidden lg:flex gap-6 text-sm font-bold uppercase tracking-tight">
              {current.nav.map(item => (
                <a key={item} href="#" className="hover:text-red-700 transition-colors">{item}</a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-md transition-colors" onClick={() => setIsMenuOpen(true)}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-8">
            <div className="relative group mb-12">
              <div className="border-b-4 border-red-700 mb-6 inline-block pr-8 py-1">
                <span className="text-xs font-black uppercase tracking-widest text-red-700">
                  {activeSlide.category[lang]}
                </span>
              </div>
              
              <div 
                className="relative overflow-hidden rounded-sm bg-gray-100 aspect-[16/9] mb-8 cursor-pointer group/image"
                onClick={() => setReadingArticle(activeSlide)}
              >
                {slides.map((slide, index) => (
                  <div 
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                  >
                    <img 
                      src={slide.image} 
                      alt={slide.title[lang]}
                      className="w-full h-full object-cover group-hover/image:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                  </div>
                ))}

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity bg-black/20 backdrop-blur-[2px]">
                   <button className="bg-white text-slate-900 font-bold px-6 py-3 rounded-full flex items-center gap-2 transform translate-y-4 group-hover/image:translate-y-0 transition-transform">
                     <BookOpen size={18} /> READ FULL ARTICLE
                   </button>
                </div>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {slides.map((_, i) => (
                    <button key={i} onClick={(e) => { e.stopPropagation(); setCurrentSlide(i); }} className={`w-1.5 h-1.5 rounded-full transition-all ${i === currentSlide ? 'bg-red-700 w-6' : 'bg-white/50'}`} />
                  ))}
                </div>
              </div>

              <article 
                className="animate-in fade-in slide-in-from-bottom-2 duration-500 cursor-pointer"
                onClick={() => setReadingArticle(activeSlide)}
              >
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 leading-tight hover:text-red-700 transition-colors">
                  {activeSlide.title[lang]}
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed italic border-l-2 border-gray-200 pl-4">
                  {activeSlide.desc[lang]}
                </p>
                <div className="flex items-center gap-4 text-sm font-bold italic">
                  <span>By {activeSlide.author}</span>
                  <span className="text-gray-300">|</span>
                  <span className="text-red-700 font-bold uppercase tracking-widest">{activeSlide.tag[lang]}</span>
                </div>
              </article>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-200 pt-10">
              {[
                { tag: "Technical Report", title: lang === 'zh' ? "基于语义识别的‘同人话术’演变分析" : "Linguistic Evolution of Fan Lexicons" },
                { tag: "Case Analysis", title: lang === 'zh' ? "国产手游中的‘非典型’官方卖麸行为研究" : "Atypical Fanservice in Domestic Mobile Games" }
              ].map((item, i) => (
                <div key={i} className="group cursor-pointer p-4 hover:bg-gray-50 transition-colors border-transparent border rounded">
                  <span className="text-[10px] font-bold text-red-700 uppercase mb-2 block tracking-widest">{item.tag}</span>
                  <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-red-700 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 line-clamp-2">
                    {lang === 'zh' ? '本项研究关注了创作者在平台机制变迁下的生存现状...' : 'This study focuses on the survival of creators under changing platform policies...'}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-12">
            <div className="bg-slate-900 text-white p-8 rounded-sm shadow-xl border-l-8 border-red-700 transform hover:-rotate-1 transition-transform">
                <h3 className="text-2xl font-serif mb-2 italic tracking-tight">{lang === 'zh' ? '嗑学期刊' : 'CPology Journal'}</h3>
                <div className="flex items-center gap-2 text-xs text-red-400 font-bold mb-6 uppercase tracking-widest">
                  <BarChart3 size={14} />
                  Impact Factor: 69.420
                </div>
                <button className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-4 flex items-center justify-center gap-2 transition-all">
                  <Send size={16} /> SUBMIT MANUSCRIPT
                </button>
            </div>

            <section>
              <h4 className="border-b-2 border-slate-900 pb-2 text-sm font-black uppercase mb-6 tracking-wider flex items-center justify-between">
                {current.sections.mostRead}
                <TrendingUp size={16} className="text-red-700" />
              </h4>
              <div className="space-y-6">
                {[
                  { n: 1, t: lang === 'zh' ? "关于‘火葬场’设定的心理补偿机制研究" : "Psychological Compensation in 'Crematorium' Tropes", cite: "1.2k" },
                  { n: 2, t: lang === 'zh' ? "论‘破镜重圆’在长篇连载中的结构性作用" : "Structural Roles of Reconciliation in Serials", cite: "980" }
                ].map((item) => (
                  <div key={item.n} className="flex gap-4 group cursor-pointer hover:bg-gray-50 p-2 -m-2 rounded transition-colors">
                    <span className="text-3xl font-serif text-gray-200 group-hover:text-red-700 transition-colors font-bold leading-none">{item.n}</span>
                    <div>
                      <p className="text-sm font-bold font-serif group-hover:text-red-700 transition-colors leading-snug mb-1">{item.t}</p>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Citations: {item.cite}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gray-50 p-6 border border-gray-100">
              <h4 className="text-sm font-black uppercase mb-6 tracking-wider flex items-center gap-2">
                <BookOpen size={16} className="text-red-700" />
                {current.sections.collections}
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {current.tags.map(tag => (
                  <a key={tag} href="#" className="flex justify-between items-center p-2 text-[11px] font-bold text-slate-600 hover:bg-white hover:text-red-700 border border-transparent hover:border-gray-200 transition-all rounded-sm uppercase tracking-tighter">
                    {tag}
                    <ChevronDown size={12} className="-rotate-90" />
                  </a>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </main>

      <footer className="bg-slate-900 text-white mt-20 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-3xl font-black text-red-700 mb-4 tracking-tighter italic">{current.title}</h1>
            <p className="text-slate-400 mb-8 font-medium italic">{current.subtitle}</p>
            <p className="text-[11px] text-slate-500">{current.footer}</p>
        </div>
      </footer>
    </div>
  );
};

export default App;