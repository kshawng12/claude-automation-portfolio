/* ── Nav toggle ── */
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

/* ── Set min date on booking form ── */
const dateInput = document.getElementById('preferred_date');
if (dateInput) {
  const today = new Date();
  today.setDate(today.getDate() + 1);
  dateInput.min = today.toISOString().split('T')[0];
}

/* ── Form helpers ── */
function setError(inputId, errorId, show) {
  const input = document.getElementById(inputId);
  const err   = document.getElementById(errorId);
  if (!input || !err) return;
  if (show) {
    input.classList.add('error');
    err.style.display = 'block';
  } else {
    input.classList.remove('error');
    err.style.display = 'none';
  }
}

function showMessage(formMsgId, type, text) {
  const el = document.getElementById(formMsgId);
  if (!el) return;
  el.className = `form-message ${type}`;
  el.textContent = text;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* ── Booking form ── */
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
  bookingForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name    = document.getElementById('name').value.trim();
    const email   = document.getElementById('email').value.trim();
    const service = document.getElementById('service').value;
    const date    = document.getElementById('preferred_date').value;
    const time    = document.getElementById('preferred_time').value;

    let valid = true;

    setError('name',           'nameError',    !name);
    setError('email',          'emailError',   !email || !isValidEmail(email));
    setError('service',        'serviceError', !service);
    setError('preferred_date', 'dateError',    !date);
    setError('preferred_time', 'timeError',    !time);

    if (!name || !email || !isValidEmail(email) || !service || !date || !time) {
      valid = false;
    }

    if (!valid) return;

    const btn = document.getElementById('submitBtn');
    btn.disabled = true;
    btn.textContent = 'Submitting…';

    try {
      const res = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone:          document.getElementById('phone').value.trim(),
          service,
          preferred_date: date,
          preferred_time: time,
          notes:          document.getElementById('notes').value.trim(),
        }),
      });

      const data = await res.json();

      if (res.ok) {
        window.location.href = 'confirmation.html';
      } else {
        showMessage('formMessage', 'error', data.error || 'Something went wrong. Please try again.');
        btn.disabled = false;
        btn.textContent = 'Request Appointment';
      }
    } catch {
      showMessage('formMessage', 'error', 'Network error. Please check your connection and try again.');
      btn.disabled = false;
      btn.textContent = 'Request Appointment';
    }
  });
}

/* ── Contact form ── */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name    = document.getElementById('name').value.trim();
    const email   = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    setError('name',    'nameError',    !name);
    setError('email',   'emailError',   !email || !isValidEmail(email));
    setError('message', 'messageError', !message);

    if (!name || !email || !isValidEmail(email) || !message) return;

    const btn = document.getElementById('submitBtn');
    btn.disabled = true;
    btn.textContent = 'Sending…';

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (res.ok) {
        window.location.href = 'confirmation.html?type=contact';
      } else {
        showMessage('formMessage', 'error', data.error || 'Something went wrong. Please try again.');
        btn.disabled = false;
        btn.textContent = 'Send Message';
      }
    } catch {
      showMessage('formMessage', 'error', 'Network error. Please check your connection and try again.');
      btn.disabled = false;
      btn.textContent = 'Send Message';
    }
  });
}
