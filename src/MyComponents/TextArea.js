import React, { useState } from "react";
export const TextArea = (props) => {
	const [text, setText] = useState("");
	return (
		<div
			className="container my-2"
			style={{
				color: props.mode === "light" ? "black" : "white",
			}}
		>
			<h1>Write text below here</h1>
			<div className="mb-3">
				<textarea
					className="form-control"
					id="myBox"
					rows="5"
					style={{
						backgroundColor:
							props.mode === "light" ? "white" : "#343634",
						color: props.mode === "light" ? "black" : "white",
					}}
					value={text}
					onChange={(e) => setText(e.target.value)}
				></textarea>
			</div>
			<button
				className="btn btn-primary me-2 my-1"
				onClick={() => {
					setText(text.toUpperCase());
					props.showAlert("Text changed into UPPERCASE.");
				}}
				disabled={text.length === 0}
			>
				UPPER CASE
			</button>
			<button
				className="btn btn-primary me-2 my-1"
				onClick={() => {
					setText(text.toLowerCase());
					props.showAlert("Text changed into lowercase.");
				}}
				disabled={text.length === 0}
			>
				lowercase
			</button>
			<button
				className="btn btn-primary me-2 my-1"
				onClick={() => {
					setText(
						text.replace(/\b\w/g, (char) => char.toUpperCase())
					);
					props.showAlert("Text changed into Capitalized Case.");
				}}
				disabled={text.length === 0}
			>
				Capitalized Case
			</button>
			<button
				className="btn btn-primary me-2 my-1"
				onClick={() => {
					navigator.clipboard.writeText(text);
					props.showAlert("Text copied to clipboard.");
				}}
				disabled={text.length === 0}
			>
				Copy to clipboard
			</button>
			<button
				className="btn btn-primary me-2 my-1"
				onClick={() => {
					setText("");
					props.showAlert("Text cleared.");
				}}
				disabled={text.length === 0}
			>
				Clear Text
			</button>
			<h3>Your text summary</h3>
			<p>
				{text.replace(/\s+/g, "").length} characters,{" "}
				{text.split(/\s+/).filter((a) => a !== "").length} words and{" "}
				{(
					0.008 * text.split(/\s+/).filter((a) => a !== "").length
				).toFixed(3)}{" "}
				minutes read
			</p>
			<h3>Preview</h3>
			<div className="my-2" style={{ whiteSpace: "pre-wrap" }}>
				{text.split("\n").map((line, index) => (
					<p key={index} style={{ margin: "0" }}>
						{text.length > 0
							? line
							: "Write something to see preview..."}
					</p>
				))}
			</div>
		</div>
	);
};
