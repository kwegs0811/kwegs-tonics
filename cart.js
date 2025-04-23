body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

header {
  background: #2c3e50;
  color: white;
  padding: 1em;
  text-align: center;
}

.navbar {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  background: #34495e;
  margin: 0;
}

.navbar li {
  margin: 0 10px;
}

.navbar a {
  color: white;
  text-decoration: none;
  padding: 0.5em;
  display: block;
}

.navbar a.active, .navbar a:hover {
  background: #1abc9c;
  border-radius: 5px;
}

main {
  padding: 1em;
}

.item-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1em;
}

.item {
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
}

button {
  margin-top: 0.5em;
  padding: 0.5em 1em;
  background: #1abc9c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #16a085;
}

#cart-icon {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #1abc9c;
  color: white;
  padding: 10px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.2em;
}

#order-items div {
  margin: 0.5em 0;
  padding: 0.5em;
  border-bottom: 1px solid #ccc;
}