// Function to check user preferences regarding animation
const checkReducedMotionPreference = () => {
	// Get all SVG elements using the class
	const svgElements = document.querySelectorAll(".app__logo");

	// Iterate through each SVG element
	for (const svgElement of svgElements) {
		// Get all <animate> and <set> elements inside the current SVG
		const animations = svgElement.querySelectorAll("animate, set");

		// Get all <template> elements inside the current SVG
		const templates = svgElement.querySelectorAll("template");

		// Check if the user prefers reduced motion
		const prefersReducedMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;

		// If the user prefers reduced motion
		if (prefersReducedMotion) {
			// Wrap each <animate> and <set> element in a <template>
			for (const animation of animations) {
				const templateWrapper = document.createElement("template");
				const clone = animation.cloneNode(true);
				animation.replaceWith(templateWrapper);
				templateWrapper.content.appendChild(clone);
			}
		} else {
			// If the user does not prefer reduced motion, unwrap <template> elements
			for (const template of templates) {
				const clone = template.content.firstChild.cloneNode(true);
				template.replaceWith(clone);
			}
		}
	}
};

// Event listener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", checkReducedMotionPreference);

// Add an event listener for changes in user preferences
window
	.matchMedia("(prefers-reduced-motion: reduce)")
	.addEventListener("change", checkReducedMotionPreference);
