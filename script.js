
const checkBtn = document.getElementById("checkBtn");
const resultDiv = document.getElementById("result");
const incomeInput = document.getElementById("income");

const messages = [
    "Declined. We only approve $CARD.",
    "Not this one. Try bought $CARD instead.",
    "Declined. Because this isn’t $CARD.",
    "Your bank disapproves. But Solana approves $CARD.",
    "Nice try. But $CARD is the only valid one.",
    "That’s not our card. $CARD is.",
    "Declined like your fiat dreams. $CARD > credit.",
    "You don’t need credit. You need $CARD.",
    "Real cards get declined. Bought $CARD.",
    "Approval system? Broken. Use $CARD.",
    "Declined? That’s normal. Just bought $CARD."
];

incomeInput.addEventListener("input", () => {
    incomeInput.value = incomeInput.value.replace(/[^0-9]/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ",");
});

checkBtn.addEventListener("click", () => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    resultDiv.innerHTML = '<div style="color:red; font-size:32px;">DECLINED</div><div>' + randomMessage + '</div>';
});
