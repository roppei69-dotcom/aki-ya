// src/app/page.tsx
export default function Home() {
  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "48px 24px" }}>
      <h1 style={{ fontSize: 40, lineHeight: 1.2, marginBottom: 16 }}>
        空き家の「もったいない」を動かす
      </h1>
      <p style={{ fontSize: 18, opacity: 0.8, marginBottom: 24 }}>
        aki-ya.net は、空き家の活用相談からテナント転用までをワンストップで伴走します。
        京都発、現場経験にもとづく実装力で、使われていない空間に新しい使い道を。
      </p>
      <a
        href="mailto:info@aki-ya.net"
        style={{
          display: "inline-block",
          padding: "12px 20px",
          borderRadius: 8,
          border: "1px solid #111",
          textDecoration: "none",
        }}
      >
        まずはメールで相談する
      </a>
      <section style={{ marginTop: 48 }}>
        <h2>できること</h2>
        <ul>
          <li>空き家の現状ヒアリング（無料）</li>
          <li>活用アイデアの提案（テナント・売却以外も）</li>
          <li>工事が必要な場合の設計・施工までの一貫支援</li>
        </ul>
      </section>
    </main>
  );
}
