import css from './Booking.module.css'


function Booking(){
    return(
        <div className={css.container}>
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
export default Booking;