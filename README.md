# responsive_nav
폴더 및 파일 경로
[Index Root)
apps@pms index.html

[BaseLayout]
packages/ui/scr/components/shc/layouts/ScBaseLayout.vue
_layout.scss 호출은 baselayout에서만 호출

[PageLayout]
apps @pms src/laouts/MainLayout.vue


[Page]
실제 퍼블리셔 작업 : apps @pms src/publish/_new/폴더명/파일명.vue 
테스트 확인용 호출 : apps @pms src/pages/ABK/ABKCC06010010P01•vue


[Style]
resources/assets/styles/파일명.scss


각 작업 페이지 scss는 PageLayout에서 생성된 레이아웃에서 호출


작업 시 branch 생성후 develop에 머지
feature/사번/작업방식
