import { useState } from "react";
import Header from "./components/Header";
import styles from "./Lista.module.css"


function App() {
  const [itemList, setItemList] = useState([]);
  const [inputText, setInputText] = useState("");

  function handleAdicionaItem() {
    setItemList([...itemList,inputText])

  }

  return (

    <div className="App">
     <div className={styles.container}>
      <Header/>
      <span>Adicione sua tarefa</span>
      </div>

      
        <div className={styles.container}>
          <div className={styles.iputWrapper}>
            <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)}className={styles.input}placeholder="Tarefa" />
            <button className={styles.button} onClick={handleAdicionaItem}>Add</button>

            <ul>
              {itemList.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      
    </div>
    
     
    
  );
}

export default App;
