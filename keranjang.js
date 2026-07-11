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

    let pesan = "Halo Dimas Store 👋\n\nSaya ingin memesan:\n\n";

    cart.forEach((item, i) => {
        pesan += `${i + 1}. ${item.nama}\n`;
        pesan += `Jumlah: ${item.jumlah}\n\n`;
    });

    pesan += "Nama:\nAlamat:\n\nTerima kasih.";

    let url = `https://wa.me/62895385145700?text=${encodeURIComponent(pesan)}`;

    localStorage.removeItem("cart");

    window.open(url, "_blank");
});
