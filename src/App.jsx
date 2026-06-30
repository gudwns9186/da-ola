import React, { useState, useEffect, useRef } from 'react'

function useInView(options = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); obs.disconnect() }
    }, { threshold: 0.15, ...options })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return [ref, inView]
}

const INGREDIENTS = [
  { name: 'ECF-Adeno', amount: '50,000 ppm', desc: '피부 탄력과 재생을 돕는 핵심 성분' },
  { name: 'Niacinamide', amount: '50,000 ppm', desc: '미백 및 모공 축소 효과' },
  { name: 'Panthenol', amount: '20,000 ppm', desc: '피부 장벽 강화 및 보습' },
  { name: 'Cica Water', amount: '619,000 ppm', desc: '진정 효과와 피부 회복력 향상' },
]

function Navbar({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid #F0EBE3' : 'none',
        transition: 'all 0.4s ease',
        padding: '0 40px',
        height: '70px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}
    >
      <nav style={{ display: 'flex', gap: '32px' }}>
        {['Story', 'Product', 'Ingredient'].map(item => (
          <a key={item} href={`#${item.toLowerCase()}`}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px', letterSpacing: '0.08em',
              color: scrolled ? '#1A1A1A' : '#1A1A1A',
              textDecoration: 'none', fontWeight: 400,
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.target.style.opacity = '0.5'}
            onMouseLeave={e => e.target.style.opacity = '1'}
          >
            {item.toUpperCase()}
          </a>
        ))}
      </nav>

      <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
        <img src="/logo.png" alt="da:ola" style={{ height: '28px', objectFit: 'contain' }} />
      </div>

      <a
        href="https://smartstore.naver.com/da-ola"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '12px', letterSpacing: '0.1em',
          color: '#1A1A1A', textDecoration: 'none',
          border: '1px solid #1A1A1A',
          padding: '8px 20px',
          transition: 'all 0.25s',
        }}
        onMouseEnter={e => { e.target.style.background = '#1A1A1A'; e.target.style.color = '#fff' }}
        onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#1A1A1A' }}
      >
        SHOP
      </a>
    </header>
  )
}

function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(125deg, #FDF5E8 0%, #F5DEB0 35%, #EAC878 65%, #D4A050 100%)',
        display: 'flex', alignItems: 'center',
        padding: '0 80px',
        position: 'relative', overflow: 'hidden',
      }}
    >
      {/* 왼쪽 위 부드러운 밝은 스팟 */}
      <div style={{
        position: 'absolute', top: '-15%', left: '-10%',
        width: '65%', height: '130%',
        background: 'radial-gradient(ellipse, rgba(255,245,210,0.7) 0%, transparent 60%)',
        pointerEvents: 'none', zIndex: 0,
      }} />
      {/* 오른쪽 아래 웜 글로우 */}
      <div style={{
        position: 'absolute', bottom: '-20%', right: '-5%',
        width: '55%', height: '90%',
        background: 'radial-gradient(ellipse, rgba(200,130,40,0.35) 0%, transparent 65%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      {/* 텍스트 */}
      <div style={{ flex: 1, zIndex: 3 }}>
        <p className="animate-fade-up" style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '11px', letterSpacing: '0.28em',
          color: '#7A4510', marginBottom: '20px', fontWeight: 600,
        }}>
          28 PEPTIDES COMPLEX
        </p>

        <h1 className="animate-fade-up delay-200" style={{
          fontFamily: '"Cormorant Garamond", Georgia, serif',
          fontSize: 'clamp(46px, 5.8vw, 86px)',
          fontWeight: 300, lineHeight: 1.1,
          color: '#2A1400', marginBottom: '28px',
          letterSpacing: '-0.01em',
        }}>
          Repair Complex<br />
          <em style={{ fontStyle: 'italic', fontWeight: 300 }}>Serum</em>
        </h1>

        <p className="animate-fade-up delay-400" style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '15px', lineHeight: 1.85,
          color: '#5C3510', maxWidth: '400px',
          marginBottom: '48px', fontWeight: 300,
        }}>
          28가지 펩타이드 복합물로 피부 본연의<br />
          재생력을 깨워 빛나는 피부로 거듭나세요.
        </p>

        <a
          className="animate-fade-up delay-600"
          href="#product"
          style={{
            display: 'inline-block',
            fontFamily: 'Inter, sans-serif',
            fontSize: '12px', letterSpacing: '0.15em',
            color: '#2A1400', textDecoration: 'none',
            border: '1px solid rgba(80,40,0,0.5)',
            padding: '15px 40px',
            background: 'rgba(255,240,200,0.4)',
            backdropFilter: 'blur(6px)',
            transition: 'all 0.3s',
          }}
          onMouseEnter={e => { e.target.style.background = 'rgba(42,20,0,0.8)'; e.target.style.color = '#FFE8A0'; e.target.style.borderColor = 'transparent' }}
          onMouseLeave={e => { e.target.style.background = 'rgba(255,240,200,0.4)'; e.target.style.color = '#2A1400'; e.target.style.borderColor = 'rgba(80,40,0,0.5)' }}
        >
          DISCOVER MORE
        </a>
      </div>

      {/* 제품 이미지 */}
      <div className="animate-float" style={{
        flex: 1.2, display: 'flex', justifyContent: 'center', alignItems: 'center',
        zIndex: 3, position: 'relative',
      }}>
        {/* 제품 뒤 빛 글로우 */}
        <div style={{
          position: 'absolute',
          width: '420px', height: '520px',
          background: 'radial-gradient(ellipse, rgba(255,220,130,0.5) 0%, rgba(220,160,50,0.2) 45%, transparent 70%)',
          filter: 'blur(30px)',
          zIndex: 0,
        }} />
        <img
          src="/serum-nobg.png"
          alt="da:ola Repair Complex Serum"
          style={{
            width: '100%', maxWidth: '780px',
            objectFit: 'contain',
            filter: [
              'drop-shadow(0 50px 60px rgba(100,50,0,0.3))',
              'drop-shadow(0 0 30px rgba(220,160,60,0.25))',
            ].join(' '),
            position: 'relative', zIndex: 2,
          }}
        />
      </div>
    </section>
  )
}

