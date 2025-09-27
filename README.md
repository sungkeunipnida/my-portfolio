
# React Portfolio - sungkeun

개인 포트폴리오 웹사이트입니다. React, Vite, TailwindCSS를 사용하여 제작하였으며,  
프로필, 프로젝트, 연락처 정보를 반응형 디자인으로 제공합니다.

## 기능 (Features)
- 섹션: Hero / About / Projects / Contact / Footer
- TailwindCSS 기반 반응형 디자인
- 부드러운 스크롤 내비게이션
- 커스텀 파비콘 (PNG만 사용, JSON manifest 미사용)
- GoDaddy에서 구입한 도메인 + Vercel 배포
- Safari 브라우저 정책으로 파비콘은 사각형으로 표시됨

## 프로젝트 구조 (Project Structure)
```
src/
  components/
    Header.jsx
    Hero.jsx
    About.jsx
    Projects.jsx
    Contact.jsx
    Footer.jsx
  App.jsx
index.html
```

## 개발 참고 사항 (Development Notes)
- npm 사용 시 충돌 문제가 발생하여 **pnpm**을 사용했습니다.
- 주요 명령어:
  - `pnpm install`
  - `pnpm run dev`
  - `pnpm run build`

## 배포 (Deployment: Vercel + GoDaddy)
1. `pnpm run build` 실행  
2. GitHub에 푸시 후 Vercel과 연결  
3. Vercel 대시보드에서 Custom Domain 추가  
4. GoDaddy DNS에서 CNAME 또는 A 레코드를 Vercel로 설정  
5. SSL 인증서 자동 발급 → HTTPS 적용

## 개선 예정 (Future Improvements)
- iPhone에서 페이지 하단 흰색 공백 수정
- 스크롤 시 헤더가 콘텐츠 일부를 가리는 현상 수정

---

# English Version

This is a personal portfolio website built with React, Vite, and TailwindCSS.  
It provides profile, projects, and contact sections with a responsive layout.

## Features
- Sections: Hero / About / Projects / Contact / Footer
- Responsive design with TailwindCSS
- Smooth scroll navigation
- Custom favicon (PNG only, no JSON manifest)
- Domain purchased from GoDaddy, deployed on Vercel
- Safari shows favicon as square due to Apple policy

## Project Structure
```
src/
  components/
    Header.jsx
    Hero.jsx
    About.jsx
    Projects.jsx
    Contact.jsx
    Footer.jsx
  App.jsx
index.html
```

## Development Notes
- npm caused dependency conflicts, so **pnpm** is used.
- Main commands:
  - `pnpm install`
  - `pnpm run dev`
  - `pnpm run build`

## Deployment (Vercel + GoDaddy)
1. Run `pnpm run build`  
2. Push to GitHub and connect repository on Vercel  
3. Add Custom Domain in Vercel dashboard  
4. Update DNS in GoDaddy: set CNAME or A record to Vercel  
5. SSL certificate automatically issued → HTTPS enabled

## Future Improvements
- Fix extra white space at bottom on iPhone
- Adjust header to avoid overlapping content on scroll

---

# 日本語 Version

React, Vite, TailwindCSS を使用して作成した個人ポートフォリオサイトです。  
プロフィール、プロジェクト、連絡先をレスポンシブデザインで提供します。

## 機能
- セクション: Hero / About / Projects / Contact / Footer
- TailwindCSSによるレスポンシブ対応
- スムーズスクロールナビゲーション
- カスタムファビコン (PNGのみ、JSON manifestは未使用)
- ドメインはGoDaddyで購入、Vercelでデプロイ
- Safariでは仕様によりファビコンが四角で表示されます

## プロジェクト構成
```
src/
  components/
    Header.jsx
    Hero.jsx
    About.jsx
    Projects.jsx
    Contact.jsx
    Footer.jsx
  App.jsx
index.html
```

## 開発メモ (Development Notes)
- npm 使用時に依存関係の競合が発生したため、**pnpm** を使用しています。
- 主なコマンド:
  - `pnpm install`
  - `pnpm run dev`
  - `pnpm run build`

## デプロイ (Vercel + GoDaddy)
1. `pnpm run build` を実行  
2. GitHubにプッシュし、Vercelに接続  
3. VercelダッシュボードでCustom Domainを追加  
4. GoDaddy DNSでCNAMEまたはAレコードをVercelに設定  
5. SSL証明書が自動発行 → HTTPS有効化

## 今後の改善
- iPhoneでのページ下部の余白修正
- スクロール時にヘッダーが一部を隠す問題の修正
