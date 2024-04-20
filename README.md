## 담당자 역할
### 한문희

- Spring boot 프로젝트 생성
- 프론트엔드 Nuxt.js 프로젝트 생성
- Github 저장소 생성 및 버전관리
- 시스템 설계도 작성
- Chat gpt 에서 GPTs 생성 후 프로젝트 학습
- 의존성 관리 및 설치
- README.MD 작성

## 사용 스킬

- Spring boot
- Vue.js
- Nuxt.js
- Quasar
- Sass
- Git
- GPTs

## 시스템 설계도


## 프로젝트 환경세팅
작성 준비중....

## 프로젝트 구조 설명

우리 프로젝트는 크게 일반적인 Gradle을 사용한 JAVA 프로젝트 구조입니다. 해당 프로젝트에 참여한 개발자들이 자유롭게 기능을 구현하고 스터디를 통해 자신이 개발 한 내용을 공유하고 연습 할 수 있는 토이 프로젝트입니다.

- .git: 버전 관리를 위한 Git 저장소 디렉터리
- .gitignore: Git에서 추적하지 않을 파일 목록을 지정하는 파일
- .gradle: Gradle 빌드 도구와 관련된 설정 및 캐시 정보가 저장된 디렉터리
- .idea: IntelliJ IDEA 개발 환경 설정 파일이 있는 디렉터리
- build.gradle: 프로젝트의 빌드를 위한 Gradle 스크립트 파일
- build: 프로젝트 빌드 결과물이 저장되는 디렉터리
- out: IntelliJ IDEA와 같은 JetBrains의 개발 환경에서 사용되는 빌드 및 컴파일 결과물 보통 개발 환경 내에서의 빌드와 테스트를 위한 임시 저장소로 사용됨.
- gradlew: 이 스크립트는 Unix 또는 Linux 시스템에서 사용됨 주 역할은 gradle을 사용하여 프로젝트를 빌드하는 데 필요한 환경을 제공하고 Gradle 버전이 자동으로 다운로드가 되어서 개발자가 별도로 Gradle을 설치를 할 필요가 없게됨
- gradlew.bat: 이녀석은 gradlew과 똑같은 역할을 하지만 다른점은 Windows 환경에서 사용된다는 점이다.
- settings.gradle: 이 파일은 Gradle 프로젝트 설정을 포함하고 여러 프로젝트가 함께 있는 멀티 모듈 구성의 경우 이 파일에서 각 모듈을 어떻게 연결할지 정의할 수 있음 그리고 Gradle 빌드 시스템에서 프로젝트 이름 설정, 포함할 하위 프로젝트 지정 등의 작업을 여기서 처리함

### build 디렉터리와 build.gradle 파일에대한 조금 더 자세한 설명

`build.gradle` 파일 안에는 프로젝트를 빌드하는데 필요한 스크립트, 설정, 의존성 정의 등이 포함되어 있습니다. 프로젝트를 빌드할 때 `gradlew build` 같은 명령어를 실행하면, Gradle은 build.gradle 파일의 지시에 따라 소스 코드를 컴파일하고, 필요한 라이브러리를 다운로드하며, 테스트를 실행하고, 최종적으로 빌드 결과물을 생성합니다.

이렇게 생성된 빌드 결과물은 우리 프로젝트에서는 `build` 디렉터리 내에 저장됩니다. 일반적으로도 그러합니다. Java 프로젝트의 경우, build/classes에 컴파일된 클래스 파일들이 저장되고, build/libs에는 프로젝트의 실행 가능한 JAR 파일이 생성됩니다. 또한, 테스트 결과, 문서화된 파일, 배포용 아카이브 등도 이 디렉터리에 위치합니다.

build 디렉터리의 내용을 클라우드 서비스나 네트워크 서버 등에 배포하여 실제 운영, 개발, 테스트 서버 환경에서 애플리케이션을 실행할 수 있습니다.

