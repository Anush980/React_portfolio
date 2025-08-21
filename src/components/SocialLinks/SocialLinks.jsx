import './SocialLinks.css';

const defaultLinks = [
  {
    href: 'https://www.facebook.com/Anush232',
    iconClass: 'fab fa-facebook',
    name: 'Facebook',
     
  },

  {
    href: 'https://wa.me/9779826999469?text=Hi',
    iconClass: 'fab fa-whatsapp',
    name: 'WhatsApp',
    // href: 'https://www.instagram.com/_anush232',
    // iconClass: 'fab fa-instagram',
    // name: 'Instagram',
  },
  {
    href: 'https://www.github.com/Anush980',
    iconClass: 'fab fa-github',
    name: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/anush232',
    iconClass: 'fab fa-linkedin',
    name: 'LinkedIn',
  },
];

const SocialLinks = ({
  links = defaultLinks,
  align = 'center',
  direction = 'row',
  iconSize = '1.7rem',
  variant = 'default', // 'default', 'home', or 'contact'
}) => {
  return (
    <div className={`social-links social-links--${variant} social-links--${align} social-links--${direction}`}>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          aria-label={link.name}
          className="social-links__link"
        >
          <i
            className={link.iconClass}
            style={{ fontSize: iconSize }}
            title={link.name}
          ></i>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;