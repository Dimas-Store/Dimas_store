const cart = JSON.parse(localStorage.getItem("cart")) || [];
const daftarKeranjang = document.getElementById("daftarKeranjang");
const checkoutWA = document.getElementById("checkoutWA");

function tampilkanKeranjang() {
    if (cart.length === 0) {
        daftarKeranjang.innerHTML = "<p>Keranjang masih kosong.</p>";
        checkoutWA.style.display = "none";
        return;
    }

    let html = "";
    cart.forEach((item, index) => {
        html += `
        <div class="produk-card" style="margin-bottom:15px;">
            <h3>${item.nama}</h3>
            <p class="harga">Rp${item.harga.toLocaleString()}</p>
            <p>Jumlah: ${item.jumlah}</p>
        </div>`;
    });

    daftarKeranjang.innerHTML = html;
}

tampilkanKeranjang();

checkoutWA.addEventListener("click", () => {
    let pesan = "Halo Dimas Store 👋%0A%0ASaya ingin memesan:%0A%0A";

    cart.forEach((item, i) => {
        pesan += `${i + 1}. ${item.nama}%0AJumlah: ${item.jumlah}%0A%0A`;
    });

    pesan += "Nama:%0AAlamat:%0A%0ATerima kasih.";

    window.open(`https://wa.me/62895385145700?text=${pesan}`);
});
