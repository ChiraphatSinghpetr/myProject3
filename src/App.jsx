import { useState } from 'react'
import './App.css'
import Header from './Component/Header'
import Personlist from './Component/Personlist'

function App() {
  const [page, setPage] = useState('home')
  const [age, setAge] = useState(20)

  return (
    <div className="site-shell">
      <Header activePage={page} onNavigate={setPage} />

      <main>
        {page === 'home' && (
          <>
            <section className="hero-section">
              <div className="hero-copy">
                <span className="eyebrow"><span className="eyebrow-dot" /> ยินดีต้อนรับสู่พื้นที่ของเรา</span>
                <h1>เรียนรู้ เติบโต<br /><span>และสร้างสรรค์</span>ไปด้วยกัน</h1>
                <p className="hero-description">
                  พื้นที่เล็ก ๆ สำหรับแนะนำตัว เล่าเรื่องราวของเรา
                  และทำความรู้จักกับสมาชิกทุกคน
                </p>
                <div className="hero-actions">
                  <button className="button button-primary" onClick={() => setPage('members')}>
                    ทำความรู้จักสมาชิก <span aria-hidden="true">→</span>
                  </button>
                  <button className="button button-quiet" onClick={() => setPage('about')}>
                    เกี่ยวกับเรา
                  </button>
                </div>
                <div className="hero-note">
                  <div className="avatar-stack" aria-hidden="true">
                    <span>ช</span><span>ต</span><span>ส</span>
                  </div>
                  <span>ทีมเล็ก ๆ ที่พร้อมเติบโตไปด้วยกัน</span>
                </div>
              </div>

              <div className="hero-card">
                <div className="card-orbit orbit-one" />
                <div className="card-orbit orbit-two" />
                <div className="profile-card">
                  <div className="profile-topline">
                    <span className="status-pill"><span /> แนะนำตัว</span>
                    <span className="sparkle" aria-hidden="true">✦</span>
                  </div>
                  <div className="profile-avatar">C</div>
                  <p className="profile-label">สวัสดีครับ ผมชื่อ</p>
                  <h2>Chiraphat</h2>
                  <p className="profile-handle">@chiraphat.si</p>
                  <div className="profile-divider" />
                  <div className="age-row">
                    <div>
                      <span className="age-caption">อายุ</span>
                      <strong>{age} <small>ปี</small></strong>
                    </div>
                    <div className="age-controls" aria-label="ปรับอายุ">
                      <button aria-label="เพิ่มอายุ" onClick={() => setAge((currentAge) => currentAge + 1)}>+</button>
                      <button aria-label="ลดอายุ" disabled={age <= 0} onClick={() => setAge((currentAge) => Math.max(0, currentAge - 1))}>−</button>
                      <button className="reset-age" aria-label="รีเซ็ตอายุ" onClick={() => setAge(20)}>รีเซ็ต</button>
                    </div>
                  </div>
                </div>
                <div className="floating-tag"><span>✦</span> เติบโตทุกวัน</div>
                <div className="floating-number"><strong>03</strong><span>สมาชิก</span></div>
              </div>
            </section>

            <section className="home-highlights" aria-label="ภาพรวมเว็บไซต์">
              <article className="highlight-item">
                <span className="highlight-number">01</span>
                <div><h2>พื้นที่ของเรา</h2><p>รวมเรื่องราวและเป้าหมายของทีม</p></div>
                <span className="highlight-arrow" aria-hidden="true">↗</span>
              </article>
              <article className="highlight-item">
                <span className="highlight-number">02</span>
                <div><h2>สมาชิกของเรา</h2><p>พบกับคนที่อยู่เบื้องหลังผลงาน</p></div>
                <span className="highlight-arrow" aria-hidden="true">↗</span>
              </article>
              <article className="highlight-item">
                <span className="highlight-number">03</span>
                <div><h2>เติบโตไปด้วยกัน</h2><p>ทุกไอเดียเริ่มต้นจากการลงมือทำ</p></div>
                <span className="highlight-arrow" aria-hidden="true">↗</span>
              </article>
            </section>
          </>
        )}

        {page === 'about' && (
          <section className="content-page about-page">
            <div className="page-heading">
              <span className="eyebrow"><span className="eyebrow-dot" /> OUR STORY</span>
              <h1>เกี่ยวกับ<span>เรา</span></h1>
              <p>พื้นที่สำหรับเรียนรู้ แบ่งปันไอเดีย และเติบโตไปพร้อมกัน</p>
            </div>
            <div className="about-layout">
              <div className="about-art">
                <div className="about-art-circle"><span>01</span><strong>เริ่มต้น<br />จากไอเดีย</strong></div>
                <span className="about-art-caption">SMALL TEAM · BIG IDEAS</span>
              </div>
              <div className="about-copy">
                <span className="section-kicker">OUR PURPOSE</span>
                <h2>ทุกการเรียนรู้<br />เริ่มได้จากก้าวเล็ก ๆ</h2>
                <p>
                  เราเป็นกลุ่มคนที่สนุกกับการเรียนรู้และการสร้างสรรค์เว็บไซต์
                  หน้านี้เป็นพื้นที่รวบรวมตัวตนของเรา ตั้งแต่เรื่องราวของทีม
                  ไปจนถึงสมาชิกแต่ละคน
                </p>
                <p>
                  เป้าหมายของเราคือพัฒนาทักษะ แบ่งปันสิ่งที่ได้เรียนรู้
                  และสร้างผลงานที่ดีขึ้นไปด้วยกันในทุกวัน
                </p>
                <div className="about-values">
                  <span><i>01</i> เรียนรู้อย่างต่อเนื่อง</span>
                  <span><i>02</i> เติบโตไปด้วยกัน</span>
                  <span><i>03</i> ลงมือทำอย่างสร้างสรรค์</span>
                </div>
                <button className="button button-primary" onClick={() => setPage('members')}>
                  รู้จักสมาชิกของเรา <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </section>
        )}

        {page === 'members' && <Personlist />}
      </main>

      <footer className="site-footer">
        <span className="footer-brand"><span className="brand-mark">C</span> chiraphat.si</span>
        <span>สร้างด้วยความตั้งใจ · 2026</span>
        <button onClick={() => { setPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
          กลับด้านบน ↑
        </button>
      </footer>
    </div>
  )
}

export default App
