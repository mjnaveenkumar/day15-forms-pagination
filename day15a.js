const dataSet = [
  
    {
    id: "1",
    name: "Lura Senger",
    email: "Xander_Collier@yahoo.com"
    },
    {
    id: "2",
    name: "Wilburn Weber",
    email: "Bennett_Kreiger11@yahoo.com"
    },
    {
    id: "3",
    name: "Tyrique Hahn",
    email: "Juston.Altenwerth@yahoo.com"
    },
    {
    id: "4",
    name: "Lenny Bailey",
    email: "Guiseppe_Hegmann@yahoo.com"
    },
    {
    id: "5",
    name: "Vladimir Keeling",
    email: "Louisa_Walsh18@hotmail.com"
    },
    {
    id: "6",
    name: "Kellie Crona",
    email: "Chandler_Abernathy@yahoo.com"
    },
    {
    id: "7",
    name: "Carolina White",
    email: "Royal50@hotmail.com"
    },
    {
    id: "8",
    name: "Alfredo Conn",
    email: "Clarabelle34@hotmail.com"
    },
    {
    id: "9",
    name: "Stan Shanahan",
    email: "Lamar.McClure@hotmail.com"
    },
    {
    id: "10",
    name: "Marvin Fay",
    email: "Osbaldo58@hotmail.com"
    },
    {
    id: "11",
    name: "Torrance Rau",
    email: "Orin45@gmail.com"
    },
    {
    id: "12",
    name: "Harold Gutmann MD",
    email: "Alyce.Stracke37@yahoo.com"
    },
    {
    id: "13",
    name: "Taryn Torphy",
    email: "Dean_Breitenberg71@hotmail.com"
    },
    {
    id: "14",
    name: "Bryana Lang",
    email: "Tatum.Ullrich@yahoo.com"
    },
    {
    id: "15",
    name: "Nyasia Green DDS",
    email: "Dino83@gmail.com"
    },
    {
    id: "16",
    name: "Nasir Gerhold",
    email: "Lilian_Bashirian8@hotmail.com"
    },
    {
    id: "17",
    name: "Raymundo Ritchie PhD",
    email: "Antwan.Schoen15@yahoo.com"
    },
    {
    id: "18",
    name: "Delmer Marvin",
    email: "Kiera62@yahoo.com"
    },
    {
    id: "19",
    name: "Rachel Wilkinson",
    email: "Foster_Conroy@gmail.com"
    },
    {
    id: "20",
    name: "Gladys Howell",
    email: "Constance.Labadie10@yahoo.com"
    },

];

const displayPageNav = (perPage) => {
  let pagination = ``;
  const totalItems = dataSet.length;
  perPage = perPage ? perPage : 1;
  const pages = Math.ceil(totalItems / perPage);

  for (let i = 1; i <= pages; i++) {
    pagination += `<a href="#" onClick="displayItems(${i},${perPage})" >${i}</a>`;
  }

  document.getElementById("pagination").innerHTML = pagination;
};

const displayItems = (page = 1, perPage = 2) => {
  let index, offSet;

  if (page == 1 || page <= 0) {
    index = 0;
    offSet = perPage;
  } else if (page > dataSet.length) {
    index = page - 1;
    offSet = dataSet.length;
  } else {
    index = page * perPage - perPage;
    offSet = index + perPage;
  }

  const slicedItems = dataSet.slice(index, offSet);

  const html = slicedItems.map(
    (item) =>
      `<tr>
      <td>${item.id}</td>
      <td>${item.name}</td>
      <td>${item.email}</td>
    </tr>`
  );

  document.querySelector("#container tbody").innerHTML = html.join("");
};

let perPage = 5;
displayPageNav(perPage);
displayItems(1, perPage);
