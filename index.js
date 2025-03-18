
const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "./img/shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "./img/miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "./img/tonkotsu.jpg", rating: 3 }
];

function displayRamens() {
    const ramenMenu = document.querySelector("#ramen-menu");
    ramenMenu.innerHTML = '';

    ramens.forEach((ramen, index) => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.dataset.index = index;
        img.addEventListener('mouseenter', handleHover);
        img.addEventListener('mouseleave', clearDetail);
        ramenMenu.appendChild(img);
    });
}

function handleHover(event) {
    const index = event.target.dataset.index;
    const ramen = ramens[index];
    showDetail(ramen);
}

function clearDetail() {
    const detailDiv = document.querySelector('#ramen-detail');
    detailDiv.classList.remove('expanded');
}

function showDetail(ramen) {
    const detailDiv = document.querySelector('#ramen-detail');
    detailDiv.classList.add('expanded');
    detailDiv.innerHTML = `
        <h2>${ramen.name}</h2>
        <p>Restaurant: ${ramen.restaurant}</p>
        <p>Rating: ${'⭐'.repeat(ramen.rating)}</p>
        ${ramen.comment ? `<p>Comment: ${ramen.comment}</p>` : ''}
    `;
}

function addSubmitListener() {
    const form = document.querySelector("#new-ramen");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const newRamen = {
            id: ramens.length + 1,
            name: document.querySelector("#new-name").value,
            restaurant: document.querySelector("#new-restaurant").value,
            image: document.querySelector("#new-image").value,
            rating: parseInt(document.querySelector("#new-rating").value),
            comment: document.querySelector("#new-comment").value
        };
        ramens.push(newRamen);
        displayRamens();
        form.reset();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayRamens();
    addSubmitListener();
});