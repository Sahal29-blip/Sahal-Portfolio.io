/**
* PHP Email Form Validation - v3.9
* URL: https://bootstrapmade.com/php-email-form/
* Author: BootstrapMade.com
*/
document.querySelector('form').addEventListener('submit', async function (e) {
  e.preventDefault(); // Mencegah refresh halaman

  const form = e.target;
  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        'Accept': 'application/json',
      },
    });

    if (response.ok) {
      // Tampilkan pesan sukses
      alert('Form berhasil dikirim! Terima kasih.');
      form.reset(); // Reset formulir
    } else {
      // Tangani kesalahan jika ada
      alert('Gagal mengirim form. Silakan coba lagi.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Terjadi kesalahan. Silakan coba lagi.');
  }
});
