// ===== Utilities =====
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

// Toast helper
function toast(msg, type = "success", timeout = 2400) {
  const box = $("#toasts");
  const t = document.createElement("div");
  t.className = `toast ${type}`;
  t.innerHTML = `${type === "success" ? "✅" : "⚠️"} <span>${msg}</span>`;
  box.appendChild(t);
  setTimeout(() => {
    t.style.opacity = "0";
    t.style.transform = "translateY(-6px)";
    setTimeout(() => t.remove(), 250);
  }, timeout);
}

// ===== Character Counter =====
const messageEl = $("#message");
const charCount = $("#charCount");
const updateCount = () => (charCount.textContent = messageEl.value.length);
messageEl.addEventListener("input", updateCount);
updateCount();

// ===== Validation =====
const errors = {
  name: $("#feedbackForm .error[data-for='name']"),
  email: $("#feedbackForm .error[data-for='email']"),
  rating: $("#feedbackForm .error[data-for='rating']"),
  message: $("#feedbackForm .error[data-for='message']"),
};

function validate() {
  let valid = true;

  // Name
  const name = $("#name").value.trim();
  if (name.length < 2) {
    errors.name.textContent = "Please enter at least 2 characters.";
    valid = false;
  } else errors.name.textContent = "";

  // Email
  const email = $("#email").value.trim();
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!emailRe.test(email)) {
    errors.email.textContent = "Please enter a valid email address.";
    valid = false;
  } else errors.email.textContent = "";

  // Rating
  const rating = $("input[name='rating']:checked");
  if (!rating) {
    errors.rating.textContent = "Please select a star rating.";
    valid = false;
  } else errors.rating.textContent = "";

  // Message
  const msg = messageEl.value.trim();
  if (msg.length < 10) {
    errors.message.textContent = "Message must be at least 10 characters.";
    valid = false;
  } else errors.message.textContent = "";

  return valid;
}

// ===== Submit Handler (Fetch API) =====
const form = $("#feedbackForm");
const submitBtn = $("#submitBtn");
const statusEl = $("#status");
const dialogEl = $("#successDialog");
const closeDialogBtn = $("#closeDialog");

// Demo endpoint (Reqres accepts POST and returns 201 with JSON)
const ENDPOINT = "https://reqres.in/api/users";
// NOTE: Real backend? Replace ENDPOINT with your API and handle CORS/server logic.

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  statusEl.textContent = "";

  if (!validate()) {
    toast("Fix the highlighted fields.", "error");
    return;
  }

  const payload = {
    name: $("#name").value.trim(),
    email: $("#email").value.trim(),
    rating: $("input[name='rating']:checked").value,
    message: $("#message").value.trim(),
    sentAt: new Date().toISOString(),
  };

  try {
    // UI: loading state
    submitBtn.disabled = true;
    submitBtn.classList.add("loading");
    statusEl.textContent = "Sending...";

    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    // For Reqres, created = 201
    if (res.ok) {
      const data = await res.json();
      statusEl.textContent = "✅ Feedback sent successfully.";
      toast("Feedback sent successfully!", "success");
      // Optional: show success dialog
      if (typeof dialogEl.showModal === "function") dialogEl.showModal();

      // Reset form after a short delay so user sees the result
      setTimeout(() => form.reset(), 300);
      updateCount();

      // Dev log (you can remove)
      console.log("Server response:", data);
    } else {
      const reason = `${res.status} ${res.statusText}`;
      statusEl.textContent = "❌ Failed to send. Try again.";
      toast(`Request failed: ${reason}`, "error");
    }
  } catch (err) {
    console.error(err);
    statusEl.textContent = "⚠ Network error. Check your connection.";
    toast("Network error. Please try again.", "error");
  } finally {
    submitBtn.disabled = false;
    submitBtn.classList.remove("loading");
  }
});

// Reset
$("#resetBtn").addEventListener("click", () => {
  Object.values(errors).forEach((e) => (e.textContent = ""));
  statusEl.textContent = "";
  updateCount();
});

// Dialog
closeDialogBtn.addEventListener("click", () => dialogEl.close());
