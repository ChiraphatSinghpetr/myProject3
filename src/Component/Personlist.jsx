import { useState } from 'react'
import male from '../assets/men-svgrepo-com (1).svg'
import female from '../assets/women-svgrepo-com (1).svg'

const members = [
  { id: 1, name: 'Chiraphat', gender: 'male', age: 20, role: 'ผู้ดูแลเว็บไซต์', color: 'lavender' },
  { id: 2, name: 'Toey', gender: 'male', age: 19, role: 'สมาชิกทีม', color: 'peach' },
  { id: 3, name: 'Somphing', gender: 'female', age: 18, role: 'สมาชิกทีม', color: 'mint' },
]

function Personlist() {
  const [hide, setHide] = useState(false)
  const [query, setQuery] = useState('')
  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(query.trim().toLowerCase()),
  )

  return (
    <section className="content-page members-page">
      <div className="page-heading member-heading">
        <span className="eyebrow"><span className="eyebrow-dot" /> THE PEOPLE</span>
        <h1>สมาชิก<span>ของเรา</span></h1>
        <p>ทำความรู้จักกับคนที่ร่วมสร้างและเรียนรู้ไปด้วยกัน</p>
      </div>

      <div className="member-toolbar">
        <div className="member-count"><strong>03</strong><span>สมาชิกทั้งหมด</span></div>
        <label className="search-box">
          <span aria-hidden="true">⌕</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="ค้นหาสมาชิก..."
            aria-label="ค้นหาสมาชิก"
          />
        </label>
        <button className="button button-outline" onClick={() => setHide((current) => !current)}>
          {hide ? 'แสดงสมาชิก' : 'ซ่อนสมาชิก'}
          <span aria-hidden="true">{hide ? '＋' : '−'}</span>
        </button>
      </div>

      {!hide && (
        <div className="member-grid">
          {filteredMembers.map((member, index) => (
            <article className="member-card" key={member.id}>
              <div className={`member-card-art ${member.color}`}>
                <span className="member-index">0{index + 1} / 03</span>
                <div className="member-avatar">
                  <img
                    src={member.gender === 'male' ? male : female}
                    alt=""
                    width="72"
                    height="72"
                  />
                </div>
                <span className="member-decor" aria-hidden="true">✦</span>
              </div>
              <div className="member-info">
                <div className="member-name-row">
                  <h2>{member.name}</h2>
                  <span className="member-arrow" aria-hidden="true">↗</span>
                </div>
                <p>{member.role}</p>
                <div className="member-meta">
                  <span>อายุ {member.age} ปี</span>
                  <span className="member-dot" />
                  <span>{member.gender === 'male' ? 'ชาย' : 'หญิง'}</span>
                </div>
              </div>
            </article>
          ))}
          {filteredMembers.length === 0 && (
            <p className="empty-state">ไม่พบสมาชิกที่ตรงกับ “{query}”</p>
          )}
        </div>
      )}
      {hide && <p className="hidden-members">ซ่อนรายชื่อสมาชิกแล้ว</p>}
    </section>
  )
}

export default Personlist
