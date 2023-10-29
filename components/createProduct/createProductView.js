// views/adView.js
const adView = {
    render() {
      return `
        <form id="ad-form">
          <label for="photo">Foto:</label>
          <input type="file" id="photo" name="photo" accept="image/*"><br>
          
          <label for="name">Nombre:</label>
          <input type="text" id="name" name="name" required><br>
  
          <label for="description">Descripción:</label>
          <textarea id="description" name="description" required></textarea><br>
  
          <label for="price">Precio:</label>
          <input type="number" id="price" name="price" required><br>
  
          <label for="type">Tipo:</label>
          <select id="type" name="type" required>
            <option value="buy">Compra</option>
            <option value="sell">Venta</option>
          </select><br>
  
          <input type="submit" value="Crear Anuncio">
        </form>
      `;
    }
  };
  
  export { adView };
  