*   **수동 배포**: `build` 디렉터리의 내용을 직접 클라우드 서비스나 서버에 업로드합니다. 이 방법은 단순하지만, 반복적인 작업이 필요하며 실수의 여지가 있습니다.
*   **자동화 도구 사용**: Jenkins, GitLab CI/CD, GitHub Actions 등의 자동화 도구를 사용하여 빌드 및 배포 과정을 자동화합니다. 이러한 도구는 소스 코드가 저장소에 푸시될 때마다 자동으로 빌드와 테스트를 수행하고, 성공적인 빌드 결과를 서버에 자동으로 배포합니다.
*   **컨테이너화 및 오케스트레이션**: Docker와 같은 컨테이너 도구를 사용하여 애플리케이션과 그 의존성을 컨테이너 이미지로 패키징합니다. 이후 Kubernetes 같은 오케스트레이션 플랫폼을 사용하여 배포, 관리, 확장을 용이하게 합니다.

(우리의 계획은 수동 배포 테스트 이후 자동화 도구를 사용할 예정이다 컨테이너화 및 오케스트레이션은 조금 더 공부가 필요할듯 하다.)

또한 Java 웹 애플리케이션을 서버에 배포할 경우, 종종 WAR(Web Application Archive) 파일 포맷을 사용하는 것이 일반적입니다. WAR 파일은 웹 애플리케이션의 자원, Java 클래스, 라이브러리, 관련된 메타데이터를 하나의 아카이브 파일로 묶어 Tomcat, Jetty, JBoss 같은 서블릿 컨테이너에 배포할 수 있도록 합니다.

### build 디렉터리와 out 디렉터리의 차이

`build` 디렉터리와 `out` 디렉터리는 둘 다 프로젝트 빌드 결과를 저장하지만, 사용하는 도구와 목적에 따라 다릅니다.

### `build` 디렉터리

*   **Gradle 또는 Maven 사용**: 이 디렉터리는 Gradle이나 Maven과 같은 빌드 자동화 도구를 사용할 때 생성됩니다. 이러한 도구는 프로젝트의 의존성을 관리하고, 소스 코드를 컴파일하며, 테스트를 실행하고, 배포 가능한 아티팩트(예: JAR, WAR 파일)를 생성합니다.
*   **배포용 아티팩트 저장**: `build` 디렉터리에는 최종적으로 배포할 준비가 된 파일이 저장됩니다. 이 파일들은 프로덕션 환경에 배포되거나 다른 환경에서 사용될 수 있습니다.

### `out` 디렉터리

*   **IntelliJ IDEA 사용**: `out` 디렉터리는 IntelliJ IDEA와 같은 JetBrains의 통합 개발 환경(IDE)에서 사용됩니다. IDE는 이 디렉터리를 사용하여 컴파일된 클래스 파일과 기타 리소스를 저장합니다.
*   **개발 및 테스트 목적**: 이 디렉터리는 주로 개발 중 빠른 테스트와 디버깅을 위해 사용됩니다. IDE 내에서 코드를 수정하고 바로 실행해볼 수 있게 도와줍니다.

이 두 디렉터리는 개발 프로세스의 다른 단계와 도구에 따라 사용되며, 각각의 역할이 중요합니다. 일반적으로 `build` 디렉터리는 프로덕션 배포와 관련된 중요한 파일을 포함하는 반면, `out` 디렉터리는 개발 과정에서의 빠른 반복 작업을 지원합니다. 프로젝트 설정이나 팀의 워크플로우에 따라 이 두 디렉터리의 활용도가 달라질 수 있습니다.

**(결론은 build 디렉터리는 Gradle 또는 Maven을 사용하여 최종 배포하는 목적이고 out 디렉터리는 IntelliJ 툴이서 빌드하는건데 테스트와 디버깅을 위해 사용됨. )** 

## frontend 프로젝트 구조 설명

*   `.gitignore`: Git에서 무시할 파일 설정
*   `.nuxt`: Nuxt.js 빌드 파일
*   `.output`: Nuxt.js 배포 출력 파일
*   `app.vue`: 전역 Vue 애플리케이션 파일
*   `dist`: 빌드된 정적 파일 디렉토리
*   `node_modules`: 프로젝트 의존성 모듈
*   `nuxt.config.ts`: Nuxt.js 구성 파일
*   `package-lock.json`, `package.json`: 프로젝트 의존성 및 메타데이터 관리
*   `pages`: Vue 페이지 컴포넌트
*   `public`: 공개적으로 접근 가능한 정적 자원
*   `README.md`: 프로젝트 설명 문서
*   `server`: 서버 사이드 코드
*   `tsconfig.json`: TypeScript 컴파일러 설정

