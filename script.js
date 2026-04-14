document.addEventListener("DOMContentLoaded",()=>{
const btn=document.getElementById("exploreBtn");
if(btn){btn.onclick=()=>location.href="stories.html";}
});
// BUTTON SCROLL
document.getElementById("exploreBtn").addEventListener("click", () => {
    window.scrollTo({
        top: document.querySelector(".container").offsetTop,
        behavior: "smooth"
    });
});

// CLICKABLE POSTS
function goToStories() {
    window.location.href = "stories.html";
}

// TYPING EFFECT
const text = "Your Voice Matters";
let i = 0;

function typeEffect() {
    if (i < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 80);
    }
}

window.onload = typeEffect;
function openChallenge(type) {
    const modal = document.getElementById("modal");
    const title = document.getElementById("modal-title");
    const text = document.getElementById("modal-text");

    modal.classList.remove("hidden");

    if (type === "mental") {
        title.innerText = "🧠 Mental Health Pressure";
        text.innerText = "Many young people face stress, anxiety, and pressure. Talking to someone, resting, and avoiding isolation can help a lot.";
    }

    else if (type === "jobs") {
        title.innerText = "💼 Unemployment";
        text.innerText = "Learning skills like ICT, business, and trades can greatly increase job opportunities.";
    }

    else if (type === "cyber") {
        title.innerText = "📱 Cyberbullying";
        text.innerText = "Protect yourself online by blocking harmful users, reporting abuse, and limiting negative interactions.";
    }

    else if (type === "drugs") {
        title.innerText = "🚫 Substance Abuse";
        text.innerText = "Avoid peer pressure and seek support from trusted adults or mentors when facing temptation.";
    }

    else if (type === "education") {
        title.innerText = "🎓 Education Inequality";
        text.innerText = "Use online learning, libraries, and community resources to improve access to education.";
    }

    else if (type === "identity") {
        title.innerText = "🧭 Identity Pressure";
        text.innerText = "Stay true to yourself and avoid comparing your life to others on social media.";
    }
}

function closeModal() {
    document.getElementById("modal").classList.add("hidden");
}
function openModal(type) {
    const modal = document.getElementById("modal");
    const title = document.getElementById("modal-title");
    const text = document.getElementById("modal-text");

    modal.classList.remove("hidden");

    if (type === "courses") {
        title.innerText = "📚 Education & Skills Training";
        text.innerText = "Learn coding, design, business, and practical skills to improve your future.";
    }

    else if (type === "mental") {
        title.innerText = "🧠 Mental Health Support";
        text.innerText = "Talk to counselors, join support groups, and learn coping strategies.";
    }

    else if (type === "mentor") {
        title.innerText = "👨‍🏫 Mentorship Programs";
        text.innerText = "Get guidance from experienced professionals in different careers.";
    }

    else if (type === "jobs") {
        title.innerText = "💼 Youth Employment";
        text.innerText = "Find internships, job training, and employment opportunities.";
    }

    else if (type === "business") {
        title.innerText = "🚀 Entrepreneurship";
        text.innerText = "Start your own business with training and support systems.";
    }

    else if (type === "community") {
        title.innerText = "🤝 Community Support";
        text.innerText = "Join youth groups that support growth, learning, and connection.";
    }
}

function closeModal() {
    document.getElementById("modal").classList.add("hidden");
}
document.querySelector(".primary-btn").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
function sendMessage(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("⚠️ Please fill in all fields.");
        return;
    }

    // Save message
    const newMessage = {
        name,
        email,
        message,
        time: new Date().toLocaleString()
    };

    let messages = JSON.parse(localStorage.getItem("youthMessages")) || [];
    messages.push(newMessage);
    localStorage.setItem("youthMessages", JSON.stringify(messages));

    // Show popup
    document.getElementById("popup-text").innerText =
        "Thanks " + name + "! We will respond soon.";

    document.getElementById("popup").classList.remove("hidden");

    // Reset form
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}

function closePopup() {
    document.getElementById("popup").classList.add("hidden");
}
function saveStory(event) {
    event.preventDefault();

    const name = document.getElementById("name").value || "Anonymous";
    const age = document.getElementById("age").value;
    const country = document.getElementById("country").value;
    const story = document.getElementById("story").value;
    const lesson = document.getElementById("lesson").value;

    if (!story) {
        alert("⚠️ Please write your story.");
        return;
    }

    const newStory = {
        name,
        age,
        country,
        story,
        lesson,
        time: new Date().toLocaleString()
    };

    let stories = JSON.parse(localStorage.getItem("youthStories")) || [];
    stories.unshift(newStory);
    localStorage.setItem("youthStories", JSON.stringify(stories));

    // popup
    document.getElementById("popup-text").innerText =
        "Thanks " + name + "! Your story is now shared.";

    document.getElementById("popup").classList.remove("hidden");

    // clear form
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("country").value = "";
    document.getElementById("story").value = "";
    document.getElementById("lesson").value = "";
}

function closePopup() {
    document.getElementById("popup").classList.add("hidden");
}