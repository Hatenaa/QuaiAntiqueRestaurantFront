const galerieImage = document.getElementById("allImages");

let titre = '';
let imgSource = '';

let monImage = getImage("Titre de l'image", "../images/vins.jpg");

galerieImage.innerHTML = monImage;

function getImage(titre, urlImage) {

    titre = sanitizeHtml(titre);
    urlImage = sanitizeHtml(urlImage);

    return `<div class="col p-3">
                <div class="image-card text-white">
                    <img src="${urlImage}" alt="${titre}" class="w-100 rounded" alt="">
                    <p class="titre-image">${titre}</p>
                    <div class="action-image-buttons" data-show="admin">
                        <button type="button" data-bs-toggle="modal" data-bs-target="#editionPhotoModal" class="btn btn-outline-light">
                            <i class="bi bi-pencil-square"></i>
                        </button>
                        <button type="button" data-bs-toggle="modal" data-bs-target="#DeletePhotoModal" class="btn btn-outline-light">
                            <i class="bi bi-trash"></i>
                        </button>
                    </div>
                </div>
            </div>`;
}