import type { Metadata } from 'next';
import {
  ArrowLeft,
  BriefcaseBusiness,
  CheckCircle2,
  Gamepad2,
  Palette,
  UsersRound,
} from 'lucide-react';

import { ContactLinks } from '../contact-links';

export const metadata: Metadata = {
  title: '立即聯繫｜梧銘 woomin',
  description:
    '查看客製化遊戲委託指南，並透過 Facebook、Instagram、Threads 或 Email 聯繫梧銘。',
  openGraph: {
    title: '立即聯繫｜梧銘 woomin',
    description: '查看客製化遊戲委託指南，整理需求後與梧銘聯繫。',
  },
  twitter: {
    title: '立即聯繫｜梧銘 woomin',
    description: '查看客製化遊戲委託指南，整理需求後與梧銘聯繫。',
  },
};

const contactGuides = [
  {
    number: '01',
    title: '婚宴、銷售者、宣傳者',
    icon: BriefcaseBusiness,
    questions: [
      {
        label: '遊戲目的',
        copy: '你要這款遊戲的目的是什麼？',
      },
      {
        label: '遊戲玩法',
        copy: '有沒有指定的玩法？若有，則具體是什麼？',
      },
      {
        label: '必要需求',
        copy: '在這款遊戲當中，有什麼是必備的？若提前商議明確目標，則最後成品未達標時可取消訂單退還訂金。',
      },
    ],
  },
  {
    number: '02',
    title: '學生、繪師、美術、企劃',
    icon: Palette,
    questions: [
      {
        label: '提供素材',
        copy: '需累積作品集者，你準備提供什麼樣的素材在遊戲中（美術素材、遊戲企劃或其他類型）？',
      },
      {
        label: '遊戲玩法',
        copy: '有沒有指定的玩法？若有，則具體是什麼？',
      },
      {
        label: '必要需求',
        copy: '在這款遊戲當中，有什麼是必備的？若提前商議明確目標，則最後成品未達標時可取消訂單退還訂金。',
      },
    ],
  },
  {
    number: '03',
    title: '玩家',
    icon: UsersRound,
    questions: [
      {
        label: '遊戲目的',
        copy: '你要這款遊戲的目的是什麼？',
      },
      {
        label: '遊戲玩法',
        copy: '有沒有指定的玩法？若有，則具體是什麼？',
      },
      {
        label: '必要需求',
        copy: '在這款遊戲當中，有什麼是必備的？若提前商議明確目標，則最後成品未達標時可取消訂單退還訂金。',
      },
    ],
  },
];

export default function ContactPage() {
  return (
    <main className="site-shell contact-page">
      <div className="pixel-grid pixel-grid-left" aria-hidden="true" />
      <div className="pixel-grid pixel-grid-right" aria-hidden="true" />

      <header className="contact-hero wrap">
        <a className="back-link" href="/">
          <ArrowLeft aria-hidden="true" size={18} />
          返回首頁
        </a>
        <div className="contact-title-block">
          <span className="eyebrow" aria-hidden="true">
            <Gamepad2 size={18} strokeWidth={2.2} />
          </span>
          <p className="contact-kicker">CONTACT WOOMIN</p>
          <h1>立即聯繫</h1>
          <p>
            先選擇你的需求類型，再透過方便的平台與我聯繫。最好使用多個平台聯繫，較不會遺漏訊息。
          </p>
        </div>
      </header>

      <div className="wrap contact-content">
        <section className="section-card contact-direct">
          <div className="contact-section-heading">
            <span>01</span>
            <div>
              <p>DIRECT CONTACT</p>
              <h2>直接聯繫</h2>
            </div>
          </div>
          <ContactLinks display="cards" />
        </section>

        <section className="section-card contact-guide">
          <div className="contact-section-heading">
            <span>02</span>
            <div>
              <p>CONTACT GUIDE</p>
              <h2>聯繫指南</h2>
            </div>
          </div>
          <p className="guide-lead">
            如果還沒有明確方向，可以按照你的類型回答以下問題，再把答案傳給我。
          </p>

          <div className="guide-grid">
            {contactGuides.map(({ number, title, icon: Icon, questions }) => (
              <article className="guide-card" key={number}>
                <div className="guide-card-title">
                  <span>{number}</span>
                  <Icon aria-hidden="true" />
                </div>
                <h3>（{title}）</h3>
                <ul>
                  {questions.map(({ label, copy }) => (
                    <li key={label}>
                      <CheckCircle2 aria-hidden="true" />
                      <p>
                        <strong>{label}：</strong>
                        {copy}
                      </p>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
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
