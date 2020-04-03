fetch("http://astridcaecilie.dk/wp-recreate/wordpress/wp-json/wp/v2/bike?_embed")
    .then(res => res.json())
    .then(handleData)

function handleData(posts) {
    posts.forEach(showBikes)
}

function showBikes(post) {
    console.log(post)
    const template = document.querySelector("template").content;

    const copy = template.cloneNode(true);

    console.log(post.colors.guid)


    copy.querySelector(".brand").textContent = post.brand;
    copy.querySelector(".model").textContent = post.model;
    copy.querySelector(".price").textContent = post.price;
    copy.querySelector(".color").src = post.colors.guid;
    copy.querySelector(".stock").textContent = post.in_stock;
    copy.querySelector(".img-bike").src = post._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;

    document.querySelector("main").appendChild(copy);
}
