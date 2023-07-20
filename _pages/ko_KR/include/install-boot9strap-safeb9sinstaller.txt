{%- if include.inline != "true" %}
이 섹션에서는, 커스텀 펌웨어를 설치할 것입니다.
{%- endif %}

1. 메시지가 나타나면, boot9strap을 설치하기 위하여 화면에 주어진 키 조합을 입력해 주세요
    + 아래 화면의 단계가 붉은 텍스트로 표시되고 키 콤보 입력을 요구하지 않는다면, [이 문제 해결 가이드](troubleshooting#issues-with-safeb9sinstaller)를 참고해 주세요
{%- if include.isbootfirm == "true" %}
1. 이 작업이 끝나면, 전원 버튼을 길게 눌러 콘솔의 전원을 꺼 주세요
    + 다음 작업이 완료되기 전까지는 콘솔은 SafeB9SInstaller로만 부팅 됩니다
{%- else %}
1. 작업이 완료되면, (A) 를 눌려 콘솔을 재부팅해 주세요
{%- endif %}
