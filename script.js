let marvelHeroes = [
	{
		name: "Thor"
	},
	{
		name: "Spider Man"
	}
];

let dcHeroes = [
	{
		name: "Superman"
	},
	{
		name: "Batman"
	},
	{
		name: "Deadpool"
	}
];

Array.prototype.heroesRender = function(item) {
    let table = [];
    for(let i = 0; i < this.length; i++) {
        table[i] = `<tr>
                <td>${this[i].name}</td>
                <td><img width="50" src="images/${item}/${(this[i].name).replaceAll(" ","").toLowerCase()}.svg"></td>
            </tr>`
    }
    document.write(
        `<table class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Icon</th>
                </tr>
            </thead>
            <tbody>
                ${table.join("")}
            </tbody>
        </table>`
    )
}


dcHeroes.heroesRender(`dc`);
marvelHeroes.heroesRender(`marvel`);