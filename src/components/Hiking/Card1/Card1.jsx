import css from './Card1.module.css'


function Card1(){
     return(<div className={css.container}>
       <h1>AREVATSAG GORGE, HNEVANK, VARDABLUR, AMRAKITS</h1>
       <p>
       We start our beautiful trip from the Russian Orthodox Church of St. Nicholas of Amrakits village, after which we go to Vardablur to enjoy the lakes, which are not only very beautiful, but also a wonderful place for a walk. Our next important stop will be the Hnevank Monastery. From Hnevank, a not difficult, but at the same time very beautiful hike along the banks of Dzoraget River to Arevatsag Gorge will begin. Here we will see Dzoraget and the famous Tsitskar, which together create an unusual scene. Here you will also have free time to enjoy the scenery and have a rest.
       <br/>
       Hike distance is 6 km (round trip). You must have hiking shoes and hiking clothes.
       </p>
       <h1 className={css.head}>Booking</h1>
       <div className={css.booking}>
 
        <div className={css.column}>
      <label htmlFor="name">Full Name*</label>
       <input type="text" id='name' />
       <label htmlFor="phone">Phone Number*</label>
       <input type="tel" id='phone'/>
       <label htmlFor="date">Preferred Date*</label>
       <input type="number" id='date'/>
       </div>

       <div className={css.column}>
       <label htmlFor="citizenship">Citizenship*</label>
       <input type="text" id='citizenship' />
       <label htmlFor="email">Email*</label>
       <input type="email" id='email'/>
       <label htmlFor="quantity">Quantity*</label>
       <input type="number" id='quantity' />
       </div>
       <div className={css.note}>
       <label htmlFor="note">Note*</label>
       <input type="text" id='note' />
       </div>
       <button type='submit' className={css.book}>Book</button>
       </div>
     </div>
        )
}
export default Card1;