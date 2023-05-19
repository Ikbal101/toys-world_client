import './Tabs.css'
const Tabs = () => {

    const Menu = 
         [
          {
            id: 1,
            title:"Legends",
            picture: '/images/card1.jpg',
            name: 'Product 1',
            price: '$19.99',
            rating: 4.5,
          },
          {
            id: 2,
            title:"Avengers",
            picture: '/images/card2.jpg',
            name: 'Product 2',
            price: '$24.99',
            rating: 3.8,
          },
        
         
          {
            id: 3,
            title:"Top-Famous",
            picture: '/images/card3.jpg',
            name: 'Product 3',
            price: '$29.99',
            rating: 4.2,
          },
         
        ]


    return (
        <div>
            <h2>set by category</h2>

            <div className='flex min-h-screen flex-col justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500'>
                <div className='bg-cyan-700 flex space-x-8 rounded-xl px-4 py-2 w-[440px]'>
                    {
                        Menu.map(item => (<button key={item.id}>{item.title}</button>))
                    }
 
                   <div className='bg-white min-w-fit' >
                   {
                        Menu.map((card)=>(
                            <div className="card" key={card.id}>
                              <img src={card.picture} alt={card.name} />
                              <div className="card-body">
                                <h3 className="card-name">{card.name}</h3>
                                <p className="card-price">{card.price}</p>
                                <div className="card-rating">Rating: {card.rating}</div>
                                <button className="btn">View Details</button>
                              </div>
                            </div>
                          ))
                    }
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Tabs;