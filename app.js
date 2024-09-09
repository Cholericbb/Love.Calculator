function calculateLove() {
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();

    if (name1 === "" || name2 === "") {
        alert("Please enter both names.");
        return;
    }

    const lovePercentage = Math.floor(Math.random() * 100) + 1;

    document.getElementById("result-container").style.display = "block";
    document.getElementById("reset").style.display = "inline-block";
    document.getElementById("result").innerText = `${name1} and ${name2}'s love score is ${lovePercentage}%!`;

    const loveMeter = document.getElementById("love-meter");
    loveMeter.style.width = `${lovePercentage}%`;

    const message = document.getElementById("message");
    if (lovePercentage >= 80) {
        message.innerText = "You two are a match made in heaven! 🌟";
    } else if (lovePercentage >= 50) {
        message.innerText = "There's definitely some spark! 💕";
    } else {
        message.innerText = "There's room for growth. Keep trying! 🌱";
    }
}

function resetCalculator() {
    document.getElementById("name1").value = "";
    document.getElementById("name2").value = "";
    document.getElementById("result-container").style.display = "none";
    document.getElementById("reset").style.display = "none";
    document.getElementById("love-meter").style.width = "0";
}

// Mock function for handling subscription (frontend only)
function subscribe() {
    const email = document.getElementById("email").value.trim();
    if (email === "") {
        alert("Please enter your email address.");
        return;
    }
    alert("Thank you for subscribing! We will keep you updated.");
}

// Mock function for the "Subscribe Now" button
function handlePremiumSubscribe() {
    alert("This feature will be available soon! Stay tuned.");
}

// Event listeners for subscription buttons
document.querySelector('.subscribe-button').addEventListener('click', handlePremiumSubscribe);
document.querySelector('.subscription-form button').addEventListener('click', subscribe);