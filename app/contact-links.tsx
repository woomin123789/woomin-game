import {
  AtSign,
  Camera,
  ExternalLink,
  Mail,
  MessageCircle,
} from 'lucide-react';

export const contactChannels = [
  {
    label: 'Facebook',
    detail: '梧銘 woomin',
    href: 'https://www.facebook.com/profile.php?id=100093949087216&locale=zh_TW',
    icon: MessageCircle,
    external: true,
  },
  {
    label: 'Instagram',
    detail: '@woomin_games',
    href: 'https://www.instagram.com/woomin_games/',
    icon: Camera,
    external: true,
  },
  {
    label: 'Threads',
    detail: '@woomin_games',
    href: 'https://www.threads.net/@woomin_games',
    icon: AtSign,
    external: true,
  },
  {
    label: 'Email',
    detail: 'woominytr@gmail.com',
    href: 'mailto:woominytr@gmail.com',
    icon: Mail,
    external: false,
  },
];

export function ContactLinks({
  display = 'compact',
}: {
  display?: 'compact' | 'cards';
}) {
  return (
    <nav
      className={`social-links social-links-${display}`}
      aria-label="梧銘的聯繫管道"
    >
      {contactChannels.map(({ label, detail, href, icon: Icon, external }) => (
        <a
          key={label}
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noreferrer' : undefined}
        >
          <Icon aria-hidden="true" size={display === 'cards' ? 24 : 19} />
          <span className="social-link-copy">
            <strong>{label}</strong>
            {display === 'cards' && <small>{detail}</small>}
          </span>
          <ExternalLink aria-hidden="true" size={15} />
        </a>
      ))}
    </nav>
  );
}
