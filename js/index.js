const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", () => {
	const shareBtn = document.querySelector(".share");
	shareBtn.classList.toggle("active");
});

function mess1() {
	alert(
		"Disclamer : Indispo veut dire ici que le poste est complet. Si le job est libre il vous faudra monter un dossier et l'envoyer dans un ticket sur le serveur discord, les dirigeants voteront si oui ou non vous pouvez le prendre. A l'inverse, Recrute insinue que le poste de directeur affilié à ce job est déja pris,  si vous voulez faire ce job,vous ne devez plus passer par un ticket mais en vous faisant embaucher par le directeur directement."
	);
}

function mess2() {
	alert(
		"Pas besoins de posuler IRL dans le serveur discord, ou d'obtenir un entretien avec un directeur, les jobs présents dans le pôle emploi permettent pour les nouveaux arrivant de se faire de l'argent et commencer leur vie GTA RP. Rendez vous au pôle in-game, choissez un job et commencez votre aventure !"
	);
}
