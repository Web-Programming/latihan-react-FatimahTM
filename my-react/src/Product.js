import React from "react";
import asusImage from './img/asus.jpg';
import acerImage from './img/acer.jpg';
import lenovoImage from './img/lenovo.jpg';

function Product() {
    // const products = ["Asus","Acer","Lenovo"];
    const products = [
        {id: "P001", nama: "Asus", harga: 8000000, gambar: asusImage},
        {id: "P002", nama: "Acer", harga: 7000000, gambar: acerImage},
        {id: "P003", nama: "Lenovo", harga: 9000000, gambar: lenovoImage},
    ];
    
    // const displayProduct = products.map((product) => (
    //     <div key = {product.id}>
    //         {product.nama}
    //         {product.harga}</div>
    // ));
    // return <div>{displayProduct}</div>;
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nama Produk</th>
                    <th>Harga</th>
                    <th>Gambar</th>
                </tr>
            </thead>
            <tbody>
                {products.length > 0 && 
                products.map((product) => {
                    return (
                    <tr key = {product.id}>
                        <td>{product.id}</td>
                        <td>{product.nama}</td>
                        <td>{product.harga}</td>
                        <td><img src={product.gambar} alt={product.nama} width="50" /></td>
                    </tr>
                );
                })}
            </tbody>
        </table>
    );
}
export default Product;