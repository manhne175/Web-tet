// Danh sách lời chúc
const wishes = [
    "Năm mới an khang thịnh vượng, vạn sự như ý!",
    "Tiền vào như nước sông Đà, tiền ra nhỏ giọt như cà phê phin.",
    "Sức khỏe dồi dào, công danh thăng tiến.",
    "Hay ăn chóng lớn, học giỏi chăm ngoan (dành cho bé).",
    "Tấn tài tấn lộc, tấn bình an.",
    "Cung hỷ phát tài, tiền vô xồng xộc!",
    "Chúc bạn năm mới thoát kiếp F.A (ib mình nhé hehe)!"
];

// Danh sách số tiền ảo (cho vui)
const moneyAmounts = [
    "2.000 VNĐ", "5.000 VNĐ", "10.000 VNĐ", 
    "1 Tỷ (niềm vui)", "1 Vé về tuổi thơ"
];

const modal = document.getElementById('resultModal');
const wishText = document.getElementById('luckyWish');
const moneyText = document.getElementById('luckyMoney');

let hasOpened = false;

function openEnvelope(element) {
    if (hasOpened === true) {
        alert("Á à! Làm gì con nữa mà bóc, Chỉ được chọn 1 bao thôi! 😝");
        return; 
    }
    // Random nội dung
    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    const randomMoney = moneyAmounts[Math.floor(Math.random() * moneyAmounts.length)];

    // Gán nội dung vào modal
    wishText.innerText = randomWish;
    moneyText.innerText = randomMoney;

    // Hiện modal
    modal.style.display = "flex";

    // Đánh dấu bao lì xì đã mở
    element.classList.add('opened');
    hasOpened = true;
}

function closeModal() {
    modal.style.display = "none";
}   

// Đóng modal khi click ra ngoài
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}