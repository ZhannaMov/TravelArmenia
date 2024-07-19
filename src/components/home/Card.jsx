import css from './Card.module.css'

function Card({imgSrc, altText,title}){
     return(
        <div className={css.card}>
        <img src={imgSrc} alt={altText} />
        <div className={css.text}>
          <h1>{title}</h1>
        </div>
      </div>
     )
}
export default Card;