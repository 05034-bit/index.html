// 生き物が窓の範囲の中で逃げ回る関数（全体の絶対座標に修正）
function moveInWindow(element) {
    if (element) {
        element.addEventListener('mouseover', function () {
            // 窓の実際の座標範囲: X(360〜780), Y(190〜320)
            const randomX = Math.random() * (780 - 360) + 360;
            const randomY = Math.random() * (320 - 190) + 190;

            element.style.left = randomX + 'px';
            element.style.top = randomY + 'px';
        });
    }
}

// 5匹の生きもの全員に個別の動きをセット
for (let i = 1; i <= 5; i++) {
    const creature = document.getElementById('foo' + i);
    moveInWindow(creature);
}

// ちょうちょのマウスオーバーイベント処理（画面全体 960x540 を逃げ回る）
const butterflies = document.querySelectorAll('.butterfly');

butterflies.forEach(function (butterfly) {
    butterfly.addEventListener('mouseover', function () {
        const randomX = Math.random() * (960 - 80);
        const randomY = Math.random() * (540 - 80);

        butterfly.style.left = randomX + 'px';
        butterfly.style.top = randomY + 'px';
    });
});