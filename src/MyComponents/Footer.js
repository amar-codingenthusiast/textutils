import React from "react";

export default function Footer(props) {
    let footerStyle = {
        // position: "fixed",
        // bottom: 0,
        margin: "35px 0 0 0",
        width: "100%",
        padding: "15px 0 1px 0",
        backgroundColor: props.mode === "light" ? "#F8F9FA" : "#212529",
        color: props.mode === "light" ? "black" : "white",
    };
    return (
        <footer style={footerStyle}>
            <p className="text-center">Copyright &copy; TextUtils.com</p>
        </footer>
    );
}
