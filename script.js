// LIGHT / DARK MODE
const toggleBtn = document.getElementById("modeToggle");

document.body.classList.add("light");
toggleBtn.textContent = "🌚"; // default icon

toggleBtn.addEventListener("click", () => {

    if (document.body.classList.contains("light")) {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        toggleBtn.textContent = "🌞"; // show sun in dark mode
    } else {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        toggleBtn.textContent = "🌚"; // show moon in light mode
    }

});

// PRODUCT TOGGLE

const products = [
    {
        name: "Adana",
        description: "Spicy minced meat grilled on skewers.",
        image: "https://i.ytimg.com/vi/XjoWADnNyN4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBAe3G6ykdXvYNAq3ykychHh9Z-vA"
    },
    {
        name: "Doner",
        description: "Seasoned meat roasted on a vertical rotisserie.",
        image: "https://turkishfoodie.com/wp-content/uploads/2019/04/Doner-Kebab.jpg"
    },
    {
        name: "Lahmacun",
        description: "Thin Turkish flatbread topped with ground meat.",
        image: "https://www.turkishfoodtravel.com/wp-content/uploads/2020/12/lahmacun_big.jpg"
    }
];

let currentProduct = 0;

const productName = document.getElementById("productName");
const productDescription = document.getElementById("productDescription");
const productImage = document.getElementById("productImage");

function showProduct(index) {
    productName.textContent = products[index].name;
    productDescription.textContent = products[index].description;
    productImage.src = products[index].image;
}

function nextProduct() {
    currentProduct++;
    if (currentProduct >= products.length) {
        currentProduct = 0;
    }
    showProduct(currentProduct);
}

function prevProduct() {
    currentProduct--;
    if (currentProduct < 0) {
        currentProduct = products.length - 1;
    }
    showProduct(currentProduct);
}

// Show first product on page load
showProduct(currentProduct);

// GUESSING GAME
function playGame() {
    const userNumber = parseInt(document.getElementById("numberInput").value);
    const result = document.getElementById("gameResult");

    const winningNumber = Math.floor(Math.random() * 10) + 1;

    if (!userNumber || userNumber < 1 || userNumber > 10) {
        result.textContent = "Please enter a valid number between 1 and 10.";
        result.style.color = "orange";
        return;
    }

    if (userNumber === winningNumber) {
        result.textContent = "🎉 Congratulations! You won FREE Baklava! 🎉";
        result.style.color = "green";
    } else {
        result.textContent = "Not this time! Try again!";
        result.style.color = "red";
    }
}


// CONTACT FORM VALIDATION
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const comments = document.getElementById("comments").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const contactMethod = document.querySelector('input[name="contactMethod"]:checked');
    const message = document.getElementById("formMessage");

    if (!fullName || !comments) {
        message.textContent = "Please fill required fields.";
        message.style.color = "red";
        return;
    }

    if (!contactMethod) {
        message.textContent = "Please select preferred contact method.";
        message.style.color = "red";
        return;
    }

    if (contactMethod.value === "phone" && !phone) {
        message.textContent = "Phone number is required.";
        message.style.color = "red";
        return;
    }

    if (contactMethod.value === "email" && !email) {
        message.textContent = "Email is required.";
        message.style.color = "red";
        return;
    }

    message.textContent = "Form submitted successfully!";
    message.style.color = "green";
    form.reset();
});