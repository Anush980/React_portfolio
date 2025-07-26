import './socialLinks.css';

const defaultLinks = [
  {
    href: 'https://www.facebook.com/Anush232',
    iconClass: 'fab fa-facebook',
    name: 'Facebook',
  },
  {
    href: 'https://www.instagram.com/_anush232',
    iconClass: 'fab fa-instagram',
    name: 'Instagram',
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
}) => {
  return (
    <div className={`socialLinks ${align} ${direction}`}>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          aria-label={link.name}
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
