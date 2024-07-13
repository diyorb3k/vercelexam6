import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../Mange-Products/Admini.scss";


const intialState ={
  name: '',
  code: '',
  brand: '',
  description: '',
  price: '',
  priceInSale: ''
}
const MangeCategory = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(intialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/products', formData);
      console.log('Product added:', response.data);
      setFormData(intialState)

    } catch (error) {
      console.error('Error adding product:', error);
    }
  };
  <marquee behavior="12" direction=""></marquee>

  return (
    <div>
      <div className="pruductpage">
        <div className="tettle">
          <p className="tavarl">Новый товар</p>
          <div className="linkl">
            <Link className="pruductt" onClick={() => navigate(-1)}>
              <p className="naya">Главная</p>{" "}
            </Link>
            /
            <Link>
              <p className="naya">Товары</p>
            </Link>
            /<p>Новый товар</p>
          </div>
        </div>
        <div className="input_grup">
          <button>Основные</button>
          <div className="inputitem">
            <div className="etiminput">
              <p>Название *</p>
              <form onSubmit={handleSubmit}>
                <input
                  className="inputetim1"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </form>
            </div>
            <div className="inputt2">
              <form onSubmit={handleSubmit}>
              
                <div>
                  <p>Артикул производителя *</p>
                  <input
                    className="input2"
                    type="text"
                    name="code"
                    value={formData.code}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <p>Бренд *</p>
                  <input
                    className="input11"
                    type="text"
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                  />
                </div>


              </form>
            </div>
            <p className="lorem">Описание *</p>
          </div>
          <div className="texaria">
            <textarea
              name="description"
             
            ></textarea>
          </div>
          <div className="btnetim1">
            <form className="foriminput" onSubmit={handleSubmit}>
              <div>
                <p>Цена</p>
                <input
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                />
              </div>
              <div>
                <p>Цена со скидкой</p>
                <input
                  type="text"
                  name="priceInSale"
                  value={formData.priceInSale}
                  onChange={handleChange}
                />
              </div>
            </form>
          </div>
        </div>
        <div className="foter_add">
          <div className="saxranit">
            <button className="save" onClick={handleSubmit}>Сохранить</button>
            <button className="otmin" onClick={() => navigate(-1)}>Отмена</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MangeCategory;
