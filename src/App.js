import {Card} from './components/Card'
// import {Item} from './components/Card'
import './App.css'
import pic1 from './components/Card/images/burger.png'
import pic2 from './components/Card/images/cola.png'
import pic3 from './components/Card/images/fanta.png'
import pic4 from './components/Card/images/hotdog.png'
import pic5 from './components/Card/images/kfc.png'
// import { Card } from '../../menu-item/src/components/Card'
function App() {

const data = [{
  title: 'Burger',
  img: pic1,
  price: '3$'
},
{
  title: 'Coca-Cola',
  img: pic2,
  price: '1$'
}, 
{
  title: 'Fanta',
  img: pic3,
  price: '1$'
},
{
  title: 'Hot-dog',
  img: pic4,
  price: '1.5$'
},
{
  title: 'KFC',
  img: pic5,
  price: '3$'
}]

  return (
    <div className="App">
    {data.map((el, id) => {
        return <Card data={el} key={id}/>
        })}
    </div>
  );
}

export default App;