이 Nuxt.js 프로젝트는 TypeScript를 사용하며, 주요 페이지와 구성 요소는 pages 폴더에 위치해 있습니다. 또한, 서버 사이드 로직은 server 폴더에 포함되어 있습니다.

### frontend 프로젝트에서 .nuxt .output .dist 의 차이점

`.nuxt`, `.output`, `.dist` 이 각각의 폴더들의 성격이 비슷해 보인다 하나는 빌드 파일 다른 하나는 배포 출력 파일 또 다른 하나는 빌드도니 정적 파일 디렉토리 정확히 각각 어떻게 다르고 어떤 역할을 하는지 알아보자

1    `.nuxt` 폴더:
* 목적: Nuxt.js의 빌드 프로세스 중 생성되는 임시 또는 중간 결과물을 저장하는 곳입니다.
* 내용: 빌드 프로세스에서 사용되는 서버 사이드 렌더링 (SSR) 관련 파일, 라우터 및 플러그인 설정, 레이아웃과 페이지 컴포넌트의 컴파일된 버전 등이 포함됩니다.
> 빌드 프로세스: 소프트웨어 개발에서 소스 코드를 실행 가능한 소프트웨어로 변환하는 일련의 단계 예를 들어 자바코드를 컴파일 한다거나 타입 스크립트 코드를 브라우저에 실행 가능한 ES6 또는 ES5로 변환하는 것을 말한다.

* `내가 내린 결론`: 우리가 frontend를 node.js로 `nuxt dev` 서버를 실행시킨 후 브라우저를 열어 나오는 그 결과물들은 `.nuxt` 디렉터리 안의 코드들을 브라우저에 보여주는거다. 우리가 코딩을 하며 저장하면 빌드 프로세스가 실행되고 빌드가 되면 `.nuxt` 디렉터리에 빌드되고 다시 빌드 된결과물이 브라우저에 보여지게 된다.

2    `.output` 폴더:
* 목적: 최근 Nuxt.js 버전에서 도입된 디렉터리로, 배포를 위한 최종 출력 파일을 저장합니다.
* 내용: 서버리스 함수, 정적 파일, HTML 등의 빌드된 파일들이 포함될 수 있으며, 이는 프로젝트 설정에 따라 다를 수 있다.
* 특징: 최종 사용자에게 배포되기 전의 파일들로 구성되며, 다양한 배포 환경에 맞추어 최적화되어 있습니다.

3    `.dist` 폴더:
* 목적: 전통적으로 Nuxt.js에서 빌드 프로세스가 완료된 후 생성되는 최종 정적 파일들을 저장하는곳임
* 내용: HTML, CSS, Javascript 파일 등 사용자에게 직접 제공될 완성된 정적 파일들이 포함됨
* 특징: 이 폴더의 내용은 웹 서버에 그대로 배포되어 사용자에게 제공되며 SPA 또는 정적 사이트 배포에 주로 사용됨

그렇다면 `.output` 과 `.dist` 디렉터리는 거의 같은거 아닌가? 서버리스 함수를 사용 할 수 있다는거 뺴면 똑같은거 같은데? 그럼 서버리스 함수는 어디서 설정하는걸까?

### 두 디렉터리가 어떻게 다른지 조금 더 자세하게 살펴보자

두 디렉터리의 큰 차이점은 Nuxt.js 3버전이냐 이전 버전이냐로 나뉜다. 이 전 버전까지는 dist 디렉터리를 사용했고 3버전 부터는 output 디렉터리를 사용했다.

유일하게 다른점은 dist는 디렉터리 안에 정적자원들을 가지고 있지만 output은 public 디렉터리에 가지고있다. 그럼 유일하게 다른 nitro.json 파일의 존재 이 파일은 무엇인가?
이 파일이 두 디렉터리의 차이를 만든다. 이 파일은 output/public 폴더의 정적 자원들을 서버리스 환경이나 특정 클라우드 서비스에 최적화된 배포를 위해 사용 할 수 있다.

