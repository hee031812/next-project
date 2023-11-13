### naxt.js   

Next.js는 React 기반의 웹 프레임워크로, React 애플리케이션을 쉽게 개발하고 배포할 수 있도록 도와주는 도구입니다.   
   
서버 사이드 렌더링(SSR): Next.js는 기본적으로 서버 사이드 렌더링을 지원합니다.    
이것은 웹 페이지의 초기 로딩 성능을 향상시킬 수 있고, 검색 엔진 최적화(SEO)에도 도움을 줍니다.   
   
정적 파일 생성: Next.js는 빌드 시간에 페이지를 미리 렌더링하여 정적 파일로 생성할 수 있습니다. 이를 통해 더 빠른 로딩 속도와 더 나은 성능을 얻을 수 있습니다.   
   
라우팅 시스템: Next.js는 파일 시스템 기반의 라우팅을 제공하여 페이지 간의 이동을 쉽게 관리할 수 있습니다.   
   
API 라우팅: 서버리스 함수를 통해 API 엔드포인트를 손쉽게 만들 수 있습니다.   

모듈 시스템: Next.js는 기본적으로 모듈 시스템을 지원하며, 필요에 따라 코드 분할을 할 수 있습니다.   
   
Hot Module Replacement (HMR): 개발 환경에서 코드 변경 사항이 발생할 때 빠르게 적용되어 빠른 개발을 가능케 합니다.   
   
## 한줄요약    
Next.js는 React 기반의 웹 프레임워크로, 서버 사이드 렌더링, 정적 파일 생성, 간편한 라우팅 시스템, API 라우팅, 모듈 시스템 등을 제공하여 React 애플리케이션을 효율적으로 개발하고 배포할 수 있게 해주는 도구이다.   

### naxt.js 설치방법

1. `npx create-next-app@latest` 입력
2. `Would you like to use TypeScript? ... No / Yes` = NO   
   `Would you like to use ESLint? ... No / Yes` = YES   
   `Would you like to use Tailwind CSS? ... No / Yes` = NO   
   `Would you like to use `src/` directory? ... No / Yes` = YES   
   `Would you like to use App Router? (recommended) ... No / Yes` = YES   
   `Would you like to customize the default import alias (@/*)? ... No / Yes` = YES   
   `What import alias would you like configured? ... @/*` = @   
3. `npm run dev`

You can start editing the page by modifying `app/page.js`. 
The page auto-updates as you edit the file.
This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


## Learn More

- 기능알아보기 [Next.js Documentation](https://nextjs.org/docs) 
- 대화형 튜토리얼 [Learn Next.js](https://nextjs.org/learn)
- Next.js Github저장소 [the Next.js GitHub repository](https://github.com/vercel/next.js/)

## Deploy on Vercel

- Vercel 플랫폼 사용 [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
