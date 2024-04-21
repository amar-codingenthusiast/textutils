import React from "react";

export default function About(props) {
	const changeMode = {
		backgroundColor: props.mode === "light" ? "white" : "#343634",
		color: props.mode === "light" ? "black" : "white",
	};
	return (
		<div className="container my-3" style={changeMode}>
			<h2>About Us</h2>
			<div className="accordion" id="accordionExample">
				<div className="accordion-item" style={changeMode}>
					<h2 className="accordion-header">
						<button
							className="accordion-button"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseOne"
							aria-expanded="true"
							aria-controls="collapseOne"
							style={changeMode}
						>
							<b>Analyze your text</b>
						</button>
					</h2>
					<div
						id="collapseOne"
						className="accordion-collapse collapse show"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body">
							TextUtils gives you a way to analyze your text
							quickly and efficiently. Be it word count, character
							count or time to read.
						</div>
					</div>
				</div>
				<div className="accordion-item" style={changeMode}>
					<h2 className="accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseTwo"
							aria-expanded="false"
							aria-controls="collapseTwo"
							style={changeMode}
						>
							<b>Free to use</b>
						</button>
					</h2>
					<div
						id="collapseTwo"
						className="accordion-collapse collapse"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body">
							TextUtils is a free character counter tool that
							provides instant character & word count statistics
							for a given text. TextUtils reports the number of
							words and character. Thus it is a suitable for
							writing text with word/character limit.
						</div>
					</div>
				</div>
				<div className="accordion-item" style={changeMode}>
					<h2 className="accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseThree"
							aria-expanded="false"
							aria-controls="collapseThree"
							style={changeMode}
						>
							<b>Browser Compatible</b>
						</button>
					</h2>
					<div
						id="collapseThree"
						className="accordion-collapse collapse"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body">
							This word counter software works in any web browsers
							such as Chrome, Firefox, Internet Explorer, Safari,
							Opera, etc. It suits to count characters in
							facebook, blog, books, excel document, pdf
							documents, essays, etc.
						</div>
					</div>
				</div>
			</div>
			<style>
				{`
			        .accordion-button::after {
            			filter: ${props.mode === "light" ? "invert(0)" : "invert(1)"}
        			}
    			`}
			</style>
		</div>
	);
}
