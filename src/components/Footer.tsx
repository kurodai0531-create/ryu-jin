const links = [
  { label: "コンセプト", href: "#concept" },
  { label: "メニュー", href: "#menu" },
  { label: "ギャラリー", href: "#gallery" },
  { label: "スタッフ", href: "#staff" },
  { label: "お知らせ", href: "#news" },
  { label: "アクセス", href: "#access" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0806] border-t border-[#2e2820] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-12">
          <div>
            <p className="text-[#c9a96e]/40 text-[10px] tracking-[0.5em] mb-2">
              MENSHO RYUJIN
            </p>
            <p className="text-2xl font-bold text-[#ede8de] tracking-[0.2em] mb-4">
              麺匠 龍神
            </p>
            <p className="text-[#9a9080] text-[11px] tracking-widest leading-6">
              〒190-0012 東京都立川市曙町2-14-8 龍神ビル1F｜JR立川駅 北口より徒歩3分
            </p>
            <a href="tel:03-0000-0000" className="text-[#9a9080] text-[11px] tracking-widest hover:text-[#c9a96e] transition-colors">
              TEL: 03-0000-0000
            </a>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#9a9080] text-xs tracking-widest hover:text-[#c9a96e] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="h-px bg-[#2e2820] mb-8" />

        <div className="flex justify-center text-[#9a9080] text-[11px] tracking-widest">
          <p>© 2026 麺匠 龍神. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
