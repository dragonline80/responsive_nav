# responsive_nav
Monorepo 브랜치 전략 (VSCode 기준 전체 과정)
1️⃣ 리더: publish 브랜치 생성
1. VSCode 열고 왼쪽 하단 브랜치 아이콘(현재 브랜치명) 클릭
2. develop 브랜치로 먼저 이동
    * 👉 develop → Checkout
    * 상단 Pull 버튼 눌러 최신화
3. 다시 브랜치 아이콘 → Create new branch... 선택
    * 이름 입력: publish
    * 기본 브랜치를 develop에서 따오게 됨
4. publish 브랜치 Push
    * Source Control 상단 Publish Branch 버튼 클릭 (또는 git push origin publish)
👉 이제 원격 저장소에 publish 브랜치가 생성됨. 퍼블리셔들이 이 브랜치에서 자기 브랜치 따면 됨.

2️⃣ 퍼블리셔: 개인 작업 브랜치 생성
퍼블리셔들에게 안내할 단계입니다. (VSCode 기준)
1. 왼쪽 하단 브랜치에서 publish 선택
2. 브랜치 드롭다운 → Create new branch from...
    * 이름: feature/사번 (예: feature/12345)
    * 기반 브랜치: publish
3. 퍼블리싱 작업 후 커밋:
    * Source Control → 변경 파일 선택 → + Stage → 커밋 메시지 작성 후 Commit
4. publish로 merge
    * 다시 publish 브랜치로 이동
    * Source Control 상단 Merge Branch... → feature/사번 선택
    * Push (git push origin publish)
👉 이렇게 하면 9명 퍼블리셔 작업이 publish 브랜치에 모입니다.

3️⃣ 리더: publish → develop (rebase 방식)
이제 리더(당신)가 최종 정리합니다.
(1) develop 최신화
* 브랜치 드롭다운에서 develop 선택å
* Source Control 상단 Pull
(2) publish 최신화
* 브랜치 드롭다운에서 publish 선택
* Pull
(3) develop으로 이동 후 rebase 실행
1. 브랜치 드롭다운 → develop 선택
2. 명령 팔레트 (⇧⌘P / Ctrl+Shift+P) 열기
3. Git: Rebase Branch... 입력
4. 대상 브랜치로 publish 선택
👉 이제 develop 브랜치가 publish 기준으로 rebase 됩니다.

4️⃣ 충돌 해결 (있을 경우)
* VSCode가 conflict 파일 표시
* 파일 열면 <<<<<<< HEAD, =======, >>>>>>> publish 구조 확인됨
* 상단 버튼: Accept Current / Accept Incoming / Accept Both 중 선택
* 수정 후 저장 → Source Control에서 Stage → Commit
* 명령 팔레트: Git: Continue Rebase

5️⃣ develop push
* rebase 완료 후 Source Control 상단에서 Sync Changes 클릭
* 만약 push 불가 메시지가 나오면 터미널에서 직접:    git push origin develop
*   

✅ 최종 정리
* 퍼블리셔: feature/사번 → publish
* 리더: publish → (rebase) → develop
* VSCode에서 모든 단계는 브랜치 드롭다운 + Source Control + 명령 팔레트 조합으로 해결 가능
