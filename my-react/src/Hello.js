import React from "react";

function Hello(props) {
    const {nama, pesan} = props;
    // props.nama = "Sisil"; // Error
    return (
    <h1>Hello {nama}, {pesan}
    </h1>
    );
}

Hello.defaultProps = {
    nama: "Sisilia",
    pesan: "Selamat Malam"
};

export default Hello;