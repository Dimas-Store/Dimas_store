const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let current = 0;

if (slides.length > 0 && prev && next && dots.length > 0) {

    function tampilSlide(index){
        slides.forEach(slide => slide.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));

        slides[index].classList.add("active");
        dots[index].classList.add("active");
    }

    function slideBerikutnya(){
        current = (current + 1) % slides.length;
        tampilSlide(current);
    }

    function slideSebelumnya(){
        current = (current - 1 + slides.length) % slides.length;
        tampilSlide(current);
    }

    next.addEventListener("click", slideBerikutnya);
    prev.addEventListener("click", slideSebelumnya);

    setInterval(slideBerikutnya, 3000);

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            current = index;
            tampilSlide(current);
        });
    });

}

const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".produk-card");

if (searchInput) {
    searchInput.addEventListener("keyup", () => {

        const keyword = searchInput.value.toLowerCase();

        cards.forEach((card) => {

            const nama = card.querySelector("h3").textContent.toLowerCase();

            if (nama.includes(keyword)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });
}

    
const nomorWA = "62895385145700";

document.querySelectorAll(".btn-beli").forEach(function(button){
    button.addEventListener("click", function(){

        const card = this.closest(".produk-card");
        const namaProduk = card.querySelector("h3").innerText;

        const pesan =
`Halo Dimas-store 👋

Saya ingin memesan produk ini.

🛒 Nama Produk : ${namaProduk}
📦 Jumlah :
📍 Alamat :

Mohon diproses ya. Terima kasih.`;

        const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
        window.open(url, "_blank");
    });
});
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function simpanKeranjang() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function tambahKeKeranjang(namaProduk, harga) {

    const produk = cart.find(item => item.nama === namaProduk);

    if (produk) {
        produk.jumlah++;
    } else {
        cart.push({
            nama: namaProduk,
            harga: harga,
            jumlah: 1
        });
    }

    simpanKeranjang();

    alert(namaProduk + " berhasil ditambahkan ke keranjang.");
}
document.querySelectorAll(".btn-cart").forEach((button) => {
    button.addEventListener("click", function () {

        const card = this.closest(".produk-card");
        const namaProduk = card.querySelector("h3").innerText;

        const hargaText = card.querySelector(".harga-baru").innerText;
        const harga = parseInt(hargaText.replace(/[^0-9]/g, ""));

        tambahKeKeranjang(namaProduk, harga);
    });
});
