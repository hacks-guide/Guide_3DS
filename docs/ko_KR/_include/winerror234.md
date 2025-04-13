윈도우 10 이상 환경에서 MSET ID1을 생성하게 되면, 이런 에러와 함께 오류가 날 수 있습니다:

![](/images/screenshots/troubleshooting/234.png)

해당 오류는 윈도우의 UTF-8 지원과 관련된 베타 기능 때문에 발생합니다. MEST9를 실행하기 위해선 이를 비활성화 해야합니다:

1. **윈도우 키 + R**을 입력해 실행 창을 열고, `intl.cpl`을 입력한 후 "확인"을 클릭하세요.

    ::: info

    ![](/images/screenshots/troubleshooting/234run.png)

    :::

2. Click on `Administrative`, then `Change System Locale`

    ::: info

    ![](/images/screenshots/troubleshooting/234region.png)

    :::

    ::: info

    ![](/images/screenshots/troubleshooting/234administrative.png)

    :::

3. Uncheck the box next to `Beta: Use Unicode UTF-8 for worldwide language support` then click "OK"

    ::: info

    ![](/images/screenshots/troubleshooting/234locale.png)

    :::

4. Click "Restart Now"

    ::: info

    ![](/images/screenshots/troubleshooting/234restart.png)

    :::

PC가 재부팅된 후, MSET9 ID1을 다시 생성해보세요.
