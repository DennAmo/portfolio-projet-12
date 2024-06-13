import React, { useState } from 'react';
import axios from 'axios';


const FormShop = () => {
  const [imageFile, setImageFile] = useState(null);
  const [title, setTitle] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [products, setProducts] = useState([]);


  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (imageFile && title) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newProduct = {
          src: reader.result,
          title: title,
          price: "16.89€", // Prix par défaut, peut être changé
        };

        axios.post('http://localhost:5000/add-product', newProduct)
          .then(response => {
            setProducts([...products, newProduct]);
            setTitle('');
            setImageFile(null);
            setIsFormVisible(false);
          })
          .catch(error => {
            console.error('Error adding product:', error);
          });
      };
      reader.readAsDataURL(imageFile);
    }
  };

  const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

  if (isLoggedIn) {
    return (
      <div className='form'>
        <button className="open-form-button" onClick={() => setIsFormVisible(true)}>
          Add New Product
        </button>
        {isFormVisible && (
          <div className="form-container" onClick={() => setIsFormVisible(false)}>
            <div className="form-content" onClick={(e) => e.stopPropagation()}>
              <form onSubmit={handleSubmit}> 
                <div className='form__layout'>
                  <label className='form__title' htmlFor="title">Title</label>
                  <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className='form__image' htmlFor="image">Image</label>
                  <input
                    type="file"
                    id="image"
                    accept="image/*"
                    onChange={handleImageChange}
                    required
                  />
                </div>
                <button className='form__submit' type="submit">Add Project</button>
              </form>
            </div>
          </div>
        )}

      </div>
    );
  } else {
    return null;
  }
};

export default FormShop;
