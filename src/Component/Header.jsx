const navigation = [
  { id: 'home', label: 'Home', icon: <><path d="m3 10 9-7 9 7" /><path d="M5 9v11h14V9M9 20v-6h6v6" /></> },
  { id: 'about', label: 'About', icon: <><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></> },
  { id: 'members', label: 'Member', icon: <><circle cx="9" cy="8" r="3" /><path d="M3 19a6 6 0 0 1 12 0M16 5.5a3 3 0 0 1 0 5.8M18 14a5 5 0 0 1 3 5" /></> },
]

function NavigationItems({ activePage, onNavigate }) {
  return navigation.map((item) => (
    <button
      key={item.id}
      className={activePage === item.id ? 'nav-link active' : 'nav-link'}
      onClick={() => onNavigate(item.id)}
      aria-current={activePage === item.id ? 'page' : undefined}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {item.icon}
      </svg>
      <span>{item.label}</span>
    </button>
  ))
}

function Header({ activePage, onNavigate }) {
  return (
    <>
      <header className="site-header">
        <button className="brand" onClick={() => onNavigate('home')} aria-label="กลับหน้า Home">
          <span className="brand-mark">C</span>
          <span>chiraphat<span className="brand-dot">.</span>si</span>
        </button>
        <nav className="main-nav" aria-label="เมนูหลัก">
          <NavigationItems activePage={activePage} onNavigate={onNavigate} />
        </nav>
        <button className="header-contact" onClick={() => onNavigate('about')}>
          รู้จักเรา <span aria-hidden="true">↗</span>
        </button>
      </header>
      <nav className="mobile-nav" aria-label="เมนูหลัก">
        <NavigationItems activePage={activePage} onNavigate={onNavigate} />
      </nav>
    </>
  )
}

export default Header