function ProductSection() {
  const [ref, inView] = useInView()
  return (
    <section id="product" ref={ref} style={{
      padding: '120px 80px',
      background: '#fff',
      display: 'flex', alignItems: 'center', gap: '80px',
    }}>
      <div style={{
        flex: 1,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(-40px)',
        transition: 'all 0.9s ease',
      }}>
        <img
          src="/serum-nobg.png"
          alt="da:ola Repair Complex Serum"
          style={{
            width: '100%', maxWidth: '500px',
            objectFit: 'contain',
            filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.08))',
          }}
        />
      </div>

      <div style={{
        flex: 1,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(40px)',
        transition: 'all 0.9s ease 0.2s',
      }}>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '11px', letterSpacing: '0.25em',
          color: '#B8742A', marginBottom: '20px', fontWeight: 500,
        }}>
          SIGNATURE PRODUCT
        </p>
        <h2 style={{
          fontFamily: '"Cormorant Garamond", Georgia, serif',
          fontSize: 'clamp(36px, 4vw, 58px)',
          fontWeight: 300, lineHeight: 1.2,
          color: '#1A1A1A', marginBottom: '24px',
        }}>
          Repair Complex<br />Serum
        </h2>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '14px', lineHeight: 1.9,
          color: '#6A6A6A', marginBottom: '40px',
          fontWeight: 300, maxWidth: '440px',
        }}>
          최첨단 28 Peptides Complex 기술로 설계된 da:ola 세럼은
          피부 깊숙이 침투하여 손상된 피부 장벽을 재건하고,
          탄력과 광채를 되찾아 드립니다. 50ml의 농축된 케어.
        </p>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '16px', maxWidth: '400px',
        }}>
          {[
            { label: 'Volume', value: '50ml / 1.69 fl.oz' },
            { label: 'Peptides', value: '28 Types' },
            { label: 'Key Complex', value: 'ECF-Adeno' },
            { label: 'Skin Type', value: 'All Types' },
          ].map(({ label, value }) => (
            <div key={label} style={{
              padding: '16px 20px',
              background: '#FAF8F5',
              borderLeft: '2px solid #B8742A',
            }}>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '10px', letterSpacing: '0.15em',
                color: '#999', marginBottom: '4px',
              }}>{label.toUpperCase()}</p>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px', fontWeight: 500, color: '#1A1A1A',
              }}>{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function StorySection() {
  const [ref, inView] = useInView()
  return (
    <section id="story" ref={ref} style={{
      padding: '140px 80px',
      background: '#FAF8F5',
      textAlign: 'center',
    }}>
      <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '11px', letterSpacing: '0.25em',
        color: '#B8742A', marginBottom: '24px', fontWeight: 500,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.8s ease',
      }}>
        OUR STORY
      </p>
      <h2 style={{
        fontFamily: '"Cormorant Garamond", Georgia, serif',
        fontSize: 'clamp(36px, 5vw, 68px)',
        fontWeight: 300, lineHeight: 1.2,
        color: '#1A1A1A', marginBottom: '32px',
        maxWidth: '800px', margin: '0 auto 32px',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.9s ease 0.15s',
      }}>
        Science meets<br />
        <em style={{ fontStyle: 'italic' }}>natural beauty</em>
      </h2>
      <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '15px', lineHeight: 2,
        color: '#6A6A6A', maxWidth: '600px',
        margin: '0 auto',
        fontWeight: 300,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.9s ease 0.3s',
      }}>
        da:ola는 피부 과학과 자연의 정수를 결합합니다.<br />
        28가지 펩타이드의 시너지로 피부 본연의 활력을 되살리고,<br />
        매일의 스킨케어를 특별한 리추얼로 만들어 드립니다.
      </p>
    </section>
  )
}

