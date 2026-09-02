import {
  Ban,
  Copyright,
  CreditCard,
  ExternalLink,
  Gamepad2,
  Library,
  PackageCheck,
  Sparkles,
} from 'lucide-react';

const navigation = [
  { label: '誰適合找我？', href: '#audience' },
  { label: '為什麼選擇我？', href: '#why' },
  { label: '遊戲範例', href: '#games' },
  { label: '我不做的遊戲', href: '#limits' },
  { label: '著作權相關', href: '#copyright' },
  { label: '付費相關', href: '#payment' },
  { label: '上架與交付', href: '#delivery' },
];

const games = [
  'https://woominytr.itch.io/critical',
  'https://woominytr.itch.io/little-sharpshooter',
  'https://woominytr.itch.io/ink-dive-runner',
];

export default function Home() {
  return (
    <main id="top" className="site-shell">
      <div className="pixel-grid pixel-grid-left" aria-hidden="true" />
      <div className="pixel-grid pixel-grid-right" aria-hidden="true" />

      <header className="hero wrap">
        <div className="hero-copy">
          <span className="eyebrow" aria-hidden="true">
            <Gamepad2 size={18} strokeWidth={2.2} />
          </span>
          <h1>你好，我是遊戲製作師梧銘woomin。</h1>
          <p>我正在進行面向大眾的客製化遊戲開發，讓遊戲成為日常生活的工具之一。</p>
          <p>簡而言之，聯絡我，讓我為你量身打造一款遊戲。</p>
        </div>

        <div className="hero-mark" aria-hidden="true">
          <div className="mark-frame">
            <img src="/brand-avatar.png" alt="" />
          </div>
        </div>
      </header>

      <nav className="jump-nav wrap" aria-label="頁面段落導覽">
        {navigation.map((item, index) => (
          <a key={item.href} href={item.href}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="wrap content-stack">
        <section id="audience" className="section-card section-wide">
          <SectionHeading icon={<Sparkles />} title="誰適合找我？" />
          <div className="audience-grid">
            <p>（婚宴、銷售者、宣傳者）如果你想分享些什麼，可以選擇用遊戲的形式分享給他人，只需一個連結，便能利用遊戲分享世界：</p>
            <p>（學生、繪師、美術、企劃）如果你需要一個遊戲，無論是學生、遊戲美術、遊戲企劃，需要累積作品集的所有人，或是你只是單純的想要自己的角色出現在遊戲中，都歡迎找我，在製作過程中，我也會利用我的經驗告訴你該如何完成這個作品：</p>
            <p>（玩家）如果你只是想要一個屬於自己的遊戲，或有一些遊戲想法但無法實現，甚至是單純的想搞怪，把朋友的照片放到遊戲中，也歡迎來找我聊聊：</p>
          </div>
        </section>

        <section id="why" className="section-card section-wide">
          <SectionHeading icon={<Gamepad2 />} title="為什麼選擇我？" />
          <div className="prose-columns">
            <p>對，我利用AI輔助我完成絕大部分的工作，但我能確定，這不是一個什麼人用AI都能做的工作。</p>
            <p>一款常見的遊戲需要經過大量的打磨與創作，才能達到優秀甚至完美的品質，如果量化成數字，我想大概是九十分以上。但大部分人想只靠AI做出一款遊戲，可能連六十分都達不到，而我能做的是穩定生產七十甚至八十分左右的遊戲，在非專業場景來說通常已經足夠了，如果你想看看這個分數代表著什麼，可以往下看看我做的遊戲範例。</p>
            <p className="price-line">在那樣的委託品質下，報價大致是800至1600台幣左右。</p>
            <p>如果找專業外包團隊做一款遊戲的話，我想報價絕對不會低於五位數，甚至稍好的都要六位數以上。</p>
            <p>我知道這麼橫向對比對於遊戲製作師是不公平的，因為我們並不在一個賽道上，因此，我的方案非常適合預算有限、重視製作速度，並希望快速將想法變成遊戲的人。</p>
          </div>
        </section>

        <section id="games" className="section-card section-wide games-section">
          <SectionHeading icon={<Library />} title="遊戲範例：" />
          <div className="game-links">
            {games.map((game, index) => (
              <a key={game} href={game} target="_blank" rel="noreferrer">
                <span className="game-number">0{index + 1}</span>
                <span>{game}</span>
                <ExternalLink aria-hidden="true" size={19} />
              </a>
            ))}
          </div>
        </section>

        <div className="two-column-grid">
          <section id="limits" className="section-card">
            <SectionHeading icon={<Ban />} title="我不做的遊戲：" />
            <p>當然，違法的我不做，除此之外，我不做多人遊戲與線上遊戲，因為有其他的開發成本，而這個成本不是這個價位的服務能有的，當然，價錢到了一樣能商量，但我不建議找我做。</p>
          </section>

          <section id="copyright" className="section-card">
            <SectionHeading icon={<Copyright />} title="著作權相關：" />
            <p>我仍保有遊戲的著作權，但允許作品商用、修改、轉售、買斷，並且無須署名，不得再授權。</p>
          </section>
        </div>

        <section id="payment" className="section-card section-wide">
          <SectionHeading icon={<CreditCard />} title="付費相關：" />
          <p>聯絡我後，我會與你敲定遊戲內容，並提出完整遊戲方案與定價，在製作前先付一半訂金，交付項目後支付尾款，可提前商議必須交付的遊戲內容，若達不到要求則退還訂金。</p>
        </section>

        <section id="delivery" className="section-card section-wide delivery-card">
          <SectionHeading icon={<PackageCheck />} title="遊戲成品上架與交付相關：" />
          <p>遊戲成品在訂金支付起14天內交付，若要上架遊戲，平台審核時間不計入交付時限，在製作期間也會不斷提供進度，製作完成後提供兩次局部修正修改次數，若遊戲一個月內出現Bug（字體跑掉、遊戲錯誤），則無條件修改好。電腦遊戲能給遊戲檔；手機遊戲能給apk安裝檔；也都可以上傳到itch.io線上遊玩（手機電腦皆可）；如果要上傳到google play商店（手機遊戲），需要自行找12名測試者連續參與封閉測試14天，之後才能申請正式發布。；如果要上傳到steam（電腦遊戲），需要自備一百美金（上架費用）。</p>
        </section>
      </div>

      <footer className="footer" aria-hidden="true">
        <div className="wrap footer-track">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </footer>
    </main>
  );
}

function SectionHeading({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="section-heading">
      <span aria-hidden="true">{icon}</span>
      <h2>{title}</h2>
    </div>
  );
}
