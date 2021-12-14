import './style.css'

async function fetchDataFromAPIEndpoint() {
    const cards = await fetch('/api/fetchNotion').then((res) => res.json().then((data) => data.results));
    document.querySelector('.card-container').innerHTML = cards
        .map(
            (card) => `
    <article class="card">
      <img src="${card.properties.Image.files[0].external.url}" alt="${card.properties.Name.title[0].plain_text}"
        class="card__image">
      <h2 class="card__heading">${card.properties.Name.title[0].plain_text}</h2>
      <div class="card__content">
        <p>${card.properties.Content.rich_text[0].plain_text}
        </p>
      </div>
      <a href="${card.properties.Link.url}" class="card__btn">${card.properties.Btn_text.rich_text[0].plain_text}</a>
    </article>
    `
        )
        .join('');
}
fetchDataFromAPIEndpoint();