결론은 .output 디렉터리가 클라우드를 생각한다면 더 적합한 디렉터리라는 것이다.

>그럼 클라우드를 사용한다면 서버사이드 렌더링을 사용한다는건데 서버사이드 렌더링은 정적 리소스들과 관련이 없지 않을까? 정적 리소스들은 클라이언트 사이드 렌더링과 관련이 있다. 어차피 서버와의 통신은 rest api로 통신 할테니 말이다.
이 문제는 조금 더 알아볼 필요가 있을거같다.

#### 위 의문에 대한 chat gpt의 답변:

네, 맞습니다. public 디렉터리에 있는 정적 자원들은 클라우드 환경과 직접적인 관계가 없을 수 있습니다. 이 디렉터리는 웹 애플리케이션에서 공개적으로 접근 가능한 파일들(이미지, 스타일시트, JavaScript 파일 등)을 저장하는 곳으로, 서버 설정에 따라 클라이언트 측에서 직접 요청하여 사용됩니다.

만약 src/main/resources/static 폴더에 정적 자원을 빌드하고 해당 폴더가 웹 서버(예: Spring Boot 애플리케이션)에서 정적 컨텐츠로 제공되는 경로로 설정되어 있다면, 해당 서버의 포트(예: 8080 포트)에서 바로 해당 자원들에 접근할 수 있습니다. 이 경우, 클라이언트는 8080 포트를 통해 서버에 연결되고, 서버는 src/main/resources/static 폴더에 저장된 정적 파일을 제공하여 클라이언트의 요청에 응답합니다.

따라서, 이러한 설정은 클라우드 배포와 무관하게 로컬 서버나 내부 네트워크에서 효율적으로 운영될 수 있습니다. 이는 웹 서버가 정적 자원을 직접 관리하고 제공하는 전통적인 웹 호스팅 설정의 일부입니다. 클라우드 환경에서는 종종 추가적인 설정이나 배포 스크립트가 필요할 수 있지만, 기본적인 접근 방식은 비슷합니다.

> 그럼 우리 프로젝트에서는 backend 서버와 웹서버를 어떻게 아키텍쳐링을 할지 결정해야한다.
> 1. backend 서버 frontend 서버 두개를 운용하여 두개의 서버를 프록싱 하고 서버 사이드 렌더링 방식으로 구현하고 API 호출을 통한 데이터 통신을 하는 방법.  
> 2. 하나의 서버(예 8080포트)에 frontend 에서 빌드한 정적 리소스들을 src/resources/static 에 빌드 루트로 설정하여 빌드 된 정적 자원을 CSR 방식으로 콘텐츠를 동적 생성하고 데이터 통신시에만 API 통신을 하는 방법
> 3. backend 서버 frontend 서버 두개를 운용하되 frontend 서버 자체에서 정작 자원을 빌드하고 CSR 방식으로 콘텐츠를 보여주고 backend 서버에 REST API를 통해 데이터 통신을 하는 방법.

위와 같은 방법을 결정해야한다.

- - -

# 개발에 필요한 정보 memo....

## window 명령어
- 디렉토리 삭제
```bash
rmdir /s /q frontend
```

## nuxt 명령어 정리
### nuxt build 와 nuxt generate의 차이
```bash
nuxt build 
```
* 주로 서버사이드 렌더링(SSR) 환경을 위한 것으로, 서버에서 실행될 준비가 된 애플리케이션을 빌드함
* 서버에서는 이렇게 빌드된 코드를 사용하여 요청에 따라 실시간으로 HTML을 생성하고 전달함

```bash
nuxt generate
```
* 정적 사이트를 생성하기 위한 것으로, 각 라우트를 미리 렌더링하여 HTML 파일로 저장함
* 생성된 정적 사이트는 서버의 실시간 처리 없이도 모든 HTML이 미리 준비되어 있기 때문에, 서버의 부하를 줄이고, 서버 없이도 콘텐츠를 제공할 수 있습니다. 이는 GitHub Pages나 Netlify와 같은 정적 호스팅 서비스에 적합합니다.
