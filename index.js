document.addEventListener("DOMContentLoaded", () => {
	const themeSwitcher = document.getElementById("theme-switcher");
	const themeStylesheet = document.getElementById("theme-stylesheet");

	themeSwitcher.addEventListener("change", () => {
		if (themeSwitcher.checked) {
			document.body.classList.add("dark-theme");
			themeStylesheet.setAttribute("href", "dark-theme.css");
		} else {
			document.body.classList.remove("dark-theme");
			themeStylesheet.setAttribute("href", "light-theme.css");
		}
	});

	// Проверяем сохраненную тему в localStorage
	const savedTheme = localStorage.getItem("theme");
	if (savedTheme) {
		themeSwitcher.checked = savedTheme === "dark";
		if (savedTheme === "dark") {
			document.body.classList.add("dark-theme");
			themeStylesheet.setAttribute("href", "dark-theme.css");
		}
	}
});