function IngredientSection() {
  const [ref, inView] = useInView()
  return (
    <section id="ingredient" ref={ref} style={{
      padding: '120px 80px',
      background: '#fff',
    }}>
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '11px', letterSpacing: '0.25em',
          color: '#B8742A', marginBottom: '16px', fontWeight: 500,
        }}>
          KEY INGREDIENTS
        </p>
        <h2 style={{
          fontFamily: '"Cormorant Garamond", Georgia, serif',
          fontSize: 'clamp(32px, 4vw, 54px)',
          fontWeight: 300, color: '#1A1A1A',
        }}>
          28 Peptides Complex
        </h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '2px',
        maxWidth: '1100px',
        margin: '0 auto',
      }}>
        {INGREDIENTS.map(({ name, amount, desc }, i) => (
          <div
            key={name}
            style={{
              padding: '48px 32px',
              background: i % 2 === 0 ? '#FAF8F5' : '#F5EDE0',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(40px)',
              transition: `all 0.7s ease ${i * 0.15}s`,
              cursor: 'default',
            }}
          >
            <p style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: '28px', fontWeight: 400,
              color: '#B8742A', marginBottom: '8px',
            }}>{amount}</p>
            <h3 style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px', fontWeight: 500,
              letterSpacing: '0.1em', color: '#1A1A1A',
              marginBottom: '16px', textTransform: 'uppercase',
            }}>{name}</h3>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px', lineHeight: 1.7,
              color: '#7A7A7A', fontWeight: 300,
            }}>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" style={{
      padding: '120px 80px',
      background: '#1A1A1A',
      textAlign: 'center',
    }}>
      <img src="/logo.png" alt="da:ola" style={{
        height: '32px', objectFit: 'contain',
        marginBottom: '40px',
        filter: 'invert(1)',
      }} />
      <h2 style={{
        fontFamily: '"Cormorant Garamond", Georgia, serif',
        fontSize: 'clamp(32px, 4vw, 56px)',
        fontWeight: 300, color: '#FAF8F5',
        marginBottom: '24px', lineHeight: 1.2,
      }}>
        Begin your ritual
      </h2>
      <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px', color: '#888', lineHeight: 1.8,
        marginBottom: '48px', fontWeight: 300,
      }}>
        da:ola와 함께 피부 변화를 경험하세요.
      </p>
      <a
        href="https://smartstore.naver.com/da-ola"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '13px', letterSpacing: '0.12em',
          color: '#1A1A1A', textDecoration: 'none',
          background: '#FAF8F5',
          padding: '16px 48px',
          display: 'inline-block',
          transition: 'background 0.3s',
        }}
        onMouseEnter={e => e.target.style.background = '#F5EDE0'}
        onMouseLeave={e => e.target.style.background = '#FAF8F5'}
      >
        SHOP NOW
      </a>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      {/* 링크 컬럼 영역 */}
      <div style={{
        background: '#F5F2EE',
        padding: '64px 80px 48px',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '40px',
      }}>
        {[
          {
            title: 'Customer Care',
            items: ['Mon – Fri  10:00 – 17:00', 'jeon@bridgej.vn'],
          },
          {
            title: 'Brand',
            items: ['Brand Story', 'Ingredients', 'Product'],
          },
          {
            title: 'Legal',
            items: ['이용약관', '개인정보처리방침'],
          },
          {
            title: 'Social',
            items: ['Instagram', 'Facebook', 'Youtube'],
          },
        ].map(({ title, items }) => (
          <div key={title}>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '12px', fontWeight: 600,
              letterSpacing: '0.05em', color: '#1A1A1A',
              marginBottom: '16px',
            }}>{title}</p>
            {items.map(item => (
              <p key={item} style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px', color: '#777',
                lineHeight: 2, fontWeight: 300,
              }}>{item}</p>
            ))}
          </div>
        ))}
      </div>

      {/* 회사 정보 영역 */}
      <div style={{
        background: '#EEEAE4',
        padding: '24px 80px',
        borderTop: '1px solid #DDD8D0',
      }}>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '11px', color: '#888',
          lineHeight: 2, fontWeight: 300,
          letterSpacing: '0.01em',
        }}>
          브릿지제이&nbsp;&nbsp;
          <span style={{ color: '#AAA', margin: '0 6px' }}>|</span>
          CEO 전형준&nbsp;&nbsp;
          <span style={{ color: '#AAA', margin: '0 6px' }}>|</span>
          Email&nbsp;
          <a href="mailto:jeon@bridgej.vn" style={{ color: '#888', textDecoration: 'underline' }}>
            jeon@bridgej.vn
          </a>
          <span style={{ color: '#AAA', margin: '0 6px' }}>|</span>
          사업자등록번호 692-12-02493&nbsp;&nbsp;
          <span style={{ color: '#AAA', margin: '0 6px' }}>|</span>
          통신판매업신고 제2026-서울서초-1765호
        </p>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '11px', color: '#AAA',
          marginTop: '6px', fontWeight: 300,
        }}>
          © 2026 da:ola by BridgeJ. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Navbar scrolled={scrolled} />
      <Hero />
      <ProductSection />
      <StorySection />
      <IngredientSection />
      <ContactSection />
      <Footer />
    </>
  )
}
