fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) => response.json())
  .then((res) => {
    if (res.status !== "success") {
      return;
    }
    const imgSrc = res.message;

    document.getElementById("imgArea").innerHTML = `<img class="image"
                                                         src="${imgSrc}" 
                                                         alt="Картинка с собакой"
                                                    >`;
  });
